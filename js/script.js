



/* ---------- Configuration ---------- */
// You can toggle booleans here if you want to relax certain protections.
const CONFIG = {
  disableContextMenu: false,     // blocks right-click menu
  disableSelect: false,          // disables text selection via CSS & JS
  disableCopyCut: false,         // prevents copy and cut events
  disableDrag: false,            // prevents dragging (images, links)
  blockDevKeys: false,           // blocks F12, Ctrl+Shift+I, Ctrl+U, etc.
  blockPrintSave: false,         // blocks Ctrl+S, Ctrl+P (printing/saving)
  observeDOM: false,             // re-apply protections if DOM changes
  noisyConsole: false            // clears and prints warning in console to discourage snooping
};

/* ---------- Utility helpers ---------- */
function stopEvent(e) {
  if (!e) return;
  try {
    e.preventDefault();
    e.stopPropagation();
  } catch (err) {}
  return false;
}

/* ---------- CSS injection to disable selection and pointer events on overlays ---------- */
(function injectCSS() {
  if (!CONFIG.disableSelect) return;
  const css = `
    /* Prevent text selection and touch-callouts */
    html, body, body * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }
    /* Make images non-draggable (additional safety) */
    img { -webkit-user-drag: none !important; user-drag: none !important; }
    /* Prevent highlight on active elements */
    *:active { outline: none !important; }
  `;
  const s = document.createElement('style');
  s.id = 'anti-copy-style';
  s.type = 'text/css';
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
})();

/* ---------- Block context menu (right click) ---------- */
if (CONFIG.disableContextMenu) {
  window.addEventListener('contextmenu', function (e) {
    // allow context on inputs and textareas so forms remain usable
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return; 
    return stopEvent(e);
  }, { capture: true, passive: false });
}

/* ---------- Prevent selection via mouse (for older browsers) ---------- */
if (CONFIG.disableSelect) {
  // block selectionstart (IE/Edge)
  window.addEventListener('selectstart', function (e) {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
    return stopEvent(e);
  }, { capture: true, passive: false });

  // block dblclick selection
  window.addEventListener('mousedown', function (e) {
    if (e.detail > 1) return stopEvent(e);
  }, { capture: true, passive: false });
}

/* ---------- Prevent copy, cut events ---------- */
if (CONFIG.disableCopyCut) {
  ['copy', 'cut'].forEach(evtName => {
    window.addEventListener(evtName, function (e) {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      // allow clipboard operations inside inputs/areas if you want; currently blocking all
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) {
        // if you want to allow copy from inputs, return here
        // return;
      }
      return stopEvent(e);
    }, { capture: true, passive: false });
  });
}

/* ---------- Prevent dragging images/links ---------- */
if (CONFIG.disableDrag) {
  window.addEventListener('dragstart', function (e) {
    return stopEvent(e);
  }, { capture: true, passive: false });

  // disable draggable attribute site-wide (in case some element explicitly sets it)
  document.addEventListener('DOMContentLoaded', function () {
    try {
      document.querySelectorAll('[draggable]').forEach(el => el.draggable = false);
    } catch (err) {}
  });
}

/* ---------- Block keyboard shortcuts for DevTools / view-source / save / print ---------- */
if (CONFIG.blockDevKeys) {
  window.addEventListener('keydown', function (e) {
    // Common blocked combinations:
    // F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+Shift+K
    const key = e.key ? e.key.toLowerCase() : '';
    const ctrl = e.ctrlKey || e.metaKey; // metaKey for macOS command
    const shift = e.shiftKey;
    const alt = e.altKey;

    // F12
    if (e.keyCode === 123) return stopEvent(e);

    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C / Ctrl+Shift+K
    if (ctrl && shift && ['i','j','c','k'].includes(key)) return stopEvent(e);

    // Ctrl+U (view-source), Ctrl+S (save), Ctrl+P (print)
    if (ctrl && ['u','s','p'].includes(key)) return stopEvent(e);

    // Ctrl+Shift+I mac variant (Cmd+Opt+I handled by meta+alt)
    if ((e.metaKey && e.altKey && key === 'i')) return stopEvent(e);

    // Disable Ctrl+A (select all) unless in input/textarea
    if (ctrl && key === 'a') {
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
      if (tag !== 'input' && tag !== 'textarea' && !e.target.isContentEditable) return stopEvent(e);
    }
  }, { capture: true, passive: false });
}

/* ---------- Mute common "inspect via context menu" technique by removing context menu entries (best-effort) ---------- */
/* Not all browsers allow customizing the menu; above contextmenu block is primary defense. */

/* ---------- Re-apply protections if DOM changes (helps single-page apps) ---------- */
if (CONFIG.observeDOM && window.MutationObserver) {
  const observer = new MutationObserver(function (mutations) {
    // re-disable draggable attrs and re-inject CSS if removed
    try {
      if (CONFIG.disableDrag) {
        document.querySelectorAll('[draggable]').forEach(el => el.draggable = false);
      }
      if (CONFIG.disableSelect) {
        if (!document.getElementById('anti-copy-style')) {
          // Re-inject style
          const s = document.createElement('style');
          s.id = 'anti-copy-style';
          s.type = 'text/css';
          s.appendChild(document.createTextNode(`
            html, body, body * {
              -webkit-user-select: none !important;
              -moz-user-select: none !important;
              -ms-user-select: none !important;
              user-select: none !important;
              -webkit-touch-callout: none !important;
            }
            img { -webkit-user-drag: none !important; user-drag: none !important; }
          `));
          document.head.appendChild(s);
        }
      }
    } catch (err) {
      // swallow errors - we don't want to break the site
    }
  });

  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });
}

/* ---------- Console tamper/deter: clear console and show warning (optional) ---------- */
if (CONFIG.noisyConsole) {
  try {
    console.clear && console.clear();
    console.log('%cStop!', 'font-size:48px; color:#f00; -webkit-text-stroke: 1px black;');
    console.log('%cThis is a protected site. Inspecting or copying the source is discouraged.', 'font-size:14px;');
  } catch (err) {}
}

/* ---------- Graceful degrade & accessibility NOTE ---------- */
/**
 * Important accessibility note:
 * Blocking text selection and clipboard reduces usability for legitimate users
 * (screen readers, translators, people with accessibility needs). Consider
 * adding exceptions for inputs and contentEditable elements (current script allows them).
 *
 * If you need to allow keyboard copy for certain trusted users / debugging,
 * set the relevant checks in the event handlers to allow when a condition matches.
 */

/* ---------- End of anti-copy script ---------- */

document.addEventListener('DOMContentLoaded', function () {
    loadIncludes();
});

async function loadIncludes() {
    const depth = getPathDepth();
    const basePath = depth > 0 ? '../'.repeat(depth) : './';

    const headerElements = document.querySelectorAll('.header, #header-placeholder, [data-include="header"]');
    const footerElements = document.querySelectorAll('.footer, #footer-placeholder, [data-include="footer"]');

    for (const el of headerElements) {
        try {
            const response = await fetch(basePath + 'header.html');

            if (response.ok) {
                let html = await response.text();
                html = html.replace(/href="\//g, 'href="' + basePath);
                html = html.replace(/src="\//g, 'src="' + basePath);
                el.innerHTML = html;
                setupLanguageSwitcher(basePath);
            }
        } catch (e) {
            console.log('Header include not found');
        }
    }

    for (const el of footerElements) {
        try {
            const response = await fetch(basePath + 'footer.html');
            if (response.ok) {
                let html = await response.text();
                html = html.replace(/href="\//g, 'href="' + basePath);
                html = html.replace(/src="\//g, 'src="' + basePath);
                el.innerHTML = html;
            }
        } catch (e) {
            console.log('Footer include not found');
        }
    }
}

function getPathDepth() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(s => s && s !== 'index.html' && !s.includes('.'));
    return segments.length;
}

function setupLanguageSwitcher(basePath) {
    const currentLang = (document.documentElement.lang || 'en').toLowerCase().trim();
    const langNames = { en: 'EN', es: 'ES', pt: 'PT', tr: 'TR' };

    // Update labels in header
    const desktopLabel = document.getElementById('current-lang-label');
    const mobileLabel = document.getElementById('mobile-lang-label');
    if (desktopLabel) desktopLabel.textContent = langNames[currentLang] || 'EN';
    if (mobileLabel) mobileLabel.textContent = langNames[currentLang] || 'EN';

    // Determine current tool slug if on a tool page
    const knownLangs = ['es', 'pt', 'tr', 'en'];
    const pathParts = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '').split('/');
    const lastPart = pathParts.pop() || '';
    const toolSlug = (!lastPart || knownLangs.includes(lastPart)) ? '' : lastPart;

    // Update all language links
    const langLinks = document.querySelectorAll('.lang-choice');
    langLinks.forEach(link => {
        const targetLang = link.getAttribute('data-lang');
        if (targetLang === currentLang) {
            link.style.fontWeight = 'bold';
            link.classList.add('active');
        }

        let targetHref = '';
        if (targetLang === 'en') {
            targetHref = basePath + (toolSlug ? toolSlug + '/' : '');
        } else {
            targetHref = basePath + targetLang + '/' + (toolSlug ? toolSlug + '/' : '');
        }

        link.setAttribute('href', targetHref);
    });

    // If on a localized subsite (es, pt, tr), route all navigation links to the localized pages
    if (currentLang !== 'en') {
        const homeLinks = document.querySelectorAll('.header .logo, header .logo, .header .nav-link[href="' + basePath + '"], .mobile-nav-link[href="' + basePath + '"]');
        homeLinks.forEach(link => {
            link.setAttribute('href', basePath + currentLang + '/');
        });

        // Update all tool and category links inside header, mobile nav, and footer
        const allNavLinks = document.querySelectorAll('header a, .header a, #mobile-nav a, footer a, .footer a');
        const staticPages = ['about', 'contact', 'privacy', 'terms', 'dmca'];
        allNavLinks.forEach(link => {
            if (link.classList.contains('lang-choice') || link.classList.contains('logo')) return;
            let href = link.getAttribute('href');
            if (!href || href === '#' || href.startsWith('http') || href.startsWith('mailto:')) return;

            // Strip basePath if present
            if (basePath !== './' && href.startsWith(basePath)) {
                href = href.substring(basePath.length);
            }
            href = href.replace(/^\//, '').replace(/\/$/, '');

            if (!href) return; // home link already handled

            // If it's not an English-only static legal page, prefix with currentLang
            if (!staticPages.includes(href) && !href.startsWith(currentLang + '/')) {
                link.setAttribute('href', basePath + currentLang + '/' + href + '/');
            }
        });
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileNav) {
        mobileNav.classList.toggle('active');
        if (menuIcon) {
            menuIcon.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
        }
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

function toggleMobileDropdown(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('span');

    document.querySelectorAll('.mobile-dropdown-content').forEach(dropdown => {
        if (dropdown !== content) {
            dropdown.classList.remove('active');
            const prevArrow = dropdown.previousElementSibling.querySelector('span');
            if (prevArrow) prevArrow.textContent = '▼';
        }
    });

    if (content) {
        content.classList.toggle('active');
        if (arrow) {
            arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
        }
    }
}

document.addEventListener('click', function (e) {
    if (!e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu-btn')) {
        const mobileNav = document.getElementById('mobile-nav');
        const menuIcon = document.getElementById('menu-icon');
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            if (menuIcon) menuIcon.textContent = '☰';
            document.body.style.overflow = '';
        }
    }
});

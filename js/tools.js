const TextTransformers = {
    aesthetic: function (text) {
        const styles = [];

        // Fullwidth conversion
        const fullwidth = text.split('').map(c => {
            const code = c.charCodeAt(0);
            if (code >= 33 && code <= 126) {
                return String.fromCharCode(code + 65248);
            }
            return c === ' ' ? '　' : c;
        }).join('');

        styles.push({ name: 'Fullwidth Aesthetic', text: fullwidth });
        styles.push({ name: 'Spaced Aesthetic', text: text.split('').join(' ') });
        styles.push({ name: 'Dotted Aesthetic', text: text.split('').join('・') });
        styles.push({ name: 'Starred', text: '✧ ' + text.split('').join(' ✧ ') + ' ✧' });
        styles.push({ name: 'Sparkle Frame', text: '✨ ' + text + ' ✨' });
        styles.push({ name: 'Flower Frame', text: '🌸 ' + text + ' 🌸' });
        styles.push({ name: 'Heart Aesthetic', text: '♡ ' + text.split('').join(' ♡ ') + ' ♡' });
        styles.push({ name: 'Cloud Frame', text: '☁️ ' + text + ' ☁️' });
        styles.push({ name: 'Moon Aesthetic', text: '☽ ' + text + ' ☾' });
        styles.push({ name: 'Wave Frame', text: '〰️ ' + text + ' 〰️' });
        styles.push({ name: 'Box Aesthetic', text: '【 ' + text + ' 】' });
        styles.push({ name: 'Butterfly Frame', text: '🦋 ' + text + ' 🦋' });
        styles.push({ name: 'Diamond Aesthetic', text: '◇ ' + text.split('').join(' ◇ ') + ' ◇' });
        styles.push({ name: 'Arrow Frame', text: '→ ' + text + ' ←' });
        styles.push({ name: 'Leaf Frame', text: '🍃 ' + text + ' 🍃' });
        styles.push({ name: 'Star Dots', text: '･ﾟ✧ ' + text + ' ✧ﾟ･' });
        return styles;
    },

    brat: function (text) {
        const styles = [];
        const bratText = text.toLowerCase();
        const bratSpaced = bratText.split('').join(' ');

        // Unicode small text
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const smallCaps = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';
        const subscript = 'ₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz';

        function toSmallCaps(input) {
            return input.toLowerCase().split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? smallCaps[index] : char;
            }).join('');
        }

        styles.push({ name: 'Brat Lowercase', text: bratText });
        styles.push({ name: 'Brat Spaced', text: bratSpaced });
        styles.push({ name: 'Brat Small Caps', text: toSmallCaps(text) });
        styles.push({ name: 'Brat Green Heart', text: '💚 ' + bratText + ' 💚' });
        styles.push({ name: 'Brat Summer', text: bratText + ' summer' });
        styles.push({ name: 'Brat Energy', text: bratText + ' energy' });
        styles.push({ name: 'Brat Era', text: bratText + ' era' });
        styles.push({ name: 'So Brat', text: 'so ' + bratText });
        styles.push({ name: 'Very Brat', text: 'very ' + bratText });
        styles.push({ name: 'Brat Mode', text: bratText + ' mode' });
        styles.push({ name: 'Brat Core', text: bratText + 'core' });
        styles.push({ name: 'Brat Aesthetic', text: '✧ ' + bratText + ' ✧' });
        return styles;
    },

    vaporwave: function (text) {
        const styles = [];

        // Fullwidth conversion (main vaporwave style)
        const fullwidth = text.split('').map(c => {
            const code = c.charCodeAt(0);
            if (code >= 33 && code <= 126) {
                return String.fromCharCode(code + 65248);
            }
            return c === ' ' ? '　' : c;
        }).join('');

        // Extra spaced fullwidth
        const spacedFullwidth = fullwidth.split('').join(' ');

        styles.push({ name: 'Vaporwave Full', text: fullwidth });
        styles.push({ name: 'Vaporwave Spaced', text: spacedFullwidth });
        styles.push({ name: 'Aesthetic Wave', text: '～ ' + fullwidth + ' ～' });
        styles.push({ name: 'VHS Style', text: '【 ' + fullwidth + ' 】' });
        styles.push({ name: 'Retro Wave', text: '░▒▓ ' + fullwidth + ' ▓▒░' });
        styles.push({ name: 'Palm Trees', text: '🌴 ' + fullwidth + ' 🌴' });
        styles.push({ name: 'Sunset Wave', text: '🌅 ' + fullwidth + ' 🌅' });
        styles.push({ name: 'Japanese Box', text: '『 ' + fullwidth + ' 』' });
        styles.push({ name: 'Cyber Wave', text: '▓▒░ ' + text.toUpperCase() + ' ░▒▓' });
        styles.push({ name: 'Glitch Wave', text: '█▓▒░ ' + fullwidth + ' ░▒▓█' });
        styles.push({ name: 'Neon Pink', text: '♫ ' + fullwidth + ' ♫' });
        styles.push({ name: 'Dolphin Wave', text: '🐬 ' + fullwidth + ' 🐬' });
        return styles;
    },

    kawaii: function (text) {
        const styles = [];

        styles.push({ name: 'Kawaii Stars', text: '☆*:.｡.o(' + text + ')o.｡.:*☆' });
        styles.push({ name: 'Sparkle Kawaii', text: '✧･ﾟ: *✧･ﾟ:* ' + text + ' *:･ﾟ✧*:･ﾟ✧' });
        styles.push({ name: 'Heart Kawaii', text: '♡´･ᴗ･`♡ ' + text + ' ♡´･ᴗ･`♡' });
        styles.push({ name: 'Flower Kawaii', text: '✿ ' + text + ' ✿' });
        styles.push({ name: 'Ribbon Kawaii', text: '♡⃛ ' + text + ' ♡⃛' });
        styles.push({ name: 'Happy Face', text: '(◕‿◕) ' + text + ' (◕‿◕)' });
        styles.push({ name: 'Bear Face', text: 'ʕ•ᴥ•ʔ ' + text + ' ʕ•ᴥ•ʔ' });
        styles.push({ name: 'Cat Face', text: '(=^･ω･^=) ' + text + ' (=^･ω･^=)' });
        styles.push({ name: 'Bunny Kawaii', text: '(◕ᴗ◕✿) ' + text + ' (◕ᴗ◕✿)' });
        styles.push({ name: 'Magical Girl', text: '☆ﾟ.*･｡ﾟ ' + text + ' ﾟ｡･*.ﾟ☆' });
        styles.push({ name: 'Uwu Style', text: '(ᵘʷᵘ) ' + text + ' (ᵘʷᵘ)' });
        styles.push({ name: 'Cherry Blossom', text: '🌸･ﾟ✧ ' + text + ' ✧ﾟ･🌸' });
        styles.push({ name: 'Sparkle Box', text: '『✧』' + text + '『✧』' });
        styles.push({ name: 'Star Eyes', text: '(★‿★) ' + text + ' (★‿★)' });
        return styles;
    },

    neon: function (text) {
        const styles = [];
        const upper = text.toUpperCase();

        // Create various neon-style text effects
        styles.push({ name: 'Neon Box', text: '【 ' + upper + ' 】' });
        styles.push({ name: 'Electric Neon', text: '⚡ ' + upper + ' ⚡' });
        styles.push({ name: 'Cyber Box', text: '『 ' + upper + ' 』' });
        styles.push({ name: 'Bright Neon', text: '✦ ' + upper + ' ✦' });
        styles.push({ name: 'Flash Effect', text: '▓▒░ ' + upper + ' ░▒▓' });
        styles.push({ name: 'Pulse Neon', text: '◈ ' + upper + ' ◈' });
        styles.push({ name: 'Glow Box', text: '「 ' + upper + ' 」' });
        styles.push({ name: 'Neon Sign', text: '░ ' + upper + ' ░' });
        styles.push({ name: 'Light Bright', text: '✧ ' + upper + ' ✧' });
        styles.push({ name: 'Diamond Neon', text: '◆ ' + upper + ' ◆' });
        styles.push({ name: 'Star Neon', text: '★ ' + upper + ' ★' });
        styles.push({ name: 'Spark Neon', text: '✴ ' + upper + ' ✴' });
        styles.push({ name: 'Club Neon', text: '♣ ' + upper + ' ♣' });
        styles.push({ name: 'Zap Neon', text: '⌁ ' + upper + ' ⌁' });
        return styles;
    },

    glow: function (text) {
        const styles = [];

        // Create glow effects with decorative characters
        styles.push({ name: 'Soft Glow', text: '✧ ' + text + ' ✧' });
        styles.push({ name: 'Star Glow', text: '★·.·´¯`·.·★ ' + text + ' ★·.·´¯`·.·★' });
        styles.push({ name: 'Sparkle Glow', text: '✨ ' + text + ' ✨' });
        styles.push({ name: 'Diamond Glow', text: '💎 ' + text + ' 💎' });
        styles.push({ name: 'Sun Glow', text: '☀️ ' + text + ' ☀️' });
        styles.push({ name: 'Moon Glow', text: '🌙 ' + text + ' 🌙' });
        styles.push({ name: 'Fire Glow', text: '🔥 ' + text + ' 🔥' });
        styles.push({ name: 'Rainbow Glow', text: '🌈 ' + text + ' 🌈' });
        styles.push({ name: 'Crystal Glow', text: '💠 ' + text + ' 💠' });
        styles.push({ name: 'Aurora Glow', text: '✺ ' + text + ' ✺' });
        styles.push({ name: 'Light Rays', text: '☆彡 ' + text + ' ミ☆' });
        styles.push({ name: 'Magic Glow', text: '･ﾟ✧ ' + text + ' ✧ﾟ･' });
        styles.push({ name: 'Radiant', text: '✵ ' + text + ' ✵' });
        styles.push({ name: 'Luminous', text: '❂ ' + text + ' ❂' });
        return styles;
    },

    glitter: function (text) {
        const styles = [];

        // Glitter with sparkle characters interspersed
        const glitterChars = ['✦', '✧', '★', '☆', '✴', '✵', '❋', '❊', '✺', '✹'];

        // Random glitter between letters
        function addGlitter(str, char) {
            return str.split('').join(char);
        }

        styles.push({ name: 'Sparkle Glitter', text: '✦✧✦ ' + text + ' ✦✧✦' });
        styles.push({ name: 'Star Glitter', text: '★☆★ ' + addGlitter(text, '★') + ' ★☆★' });
        styles.push({ name: 'Diamond Glitter', text: '◇◆◇ ' + text + ' ◇◆◇' });
        styles.push({ name: 'Scattered Stars', text: addGlitter(text, '✧') });
        styles.push({ name: 'Emoji Sparkle', text: '💎✨ ' + text + ' ✨💎' });
        styles.push({ name: 'Gold Glitter', text: '⭐ ' + addGlitter(text, '⭐') + ' ⭐' });
        styles.push({ name: 'Silver Glitter', text: '☆ ' + addGlitter(text, '☆') + ' ☆' });
        styles.push({ name: 'Fairy Dust', text: '✨🧚✨ ' + text + ' ✨🧚✨' });
        styles.push({ name: 'Magic Sparkle', text: '✨🪄✨ ' + text + ' ✨🪄✨' });
        styles.push({ name: 'Party Glitter', text: '🎉✨ ' + text + ' ✨🎉' });
        styles.push({ name: 'Multi Glitter', text: '✦' + addGlitter(text, '✧') + '✦' });
        styles.push({ name: 'Disco Glitter', text: '🪩✨ ' + text + ' ✨🪩' });
        return styles;
    },

    retro: function (text) {
        const styles = [];
        const upper = text.toUpperCase();

        // Retro/VHS style effects
        styles.push({ name: 'VHS Style', text: '▌│█║▌║▌║ ' + upper + ' ║▌║▌║█│▌' });
        styles.push({ name: '80s Gradient', text: '░▒▓█ ' + upper + ' █▓▒░' });
        styles.push({ name: 'Arcade Style', text: '╔══════╗ ' + upper + ' ╔══════╗' });
        styles.push({ name: 'Pixel Border', text: '■□■ ' + upper + ' ■□■' });
        styles.push({ name: 'Cassette', text: '📼 ' + upper + ' 📼' });
        styles.push({ name: 'TV Static', text: '📺 ' + upper + ' 📺' });
        styles.push({ name: 'Play Button', text: '▶ ' + upper + ' ◀' });
        styles.push({ name: 'Synthwave', text: '◢◤ ' + upper + ' ◢◤' });
        styles.push({ name: 'Disco Style', text: '🕺 ' + upper + ' 💃' });
        styles.push({ name: 'Vinyl Record', text: '🎵 ' + upper + ' 🎵' });
        styles.push({ name: 'Joystick', text: '🕹️ ' + upper + ' 🕹️' });
        styles.push({ name: 'Neon 80s', text: '✧･ﾟ: *✧･ﾟ:* ' + upper + ' *:･ﾟ✧*:･ﾟ✧' });
        styles.push({ name: 'Retro Box', text: '〘 ' + upper + ' 〙' });
        styles.push({ name: 'Classic Arcade', text: '『 ' + upper + ' 』' });
        return styles;
    },

    softgirl: function (text) {
        const styles = [];

        styles.push({ name: 'Soft Pink', text: '🌸 ' + text + ' 🌸' });
        styles.push({ name: 'Cloud Soft', text: '☁️ ' + text + ' ☁️' });
        styles.push({ name: 'Butterfly Soft', text: '🦋 ' + text + ' 🦋' });
        styles.push({ name: 'Heart Soft', text: '💕 ' + text + ' 💕' });
        styles.push({ name: 'Dreamy', text: '✿ ' + text + ' ✿' });
        styles.push({ name: 'Teddy Bear', text: '🧸 ' + text + ' 🧸' });
        styles.push({ name: 'Strawberry', text: '🍓 ' + text + ' 🍓' });
        styles.push({ name: 'Angel Wings', text: '👼 ' + text + ' 👼' });
        styles.push({ name: 'Fairy Magic', text: '🧚 ' + text + ' 🧚' });
        styles.push({ name: 'Soft Border', text: '༺ ' + text + ' ༻' });
        styles.push({ name: 'Ribbon Bow', text: '🎀 ' + text + ' 🎀' });
        styles.push({ name: 'Peach Soft', text: '🍑 ' + text + ' 🍑' });
        styles.push({ name: 'Sparkle Soft', text: '✧˖° ' + text + ' °˖✧' });
        styles.push({ name: 'Cherry Soft', text: '🍒 ' + text + ' 🍒' });
        styles.push({ name: 'Moon Soft', text: '☾ ' + text + ' ☽' });
        return styles;
    },

    handwriting: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const script = '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏';
        const boldScript = '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃';
        const italic = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻';
        const serifItalic = '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Script Style', text: transform(text, script) });
        styles.push({ name: 'Bold Script', text: transform(text, boldScript) });
        styles.push({ name: 'Italic Hand', text: transform(text, italic) });
        styles.push({ name: 'Serif Italic', text: transform(text, serifItalic) });
        styles.push({ name: 'Pen & Script', text: '✎ ' + transform(text, script) });
        styles.push({ name: 'Note Style', text: '📝 ' + transform(text, boldScript) });
        styles.push({ name: 'Letter Style', text: '✉️ ' + transform(text, script) + ' ✉️' });
        styles.push({ name: 'Journal Entry', text: '📖 ' + transform(text, italic) });
        styles.push({ name: 'Love Letter', text: '💌 ' + transform(text, boldScript) + ' 💌' });
        styles.push({ name: 'Elegant Hand', text: '~ ' + transform(text, script) + ' ~' });
        return styles;
    },

    signature: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const script = '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏';
        const boldScript = '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Classic Signature', text: transform(text, boldScript) });
        styles.push({ name: 'Elegant Signature', text: '~ ' + transform(text, script) + ' ~' });
        styles.push({ name: 'Formal Style', text: '— ' + transform(text, boldScript) + ' —' });
        styles.push({ name: 'Flourish', text: '❧ ' + transform(text, script) + ' ❧' });
        styles.push({ name: 'Executive', text: '✦ ' + transform(text, boldScript) + ' ✦' });
        styles.push({ name: 'Professional', text: '• ' + transform(text, script) + ' •' });
        styles.push({ name: 'Artistic', text: '« ' + transform(text, boldScript) + ' »' });
        styles.push({ name: 'Royal', text: '♔ ' + transform(text, script) + ' ♔' });
        styles.push({ name: 'Underlined', text: transform(text, boldScript).split('').map(c => c + '\u0332').join('') });
        styles.push({ name: 'Pen Signature', text: '✒ ' + transform(text, script) });
        return styles;
    },

    calligraphy: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const boldScript = '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃';
        const fraktur = '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷';
        const script = '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Bold Calligraphy', text: transform(text, boldScript) });
        styles.push({ name: 'Gothic Calligraphy', text: transform(text, fraktur) });
        styles.push({ name: 'Light Script', text: transform(text, script) });
        styles.push({ name: 'Ornate Border', text: '❦ ' + transform(text, boldScript) + ' ❦' });
        styles.push({ name: 'Flourished', text: '࿐ ' + transform(text, boldScript) + ' ࿐' });
        styles.push({ name: 'Decorative', text: '༺ ' + transform(text, boldScript) + ' ༻' });
        styles.push({ name: 'Vintage Style', text: '✾ ' + transform(text, fraktur) + ' ✾' });
        styles.push({ name: 'Classic Ornate', text: '❁ ' + transform(text, boldScript) + ' ❁' });
        styles.push({ name: 'Wedding Style', text: '♥ ' + transform(text, boldScript) + ' ♥' });
        styles.push({ name: 'Royal Calligraphy', text: '♛ ' + transform(text, script) + ' ♛' });
        return styles;
    },

    bubble: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const circled = 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨';
        const filled = '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩⓿❶❷❸❹❺❻❼❽❾';
        const squared = '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789';
        const negSquared = '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉0123456789';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Circled Letters', text: transform(text, circled) });
        styles.push({ name: 'Filled Circles', text: transform(text.toUpperCase(), filled) });
        styles.push({ name: 'Square Letters', text: transform(text.toUpperCase(), squared) });
        styles.push({ name: 'Negative Square', text: transform(text.toUpperCase(), negSquared) });
        styles.push({ name: 'Spaced Bubble', text: transform(text, circled).split('').join(' ') });
        styles.push({ name: 'Bubble Frame', text: '🫧 ' + transform(text, circled) + ' 🫧' });
        styles.push({ name: 'Circle Frame', text: '○ ' + transform(text, circled) + ' ○' });
        return styles;
    },

    doodle: function (text) {
        const styles = [];

        styles.push({ name: 'Star Doodle', text: '★·.·´¯`·.·★ ' + text + ' ★·.·´¯`·.·★' });
        styles.push({ name: 'Heart Doodle', text: '♥‿♥ ' + text + ' ♥‿♥' });
        styles.push({ name: 'Swirl Doodle', text: '๑۩۩๑ ' + text + ' ๑۩۩๑' });
        styles.push({ name: 'Flower Doodle', text: '✿◕ ‿ ◕✿ ' + text + ' ✿◕ ‿ ◕✿' });
        styles.push({ name: 'Arrow Doodle', text: '»»——➤ ' + text + ' ←——««' });
        styles.push({ name: 'Wave Doodle', text: '～～ ' + text + ' ～～' });
        styles.push({ name: 'Pencil Sketch', text: '✎ ' + text + ' ✎' });
        styles.push({ name: 'Art Palette', text: '🎨 ' + text + ' 🎨' });
        styles.push({ name: 'Curly Doodle', text: '꧁༺ ' + text + ' ༻꧂' });
        styles.push({ name: 'Cute Doodle', text: '(◕ᴗ◕✿) ' + text + ' (✿◕ᴗ◕)' });
        styles.push({ name: 'Music Doodle', text: '♪♫ ' + text + ' ♫♪' });
        styles.push({ name: 'Sparkle Doodle', text: '·:*¨¨* ' + text + ' *¨¨*:·' });
        return styles;
    },

    minimal: function (text) {
        const styles = [];

        // Small text conversions
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const smallCaps = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ0123456789';
        const superscript = 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹';
        const subscript = 'ₐBCDₑFGₕᵢⱼₖₗₘₙₒₚQᵣₛₜᵤᵥWₓYZₐbcdₑfgₕᵢⱼₖₗₘₙₒₚqᵣₛₜᵤᵥwₓyz₀₁₂₃₄₅₆₇₈₉';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        styles.push({ name: 'Small Caps', text: transform(text, smallCaps) });
        styles.push({ name: 'Superscript', text: transform(text, superscript) });
        styles.push({ name: 'Clean Lines', text: '— ' + text + ' —' });
        styles.push({ name: 'Simple Dots', text: '• ' + text + ' •' });
        styles.push({ name: 'Period Dots', text: '· ' + text + ' ·' });
        styles.push({ name: 'Vertical Lines', text: '| ' + text + ' |' });
        styles.push({ name: 'Brackets', text: '[ ' + text + ' ]' });
        styles.push({ name: 'Parentheses', text: '( ' + text + ' )' });
        styles.push({ name: 'Japanese Box', text: '「 ' + text + ' 」' });
        styles.push({ name: 'Lowercase', text: text.toLowerCase() });
        styles.push({ name: 'Spaced Out', text: text.split('').join(' ') });
        styles.push({ name: 'Underscore', text: '_' + text + '_' });
        return styles;
    },

    cyber: function (text) {
        const styles = [];
        const upper = text.toUpperCase();

        // Unicode transformations for cyber effect
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const monospace = '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        styles.push({ name: 'Cyber Box', text: '【 ' + upper + ' 】' });
        styles.push({ name: 'Matrix Style', text: '> ' + transform(text, monospace) + ' <' });
        styles.push({ name: 'Glitch Effect', text: '█▓▒░ ' + upper + ' ░▒▓█' });
        styles.push({ name: 'Binary Frame', text: '01 ' + upper + ' 10' });
        styles.push({ name: 'Hacker Style', text: '// ' + transform(text, monospace) + ' //' });
        styles.push({ name: 'Terminal', text: '$ ' + transform(text, monospace) });
        styles.push({ name: 'Code Tags', text: '< ' + upper + ' />' });
        styles.push({ name: 'Digital', text: '⌐ ' + upper + ' ¬' });
        styles.push({ name: 'Robot Frame', text: '🤖 ' + upper + ' 🤖' });
        styles.push({ name: 'Futuristic', text: '◢◤ ' + upper + ' ◢◤' });
        styles.push({ name: 'Cyber Punk', text: '⟦ ' + transform(text, monospace) + ' ⟧' });
        styles.push({ name: 'System', text: '[SYSTEM]: ' + transform(text, monospace) });
        return styles;
    },

    fancy: function (text) {
        const styles = [];
        const maps = {
            normal: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            boldSans: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵',
            boldSerif: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗',
            italic: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789',
            boldItalic: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789',
            script: '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏0123456789',
            boldScript: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789',
            fraktur: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789',
            boldFraktur: '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟0123456789',
            doubleStruck: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡',
            monospace: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿',
            circled: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨'
        };

        function transform(input, map) {
            return input.split('').map(char => {
                const index = maps.normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        styles.push({ name: 'Bold Sans', text: transform(text, maps.boldSans) });
        styles.push({ name: 'Bold Serif', text: transform(text, maps.boldSerif) });
        styles.push({ name: 'Italic', text: transform(text, maps.italic) });
        styles.push({ name: 'Bold Italic', text: transform(text, maps.boldItalic) });
        styles.push({ name: 'Script', text: transform(text, maps.script) });
        styles.push({ name: 'Bold Script', text: transform(text, maps.boldScript) });
        styles.push({ name: 'Fraktur', text: transform(text, maps.fraktur) });
        styles.push({ name: 'Bold Fraktur', text: transform(text, maps.boldFraktur) });
        styles.push({ name: 'Double Struck', text: transform(text, maps.doubleStruck) });
        styles.push({ name: 'Monospace', text: transform(text, maps.monospace) });
        styles.push({ name: 'Circled', text: transform(text, maps.circled) });

        return styles;
    },

    stylish: function (text) {
        const styles = TextTransformers.fancy(text);
        styles.push({ name: 'Wavy Border', text: '～ ' + text + ' ～' });
        styles.push({ name: 'Sparkle Border', text: '✦ ' + text + ' ✦' });
        styles.push({ name: 'Star Border', text: '★ ' + text + ' ★' });
        styles.push({ name: 'Diamond Border', text: '◆ ' + text + ' ◆' });
        styles.push({ name: 'Heart Border', text: '❤ ' + text + ' ❤' });
        styles.push({ name: 'Arrow Border', text: '➤ ' + text + ' ➤' });
        return styles;
    },

    gothic: function (text) {
        const frakturMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const frakturUnicode = '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷';
        const boldFraktur = '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟';

        function transform(input, unicode) {
            return input.split('').map(char => {
                const index = frakturMap.indexOf(char);
                return index !== -1 ? [...unicode][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Gothic Fraktur', text: transform(text, frakturUnicode) });
        styles.push({ name: 'Bold Gothic', text: transform(text, boldFraktur) });
        styles.push({ name: 'Cross Gothic', text: '† ' + transform(text, frakturUnicode) + ' †' });
        styles.push({ name: 'Medieval', text: '⚔ ' + transform(text, frakturUnicode) + ' ⚔' });
        styles.push({ name: 'Skull Gothic', text: '☠ ' + transform(text, boldFraktur) + ' ☠' });
        styles.push({ name: 'Dagger Gothic', text: '✞ ' + transform(text, frakturUnicode) + ' ✞' });
        styles.push({ name: 'Bat Gothic', text: '🦇 ' + transform(text, boldFraktur) + ' 🦇' });
        styles.push({ name: 'Moon Gothic', text: '🌙 ' + transform(text, frakturUnicode) + ' 🌙' });
        styles.push({ name: 'Rose Gothic', text: '🥀 ' + transform(text, boldFraktur) + ' 🥀' });
        styles.push({ name: 'Chain Gothic', text: '⛓ ' + transform(text, frakturUnicode) + ' ⛓' });
        return styles;
    },

    cursive: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const script = '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏';
        const boldScript = '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Cursive Script', text: transform(text, script) });
        styles.push({ name: 'Bold Cursive', text: transform(text, boldScript) });
        styles.push({ name: 'Flower Cursive', text: '✿ ' + transform(text, boldScript) + ' ✿' });
        styles.push({ name: 'Elegant Cursive', text: '❧ ' + transform(text, script) + ' ❧' });
        styles.push({ name: 'Heart Cursive', text: '♥ ' + transform(text, boldScript) + ' ♥' });
        styles.push({ name: 'Classic Cursive', text: '~ ' + transform(text, script) + ' ~' });
        styles.push({ name: 'Fancy Cursive', text: '« ' + transform(text, boldScript) + ' »' });
        styles.push({ name: 'Star Cursive', text: '★ ' + transform(text, script) + ' ★' });
        return styles;
    },

unicode: function (text) {
// Unicode Blocks Explorer — each variant showcases a real Unicode block.
// Distinct from 'fancy' (stylish fonts): this one is educational/reference.
const styles = [];
const map = (fn) => text.split('').map(fn).join('');

const fullwidth = map(c => {
const code = c.charCodeAt(0);
if (code >= 33 && code <= 126) return String.fromCharCode(code + 65248);
return c === ' '? '　': c;
});
styles.push({ name: 'Fullwidth Block', text: fullwidth});

const circled = map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code - 65));
if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code - 97));
if (code === 48) return '⓪';
if (code >= 49 && code <= 57) return String.fromCodePoint(0x245F + code);
return c;
});
styles.push({ name: 'Enclosed Alphanumerics', text: circled});

const squared = map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F130 + (code - 65));
return c;
});
styles.push({ name: 'Squared Letters', text: squared});

const negSquared = map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F170 + (code - 65));
return c;
});
styles.push({ name: 'Negative Squared', text: negSquared});

const parens = map(c => {
const code = c.charCodeAt(0);
if (code >= 97 && code <= 122) return String.fromCodePoint(0x249C + (code - 97));
return c;
});
styles.push({ name: 'Parenthesized Letters', text: parens});

const regional = map(c => {
const code = c.toUpperCase().charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F1E6 + (code - 65));
return c === ' '? ' ': c;
});
styles.push({ name: 'Regional Indicators', text: regional});

const smallCapsMap = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';
const smallCaps = map(c => {
const i = 'abcdefghijklmnopqrstuvwxyz'.indexOf(c.toLowerCase());
return i!== -1? smallCapsMap[i]: c;
});
styles.push({ name: 'Phonetic Small Caps', text: smallCaps});

const supMap = { a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ', j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'};
const superscript = map(c => supMap[c.toLowerCase()] || c);
styles.push({ name: 'Superscript Block', text: superscript});

const subMap = { a: 'ₐ', e: 'ₑ', o: 'ₒ', x: 'ₓ', h: 'ₕ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ', p: 'ₚ', s: 'ₛ', t: 'ₜ', '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎'};
const subscript = map(c => subMap[c.toLowerCase()] || c);
styles.push({ name: 'Subscript Block', text: subscript});

const mathBold = map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D400 + (code - 65));
if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D41A + (code - 97));
if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7CE + (code - 48));
return c;
});
styles.push({ name: 'Math Bold Block', text: mathBold});

const mathItalic = map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D434 + (code - 65));
if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D44E + (code - 97));
return c;
});
styles.push({ name: 'Math Italic Block', text: mathItalic});

const dsExceptions = { C: 'ℂ', H: 'ℍ', N: 'ℕ', P: 'ℙ', Q: 'ℚ', R: 'ℝ', Z: 'ℤ'};
const doubleStruck = map(c => {
if (dsExceptions[c]) return dsExceptions[c];
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D538 + (code - 65));
if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D552 + (code - 97));
if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7D8 + (code - 48));
return c;
});
styles.push({ name: 'Double-Struck Block', text: doubleStruck});

return styles;
},

bubbleletters: function (text) {
// Decorated bubble-letter NAME styles — distinct from 'bubble' (raw unicode alphabets).
const styles = [];
const circled = text.split('').map(c => {
const code = c.charCodeAt(0);
if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code - 65));
if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code - 97));
if (code === 48) return '⓪';
if (code >= 49 && code <= 57) return String.fromCodePoint(0x245F + code);
return c;
}).join('');
styles.push({ name: 'Bubble Pop', text: '★ ' + circled + ' ★'});
styles.push({ name: 'Bubblegum Frame', text: '｡･:*˚:✧ ' + circled + ' ✧:˚*:･｡'});
styles.push({ name: 'Bubble Wave', text: '～ ' + circled + ' ～'});
styles.push({ name: 'Love Bubbles', text: '♡ ' + circled + ' ♡'});
styles.push({ name: 'Star Bubbles', text: '☆ ' + circled + ' ☆'});
styles.push({ name: 'Double Bubble', text: '\u3010 ' + circled + ' \u3011'});
styles.push({ name: 'Bubble Wrap', text: '『 ' + circled + ' 』'});
styles.push({ name: 'Fizzy Bubbles', text: '･ﾟ ' + circled + ' ﾟ･'});
return styles;
},

    bold: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const boldSans = '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
        const boldSerif = '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗';
        const boldItalic = '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Bold Sans-Serif', text: transform(text, boldSans) });
        styles.push({ name: 'Bold Serif', text: transform(text, boldSerif) });
        styles.push({ name: 'Bold Italic', text: transform(text, boldItalic) });
        styles.push({ name: 'Star Bold', text: '★ ' + transform(text, boldSans) + ' ★' });
        styles.push({ name: 'Box Bold', text: '【' + transform(text, boldSans) + '】' });
        return styles;
    },

    italic: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const italicSans = '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻';
        const italicSerif = '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧';
        const boldItalic = '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Italic Sans-Serif', text: transform(text, italicSans) });
        styles.push({ name: 'Italic Serif', text: transform(text, italicSerif) });
        styles.push({ name: 'Bold Italic', text: transform(text, boldItalic) });
        styles.push({ name: 'Elegant Italic', text: '~ ' + transform(text, italicSans) + ' ~' });
        styles.push({ name: 'Sparkle Italic', text: '✧ ' + transform(text, italicSerif) + ' ✧' });
        return styles;
    },

    underline: function (text) {
        const underlined = text.split('').map(c => c + '\u0332').join('');
        const doubleUnderline = text.split('').map(c => c + '\u0333').join('');

        const styles = [];
        styles.push({ name: 'Single Underline', text: underlined });
        styles.push({ name: 'Double Underline', text: doubleUnderline });
        styles.push({ name: 'Dash Underline', text: '— ' + underlined + ' —' });
        styles.push({ name: 'Fancy Underline', text: '« ' + underlined + ' »' });
        return styles;
    },

    strikethrough: function (text) {
        const strikethrough = text.split('').map(c => c + '\u0336').join('');
        const slashThrough = text.split('').map(c => c + '\u0337').join('');

        const styles = [];
        styles.push({ name: 'Strikethrough', text: strikethrough });
        styles.push({ name: 'Slash Through', text: slashThrough });
        styles.push({ name: 'X Crossed', text: '✗ ' + strikethrough + ' ✗' });
        styles.push({ name: 'Bracket Cross', text: '[' + strikethrough + ']' });
        return styles;
    },

    monospace: function (text) {
        const normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const mono = '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';

        function transform(input, map) {
            return input.split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? [...map][index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Monospace', text: transform(text, mono) });
        styles.push({ name: 'Code Backticks', text: '`' + transform(text, mono) + '`' });
        styles.push({ name: 'Terminal Prompt', text: '> ' + transform(text, mono) });
        styles.push({ name: 'Console Style', text: '$ ' + transform(text, mono) });
        styles.push({ name: 'Bracket Code', text: '[ ' + transform(text, mono) + ' ]' });
        return styles;
    },

    smallcaps: function (text) {
        const normal = 'abcdefghijklmnopqrstuvwxyz';
        const smallCaps = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

        function transform(input) {
            return input.toLowerCase().split('').map(char => {
                const index = normal.indexOf(char);
                return index !== -1 ? smallCaps[index] : char;
            }).join('');
        }

        const styles = [];
        styles.push({ name: 'Small Caps', text: transform(text) });
        styles.push({ name: 'Dot Small Caps', text: '• ' + transform(text) + ' •' });
        styles.push({ name: 'Dash Small Caps', text: '— ' + transform(text) + ' —' });
        styles.push({ name: 'Diamond Small Caps', text: '❖ ' + transform(text) + ' ❖' });
        return styles;
    },

    anime: function (text) {
        const styles = [];
        styles.push({ name: 'Anime Stars', text: '★彡 ' + text + ' 彡★' });
        styles.push({ name: 'Kawaii Anime', text: '(◕‿◕)♡ ' + text + ' ♡(◕‿◕)' });
        styles.push({ name: 'Sparkle Anime', text: '✧･ﾟ✧ ' + text + ' ✧･ﾟ✧' });
        styles.push({ name: 'Japanese Box', text: '【★】' + text + '【★】' });
        styles.push({ name: 'Otaku Style', text: '『 ' + text + ' 』' });
        styles.push({ name: 'Heart Anime', text: '♥‿♥ ' + text + ' ♥‿♥' });
        styles.push({ name: 'Magical Anime', text: '☆*:.｡' + text + '.｡.:*☆' });
        styles.push({ name: 'Cat Anime', text: '(=^･ω･^=) ' + text + ' (=^･ω･^=)' });
        styles.push({ name: 'Flower Anime', text: '❀ ' + text + ' ❀' });
        styles.push({ name: 'Moon Anime', text: '☾ ' + text + ' ☽' });
        styles.push({ name: 'Bunny Anime', text: '(・ω・) ' + text + ' (・ω・)' });
        styles.push({ name: 'Blush Anime', text: '(〃▽〃) ' + text + ' (〃▽〃)' });
        return styles;
    },

    manga: function (text) {
        const styles = [];
        const upper = text.toUpperCase();
        styles.push({ name: 'Action Manga', text: '!! ' + upper + ' !!' });
        styles.push({ name: 'Sound Effect', text: '※ ' + upper + ' ※' });
        styles.push({ name: 'Dramatic', text: '!!★ ' + upper + ' ★!!' });
        styles.push({ name: 'Speech Bubble', text: '〈 ' + text + ' 〉' });
        styles.push({ name: 'Thought Bubble', text: '〔 ' + text + ' 〕' });
        styles.push({ name: 'Shout Style', text: '【 ' + upper + ' 】' });
        styles.push({ name: 'Whisper', text: '( ' + text.toLowerCase() + ' )' });
        styles.push({ name: 'Impact', text: '★ ' + upper + ' ★' });
        styles.push({ name: 'Comic Style', text: '◆ ' + upper + ' ◆' });
        styles.push({ name: 'Panel Border', text: '┃ ' + text + ' ┃' });
        styles.push({ name: 'Explosion', text: '💥 ' + upper + ' 💥' });
        styles.push({ name: 'Speed Lines', text: '/// ' + upper + ' ///' });
        return styles;
    },

    camelcase: function (text) {
        const styles = [];
        const words = text.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 0);
        if (words.length === 0) return [{ name: 'CamelCase', text: text }];

        const upperCamel = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
        const lowerCamel = upperCamel.charAt(0).toLowerCase() + upperCamel.slice(1);
        const snake = words.map(w => w.toLowerCase()).join('_');
        const kebab = words.map(w => w.toLowerCase()).join('-');
        const dot = words.map(w => w.toLowerCase()).join('.');
        const path = words.map(w => w.toLowerCase()).join('/');

        styles.push({ name: 'UpperCamelCase (PascalCase)', text: upperCamel });
        styles.push({ name: 'lowerCamelCase', text: lowerCamel });
        styles.push({ name: 'snake_case', text: snake });
        styles.push({ name: 'kebab-case', text: kebab });
        styles.push({ name: 'dot.notation', text: dot });
        styles.push({ name: 'path/notation', text: path });
        return styles;
    },

    gothicoldenglish: function (text) {
        const styles = [];
        const regGothic = {
            'A':'𝔄','B':'𝔅','C':'ℭ','D':'𝔇','E':'𝔈','F':'𝔉','G':'𝔊','H':'ℌ','I':'ℑ','J':'𝔍','K':'𝔎','L':'𝔏','M':'𝔐','N':'𝔑','O':'𝔒','P':'𝔓','Q':'𝔔','R':'ℜ','S':'𝔖','T':'𝔗','U':'𝔘','V':'𝔙','W':'𝔚','X':'𝔛','Y':'𝔜','Z':'ℨ',
            'a':'𝔞','b':'𝔟','c':'𝔠','d':'𝔡','e':'𝔢','f':'𝔣','g':'𝔤','h':'𝔥','i':'𝔦','j':'𝔧','k':'𝔨','l':'𝔩','m':'𝔪','n':'𝔫','o':'𝔬','p':'𝔭','q':'𝔮','r':'𝔯','s':'𝔰','t':'𝔱','u':'𝔲','v':'𝔳','w':'𝔴','x':'𝔵','y':'𝔶','z':'𝔷'
        };
        const boldGothic = {'A':'𝕬','B':'𝕭','C':'𝕮','D':'𝕯','E':'𝕰','F':'𝕱','G':'𝕲','H':'𝕳','I':'𝕴','J':'𝕵','K':'𝕶','L':'𝕷','M':'𝕸','N':'𝕹','O':'𝕺','P':'𝕻','Q':'𝕼','R':'𝕽','S':'𝕾','T':'𝕿','U':'𝖀','V':'𝖁','W':'𝖂','X':'𝖃','Y':'𝖄','Z':'𝖅','a':'𝖆','b':'𝖇','c':'𝖈','d':'𝖉','e':'𝖊','f':'𝖋','g':'𝖌','h':'𝖍','i':'𝖎','j':'𝖏','k':'𝖐','l':'𝖑','m':'𝖒','n':'𝖓','o':'𝖔','p':'𝖕','q':'𝖖','r':'𝖗','s':'𝖘','t':'𝖙','u':'𝖚','v':'𝖛','w':'𝖜','x':'𝖝','y':'𝖞','z':'𝖟'};

        const convert = (str, map) => str.split('').map(c => map[c] || c).join('');

        styles.push({ name: 'Gothic / Old English', text: convert(text, regGothic) });
        styles.push({ name: 'Bold Gothic', text: convert(text, boldGothic) });
        return styles;
    },

    oldenglish: function (text) {
        return TextTransformers.gothicoldenglish(text);
    },

    glitch: function (text) {
        const styles = [];
        const crossed = text.split('').map(c => c + '\u0337').join('');
        const bracketed = text.split('').map(c => `[${c}]`).join('');
        const doubleBracketed = text.split('').map(c => `⟦${c}⟧`).join('');
        const under = text.split('').map(c => c + '\u0332').join('');
        const sparkle = text.split('').map(c => c + '͓̽').join('');
        const blocks = '░▒▓ ' + text + ' ▓▒░';
        
        styles.push({ name: 'Sparkle Glitch', text: sparkle });
        styles.push({ name: 'Crossed Glitch', text: crossed });
        styles.push({ name: 'Bracket Glitch', text: bracketed });
        styles.push({ name: 'Double Bracket', text: doubleBracketed });
        styles.push({ name: 'Combining Underline', text: under });
        styles.push({ name: 'Block Glitch', text: blocks });
        return styles;
    },

    aestheticborders: function (text) {
        const styles = [];
        styles.push({ name: 'Double Box', text: '『 ' + text + ' 』' });
        styles.push({ name: 'Black Box', text: '【 ' + text + ' 】' });
        styles.push({ name: 'Corner brackets', text: '「 ' + text + ' 」' });
        styles.push({ name: 'Sparkle Frame', text: '✧･ﾟ: *✧･ﾟ:* ' + text + ' *:･ﾟ✧*:･ﾟ✧' });
        styles.push({ name: 'Floral Star', text: '🌸*̥˚ ' + text + ' *̥˚🌸' });
        styles.push({ name: 'Shooting Star', text: '★彡 ' + text + ' 彡★' });
        styles.push({ name: 'Angel Wings', text: 'ʚïɞ ' + text + ' ʚïɞ' });
        styles.push({ name: 'Heart border', text: 'ღ ' + text + ' ღ' });
        styles.push({ name: 'Musical notes', text: '♫꒰･‿･๑꒱ ' + text + ' ♫꒰･‿･๑꒱' });
        styles.push({ name: 'Kpop Deco', text: '☆彡 ' + text + ' ☄️★' });
        styles.push({ name: 'Cyber grid', text: '░▒▓█ ' + text + ' █▓▒░' });
        styles.push({ name: 'Decorative wave', text: '⌗ ' + text + ' ⌗' });
        return styles;
    },

    animated: function (text) {
        const styles = [];
        styles.push({ name: 'Rainbow Gradient wave', text: text });
        styles.push({ name: 'Neon Glow pulse', text: text });
        styles.push({ name: 'Glitch Shake shake', text: text });
        styles.push({ name: 'Bouncing text', text: text });
        return styles;
    }
};

function generateText(type) {
    const input = document.getElementById('text-input');
    const resultsContainer = document.getElementById('results-container');

    if (!input || !resultsContainer) return;

    const text = input.value.trim();

    if (!text) {
        resultsContainer.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✍️</div><p>Enter some text above to generate styles</p></div>';
        return;
    }

    const transformer = TextTransformers[type];
    if (!transformer) {
        console.error('Unknown transformer type:', type);
        return;
    }

    const styles = TextTransformers[type](text);

    resultsContainer.innerHTML = styles.map(style => `
        <div class="result-item">
            <div class="result-content">
                <span class="result-name">${style.name}</span>
                <div class="result-text">${escapeHtml(style.text)}</div>
            </div>
            <button class="copy-btn" onclick="copyText(this, '${escapeForAttribute(style.text)}')">
                📋 Copy
            </button>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function escapeForAttribute(text) {
    return text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

function copyText(button, text) {
    const decodedText = text.replace(/&quot;/g, '"').split('\\\\').map(function (part) { return part.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\'/g, "'"); }).join('\\');

    navigator.clipboard.writeText(decodedText).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);

        showToast('Copied to clipboard!');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = decodedText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        button.innerHTML = '✓ Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = '📋 Copy';
            button.classList.remove('copied');
        }, 2000);

        showToast('Copied to clipboard!');
    });
}

function copyAll() {
    const results = document.querySelectorAll('.result-text');
    if (results.length === 0) {
        showToast('Nothing to copy!');
        return;
    }
    const allText = Array.from(results).map(r => r.textContent).join('\n');

    navigator.clipboard.writeText(allText).then(() => {
        showToast('All styles copied!');
    }).catch(() => {
        showToast('Failed to copy');
    });
}

function clearInput() {
    const input = document.getElementById('text-input');
    const resultsContainer = document.getElementById('results-container');
    const preview = document.getElementById('style-preview');

    if (input) input.value = '';
    if (resultsContainer) {
        resultsContainer.innerHTML = '<div class="empty-state"><div class="empty-state-icon">✍️</div><p>Enter some text above to generate styles</p></div>';
    }
    if (preview) {
        preview.textContent = preview.dataset.default || 'preview';
    }
    updateCharCount();
}

function updateCharCount() {
    const input = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');

    if (input && charCount) {
        const count = input.value.length;
        charCount.textContent = `${count} character${count !== 1 ? 's' : ''}`;
    }
}

function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast success';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

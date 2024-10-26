// English version of the bio
const engBio = `
<p>Hi, I'm José Ignacio — or <em>jotai</em>, a Chilean communications specialist focused on the intersection of content, media, brands, and digital strategy. I've built my career by exploring the evolution of the digital industry since the late 90s and anticipating its next steps since the mid-2000s.</p>

<p>My journey spans from B2B/B2C startups to creative agencies, through media outlets and private companies, with extensive knowledge of (almost) all social platforms past and present. I believe in experiences that not only connect audiences with media, brands, or services but also create fans. From the most active users to those who casually encounter my work, I design strategies that ensure memorable and effective connections.</p>

<p>I'm a team problem solver: I enjoy collaborating, innovating in interaction formats, and testing new dynamics to continuously improve. Since 2005, I've written and edited about consumer technology, social media, digital economy, entrepreneurship, and much more — I've seen it all, trust me. In <a href="https://futurosnews.beehiiv.com" target="_blank">futuros</a> — my newsletter — I share my periodic analysis about the intersections of technology and culture. Since 2020, I've been part of the editorial team at <a href="https://techmeme.com" target="_blank">Techmeme</a>, the technology news aggregator that Mark Zuckerberg and Sundar Pichai consult daily.</p>

<h2 id="contactTitle">Contact</h2>

<div class="contact-info">
    <p>If you want to work with me independently, or you're interested in seeing my portfolio, write to me at hello at this website's domain. Be nice. If (and when) I am full-time employed, <strong>I do not receive work inquiries through my personal contact channels</strong> and I ask you to use my corporate email.</p>

    <p>If you work in public relations or are part of a communications agency, and want to send me a press release/pitch about something that should be on my radar: send it to <em>press at this website's domain</em>; before doing so, please read my editorial principles for covering technology.</p>

    <p>You can also find me (not always) and follow me (if you want) on these social networks:</p>

    <p>
        → <a href="https://newsletter.futuros.io">futuros newsletter</a><br>
        → <a href="https://techmeme.com" rel="noopener">techmeme</a>
    </p>
</div>`;

// Store original Spanish text when the page loads
window.onload = function() {
    const bioElement = document.getElementById('bioText');
    bioElement.setAttribute('data-original', bioElement.innerHTML);
    
    if (navigator.language.startsWith('en')) {
        toggleLanguage();
    }
};

let isSpanish = true;
function toggleLanguage() {
    const bioElement = document.getElementById('bioText');
    const langToggle = document.getElementById('langToggle');
    const currentLang = isSpanish ? 'en' : 'es';
    
    if (isSpanish) {
        bioElement.innerHTML = engBio;
        langToggle.textContent = '🇨🇱';
        document.documentElement.lang = 'en';
        updateMetaTags('en');
    } else {
        bioElement.innerHTML = bioElement.getAttribute('data-original');
        langToggle.textContent = '🇬🇧';
        document.documentElement.lang = 'es-CL';
        updateMetaTags('es');
    }
    
    isSpanish = !isSpanish;
}

function updateMetaTags(lang) {
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (lang === 'en') {
        metaDescription.setAttribute('content', 'JI Stark is a communications specialist focused on digital strategy, content, and media, with experience in B2B/B2C startups, creative agencies, and media outlets.');
        ogLocale.setAttribute('content', 'en_US');
        ogTitle.setAttribute('content', 'JI Stark | Digital Strategy & Content');
        ogDescription.setAttribute('content', 'Creating memorable digital experiences at the intersection of content, media, and technology. Editor at TechMeme, publisher of futuros newsletter.');
        twitterTitle.setAttribute('content', 'JI Stark | Digital Strategy & Content');
        twitterDescription.setAttribute('content', 'Creating memorable digital experiences at the intersection of content, media, and technology. Editor at TechMeme, publisher of futuros newsletter.');
    } else {
        metaDescription.setAttribute('content', 'JI Stark es un comunicador chileno especializado en estrategia digital, experiencia de usuario, y edición y curatoría de contenidos con experiencia en startups B2B/B2C, agencias creativas, empresa privada y medios de comunicación.');
        ogLocale.setAttribute('content', 'es_CL');
        ogTitle.setAttribute('content', 'JI Stark | Estrategia Digital y Contenidos');
        ogDescription.setAttribute('content', 'Creando experiencias digitales memorables en la intersección de contenido, medios y tecnología. Editor en TechMeme, publicador del newsletter futuros.');
        twitterTitle.setAttribute('content', 'JI Stark | Estrategia Digital y Contenidos');
        twitterDescription.setAttribute('content', 'Creando experiencias digitales memorables en la intersección de contenido, medios y tecnología. Editor en TechMeme, publicador del newsletter futuros.');
    }
}
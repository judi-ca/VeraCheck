// Apparition de la nav bar pour mobile
let lastScroll = 0;
const nav = document.querySelector(".mobile-nav")
window.addEventListener("scroll",() =>{
    let currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll)<10) return;
    if (currentScroll > lastScroll){
        nav.classList.add("hide");
    }else{
        nav.classList.remove("hide")
    }
    lastScroll = currentScroll;
})

// Vérification - interaction avec le serveur de fact-checking
const analyseBtn = document.getElementById('analyse-btn');
const userText = document.getElementById('user-text');

function createResultContainer(){
    let container = document.getElementById('verification-result');
    if(container) return container;
    container = document.createElement('div');
    container.id = 'verification-result';
    container.className = 'verification-result';
    const section = document.querySelector('.verification');
    section.appendChild(container);
    return container;
}

function showLoading(container){
    container.innerHTML = '<p>Analyse en cours…</p>';
}

function renderResult(container, data){
    if(!data){
        container.innerHTML = '<p>Impossible d\'obtenir une réponse.</p>';
        return;
    }
    const verdict = data.verdict || data.verdict?.toUpperCase?.() || 'INCERTAIN';
    const explication = data.explication || data.summary || '';
    const sources = Array.isArray(data.sources) ? data.sources : [];

    let html = `<div class="result-card">`;
    html += `<h3>Verdict : <span class="verdict">${verdict}</span></h3>`;
    html += `<p class="summary">${explication}</p>`;
    if(sources.length){
        html += '<ul class="sources">';
        sources.forEach(s => {
            const url = typeof s === 'string' ? s : (s.url || s.link || '#');
            const title = typeof s === 'string' ? s : (s.title || s.name || url || 'Source');
            html += `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></li>`;
        });
        html += '</ul>';
    }
    html += `</div>`;
    container.innerHTML = html;
}

async function verifyClaim(text){
    const base = (typeof window !== 'undefined' && window.API_BASE) ? window.API_BASE.replace(/\/$/, '') : '';
    const url = base + '/verify';
    const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ claim: text })
    });
    if(!resp.ok){
        let details = '';
        try{ details = await resp.text(); }catch(e){ details = resp.statusText; }
        throw new Error(`Server error ${resp.status}: ${details}`);
    }
    const json = await resp.json();
    return json;
}

if(analyseBtn){
    analyseBtn.addEventListener('click', async () => {
        const text = (userText && userText.value) ? userText.value.trim() : '';
        if(!text) return alert('Veuillez entrer une affirmation à vérifier.');
        const container = createResultContainer();
        showLoading(container);
        try{
            const result = await verifyClaim(text);
            renderResult(container, result);
        }catch(err){
            container.innerHTML = `<p>Erreur: ${err.message}</p>`;
        }
    });
}
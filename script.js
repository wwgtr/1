// script.js
const contentArea = document.getElementById('content-area');
const navButtons = document.querySelectorAll('.nav-btn');

function renderSection(section) {
    let data;
    switch(section) {
        case 'poetry': data = poetry; break;
        case 'quotes': data = quotes; break;
        case 'bio': data = bio; break;
        case 'wisdom': data = wisdom; break;
        default: data = [];
    }

    let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;
    data.forEach(item => {
        html += `<div class="glass p-6 card-hover rounded-xl text-right">`;
        if (section === 'poetry') {
            html += `<p class="text-lg leading-relaxed whitespace-pre-line">${item.text}</p>`;
            if (item.poet) html += `<div class="border-t border-white/10 pt-3 mt-3"><p class="text-sm text-gray-400">— ${item.poet}</p></div>`;
        } else if (section === 'bio') {
            html += `<h3 class="text-xl font-bold mb-2">${item.title}</h3><p class="text-gray-300 leading-relaxed">${item.content}</p>`;
        } else {
            html += `<p class="text-lg leading-relaxed">${item.text}</p>`;
            if (item.source) html += `<div class="border-t border-white/10 pt-3 mt-3"><p class="text-sm text-gray-400">— ${item.source}</p></div>`;
        }
        html += `</div>`;
    });
    html += `</div>`;
    contentArea.innerHTML = html;
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('nav-active'));
        btn.classList.add('nav-active');
        renderSection(btn.dataset.section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (navButtons.length > 0) {
        navButtons[0].classList.add('nav-active');
        renderSection(navButtons[0].dataset.section);
    }
});

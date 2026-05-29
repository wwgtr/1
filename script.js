// دالة لعرض شاشة الأقوال
function showQuotes() {
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quotesScreen').style.display = 'flex';
    
    const container = document.getElementById('quotesContainer');
    container.innerHTML = '';
    
    quotes.forEach(quote => {
        const card = document.createElement('div');
        card.className = 'quote-card';
        card.innerHTML = `<div class="quote-text">${quote.text}</div>`;
        container.appendChild(card);
    });
}

function goHome() {
    document.getElementById('quotesScreen').style.display = 'none';
    document.getElementById('homeScreen').style.display = 'flex';
}

// تحديث الوقت في شريط الحالة
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 1000);

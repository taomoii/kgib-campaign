// Card 3 Popup Script
function openCard3Popup() {
    const popup = document.getElementById('card3Popup');
    popup.style.display = '';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            popup.classList.add('show');
        });
    });
    document.body.style.overflow = 'hidden';
}

function closeCard3Popup() {
    const popup = document.getElementById('card3Popup');
    const content = popup.querySelector('.popup-content');
    popup.classList.remove('show');

    function onTransitionEnd(e) {
        if (e.target !== content) return;
        popup.style.display = 'none';
        document.body.style.overflow = '';
        content.removeEventListener('transitionend', onTransitionEnd);
    }
    content.addEventListener('transitionend', onTransitionEnd);
}

// ESC 鍵關閉 popup
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeCard3Popup();
    }
});
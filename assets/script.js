fetch('../assets/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })

fetch('../assets/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })

fetch('../assets/rightmenu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('rightmenu').innerHTML = data;
                        if (typeof initTooltip === 'function') {
                    initTooltip();
                }
    })

function initTooltip() {
    const tooltip = document.getElementById('tooltip');
    const elements = document.querySelectorAll('[data-tooltip]');

    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            tooltip.textContent = el.getAttribute('data-tooltip');
            tooltip.style.display = 'block';
        });

        el.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = e.pageY + 'px';
        });

        el.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
}
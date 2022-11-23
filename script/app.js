const hamburger = {};

hamburger.app = () => {
    const symbol = document.querySelector('.hamburger');
    const menu = document.querySelector('.desktopNav');
    const bars = document.querySelectorAll('.bar');
    const links = document.querySelectorAll('.navLink');

    hamburger.hoverTrue = symbol.addEventListener('mouseover', () => {
        bars.forEach(bar => {
            bar.style.backgroundColor = `rgb(73, 182, 24)`
        });
    });
    hamburger.hoverFalse = symbol.addEventListener('mouseleave', () => {
        bars.forEach(bar => {
            bar.style.backgroundColor = `rgb(255, 255, 255)`
        });
    });
    hamburger.openMenu = symbol.addEventListener('click', () => {
        symbol.classList.toggle('active')
        menu.classList.toggle('active')
    });
    hamburger.closeMenu = links.forEach(link => {
        link.addEventListener('click', () => {
            symbol.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}

hamburger.init = () => {
    hamburger.app();
}

hamburger.init();
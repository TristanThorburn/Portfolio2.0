// CLEANER
const cleanUp = {};

cleanUp.schedule = () => {
    const outPut = document.querySelector('.desktopDescription');

    document.addEventListener("scroll", () => {
        if(window.innerWidth < 1619 && outPut.childNodes.length > 0){
            outPut.innerHTML = "";
        }
    });
}

cleanUp.init= () => {
    cleanUp.schedule();
}

cleanUp.init();
// MOBILE HAMBURGER MENU
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
        symbol.classList.toggle('active');
        menu.classList.toggle('active');
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
// DESKTOP LOGO JAVASCRIPT
const logoDesktop = {};

logoDesktop.app = () => {
    const logo = document.querySelector('.logo')
    const oldLogoHTML = '<h3 class="logo mobileHidden"><span class="logoT">T</span>ristan</h3>';
    const newLogoHTML = '<h3><span class="logoT">T</span>ristan <span class="logoT">T</span>horburn</h3>';

        if(window.innerWidth > 1400){
            logo.innerHTML = newLogoHTML;
        } else{
            logo.innerHTML = oldLogoHTML;
        }

        window.addEventListener('resize', () => {
            if(window.innerWidth > 1400){
                logo.innerHTML = newLogoHTML;
            } else{
                logo.innerHTML = oldLogoHTML;
            }
        })
}

logoDesktop.init =() => {
    logoDesktop.app();
}

logoDesktop.init();
//PROJECTS JAVASCRIPT
const projects = {};

projects.app = () => {
    const projectImage = document.querySelectorAll('.projectImage');
    const outPut = document.querySelector('.desktopDescription');
    const slides = document.querySelectorAll('.slide');
    slides.currentSlide = 0;
    slides.maxSlide = slides.length -1;
    slides.nextSlide = document.querySelector('.nextButton');
    slides.prevSlide = document.querySelector('.prevButton');

    slides.forEach((slide, index) => {
        if(window.innerWidth >= 1619){
            slide.style.transform = `translateX(${index * 100}%)`;
        }
        else{
            window.onresize = () => {
                if(window.innerWidth < 1619){
                    slides.forEach(slide => {
                        slide.removeAttribute('style');
                    });
                }
            }
        }
    });

    slides.nextSlide.addEventListener('click', () => {
        if(slides.currentSlide === slides.maxSlide){
            slides.currentSlide = 0;

            if(outPut.childNodes.length > 0){
                outPut.innerHTML = '';
            }
        }
        else{
            slides.currentSlide ++;
            
            if(outPut.childNodes.length > 0){
                outPut.innerHTML = '';
            }
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slides.currentSlide)}%)`
        });
    });

    slides.prevSlide.addEventListener('click', () => {
        if(slides.currentSlide === 0){
            slides.currentSlide = slides.maxSlide;
            
            if(outPut.childNodes.length > 0){
                outPut.innerHTML = '';
            }
        }
        else{
            slides.currentSlide --;
            
            if(outPut.childNodes.length > 0){
                console.log(outPut.childNodes.length)
                outPut.innerHTML = '';
            }
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - slides.currentSlide)}%)`
        });
    });

    projectImage.forEach(project => {
        project.addEventListener('click', (e) => {
            if(window.innerWidth < 1023){
                project.classList.toggle('active');

                const projectDetails = e.target.parentNode.nextElementSibling;          

                    if(e.target.parentNode.classList.contains("active")){
                        projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
                    }
                    else{
                        projectDetails.style.maxHeight = 0;
                    }
            }
            if(window.innerWidth > 1619){
                const projectDetails = e.target.parentNode.nextElementSibling;
                const clone = projectDetails.cloneNode(true);
                if(outPut.childNodes.length > 0){
                    outPut.innerHTML = '';
                }
                else {
                    outPut.appendChild(clone);
                }
            }
        });
    });
    
    window.addEventListener('resize', () => {
        const slides = document.querySelectorAll('.slide');
        if(window.innerWidth >= 1022  && window.innerWidth <= 1619){
            projectImage.forEach(project => {
                project.classList.remove('active');
                project.nextElementSibling.removeAttribute('style');
            })
            slides.forEach(slide => {
                slide.removeAttribute('style');
            })
            outPut.innerHTML = '';
        }
    });
}

projects.init = () => {
    projects.app();
}

projects.init();
// ARCHIVE JS
const archive = {};

archive.app = () => {
    const archiveButton = document.querySelector('.archive');
    const archiveContent = document.querySelector('.archiveContent')
    const eggProject = document.querySelector('.egg');
    const eggImage = eggProject.children[1].children[0];
    const eggDetails = eggProject.children[1].children[1];
    const trigger = document.querySelector('.eggButton');

    trigger.addEventListener('click', (e) => {
        const hint = e.target.parentElement.nextElementSibling;
        hint.classList.toggle('eggHunt');
        eggProject.classList.toggle('eggHunt');

            if (archiveContent.classList.contains('openArchive')) {
                hint.innerText = 'Looks like the archive didnt open all the way...'
            } else {
                hint.innerText = 'I think something happened in the archive...'
            }
    });

    archiveButton.addEventListener('click', () => {
        archiveContent.classList.toggle('openArchive')
        
        if(archiveContent.classList.contains('openArchive')){
            archiveContent.style.maxHeight = archiveContent.scrollHeight + eggImage.scrollHeight + eggDetails.scrollHeight + 'px'
        } else{
            archiveContent.style.maxHeight = 0
        }
    });

    eggProject.addEventListener('click', (e) => {
        eggDetails.classList.toggle('openProject')

        if(eggDetails.classList.contains('openProject')){
            eggDetails.style.maxHeight = eggDetails.scrollHeight + 'px';
        } else {
            eggDetails.style.maxHeight = 0;
        }
    });
}

archive.init = () => {
    archive.app();
}

archive.init();


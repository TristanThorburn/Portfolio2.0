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

//PROJECTS JAVASCRIPT
const projects = {};

projects.app = () => {
    const projectImage = document.querySelectorAll('.projectImage');

    projectImage.forEach(project => {
        project.addEventListener('click', (e) => {
            if(window.innerWidth < 1200){
                project.classList.toggle('active');
                
                    const projectDetails = e.target.parentNode.parentElement.nextElementSibling;
                    if(e.target.parentNode.parentElement.classList.contains("active")){
                        projectDetails.style.maxHeight = projectDetails.scrollHeight + "px";
                    }
                    else{
                        projectDetails.style.maxHeight = 0;
                    }
                }
                else{
                    project.removeEventListener("click", e);
                }
        });
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
    const archiveContent = document.querySelector('.archiveContent');

    archiveButton.addEventListener('click', (e) => {
        archiveButton.classList.toggle('selected');

        const eggProject = e.target.nextElementSibling.children[1].children[3];

            if(archiveButton.classList.contains('selected')){
                let archiveSize = archiveContent.scrollHeight;

                archiveContent.style.maxHeight = archiveSize + 'px';

                eggProject.addEventListener('click', (e) => {
                    e.target.parentElement.classList.toggle('cracked');

                    const scrambled = e.target.parentElement;
                        if(scrambled.classList.contains('cracked') && window.innerWidth < 1200){
                           const dinner = scrambled.parentElement.nextElementSibling.scrollHeight;
                           const sideDish = scrambled.parentElement.nextElementSibling;
                           archiveSize = archiveSize + dinner;
                           archiveContent.style.maxHeight = archiveSize + 'px';
                           
                           sideDish.style.maxHeight = sideDish.scrollHeight + 'px';
                        }
                        else{
                            const sideDish = scrambled.parentElement.nextElementSibling;
                            sideDish.style.maxHeight = 0;
                        }
                });
            }
            else{
                archiveContent.style.maxHeight = 0;
            }
    });
}

archive.init = () => {
    archive.app();
}

archive.init();
// SECRET PROJECT OOOOOOHHHH
const secret = {};

secret.app = () => {
    const trigger = document.querySelector('.bottomT');
    const reveal = document.querySelector('.egg');
    const archiveContent = document.querySelector('.archiveContent');
    
    trigger.addEventListener('click', (e) => {
        reveal.classList.toggle('eggHunt');
        const hint = e.target.nextElementSibling;
        hint.classList.toggle('eggHunt');
            if (archiveContent.classList.contains('.selected')){
                archiveContent.style.maxHeight = archiveContent.scrollHeight + reveal.scrollHeight + 'px'
            }
            else{
                archiveContent.style.maxHeight = archiveContent.scrollHeight;
            }
    })
}

secret.init = () => {
    secret.app();
}

secret.init();

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
    const archiveContent = document.querySelector('.archiveContent')
    const eggProject = document.querySelector('.egg');
    const eggImage = eggProject.children[1].children[0];
    const eggDetails = eggProject.children[1].children[1];
    const trigger = document.querySelector('.bottomT');

    trigger.addEventListener('click', (e) => {
        const hint = e.target.nextElementSibling;
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


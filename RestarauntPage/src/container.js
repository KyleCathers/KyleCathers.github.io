import hamburgerIcon from './images/hamburgerIcon.png';
import githubIcon from './images/githubIcon.png'
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function pageInit() {
    // main container
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    // header sections
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerLogo = document.createElement('div');
    headerLogo.setAttribute('id', 'header-logo');

    const headerImg = new Image();
    headerImg.src = hamburgerIcon;

    const headerText = document.createElement('div');
    headerText.setAttribute('id', 'header-text');
    headerText.innerHTML = "Kyle's";

    headerLogo.appendChild(headerImg);
    headerLogo.appendChild(headerText);
    headerLogo.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(home());
    });

    const headerHome = document.createElement('div');
    headerHome.setAttribute('id', 'header-home');
    headerHome.innerHTML = "Home";
    headerHome.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(home());
    });

    const headerMenu = document.createElement('div');
    headerMenu.setAttribute('id', 'header-menu');
    headerMenu.innerHTML = "Menu";
    headerMenu.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(menu());
    });
    
    const headerContact = document.createElement('div');
    headerContact.setAttribute('id', 'header-contact');
    headerContact.innerHTML = "Contact";
    headerContact.addEventListener('click', () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(contact());
    });

    const headerLeft = document.createElement('div');
    headerLeft.setAttribute('id', 'header-left');
    headerLeft.appendChild(headerLogo);
    headerLeft.appendChild(headerHome);
    headerLeft.appendChild(headerMenu);

    header.appendChild(headerLeft);
    header.appendChild(headerContact);

    // body section
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');
    mainContent.appendChild(home());

    // footer section
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const footerLink = document.createElement('a');
    footerLink.setAttribute('id', 'footer-link');
    footerLink.setAttribute('href', 'https://github.com/KyleCathers');
    footerLink.setAttribute('target', '_blank');

    const footerText = document.createElement('div');
    footerText.setAttribute('id', 'footer-text');
    footerText.innerHTML = "Created by Kyle Cathers"

    const footerImg = new Image();
    footerImg.setAttribute('id', 'footer-img');
    footerImg.src = githubIcon;

    footerLink.appendChild(footerText);
    footerLink.appendChild(footerImg);

    footer.appendChild(footerLink);

    container.appendChild(header);
    container.appendChild(mainContent);
    container.appendChild(footer);

    return container;
}

export { pageInit };
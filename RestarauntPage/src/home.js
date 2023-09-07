import restarauntPic from './images/homePic.jpg';
import squiggleLarge from './images/squiggleLarge.png'

function home() {
    const homeContent = document.createElement('div');
    homeContent.setAttribute('id', 'home-content');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'left-side');
    
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'right-side');

    homeContent.appendChild(leftSide);
    homeContent.appendChild(rightSide);

    const infoBox = document.createElement('div');
    infoBox.setAttribute('id', 'info-box');

    const homeTitle = document.createElement('div');
    homeTitle.setAttribute('id', 'home-title');
    homeTitle.innerText = "Kyle's Burgers";

    const homeText = document.createElement('div');
    homeText.setAttribute('id', 'home-text');
    homeText.innerText = "The United States was the first country where two slices of bread and a \
                         ground beef patty were combined into a `hamburger sandwich` and sold. Shortly \
                         after its creation, the hamburger quickly included all of its currently \
                         typically characteristic trimmings, including onions, lettuce, and sliced pickles.\
                         After various controversies in the 20th century, including a nutritional \
                         controversy in the late 1990s, the burger is now readily identified with the \
                         United States, and a particular style of cuisine, namely fast food. Along with \
                         fried chicken and apple pie, the hamburger has become a culinary icon in the \
                         United States."
                         
    const homePic = new Image();
    homePic.setAttribute('id', 'home-pic');
    homePic.src = restarauntPic;

    const homeCaption = document.createElement('div');
    homeCaption.setAttribute('id', 'home-caption');
    homeCaption.innerText = "Kyle's Burgers on May 10 1905, Vancouver, BC";

    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    infoBox.append(homeTitle);
    infoBox.append(homeText);
    infoBox.append(homePic);
    infoBox.append(homeCaption);

    rightSide.append(topHomeBorder);
    rightSide.appendChild(infoBox);
    rightSide.append(bottomHomeBorder);

    return homeContent;
}

export default home;
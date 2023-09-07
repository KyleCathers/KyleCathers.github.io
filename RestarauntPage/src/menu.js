import breakfastBurgerPic from './images/breakfastBurger.jpg';
import beefBurgerPic from './images/beefBurger.jpg';
import bisonBurgerPic from './images/bisonBurger.jpg';
import chickenBurgerPic from './images/chickenBurger.jpg';
import salmonBurgerPic from './images/salmonBurger.jpg';

function menu() {
    // list of menu items, all under burger html class
    const menuList = [
        {
            name: "Breakfast", // ❖
            price: 13,
            ingredients: ["Fried Egg", "White Cheddar Cheese", "Lettuce", "Bacon",
                            "Tomato", "Caramelized Onion", "Toasted Brioche Bun", "Bacon Aoili"],
            picture: breakfastBurgerPic
        },

        {
            name: "Beef", // ❖
            price: 18,
            ingredients: ["Double Beef Patty", "White Cheddar Cheese", "Lettuce", "Red Onion",
                            "Toasted Sesame Seed Bun", "Pickles", "Tomato", "Garlic Aoili"],
            picture: beefBurgerPic
        },

        {
            name: "Bison", // ❖
            price: 17,
            ingredients: ["Grass Fed Bison Patty", "Swiss Cheese", "Lettuce", "Tomato", "Caramelized Onions",
                            "Toasted Brioche Bun", "Jalepeno Aoili"],
            picture: bisonBurgerPic
        },

        {
            name: "Chicken", // ❖
            price: 15,
            ingredients: ["Double Fried Chicken", "Cheddar Cheese", "Lettuce", "Toasted Brioche Bun", "Sriracha Aoili"],
            picture: chickenBurgerPic
        },

        {
            name: "Salmon", // ❖
            price: 16,
            ingredients: ["Wild Salmon Patty", "Red Onion", "Lettuce", "Tomato", "Toasted Brioche Bun", "Remoulade Sauce"],
            picture: salmonBurgerPic
        },
    ];

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menu-content');

    const leftSide = document.createElement('div');
    leftSide.setAttribute('id', 'left-side');
    
    const rightSide = document.createElement('div');
    rightSide.setAttribute('id', 'right-side');

    menuContent.appendChild(leftSide);
    menuContent.appendChild(rightSide);

    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const menuTitle = document.createElement('div');
    menuTitle.setAttribute('id', 'menu-title');
    menuTitle.innerText = "Menu";

    const menuBox = document.createElement('div');
    menuBox.setAttribute('id', 'menu-box');

    // add each burger item to menu DOM
    menuList.forEach((menuItem) => {
        menuBox.append(addBurger(menuItem));
    });

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    rightSide.append(topHomeBorder);
    rightSide.appendChild(menuTitle);
    rightSide.appendChild(menuBox);
    rightSide.append(bottomHomeBorder);
    
    return menuContent;
}

export default menu;

// add burger object to the menu DOM
function addBurger(menuItem) {
    const item = document.createElement('div');
    item.setAttribute('id', `${menuItem.name}-burger`);
    item.setAttribute('class', 'burger');

    const itemImg = new Image();
    itemImg.setAttribute('class', 'img');
    itemImg.src = menuItem.picture;

    const itemRight = document.createElement('div');
    itemRight.setAttribute('class', 'right');

    const itemTitle = document.createElement('div');
    itemTitle.setAttribute('class', 'title');
    itemTitle.innerText = `${menuItem.name} Burger - $${menuItem.price}`;

    const itemText = document.createElement('div');
    itemText.setAttribute('class', 'text');
    
    let text = "";
    menuItem.ingredients.forEach((ingredient) => {
        text += `❖ ${ingredient}\n`;
    });

    itemText.innerText = text;

    itemRight.append(itemTitle);
    itemRight.append(itemText);

    item.append(itemImg);
    item.append(itemRight);

    return item;
}
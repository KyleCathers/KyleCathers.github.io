import "./style.css";

import { pageInit, updateContent, updateMenu, loadFromLocal } from "./container";

document.body.appendChild(pageInit());

// grab any exisitng local storage
loadFromLocal();

// update DOM with exisitng data
updateContent();
updateMenu();
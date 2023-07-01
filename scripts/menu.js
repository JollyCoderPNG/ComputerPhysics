const middleContent = document.getElementById("middle-content");
const menuList = document.getElementById("menu-list");
const infoList = document.getElementById("infoList");
const checkboxMenu = document.getElementById("checkbox-menu");


function buttonChecked(middleContent, menuList){
    middleContent.style.animation = "removeWelcome 1s linear forwards";
    menuList.style.animation = "toWelcome 1s linear forwards";
}

function buttonUnchecked(middleContent, menuList){
    middleContent.style.animation = "returnWelcome 1s linear forwards";
    menuList.style.animation = "fromWelcome 1s linear forwards";
}

function clickOnToggle() {
    checked = !checked;
    if (checked) buttonChecked(middleContent, menuList);
    else buttonUnchecked(middleContent,menuList);
}

function uncheckButton() {
    checked = !checked;
    document.getElementById("navi-toggle").click();
    buttonUnchecked(middleContent,menuList);
}

var checked = false;
const naviToggle = document.getElementById("navi-label");
naviToggle.addEventListener("click", clickOnToggle);
checkboxMenu.addEventListener("click", clickOnToggle);
infoList.addEventListener("click", uncheckButton);

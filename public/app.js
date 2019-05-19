const DOMStrings = {
    menu : ".navigation__checkbox",
    menu_link: ".navigation__link",
    menu_list: ".navigation__list",
    popup_close: ".popup__close",
    popup_book: ".book_close",
    popup: ".popup",
    navigation: ".navigation"
};

const menu = document.querySelector(DOMStrings.menu);
const menu_link = document.querySelectorAll(DOMStrings.menu_link);
const menu_list = document.querySelectorAll(DOMStrings.menu_list);



const popup = document.querySelector(DOMStrings.popup);

popup.addEventListener('click',function(e){
    if (e.target = popup){
        popup.style.visibility = 'hidden';
        popup.style.opacity = 0;
    }
});


//Menu event listeners for closing it
document.querySelector(DOMStrings.menu_list).addEventListener('click',(e)=>{
    if(e.target.className === "navigation__link"){
        document.querySelector(DOMStrings.menu).click();
    }
});


document.querySelector('.logout').addEventListener('click', (e)=>{
    //TODO:
    //1. make a request to remove the jwt and logout
    
})
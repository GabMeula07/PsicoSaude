function menuShow(){
    var menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'assets/img/menu-icon-30.png'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'assets/img/close-30.png'
    }
}
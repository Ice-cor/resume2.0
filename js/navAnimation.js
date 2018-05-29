window.onscroll = function (e) {
    let topNavbar = document.getElementById('topNavbar')
    if (scrollY > 1) {
        topNavbar.classList.add('navActive')
    } else {
        topNavbar.classList.remove('navActive')
    }
} //nav浮现效果及页面上浮效果
slideMenu()



/************工具函数**************/




function slideMenu() {
    let liTags = document.querySelectorAll('.menuWrap>li')
    let aTags = document.querySelectorAll('.menuWrap>li>a')

    for (let i = 0; i < liTags.length; i++) {
        liTags[i].addEventListener('mouseenter', onmouseenter)
        liTags[i].addEventListener('mouseleave', onmouseleave)

    } //hover显示效果

    

    

    

    function onmouseenter(li) {
        li.currentTarget.classList.add('active')
    }

    function onmouseleave(li) {
        li.currentTarget.classList.remove('active')
    }
}

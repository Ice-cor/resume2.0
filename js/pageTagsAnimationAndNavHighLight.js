!function(){
    window.addEventListener('scroll', function (e) {
        navAnimation()
        findClosestAndNavHightLight()
    })
    
    function navAnimation() {
        let topNavbar = document.getElementById('topNavbar')
        if (window.scrollY > 1) {
            topNavbar.classList.add('navActive')
        } else {
            topNavbar.classList.remove('navActive')
        }
    
    } //nav浮现效果及页面上浮效果
    
    let pageTags = document.querySelectorAll('[data-x]')
    
    for (let i = 0; i < pageTags.length; i++) {
        pageTags[i].classList.add('offset')
    
    } //添加offset类
    let pageAnId = setTimeout(function () {
        pageTags[0].classList.remove('offset')
        pageAnId = null
    }, 1000)
    //第一个page加载后自动变化

    function findClosestAndNavHightLight() {
        let minOne = 0 //设置当前最小值匹配滚动区域  
    
        for (let i = 0; i < pageTags.length; i++) {
            let top = pageTags[i].offsetTop
            let height = pageTags[i].offsetTop + pageTags[i].clientHeight
    
            if (window.scrollY > pageTags[i].offsetTop - 200 && window.scrollY < pageTags[i].offsetTop +
                pageTags[i].clientHeight - 200) { //当滚动距离元素头部且小于元素尾部的时候，就视为在这个元素区域里面
                minOne = i
            }
        }
        pageTags[minOne].classList.remove('offset')
    
        let id = pageTags[minOne].id
    
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let liAll = li.parentNode.children
        for (let i = 0; i < liAll.length; i++) {
            liAll[i].classList.remove('highLight')
        }
        li.classList.add('highLight')
    
    
    } //找最近的元素
}.call()

slideMenu()
modelToggle()


/************工具函数**************/

function modelToggle(){
    
    let btn = document.querySelector('#wxBtn')
    let wxModel = document.querySelector('#wxModel')
    btn.onclick = function(e){
        e.preventDefault()
        wxModel.classList.add('active')
    }

    wxModel.onclick = function(){
        this.classList.remove('active')
    }
}


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

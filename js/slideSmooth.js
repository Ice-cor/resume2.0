(function(){
    let view = document.querySelectorAll('.menuWrap>li>a')
 
    
    let controller = {
        view: null,
        init: function(){
            this.view = view

            this.tweenInit()
            this.bindEvents()
        },
        tweenInit: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
            //引用tween.js，初始化
        },
        bindEvents: function(){
            let aTags = this.view
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = function (e) {
                    e.preventDefault()
                    let a = e.currentTarget
                    let id = a.getAttribute('href') //获取#x
                    if(id[0]!=='#'){
                        window.open(`${id}`,'_blank')
                        return
                    }
                    let pageTag = document.querySelector(id)
                    let top = pageTag.offsetTop
        
                    let currentTop = window.scrollY //当前页面位置
                    let distance = top - currentTop //路程
                    let coords = {
                        y: currentTop
                    } //开始位置
                    // console.log(currentTop,distance)
                    let tween = new TWEEN.Tween(coords)
                        .to({
                            y: top + 50
                        }, 500) //结束位置
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .onUpdate(function () {
                            window.scrollTo(0, coords.y)
                        })
                        .start();
                }
            } //页面缓动效果
        }
    }

    controller.init()
    
}).call()
(function () {
    let view = document.getElementById('loadingWrap')

    let controller = {
        view: null,
        timeId: null,
        init: function (view) {
            this.view = view
            // this.addClass()
            this.particlesInit()
            this.bindEvents()
            
        },
        bindEvents: function () {
            // this.timeId = setTimeout(this.addClass.bind(this),1000)
            document.querySelector('.enter').onclick = function(){
                controller.addClass()
            }
        },
        addClass: function () {
            view.classList.add('active')
            // this.timeId = null
        },
        particlesInit: function(){
            particlesJS.load('loadingWrap', './particlesjs-config.json', function () {
                console.log('callback - particles.js config loaded');
            });
        }

    }
    controller.init(view)

    // console.log('start')

}).call() //页面loading效果
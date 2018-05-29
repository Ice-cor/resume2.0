(function () {
    let view = document.getElementById('loadingWrap')

    let controller = {
        view: null,
        timeId: null,
        init: function (view) {
            this.view = view
            // this.addClass()
            this.bindEvents()
            
        },
        bindEvents: function () {
            this.timeId = setTimeout(this.addClass.bind(this),1000)
        },
        addClass: function () {
            view.classList.add('active')
            this.timeId = null
        }

    }
    controller.init(view)

    // console.log('start')


}).call() //页面loading效果
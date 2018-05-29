!function () {
    let view = document.querySelector('#messages')

    let model = {
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find()
        },
        save: function (userName, userMessage) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                name: userName.value,
                content: userMessage.value
            })
        }
    }

    let contorler = {
        view: null,
        messageLists: null,
        form: null,
        init: function (view) {
            this.view = view
            this.messageLists = document.querySelector('#messages>ol')
            this.form = document.getElementById('postMsgForm')
            this.AVinit()
            this.loadMessages()
            this.bindEvents()
        },
        AVinit: function () {
            var APP_ID = 'Xwk0jodPc1TfDiJo9azcX9g1-gzGzoHsz'
            var APP_KEY = 'jX6BHsirG47Fr6bcCSLI18Eg'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        loadMessages: function () {
            model.fetch().then(
                (messages) => {

                    let array = messages.map((item) => {
                        let date = item.createdAt
                         item.attributes.time = this.tool.formatDate(date) //格式化时间
                        return item.attributes
                    })
                    // console.log(array)
                    array.forEach(
                        (element) => {
                            let name = element.name
                            let content = element.content
                            let time = element.time

                            let li = this.tool.createMessageList(name,content,time)
                            this.messageLists.insertBefore(li, this.messageLists.childNodes[0])
                        })
                }).then(function () {}, function (error) {
                console.log(error)
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                this.updateMessage()
                // console.log(this)

            })
        },
        updateMessage: function () {
            let form = this.form
            let userName = form.querySelector('#userName')
            let userMessage = form.querySelector('#userMessage')

            if (userName.value && userMessage.value !== '') {
                model.save(userName, userMessage).then((object) => {
                    userName.value = ''
                    userMessage.value = ''
                    let name = object.attributes.name
                    let content = object.attributes.content
                    let date = object.createdAt
                    let time = object.attributes.time = this.tool.formatDate(date) //格式化时间

                    let li = this.tool.createMessageList(name,content,time)
                    this.messageLists.insertBefore(li, this.messageLists.childNodes[0])

                }).then(function () {}, function (error) {
                    console.log(error)
                })
            } else if (userName.value || userMessage.value == '') {
                alert('留言不能为空')
            }
        },
        tool: {
            formatDate: function (date) {
                let time = date.toLocaleString()
                return time
            },
            createMessageList: function (name,content,time) {
                let li = document.createElement('li')

                li.innerHTML = `
                                <div>
                                    <span class="userName">${name}</span>
                                    <span>${content}</span>
                                </div>
                                <div class="msgTime">${time}</div>
                                `
                return li
            }
        }
    }




    contorler.init(view)
}.call()
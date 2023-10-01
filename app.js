console.log('hello vue')

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a dynamic template</h2>',
    data(){
        return{
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            console.log('you clicked me')
            // this.title = "Words of Randiance"
            this.title = title
        }
    }
})

app.mount('#app')
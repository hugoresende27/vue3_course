console.log('hello vue')

const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a dynamic template</h2>',
    data(){
        return{
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                { title: 'name of the wind', author : 'Zecas', img: 'assets/1.jpeg', isFav: true},
                { title: 'Hello from the other side', author : 'Tonecas', img: 'assets/2.webp', isFav: true},
                { title: 'Quim porta é ter saúde', author : 'Maria', img: 'assets/3.png', isFav: true},
            ],
            url : 'http://www.thenetninja.co.uk'
        }
    },
    methods: {
        changeTitle(title){
            console.log('you clicked me')
            // this.title = "Words of Randiance"
            this.title = title
        },
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toogleFav(book){
            // console.log(book)
            book.isFav = !book.isFav
            // if(book.isFav == true){
            //     book.isFav = false
            // }else{
            //     book.isFav = true
            // }
        
        }
    },

    computed: {
        filteredBooks(){
            // return 'Hello filtered Books'
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
const app = Vue.createApp({
    // template:`<h2>This overrides the template in #app</h2>`
    data() { //data properties are accessible via the template
        return {
            showBooks: true,
            url: "https://github.com/Elmanzalawy",
            books: [
                {
                    title: "Very interesting title",
                    author: "author 1",
                    img: "assets/1.png",
                    isFav: true,
                },
                {
                    title: "Very uninteresting title",
                    author: "author 2",
                    img: "assets/2.png",
                    isFav: false,
                },
                {
                    title: "interesting title",
                    author: "author 3",
                    img: "assets/3.png",
                    isFav: false,
                },
            ],
            counter: 0,
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeTitle() {
            this.title = 'something else'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(e, book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => {
                return book.isFav
            })
        }
    }

})

app.mount("#app")
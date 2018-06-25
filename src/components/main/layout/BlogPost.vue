<template>
    <section id="blog__post">
        <div class="section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {{intId}}
                        <h1 class="blog__post--title">{{ article.title }}</h1>
                        <article>{{ article.content }}</article>
                        <p>{{ article.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            id: this.$route.params.id,
            intId: '',
            article: {}
        }
    },
    computed: {
        articles() {
            console.log(this.$store.state.blogs);
            return this.$store.state.blogs;  
        }  
    },
    methods: {
        findById( id ) {
            for (let i = 0; i < this.articles.length; i++) {
                if (id === this.articles[i].id) return this.articles[i];
                console.log("article: " + this.article);
            }
            return null;
        }
    },
    mounted() {
        this.intId = parseInt(this.id);
        this.article = this.findById( this.intId ); 
    }

}
</script>
<style>
.section--title {
    font-family: 'Anton', sans-serif;
    font-size: 40px;
    letter-spacing: 8px;
    color: #b5b5b7;
    max-width: 100%;
    overflow: hidden;
}
.section--padding {
        padding-top: 100px;
}
</style>
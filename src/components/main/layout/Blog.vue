<template>
    <section id="blog">
        <div class="section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="section--title">BLOG</h1>
                        <div v-for="blog in blogs" class="blog__single">
                            <router-link v.bind:articles="blogs" v-bind:to="'/blog/' + blog.id"><h2 class="blog__title">{{ blog.title | to-uppercase }}</h2></router-link>
                            <article class="blog__article">{{ blog.content | excerpt }}</article>
                            <div class="blog__author">{{ blog.author }}</div>
                            <img class="blog__img" :src="blog.src" :alt="blog.title" >
                        </div>
                        <router-link to="/blog">More blog posts</router-link>
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
        }
    },
    computed: {
        blogs() {
            console.log(this.$store.state.blogs);
            return this.$store.state.blogs;  
        }  
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
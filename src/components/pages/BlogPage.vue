<template>
    <section id="blog">
        <div class="section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="section--title">BLOG</h1>
                       <p> blog: {{ blogs }}</p>
                        <div v-for="blog in blogs" class="blog__single">
                            <router-link v-bind:to="'/blog/' + blog.id"><h2 class="blog__title">{{ blog.title | to-uppercase }}</h2></router-link>
                            <article class="blog__article">{{ blog.content | excerpt }}</article>
                            <div class="blog__author">{{ blog.author }}</div>
                            <img class="blog__img" :src="blog.src" :alt="blog.title" >
                            
                        </div>
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
            blogs: [],
        }
    },
    created() {
        this.$store.state.blogs = this.blogs;
        console.log("art "+ this.blogs);
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
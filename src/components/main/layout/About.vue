<template>
    <section id="about" class="container-fluid">
        <div class="row section--padding-top">
            <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <h5 class="about__pre-title section__pre-title">ABOUT US</h5>
            </div>
        </div>
        <div class="row about__row--content">
            <div class="col-lg-3 offset-lg-3 col-md-6 col-sm-12 section--col">
                <h1 class="about__title section__title">We do things differently</h1>
            </div>        
            <div class="col-lg-3 col-md-6 col-sm-12">
                <p class="about__description section__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. 
                    Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. 
                    Quisque convallis pharetra tempor. 
                </p>
            </div>
        </div>
        <div class="row about__row--img">
            <div class="col-md-2 offset-md-2">
                <img class="about__img" v-img src="../../../assets/tolle.jpg" alt="">
            </div>
            <div class="col-md-2">
                <img class="about__img" v-img src="../../../assets/tolle.jpg" alt="">
            </div>
            <div class="col-md-2">
                <img class="about__img" v-img src="../../../assets/tolle.jpg" alt="">
            </div>
            <div class="col-md-2">
                <img class="about__img" v-img src="../../../assets/tolle.jpg" alt="">
            </div>
            <div class="col-md-2">
                <img class="about__img" v-img src="../../../assets/tolle.jpg" alt="">
            </div>
        </div>            
    </section>
</template>

<script>

export default {

}
</script>
<style>
#about {
    background-color: #677077;
    min-height: 100vh;
}
.section--padding-top {
    padding-top: 100px;
}
.about__row--content {
    margin-bottom: 100px;
}
.about__title, .section__title {
    font-family: 'Open Sans', sans-serif;
    font-size: 50px;
    line-height: 1.2;
    font-weight: 800;
    color: #F2F2F2;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
}
.about__pre-title, .section__pre-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: #F2F2F2;
    margin-bottom: 2rem;
}
.about__description, .section__description {
    font-family: 'Crimson Text', serif;
    font-size: 1.4rem;
    line-height: 1.4;
    color: #F2F2F2;
    margin-top: 0.8rem;
    margin-bottom: 2rem;
}
.about__img {
    width: 100%;
}
.section--padding {

}
</style>

<template>
    <section id="about">
        <div class="section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="section--title">ABOUT</h1>
                    </div>
                </div>
                <div class="row section-row">
                    <div class="col-lg-6 col-sm-12 section--col">
                        <h4>Better Layout</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id pretium leo. Pellentesque luctus massa non elit viverra pellentesque. Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem. Vivamus vehicula dignissim augue et scelerisque. Etiam quam nisi, molestie ac dolor in, tincidunt tincidunt arcu. Praesent sed justo finibus, fringilla velit quis, porta erat. Donec blandit metus ut arcu iaculis iaculis.</p>
                    </div>        
                    <div class="col-lg-6 col-sm-12">
                        <img class="section--img" v-img src="../../../assets/tolle.jpg" alt="">
                    </div>
                </div>
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
.section-row {
    margin-top: 80px;
}
.section--title {
    font-family: 'Anton', sans-serif;
    font-size: 40px;
    letter-spacing: 8px;
    color: #b5b5b7;
    max-width: 100%;
    overflow: hidden;
}
.section--img {
    width: 100%;
}
.section--padding {
    padding-top: 100px;
}
</style>

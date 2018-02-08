<template>
    <section id="intro">
        <div class="section--padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 div class="section--title">INTRO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id pretium leo. Pellentesque luctus massa non elit viverra pellentesque. Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem. Vivamus vehicula dignissim augue et scelerisque. Etiam quam nisi, molestie ac dolor in, tincidunt tincidunt arcu. Praesent sed justo finibus, fringilla velit quis, porta erat. Donec blandit metus ut arcu iaculis iaculis.</p>

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
#intro { 
    height: auto !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;

}
.section--title {
    font-family: 'Anton', sans-serif;
    font-size: 40px;
    letter-spacing: 8px;
    color: #b5b5b7;
    max-width: 100%;
    overflow: hidden;
}
.section--padding {
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 144px;
    padding-bottom: 144px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
</style>

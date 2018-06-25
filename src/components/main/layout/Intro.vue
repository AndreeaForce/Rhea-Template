<template>
    <section id="intro" class="container-fluid">
        <img class="img__background--full" src="../../../assets/header6.jpg" alt="full background">
        <div class="intro__text-content">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h5 class="intro__pre-title">Hi there</h5>
                        <h1 div class="intro__title">I am Rhea theme</h1>
                        <hr/>
                    </div>
                    <div class="col-md-6 offset-md-3 section--col">
                        <p class="intro__description">This describes what we do and what is our mission. 
                        At right you cansee the awesome people behind. 
                        Lorem ipsum magicum dolor sit amet,consectetur adipiscing elit. 
                        Maecenas a sem ultrices neque vehiculafermentum a sit amet nulla.</p>
                        <p class="intro__job">WEB DEVELOPER | WEB DESIGNER</p>
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
    }
}
</script>

<style>

hr {
    display: block;
    width: 30px; 
    height: 3px;
    border: 0;
    border-top: 3px solid #f2b632;
    margin: 0;
    padding: 0;
}

#intro {
    position: relative;
    height: 100vh;
    margin: 0 !important;
    padding: 0 !important;
}
.intro__text-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    padding: 0 10px;
    
}
.img__background--full {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
     filter: brightness(.5);
    -webkit-filter: brightness(.5);
}
.row--no-margin {
    margin: 0;
}
.intro__title {
    font-family: 'Open Sans', sans-serif;
    font-size: 70px;
    line-height: 1;
    font-weight: 800;
    color: #F2F2F2;
    margin-bottom: 2rem;
    letter-spacing: 0.2rem;
}
.intro__pre-title {
    font-family: 'Crimson Text', serif;
    font-size: 38px;
    line-height: 1;
    font-style: italic;
    color: #F2F2F2;
}
.intro__description {
    font-family: 'Crimson Text', serif;
    font-size: 22px;
    line-height: 1.4;
    color: #F2F2F2;
    margin-top: 0.8rem;
    margin-bottom: 2rem;
}
.intro__job {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 0.2rem;
    color: #F2F2F2;
}

</style>

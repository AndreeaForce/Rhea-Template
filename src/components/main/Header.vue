<template>
    <div class="navigation fixed-top">
        <nav class="navbar navbar-expand-lg">
            <router-link to="/"><h2 class="nav-brand">RHEA</h2></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#intro" v-smooth-scroll>Intro</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about" v-smooth-scroll>About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services" v-smooth-scroll>Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portofolio" v-smooth-scroll>Portofolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#blog" v-smooth-scroll>Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact" v-smooth-scroll>Contact</a></li>
                </ul><!--navbar-nav end-->
            </div><!--navbar-collapse end-->
        </nav><!--navbar-collapse end-->
    </div><!--navbar end-->
</template>

<script>
    
</script>

<style>
.navigation {
    width: 100%;
    z-index: 1000;
    padding: 15px 30px;
}
.nav-brand {
    font-family: 'Anton', sans-serif;
    letter-spacing: 4px;
    color: #f2b632;
}
.nav-link {
    color: #b5b5b7;
}
.nav-link:hover {
    color: #f2b632;
}
</style>


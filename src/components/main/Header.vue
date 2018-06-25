<template>
    <div class="navigation fixed-top">
        <nav class="navbar navbar-inverse" role="navigation">
            <router-link to="/"><img class="nav-brand" src="../../assets/logo2.png" alt=""></router-link>
            <button @click="links" type="button" class="navbar-toggle plus collapsed" data-toggle="collapse" data-target="#navbarNav">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
            <div class="width collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto w-20" v-scroll-spy-active v-scroll-spy-link>
                    <li v-for="link in navLinks" class="nav-item"><a class="nav-link" v-bind:href="'#' + link.href" v-smooth-scroll>{{link.name}}</a></li>

                </ul><!--navbar-nav end-->
            </div><!--navbar-collapse end-->
        </nav><!--navbar-collapse end-->
    </div><!--navbar end-->
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        navLinks: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        links() {
            console.log(this.navLinks);
        }
    }
}
</script>

<style>
.navigation {
    width: 100%;
    z-index: 1000;
    padding: 50px 100px 0px;
}

/* Header brand logo */
.nav-brand {
    width: 80px;
}

/* Menu nav collapsed */
.navbar-nav {
    height: 100vh;
    background-color: #f2b632;
     scroll-behavior: smooth; 
}
.width {
    position: fixed;
    top: 0;
    right: 0;
}

/* Menu nav links */
.nav-link {
    color: #ffffff;
}
.nav-link:hover {
    color: #f2b632;
}
.nav-item {
    text-align: center;
    padding: 10px 100px;
}
.nav-item:nth-of-type(1) {
    margin-top: 100px;
}

/* Menu button */
.icon-bar {
    display: block;
    width: 30px;
    height: 2px;
    margin-bottom: 6px;
    position: relative;  
    background: #f2f2f2;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
}
.plus {
    background: none;
    border: none;
    z-index: 9999;
}

/* Animated menu button --> plus */
.navbar-toggle.plus.collapsed .icon-bar:nth-of-type(1) {
	transform: translate3d(0,0,0) rotate(0deg);
}

.navbar-toggle.plus.collapsed .icon-bar:nth-of-type(2) {
	transform: translate3d(0,0,0) rotate(0deg);
    width: 22px;
}

.navbar-toggle.plus.collapsed .icon-bar:nth-of-type(3) {
	transform: translate3d(0,0,0) rotate(0deg);
    width: 22px;
}
.navbar-toggle.plus .icon-bar:nth-of-type(1) {
	transform: translate3d(0px,8px,0) rotate(90deg);
	transform-origin: center center;
}

.navbar-toggle.plus .icon-bar:nth-of-type(3) {
	transform: translate3d(0px,-8px,0) rotate(-90deg);
	transform-origin: center center;
}

/* Bootstrap override collapse animation */
.navbar-collapse.collapsing {
    height: auto;
    -webkit-transition: right 0.3s ease;
    -o-transition: right 0.3s ease;
    -moz-transition: right 0.3s ease;
    transition: right 0.3s ease;
    right: -200px;
}
.navbar-collapse.show {
    right: 0;
    -webkit-transition: right 0.5s ease-in;
    -o-transition: right 0.5s ease-in;
    -moz-transition: right 0.5s ease-in;
    transition: right 0.5s ease-in;
}
</style>


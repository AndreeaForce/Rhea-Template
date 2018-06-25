<template>
    <div class="dot-nav" >
        <ul v-scroll-spy-active v-scroll-spy-link>
            <li v-for="(link, index) in navLinks" :key="link.href" class="dot-nav__bullet">
                <a @click="active(index)" 
                    v-bind:class="{ active: isActive === index }"
                    v-bind:href="'#' + link.href" 
                    v-smooth-scroll>
                    <span></span>
                </a>
            </li>

            </ul><!--navbar-nav end-->
        </div><!--navbar-collapse end-->
</template>

<script>
export default {
    data() {
        return {
            isActive: '',
            scrolled: '',
            href: ''
        }
    },
    props: {
        navLinks: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        active(index) {
            this.isActive = index; 
        },
        links() {
            console.log(this.navLinks);
        }
    }
}    
</script>

<style>
.dot-nav {
    position: fixed;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    right: 100px;
}
.dot-nav ul {
    list-style-type: none;
}
.dot-nav__bullet {
    display: block;
    width: 14px;
    height: 14px;
    margin: 7px;
    position: relative;
}
.dot-nav__bullet a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
}
.dot-nav__bullet span {
    height: 4px;
    width: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 100%;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all .1s ease-in-out;
}
.dot-nav__bullet a:hover span {
    height: 10px;
    width: 10px;
    margin: -5px 0 0 -5px;
    transition: all .1s ease-in-out;
}
.dot-nav__bullet a:active span {
    height: 8px;
    width: 8px;
    margin: -4px 0 0 -4px;
}
.active {
    display: block;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 100%;
}
.active span {
    height: 6px;
    width: 6px;
    margin: -3px 0 0 -3px;
}
</style>


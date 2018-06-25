<template>
    <div id="scroll" class="scroll--down">
        <a class="a__scroll--down" href="#about"><div class="span__scroll--down"></div>ABOUT ME</a>
    </div>
</template>

<script>
    
</script>

<style>
.scroll--down {
    position: absolute;
    bottom: -50px;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    left: 50%;
}
.span__scroll--down {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: bounce 1.5s infinite;
    animation: bounce 1.5s infinite;
    box-sizing: border-box;
}
@-webkit-keyframes bounce {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes bounce {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
.a__scroll--down {

    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: opacity .3s;
    padding-top: 70px;
}
.a__scroll--down:hover {
  opacity: .5;
  color: #fff;
  text-decoration: none;
}
</style>


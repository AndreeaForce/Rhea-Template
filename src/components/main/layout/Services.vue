<template>
    <section id="services" class="services">
        <div class="section--padding-top">
            <div class="container-fluid relative">
                <div class="row">
                    <div class="col-lg-6 offset-lg-2 col-md-12 col-sm-12">
                        <h5 class="section__pre-title">SERVICES</h5>
                        <h1 class="section__title">Services Provided</h1>
                        <hr/>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 offset-lg-2 col-md-12 col-sm-12">
                        <p class="section__description">Collaboratively synergize holistic e-commerce and enabled e-commerce. 
                            Conveniently scale optimal action items via professional metrics. 
                            Energistically implement B2B total linkage via process-centric vortals. 
                            Quickly monetize client-centered e-markets.
                            Collaboratively synergize holistic e-commerce and enabled e-commerce. 
                            Conveniently scale optimal action items via professional metrics. 
                            Energistically implement B2B total linkage via process-centric vortals. 
                            Quickly monetize client-centered e-markets
                            Energistically implement B2B total linkage via process-centric vortals. 
                            Quickly monetize client-centered e-markets.
                            Collaboratively synergize holistic e-commerce and enabled e-commerce. 
                            Conveniently scale optimal action items via professional metrics. 
                            Energistically implement B2B total linkage via process-centric vortals. 
                            Quickly monetize client-centered e-markets
                        </p>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 services--padding">
                        <div class="container-fluid services__boxes no-padding">
                            <div class="row no-margin">
                                <div class="col-sm-6 services-box services-box--b-right services-box--r-down">
                                        <i class="fa fa-desktop"></i>
                                        <p class="services-box__p">Web Design</p> 
                                </div>
                                <div class="col-sm-6 services-box">
                                        <i class="fa fa-lightbulb-o"></i>
                                        <p class="services-box__p">Branding</p>
                                </div>
                            </div>
                            <div class="row no-margin">
                                <div class="col-sm-6 services-box services-box--b-right services-box--r-down">
                                        <i class="fa fa-video-camera"></i>
                                        <p class="services-box__p">Motion Graphics</p>
                                </div>
                                <div class="col-sm-6 services-box services-box--t-right services-box-l-up">
                                        <i class="fa fa-paint-brush"></i>
                                        <p class="services-box__p">Illustration</p>
                                </div>
                            </div>
                            <div class="row no-margin">
                                <div class="col-sm-6 services-box">
                                        <i class="fa fa-camera"></i>
                                        <p class="services-box__p">Photography</p>
                                    
                                </div>
                                <div class="col-sm-6 services-box services-box--t-right services-box-l-up">
                                        <i class="fa fa-gear"></i>
                                        <p class="services-box__p">Strategy</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="services__img">
                    <img  src="../../../assets/header5.jpg" alt="">
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
.services {
    min-height: 100vh;
}
.relative {
    position: relative;
}
.services__img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -90;
    width: 33.33%;
    height: 100vh;
}
.services__img img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 80vh;
}
.services-box:hover  {
    background-color: #f2b632;
}
.services-box:hover .services-box__p {
    opacity: 1;
}
.services-box:hover .fa {
    font-size: 3.5rem;
    color: #4D5459;
}
.services-box {
    padding: 90px;
    text-align: center;
    background-color: #4D5459;
}
.services-box__p {
    position: absolute;
    top: 80%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -20%);
    opacity: 0;
    color: #4D5459;
    font-family: 'Crimson Text', serif;
    font-size: 1rem;
    line-height: 1;
    font-style: italic;
}
.services--padding {
    padding: 0 60px;
}
.no-padding {
    padding: 0;
}
.no-margin {
    margin: 0;
}
.services__box--left-border {
    text-align: center;
    
}
.services-box--b-right:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: 50%;
    opacity: 0.2;
}
.services-box--r-down:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;
    height: 50%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    opacity: 0.2;
    width: 1px;
}
.services-box--t-right:before {
    content: "";
    position: absolute;
    left: -2px;
    top: 0;
    border: 0;
    height: 50%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    opacity: 0.2;
    width: 1px;
}
.services-box-l-up:after {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    border: 0;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    opacity: 0.2;
    width: 50%;
}

.fa {
    color: #83898f;
    font-size: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
</style>
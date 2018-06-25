<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <div class="row row--no-margin">
        <header class="modal-header col-lg-12" id="modalTitle"><!-- START header -->
            <div class="row row--no-margin">
                <slot name="header">
                
                </slot>
                <div class="col-lg-6 col-sm-6">
                    <button
                        type="button"
                        class="btn-close btn--right"
                        @click="closeProjectsModal"
                        aria-label="Close modal">
                        x
                    </button>
                </div>
            </div>
        </header><!-- END header -->
        </div>
        <div class="row row--no-margin">
            <div class="col-lg-1">
                <span class="">
                    <i class="modal__nav--left fa fa-angle-left">
                    </i>
                </span>
            </div>
            <section class="modal-body col-lg-6" id="modalDescription">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <slot name="body">
            
                            </slot>
                        </div>
                        <div class="carousel-item">
                            <slot name="body2">
            
                            </slot>
                        </div>
                        <div class="carousel-item">
                            <slot name="body3">
            
                            </slot>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <ul class="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                    </ul>
                </div>
                
                
            </section><!-- END section body -->
            <section class="modal-about col-lg-4"><!-- START section about -->
                <slot name="about">

                </slot>
            </section><!-- END section about -->
            <div class="col-lg-1">
                <span class="">
                    <i class="modal__nav--right fa fa-angle-right"></i>
                </span>
            </div>

            <footer class="modal-footer col-lg-12"><!-- START footer -->
              <slot name="footer">
                I'm the default footer!
                <button
                  type="button"
                  class="btn-green"
                  @click="closeProjectsModal"
                  aria-label="Close modal">
                  Close me!
                </button>
              </slot>
            </footer><!-- END footer -->
            
        </div><!-- END row -->
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'modal',
    methods: {
      closeProjectsModal() {
        this.$emit('closeTheProjectsModal');
      },
    },
  };
</script>
<style>
.row--no-margin {
    margin: 0;
}
.modal__nav--left, .modal__nav--right {
    cursor: pointer;
    font-size: 1.2rem;
}
.modal__nav--left {
    left: 40%;
}
.modal__nav--right {
    left: 60%;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  align-items: center;
  justify-content: center;
}
 .modal {
  position: relative;
  background: #FFFFFF;
  overflow-x: auto;
  display: block;
  margin: 50px auto;
  min-height: 90vh;
  padding: 0;
}

 .modal-header,
.modal-footer {
  padding: 20px;
  display: block;
}

 .modal-header {
  border-bottom: none;
  color: #f2b632;
  justify-content: space-between;
}
.modal-header__title {
    padding: 0;
}
.modal-header__h3 {
    margin: 0;
    padding: 50px 90px;
}
.modal-about {
    background-color: #f3f3f3;
    padding: 60px;
}
 .modal-footer {
  border-top: none;
}

 .modal-body {
  position: relative;
  padding: 20px;
  max-height: 50vh;
}

 .btn-close {
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #f2b632;
  background: transparent;
}

 .btn-green {
  color: white;
  background: #f2b632;
  border: 1px solid #f2b632;
  border-radius: 2px;
}
</style>
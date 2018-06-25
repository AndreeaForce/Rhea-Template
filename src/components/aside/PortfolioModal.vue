<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">

        <header class="row row--no-margin" id="modalTitle">
            <slot name="header">
                //description content goes here
            </slot>
            <div class="col-lg-1 col-sm-1 col-1">
                <button
                    type="button"
                    class="btn-close btn--right"
                    @click="closeModal"
                    aria-label="Close modal">
                    x
                </button>
            </div>
        </header>   
        <div class="row">
            <div class="col-lg-1">
                <span class="">
                    <i class="modal__nav--left fa fa-angle-left">
                    </i>
                </span>
            </div>
            <section class="modal-body col-lg-10" id="modalDescription">
                <slot name="body">
                    // image content goes here
                </slot>  
            </section><!-- END section body -->
            <div class="col-lg-1">
                <span class="">
                    <i class="modal__nav--right fa fa-angle-right"></i>
                </span>
            </div>
        </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'modal',
    methods: {
      closeModal() {
        this.$emit('closeTheModal');
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
    padding: 0;
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
    padding: 10px;
    text-align: center;
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
    max-height: 100vh;
    padding: 0;
}
#modalTitle {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
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
<template>
        <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container w-75">

          <div class="modal-header">
            <slot name="header">
               
              <button type="button" class="close close_btn" @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
              </button>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              
            </slot>
          </div>

          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'modal',
    props: ['modal']
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 0.7);
  
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}



.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>

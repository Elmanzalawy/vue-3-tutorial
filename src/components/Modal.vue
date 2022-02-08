<template>
<div class="backdrop" @click.self="closeModal">
  <div class="modal" :class="{ sale: theme === 'sale'}">
    <h1>{{ header }}</h1>
    <p>{{ text }}</p>
    <slot></slot>
    <div class="actions">
      <slot name="links"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    header: String,
    text: String,
    theme: String,
  },
  methods:{
    closeModal(){
      // emit closeModal event
      this.$emit('closeModal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: rgb(8, 184, 125);
}
.modal{
  width: 400px;
  padding:20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop{
  top:0;
  position: fixed;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
}
.sale{
  background: crimson;
  color: white;
}
.modal.sale h1{
  color: white;
}
</style>

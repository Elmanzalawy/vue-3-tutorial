<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick()">Click Me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal :header="modalHeader" :text="modalText" theme="sale" @closeModal="toggleModal">
      <p>This is a slot component.</p>
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>

  <teleport to=".modals" v-if="showModalTwo">
    <!--second modal challenge -->
    <Modal header="modal header 2" text="modal text 2" theme="sale" @closeModal="toggleModalTwo">
      <p>This is a slot component.</p>
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">More Info</a>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  data(){
    return { 
      title:"My First Vue App",
      modalHeader: "Model Header",
      modalText: "Modal Text",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    handleClick() {
      // console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  },
  components: {
    Modal
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
}
</style>

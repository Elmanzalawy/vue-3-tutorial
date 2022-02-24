<template>
<SignupForm/>
</template>

<script>
import SignupForm from './components/SignupForm.vue'
export default {
  name: 'App',
  data(){
    return { 

    }
  },
  methods: {

  },
  components: {
    SignupForm
  }
}
</script>

<style>
body{
  background: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
}
</style>

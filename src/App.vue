<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="showResult"/>
  <Results v-if="score" :score="score"/>
</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"
export default {
  name: 'App',
  components: { Block, Results },
  data(){
    return { 
      isPlaying: false,
      delay: null,
      score: null,
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000 // between 2 and 7 seconds
      this.isPlaying = true
      this.score = null
      // console.log(this.delay)
    },
    showResult(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
    }
  },

}
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}

</style>

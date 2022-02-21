<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      Click Me!
  </div>
</template>

<script>
export default {
    props: {
        delay: Number,
    },
    data(){
        return {
            showBlock : false,
            time : null,
            reactionTime : 0,
        }
    },
    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10 //10 ms precision
            }, 10)
        },
        stopTimer(){
            clearInterval(this.timer) //stop interval
            this.$emit('end', this.reactionTime)
        }
    },
    mounted(){
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay);
    },
    updated(){
        console.log('component updated')
    },
    unmounted(){
        console.log('unmounted')
    }
}
</script>

<style>
.block{
    width:400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>
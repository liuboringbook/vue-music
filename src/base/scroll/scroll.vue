<template lang="html">
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
   import BScroll from 'better-scroll'
   export default {
     props: {
       probeType: {
         type: Number,
         default: 1
       },
       click: {
         type: Boolean,
         default: true
       },
       data: {
         type: Array,
         default: null
       },
       listenScroll: { //是否监听滚动事件
         type: Boolean,
         default: false
       },

     },
     mounted() {
       setTimeout(()=>{
         this._initScroll()
       },20)
     },
     methods: {
       _initScroll(){
          if(!this.$refs.wrapper) {
            return
          }
          this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType,
            click: this.click
          })
         if(this.listenScroll){
           let me = this
           this.scroll.on('scroll',(pos)=>{
             me.$emit('scroll',pos)
           })
         }
       },
       //作用：启用 better-scroll, 默认 开启。
       enable(){
         this.scroll && this.scroll.enable()
       },
       //作用：禁用 better-scroll，DOM 事件（如 touchstart、touchmove、touchend）的回调函数不再响应。
       disable(){
         this.scroll && this.scroll.disable()
       },
       //作用：重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
       refresh(){
         this.scroll && this.scroll.refresh()
       },
       //跳转到页面元素
       scrollToElement() {
         this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
       }
     },
     watch: {
       data(){
         setTimeout(() =>{
           this.refresh()
         },20)
       }
     }
   }
</script>
<style>
</style>

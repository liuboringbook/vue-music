<template>
  <div class="recommend">
    <div class="slider-wrapper" v-if="recommends.length">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Slider from '@/base/slider/slider'
import {getRecommend,getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  data(){
    return {
      recommends:[]
    }
  },
  created(){
    this._getCommend();
    this._getDiscList();
  },
  methods:{
    _getCommend(){
      getRecommend().then((res) =>{
        if(res.code === ERR_OK){
          this.recommends = res.data.slider;
          console.log(this.recommends)
        }
      })
    },
    _getDiscList(){
      getDiscList().then((res)=>{
        if(res.code === ERR_OK){
          console.log(res)
        }
      })
    }
  },
  components: {
    Slider
  }
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%;
    top: 88px
    bottom: 0
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden

</style>

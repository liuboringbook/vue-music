<template>
  <div class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="disList">
      <div>
        <div class="slider-wrapper" v-if="recommends.length">
          <slider>
            <div v-for="item in recommends">
              <a :href="item.linkUrl">
                <img :src="item.picUrl"  @load="loadImage" class="needsclick">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in disList" class="item" @click="selectItem(item)">
              <div class="icon">
                <img  v-lazy="item.imgurl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!disList.length">
        <loading>
        </loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Loading from 'base/loading/loading'
  import Scroll from 'base/scroll/scroll'
  import Slider from '@/base/slider/slider'
  import {getRecommend,getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {mapMutations} from 'vuex'

  export default {
    data(){
      return {
        recommends:[],
        disList:[]
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
      selectItem(item){
        this.$router.push({
          path: `/recommend/${item.dissid}`
        })
        this.setDisc(item)
      },
      _getDiscList(){
        getDiscList().then((res) =>{
          if(res.code === ERR_OK){
            this.disList = res.data.list
          }
        })
      },
      loadImage(){
        if(!this.checkLoaded){
          this.$refs.scroll.refresh();
          this.checkLoaded =true
        }
      }
    },
    ...mapMutations({
      setDisc: 'SET_DISC'
    }),
    components: {
      Slider,
      Scroll,
      Loading
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
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align:center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
</style>

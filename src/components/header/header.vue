<template>
  <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" width="64" height="64">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description + '/' + seller.deliveryTime + '分钟送达'}}
          </div>
          <div class="supports" v-if="seller.supports">
            <div class="supports_desc">
              <span class="icon" :class="iconClassMap[seller.supports[0].type]"></span>
              <span class="text">{{seller.supports[0].description}}</span>
            </div>
          </div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="showDetails()">
            <span class="count">{{seller.supports.length+'个'}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="showDetails()">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%"/>
      </div>
      <transition>
        <div v-if="detailShow" class="detail">
          <div class="detail-wrapper clearfix">
              <div class="detail-main">
                <h1 class="name">{{seller.name}}</h1>
                <!-- <yd-cell-item> -->
                    <yd-rate slot="left" v-model="rate" active-color="#ff9900" :readonly="true"></yd-rate>
                <!-- </yd-cell-item> -->
                <div class="title">
                  <div class="line"> </div>
                  <div class="text">优惠信息</div>
                  <div class="line"></div>
                </div>
                <ul v-if="seller.supports" class="supports">
                  <li class="support-item" v-for="item in seller.supports">
                    <span class="icon" :class="iconClassMap[item.type]"></span>
                    <span class="text">{{item.description}}</span>
                  </li>
                </ul>
                <div class="title">
                  <div class="line"> </div>
                  <div class="text">商家公告</div>
                  <div class="line"></div>
                </div>
                <div class="bulletin">{{seller.bulletin}}</div>
              </div>
          </div>
          <div class="detail-close">
            <i class="icon-close" @click="hideDetail()"></i>
          </div>
        </div>
      </transition>
  </div>
</template>
<script>
import star from '../../components/star/star'
export default {
  props:{
    seller:{
      type: Object
    }
  },
  created(){
    this.iconClassMap=['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components:{
    star
  },
  data() {
    return {
      detailShow: false,
      rate:4
    }
  },
  methods: {
    showDetails() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  }
}
</script>
<style>
  .header{
    position: relative;
    background: rgba(7,17,27,0.5);
    color:#fff;
    blur:10px;
    overflow: hidden;
  }
  .content-wrapper{
    padding: 24px 12px 18px 24px;
    position: relative;
    display: flex;
    font-size:12px;
  }
  .avatar img{
    border-radius: 2px;
  }
  .content{
    margin-left: 16px;
  }
  .content .title{
    margin: 2px 0 8px 0;
    font-size: 16px;
  }
  .content .title .brand{
    display:inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image:url('img/brand@2x.png');
    background-size:30px 18px;
    background-repeat: no-repeat;
  }
  .content .title .name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
  .content .description{
    font-size: 12px;
    margin-bottom:10px;
  }
  .content .supports .icon{
    display:inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right:4px;
    background-size:12px 12px;
    background-repeat:no-repeat;
  }
  .content .supports .decrease{
    background-image: url('img/decrease_1@2x.png');
  }
  .content .supports .discount{
    background-image: url('img/discount_1@2x.png');
  }
  .content .supports .guarantee{
    background-image: url('img/guarantee_1@2x.png');
  }
  .content .supports .invoice{
    background-image: url('img/invoice_1@2x.png');
  }
   .content .supports .special{
    background-image: url('img/special_1@2x.png');
  }
  .content .supports .text{
    line-height: 12px;
    font-size: 10px;
  }
  .support-count{
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background-color: rgba(0,0,0,0.2);
    text-align:center;
  }
  .support-count .count{
    vertical-align: top;
    font-size: 10px;    
  }
  .support-count .icon-keyboard_arrow_right{
    font-size: 10px;
    margin-left:10px;
    line-height: 24px;
  }
  .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height:28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background:rgba(7,17,27,0.2);
  }
  .bulletin-wrapper .bulletin-title{
    display: inline-block;
    vertical-align: top;
    margin-top:8px;
    width:22px;
    height: 12px;
    background-image: url('img/bulletin@2x.png');
    background-size:100% 100%;
    background-repeat:no-repeat;
  }
  .bulletin-wrapper .bulletin-text{
    font-size: 10px;
    vertical-align: middle;
    margin:0 4px;
  }
  .bulletin-wrapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 8px;
  }
  .background{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: -1;
  }
  .background img{
    object-fit:cover;
  }
  .detail{
    position: fixed;
    top: 0;
    left:0;
    z-index:100;
    width:100%;
    height: 100%;
    background:rgba(7,17,27,0.8);
    backdrop-filter:blur(10px);
  }
  .detail .detail-wrapper{
    min-height:100%;
    width:100%;
  }
  .detail .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom:64px;
  }
  .detail .detail-wrapper .detail-main .name{
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    color: rgb(255,255,255);
    line-height: 16px;
    text-align:center;
  }
  .detail .detail-wrapper .detail-main .star-wrapper{
    margin: 16px 11px 28px 0;
    text-align: center;
  }
  .detail .detail-wrapper .detail-main>.title{
    display: flex;
    width: 80%;
    margin:0 auto 24px auto;
  }
  .detail .detail-wrapper .detail-main>.title>.line{
    display: inline-block;
    flex:1;
    height: 1px;
    background:rgba(255,255,255,0.2);
    margin:auto;
  }
  .detail .detail-wrapper .detail-main>.title>.text{
    padding: 0 12px;
    font-size:14px;
    font-weight:700;
  }
  .detail .detail-wrapper .detail-main .supports{
    padding: 0 0 28px 36px;
  }
  .detail .detail-wrapper .detail-main .supports .support-item{
    color:white;
    padding: 0 6px 12px 16px;
  }
  .detail .detail-wrapper .detail-main .supports .support-item .text{
    vertical-align: middle;
    font-size:12px;
    font-weight:200;
    color: #fff;
    line-height:12px;
  }
  .detail .detail-wrapper .detail-main .supports .support-item .icon{
    display:inline-block;
    vertical-align: top;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    background-size:100% 100%;
    background-repeat:no-repeat;
  }
  .detail .detail-wrapper .detail-main .supports .support-item .decrease{
      background-image:url('img/decrease_2@2x.png'); 
  }
  .detail .detail-wrapper .detail-main .supports .support-item .discount{
      background-image:url('img/discount_2@2x.png'); 
  }
  .detail .detail-wrapper .detail-main .supports .support-item .guarantee{
      background-image:url('img/guarantee_2@2x.png'); 
  }
  .detail .detail-wrapper .detail-main .supports .support-item .invoice{
      background-image:url('img/invoice_2@2x.png'); 
  }
  .detail .detail-wrapper .detail-main .supports .support-item .special{
      background-image:url('img/special_2@2x.png'); 
  }
  .detail .detail-wrapper .detail-main .bulletin{
    padding:0 48px;
    font-size:12px;
    font-weight:200;
    color:#fff;
    line-height:24px;
  }
  .detail .detail-close{
    position: relative;
    width:32px;
    height: 32px;
    margin:-64px auto 0 auto;
    clear: both;
    font-size: 32px;
    color:rgba(255,255,255,0.5);
  }
  .fade-enter-active, .fade-leave-active{
    transition:opacity 0.5s;
  }
  .fade-enter, .fade-leave-active{
    opacity:0;
  }
  .yd-rate{
    justify-content: center;
  }
  @media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
    .content .title .brand{
      background-image:url('img/brand@3x.png'); 
    }     
    .content .supports .decrease{
      background-image: url('img/decrease_1@3x.png');
    }
    .content .supports .discount{
      background-image: url('img/discount_1@3x.png');
    }
    .content .supports .guarantee{
      background-image: url('img/guarantee_1@3x.png');
    }
    .content .supports .invoice{
      background-image: url('img/invoice_1@3x.png');
    }
    .content .supports .special{
      background-image: url('img/special_1@3x.png');
    }  
    .bulletin-wrapper .bulletin-title{
      background-image: url('img/bulletin@3x.png');      
    }
    .detail .detail-wrapper .detail-main .supports .support-item .decrease{
        background-image:url('img/decrease_2@3x.png'); 
    }
    .detail .detail-wrapper .detail-main .supports .support-item .discount{
        background-image:url('img/discount_2@3x.png'); 
    }
    .detail .detail-wrapper .detail-main .supports .support-item .guarantee{
        background-image:url('img/guarantee_2@3x.png'); 
    }
    .detail .detail-wrapper .detail-main .supports .support-item .invoice{
        background-image:url('img/invoice_2@3x.png'); 
    }
    .detail .detail-wrapper .detail-main .supports .support-item .special{
        background-image:url('img/special_2@3x.png'); 
    }
  }
</style>

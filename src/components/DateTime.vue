<template>
<div class="Date">
  
        <span class="badge badge-pill badge-danger">答题倒计时:{{h}}:{{m}}:{{s}}</span>
       
     
    </div>
        
</template>
<script>

export default {
  name: 'Date',

  data() {
    return {
      d: '',
      h: '',
      m: '',
      s: '',
      times:180000,
    }
  },
  created() {
    this.countTime()
  },
  methods: {
    countTime: function() {
      //获取当前时间
    //   var date = new Date()
    //   var now = date.getTime()
    //   //设置截止时间
    //   var endDate = new Date('2020-09-29 15:52:23')
    //   var end = endDate.getTime()

      //时间差
    //   var leftTime = end - now
    var leftTime = this.times
    this.times-=1000;
    if(this.times<0){
        let a =alert('答题超时，请重新答题');
        
        
           this.$router.push('/');
        //    this.times =9000;
        
    }
      console.log(leftTime)
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24)//天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24)
        this.m = Math.floor((leftTime / 1000 / 60) % 60)
        this.s = Math.floor((leftTime / 1000) % 60)
      }
    //   console.log(this.s)
      //递归每秒调用countTime方法，显示动态时间效果
      if(this.times>-1){
          setTimeout(this.countTime, 1000)
      }

      
      
    },
  },
}
</script>
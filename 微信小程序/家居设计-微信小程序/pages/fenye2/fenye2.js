
//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    liuyanarry: [
      {
        lytx: '../../images/style1.png',
        lyname: '天天',
        lycontent: '大家来分享一下家装style？',
        time: '2017/07/21 11:50:02'
      },
      {
        lytx: '../../images/style1.png',
        lyname: '林总',
        lycontent: '装修风格就是6',
        time: '2017/07/21 11:50:02'
      },
      {
        lytx: '../../images/style4.png',
        lyname: '最美的YOU',
        lycontent: '最近有没有新款式？',
        time: '2017/07/18 06:16:50'
      },
      {
        lytx: '../../images/style3.png',
        lyname: '空空',
        lycontent: '有没有中国古朴风？',
        time: '2017/07/15 11:26:45'
      },
      {
        lytx: '../../images/style2.png',
        lyname: '嘻嘻哈哈',
        lycontent: '打算来一波',
        time: '2017/07/12 16:42:23'
      }


    ],
    textbtn: 'noactive',
    lyvalue: ''




  },

  // bindMessage:function(e){
  //   this.setData({
  //     inputValue: e.detail.value
  //   })
  //   // console.log()
  // },
  // sendMessage:function(e){
  //   var that=this;
  //   app.getUserInfo(function (userInfo) {
  //     //更新数据
  //     that.setData({
  //       userInfo: userInfo,
  //       sendMessage: that.data.inputValue
  //     })
  //   })
  // },
  //事件处理函数
  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },

  bindFormSubmit: function (e) {
    var mylyarry = [{}];
    // var myly = ;
    var time = util.formatTime(new Date());
    console.log(e)
    if (e.detail.value.textarea != "") {
      mylyarry[0].lycontent = e.detail.value.textarea;
      mylyarry[0].time = time;
      this.data.liuyanarry = mylyarry.concat(this.data.liuyanarry);
      this.setData({
        liuyanarry: this.data.liuyanarry,
        textbtn: 'noactive'
      })
    }
    console.log(this.data.liuyanarry)
    this.setData({
      lyvalue: ''
    })



  },
  // 点击输入框展开
  textareaclick: function (e) {
    console.log(this)
    // let that=this;
    this.setData({
      textbtn: 'active'

    })

    console.log(55555555)

  },

  // BlurClick: function (e) {
  //   console.log(11);
  //   this.setData({
  //     textbtn: 'unable'
  //   })
  // },

  onLoad: function () {
    // console.log('onLoad')
    var that = this
    // //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //   //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
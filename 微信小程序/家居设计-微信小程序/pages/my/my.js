
//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  Addshopping:function(e){
    wx.navigateTo({
      url: '../gouwuche/gouwuche',
    })
  },
  Addvip:function(e){
    wx.showModal({
      title: '会员卡',
      content: 'sorry,您还没有会员卡',
    })
  },
  Addmoney:function(e){
    wx.navigateTo({
      url: '../money/money',
    })
  },
  Addscores:function(e){
    wx.showModal({
      title: '积分',
      content: '当前没有积分，购物可换取积分',
    })
  },
  myDingdan:function(e){
    wx.showModal({
      title: '订单详情',
      content: '您当前还没有订单，立即购物',
    })
  },
  Addaddress:function(e){
    wx.navigateTo({
      url: '../address/address',
    })
  }
 
})
// book.js
Page({
  name:function(e){
  var that=this;
  that.setData({
    name : e.detail.value
  })
},
  iphone:function(e){
    var that=this;
    
    
    that.setData({
      iphone:e.detail.value
    })
  
  },
  adderess:function(e){
    var that=this;
    that.setData({
      adderess:e.detail.value
    })
  },
  formSubimt:function(e){
    var that=this;
    var result = /0?(13|14|15|18)[0-9]{9}/;
    var Iphone = that.data.iphone;
    if (result.test(Iphone) == false) {
      wx.showToast({
        title: '请输入正确的电话号码',
        duration: 2000,
        mask: true
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
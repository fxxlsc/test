// pages/allorders/allorders.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    orderlist:[]
  },
  goods(e) {
    var a = this.data.orderlist[e.target.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'orders',
      success: function(res) {
        var a = that.data.orderlist;
        a.push(res.data)
        that.setData({ orderlist:a[0]})
      },
      fail:function(){
        that.setData({orderlist:that.data.orderlist})
      }
    })
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
    wx.stopPullDownRefresh()
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
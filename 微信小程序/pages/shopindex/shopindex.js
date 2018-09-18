// pages/shopindex/shopindex.js
import list from "../../list/huodonglist"
Page({
  /**
   * 页面的初始数据
   */
  
  data: {    
    banner:list.banner ,
    tuijianlist: list.tuijianlist ,
    cunlist:list.cunlist,
    xialist:list.xialist,
    qiulist:list.qiulist,
    donglist:list.donglist
  },
  goods1(e){
    var a = this.data.cunlist[e.target.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
  },
  goods2(e) {
    var a = this.data.xialist[e.target.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
  },
  goods3(e) {
    var a = this.data.qiulist[e.target.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
  },
  goods4(e) {
    var a = this.data.donglist[e.target.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
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
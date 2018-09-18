// pages/personal/personal.js
import list from "../../list/huodonglist"
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    userimg:'',
    username:'',
    goodslist:list.userjoinlist
  },
  goods(e) {
    var a = this.data.goodslist[e.currentTarget.dataset.index];
    wx.setStorageSync('goods', a)
    wx.navigateTo({
      url: '../good/good',
    })
  },
  allorder(){
    wx.navigateTo({
      url: '../allorders/allorders',
    })
  },
  maijilu(){
    wx.navigateTo({
      url: './../goumai/goumai',
    })
  },
  shouchang(){
    wx.navigateTo({
      url: './../shouchang/shouchang',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success:function(res){
        console.log(res);
        that.setData({userimg: res.userInfo.avatarUrl})
        that.setData({username: res.userInfo.nickName})
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
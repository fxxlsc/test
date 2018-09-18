// pages/shouchang/shouchang.js
import list from "../../list/huodonglist"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shouchanglist:[]
  },
  goods(e) {
    var a = this.data.shouchanglist[e.currentTarget.dataset.index];
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
      key: 'shouchang',
      success: function (res) {
        var a = that.data.shouchanglist;
        a.push(res.data)
        console.log(a[0]);
        if(typeof a[0]=='object'){
          that.setData({ shouchanglist: a[0] })
        }else{
          that.setData({ shouchanglist: a })
        }
       
      },
      fail: function () {
        that.setData({ shouchanglist: that.data.shoucahnglist })
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
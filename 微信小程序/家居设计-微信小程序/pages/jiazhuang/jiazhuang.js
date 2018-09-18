// jiazhuang.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
arr:[{
  title:"新家， 全新的开始",
  src:"../../images/tip1.jpg"
},{
    title: "设计师的秘诀： 浴室用架展示",
    src: "../../images/tip2.jpg"
},{
    title: "灵活工作： 放上一张门厅办工桌",
    src: "../../images/tip3.jpg"
}
]
  },
  listClick: function (e) {
    var TipId = e.currentTarget.id;
    console.log(TipId)
    wx.navigateTo({
      url: '../jiazhuangTip/jiazhuangTip?id=' + TipId
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
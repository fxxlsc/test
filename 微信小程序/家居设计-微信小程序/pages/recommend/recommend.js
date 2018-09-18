// recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.title);
    var itemId = parseInt(options.id);
    console.log(options.id);
    if (itemId == 0) {
      this.setData({
        textW: 
      "从业8年后成立云想衣裳室内设计工作室"+
      "从业时间: 12年以上"+
      "设计擅长: 公寓 别墅"+
      "设计风格: 现代简约、新中式、美式"+
      "座右铭: 磨合个性家居"+
      "设计心语: 设计可以将生活艺术化，而设计师的作用却是如何将艺术生活化。",
        src3: "../../images/style2.png",
        src1: "../../images/recommend3.png",
        src2: "../../images/recommend4.png"
      })
    }
    if (itemId == 1) {
      this.setData({
        textW:
      "从业8年后成立云想衣裳室内设计工作室"+
      "从业时间: 12年以上"+
      "设计擅长: 公寓 别墅"+
      "擅长风格： 现代简约、田园风格、新中式、欧式、新古典"+
      "座右铭: 磨合个性家居"+
      "设计心语：优质生活从设计开始 设计心语：设计不是花里胡哨，而是细致、标致、精致——让您住在“家”",
        src3: "../../images/style3.png",
        src1: "../../images/recommend5.png",
        src2:""
      })
    }
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
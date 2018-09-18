// shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/banner1.png',
      '../../images/banner2.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor: "	#F8F8FF",
    indicatoractiveColor: "rgba(0, 0, 0, .3)",

    arr: [{
      id: "1",
      title: "预约装修",
      src: "../../images/book.png",
    }, {
      id: "2",
      title: "设计师",
      src: "../../images/desgin.png"
    }, {
      id: "3",
      title: "优惠券",
      src: "../../images/money.png"
    }, {
      id: "4",
      title: "公司介绍",
      src: "../../images/company.png"
    }
    ],
    arr2: [{
      title: "简约工业风格loft公寓",
      titleo: "#极简# #工业风# #公寓#",
      src: "../../images/case1.png"

    }, {
      title: "橡树湾 简约时尚家居",
      titleo: "#极简# #现代#  #简约# #大气#",
      src: "../../images/case2.png"
    }
    ],
    arr3: [{
      title: "Json",
      titleo: "资深设计师",
      titlet: "设计经验：9年  签单数：89个",
      titleth: "个人介绍：设计可以将生活艺术化，而设计师的作用却是如何将艺术生活化。",
      src: "../../images/stylename2.png"

    }, {
      title: "Jack",
      titleo: "资深设计师",
      titlet: "设计经验：5年  签单数：89个",
      titleth: "个人介绍：设计可以将生活艺术化，而设计师的作用却是如何将艺术生活化。",
      src: "../../images/stylename1.png"
    }
    ],


  },
  listClick: function (e) {
    var yem = ["../book/book", "../desgin/desgin", "../money/money", "../company/company"]
    // console.log(e);
    var p = e.currentTarget.id;
    // console.log(p);
    wx.navigateTo({
      url: yem[p]
    })

  },
  listClicko: function (e) {
    var p1 = e.currentTarget.id;
    wx.navigateTo({
      url: '../case/case?id='+p1
    })
    
  },
  listCilckt: function (e) {
    var p2 = e.currentTarget.id;
    wx.navigateTo({
      url: '../recommend/recommend?id=' + p2
    })

  },
  listClickh: function (e) {
    var p3 = e.currentTarget.id;
    var fenye = ["../fenye2/fenye2", "../fenye1/fenye1"]
    wx.navigateTo({
      url: fenye[p3]
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
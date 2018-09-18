// tiemai.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    arr: [{
      id: 1,
      title: "法格里克 餐具18件, 深青绿色",
      price: "149.00",
      src: "../../images/product1.jpg",
    }, {
      id: 2,
      title: "罗森斯塔 桑蚕丝被, 春, 秋天",
      price: "399.00",
      src: "../../images/product2.jpg"
    }, {
      id: 3,
      title: "格尔利 休闲毯, 灰绿色",
      price: "79.00",
      src: "../../images/product3.jpg"
    }, {
      id: 4,
      title: "IKEA PS 2017 转角休闲椅..",
      price: "1499.00",
      src: "../../images/product4.jpg"

    }, {
      id: 5,
      title: "米克 转角工作台, 黑褐色",
      price: "1499.00",
      src: "../../images/product5.jpg"
    }, {
      id: 6,
      title: "IKEA PS 2017 摇椅",
      price: "2499.00",
      src: "../../images/product6.jpg"
    }, {
      id: 7,
      title: "延宁 酒吧凳, 白色",
      price: "799.00",
      src: "../../images/product7.jpg"
    }
    ]
  },
  changeProductt: function (e) {
    this.setData({
      arr: [{
        title: "法格里克 餐具18件, 深青绿色",
        price: "149.00",
        src: "../../images/product1.jpg",
      }, {
        title: "罗森斯塔 桑蚕丝被, 春, 秋天",
        price: "399.00",
        src: "../../images/product2.jpg"
      }, {
        title: "格尔利 休闲毯, 灰绿色",
        price: "79.00",
        src: "../../images/product3.jpg"
      }, {
        title: "IKEA PS 2017 转角休闲椅..",
        price: "1499.00",
        src: "../../images/product4.jpg"

      }, {
        title: "米克 转角工作台, 黑褐色",
        price: "1499.00",
        src: "../../images/product5.jpg"
      }, {
        title: "IKEA PS 2017 摇椅",
        price: "2499.00",
        src: "../../images/product6.jpg"
      }, {
        title: "延宁 酒吧凳, 白色",
        price: "799.00",
        src: "../../images/product7.jpg"
      }
      ]

    })
  },

  changeProduct: function (e) {
    this.setData({
      arr: [{
        title: "IKEA PS 2017 转角休闲椅..",
        price: "1499.00",
        src: "../../images/product4.jpg"
      }, {
        title: "米克 转角工作台, 黑褐色",
        price: "1499.00",
        src: "../../images/product5.jpg"
      }, {
        title: "IKEA PS 2017 摇椅",
        price: "2499.00",
        src: "../../images/product6.jpg"
      }, {
        title: "延宁 酒吧凳, 白色",
        price: "799.00",
        src: "../../images/product7.jpg"
      }
      ]
    })
  },
  changeProducto: function (e) {
    this.setData({
      arr: [{
        title: "罗森斯塔 桑蚕丝被, 春, 秋天",
        price: "399.00",
        src: "../../images/product2.jpg"
      }, {
        title: "格尔利 休闲毯, 灰绿色",
        price: "79.00",
        src: "../../images/product3.jpg"
      }]


    })


  },
  changeProductth: function (e) {
    this.setData({
      arr: [{
        title: "法格里克 餐具18件, 深青绿色",
        price: "149.00",
        src: "../../images/product1.jpg",

      }]


    })
  },
  listClickon: function (e) {
    var p = e.currentTarget.id;
    wx.navigateTo({
      url: '../tiemai2/tiemai2?id=' + p
    })
  },
  addShopping:function(e){
    wx.navigateTo({
      url: '../gouwuche/gouwuche',
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
// tiemai2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    minusStatus: 'disabled'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var productID = options.id;
    if (productID == 0) {
      this.setData({
        title: "法格里克 餐具18件, 深青绿色",
        price: "149.00",
        math: "198",
        yufei: "免运费",
        textW: "餐具的设计简洁大方而极富实用性，可以轻松搭配各种颜色、各种形状。因此，FÄRGRIK 法格里克 是各种进餐场合基本餐具的完美之选。",
        src: "../../images/product1.jpg",
        src3: "../../images/tiemai2.1.jpg",
        src1: "../../images/tiemai2.2.jpg",
        src2: "../../images/tiemai2.3.jpg"
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
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },



  //－
  bindMinus: function (e) {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })
  },
  //＋
  bindPlus: function () {
    var num = this.data.num;
    num++;
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    })

  },
  bindManual: function (e) {
    var num = e.detail.value;
    this.setData({
      num: num
    })
  },
  shoppingDo: function (e) {

    var num = this.data.num;
    // console.log(num)
    var price = e.target.dataset.price;
    var title = e.target.dataset.title;
    var src = e.target.dataset.src;
    // console.log(price);
    wx.navigateTo({
      url: "../gouwuche/gouwuche?num=" + num + "&price=" + price + "&title=" + title + "&src=" + src+" " 
    })
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
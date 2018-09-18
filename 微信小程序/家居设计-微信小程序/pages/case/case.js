// case.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    liuyanarry: [
      {
        lytx: '../../images/style1.png',
        lyname: '天天',
        lycontent: '大家来分享一下家装style？',
        time: '2017/07/21 11:50:02'
      },
      {
        lytx: '../../images/style1.png',
        lyname: '林总',
        lycontent: '装修风格就是6',
        time: '2017/07/21 11:50:02'
      },
      {
        lytx: '../../images/style4.png',
        lyname: '最美的YOU',
        lycontent: '最近有没有新款式？',
        time: '2017/07/18 06:16:50'
      },
      {
        lytx: '../../images/style3.png',
        lyname: '空空',
        lycontent: '有没有中国古朴风？',
        time: '2017/07/15 11:26:45'
      },
      {
        lytx: '../../images/style2.png',
        lyname: '嘻嘻哈哈',
        lycontent: '打算来一波',
        time: '2017/07/12 16:42:23'
      }


    ],
    textbtn: 'noactive',
    lyvalue: ''

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
        title: "TOM",
        job: "设计师",
        homeSize: "LOFT 140平方米",
        price: "30w",
        textW: "此loft公寓设计以独特的工业风格来设计，是具有一定程度的人为性工艺、材质的物体。粗犷的工业设计，斑驳的铁梯，开阔的空间，让人在自己的家里有一种随心所欲的自由，空间开阔明亮而舒适",
        src: "../../images/case1.png",
        src3: "../../images/style1.png",
        src1: "../../images/ider1.png",
        src2: "../../images/ider2.png"
      })
    }
    if (itemId == 1) {
      this.setData({
        title: "FANNY",
        job: "设计总监",
        homeSize: "109平方米",
        price: "32w",
        textW: "对于家来说，木质内里的实在比外在的美观也许更值得人留恋，也更能经得起时间的打磨而成为有关家的记忆里最温馨的片段，现代时尚风格家居，原木材质让我们一起来感受心灵的平静。",
        src: "../../images/case2.png",
        src3: "../../images/style4.png",
        src1: "../../images/ider3.png",
        src2: "../../images/ider4.png"

      })
    }
    var that = this
    // //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //   //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    


  },
  

  bindFormSubmit: function (e) {
    var mylyarry = [{}];
    // var myly = ;
    var time = util.formatTime(new Date());
    console.log(e)
    if (e.detail.value.textarea != "") {
      mylyarry[0].lycontent = e.detail.value.textarea;
      mylyarry[0].time = time;
      this.data.liuyanarry = mylyarry.concat(this.data.liuyanarry);
      this.setData({
        liuyanarry: this.data.liuyanarry,
        textbtn: 'noactive'
      })
    }
    console.log(this.data.liuyanarry)
    this.setData({
      lyvalue: ''
    })



  },
  // 点击输入框展开
  textareaclick: function (e) {
    console.log(this)
    // let that=this;
    this.setData({
      textbtn: 'active'

    })

    console.log(55555555)

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
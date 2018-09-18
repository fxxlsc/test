// message.js
var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liuyanarry:[
      {
        lytx: '../../images/style1.png',
        lyname: '天天',
        lycontent: '大家来分享一下怎样培养孩子的独立能力和兴趣爱好？',
        time: '2017/07/21 11:50:02'
      },
      {
        lytx:'../../images/style1.png',
      lyname:'林总',
      lycontent:'我家孩子现在就让他在学习电脑，培养他的爱好',
      time:'2017/07/21 11:50:02'
    },
      {
        lytx: '../../images/style1.png',
        lyname: '最美的YOU',
        lycontent: '最近有没有什么亲子活动？',
        time: '2017/07/18 06:16:50'
      },
      {
        lytx: '../../images/zjtx.jpg',
        lyname: '空空',
        lycontent: '成都周边有什么适合露营的地方吗？',
        time: '2017/07/15 11:26:45'
      },
      {
        lytx: '../../images/style1.png',
        lyname: '嘻嘻哈哈',
        lycontent: '周末打算陪孩子在家DIY彩色盘',
        time: '2017/07/12 16:42:23'
      }
     

    ],
   textbtn:'noactive',
   lyvalue:''
   
  
  },
  bindFormSubmit:function(e){    
    var mylyarry = [{}];
    // var myly = ;
    var time = util.formatTime(new Date()); 
    console.log(e)
    if (e.detail.value.textarea!=""){
      mylyarry[0].lycontent = e.detail.value.textarea;
      mylyarry[0].time = time;
      this.data.liuyanarry = mylyarry.concat(this.data.liuyanarry);
      this.setData({
        liuyanarry: this.data.liuyanarry
      })
    }
    console.log(this.data.liuyanarry)
    this.setData({
      lyvalue:''
    })
    
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  
  },

  // 点击输入框展开
  textareaclick:function(e){
    console.log(this)
    // let that=this;
    this.setData({
      textbtn:'active'
      
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
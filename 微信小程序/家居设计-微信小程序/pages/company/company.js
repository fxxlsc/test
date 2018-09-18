// company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义标题数组
    titles: ["公司介绍", "公司地址", "意见反馈"],
    //定义标题的初始值
    selectedTitle: "0",


    markers: [{
      iconPath: "../../images/marker_red.png",
      id: 0,
      latitude: 30.65,
      longitude: 104.05,
      width: 30,
      height: 30,
      callout: {
        content: "雅哲家居",
        color: "#A0522D",
        fontSize: 18,
        borderRadius: 5,
        bgColor: "#ccc",
        padding: 5,
        display: "ALWAYS"
      }
    }]


  },
  // 定义点击标题的事件处理函数，将选中标题的id赋值给selectedTitle
  bindtap: function (e) {
    var titleID = e.currentTarget.id;
    console.log(e)
    this.setData({
      selectedTitle: e.currentTarget.id
    });
    // console.log(e.currentTarget.id)
    if (titleID == 0){
      wx: wx.redirectTo({
        url: '../company/company'

      })
    }else if (titleID == 1) {
      wx: wx.redirectTo({
        url: '../companyAddress/companyAddress'

      })
    } else if (titleID==2){
      wx: wx.redirectTo({
        url: '../thinks/thinks'

      })
    }


  },
  //定义滑块改变的事件处理函数，将current赋值给selectedTitle
  bindChange: function (e) {
    this.setData({
      selectedTitle: e.detail.current
    })
  },
  onReady: function () {
    // 页面渲染完成
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          // swiperHeight: (res.windowHeight - 37),

        });
      }
    })
  }

})
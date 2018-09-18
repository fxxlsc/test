// jiazhuangTip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // title: "新家，全新的开始",
    // cishu: "234",
    // times: "01-1月-2016",
  // arr:[{
  //   textW: "生活总能带给我们许多惊喜，有时我们会在意想不到的地方落地生根。" +
  //   "比如独自一人在全新的小家中生活。" +
  //   "小家经过改装和升级往往能带来意想不到的惊喜。" +
  //   "以下是打造全新居住环境的几点建议。",
  //   src: "../../images/jiazt1.jpg",

  // },{
  //     textW: "虽然小家非常温馨，但却缺少我们视为“奢侈”的额外房间。"+
  //     "然而，没有专用的家庭办公室并不意味着你无法打造一个功能齐全的工作空间。客厅是最适合打造成多功能空间的地方。"+
  //     "沙发的后面一般是不常用的空间，而这里正适合放一张书桌或桌子。"+
  //     "放一把椅子和一盏台灯，并利用内置储物空间收纳零碎的小物件（尽可能让房间不那么杂乱）。"+
  //     "别忘了铺块大地毯划分出工作区。",
  //     src: "../../images/jiazt2.jpg",
  // },{
  //     textW: "许你拥有的空间小，但这并不意味着你的东西少。"+
  //     "试着借助墙壁来解决空间不足的问题。"+
  //     "从地板一直延伸到天花板的搁架能够摆放包括收藏品、书和工作必需品在内的所有物品。"+
  //     "通过组合封闭式和开放式储物装置，你就可以收纳和展示物品。"+
  //     "更棒的是随着时间推移，你还可以随时更改这款储物单元以满足自身不断变化的需求。",
  //     src: "../../images/jiazt3.jpg",
  // },{
  //     textW: "无论你是邀请朋友过来吃个家常便饭，还是打几通工作电话，这片用餐空间都能排得上用场，它不仅要舒适宽敞，还要用途多样。"+
  //     "最重要的一点是，家中的每个角落都要凸显出你的个性。"+
  //     "所以忘记关于重新开始的一切，将新物件与你最喜欢的旧物件混搭在一起，营造温暖个性的氛围。",
  //     src: "../../images/jiazt4.jpg",
  // }
  // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Tips = options.id;
    console.log(Tips);
    if (Tips == 0) {
      this.setData({
        title: "新家，全新的开始",
        cishu: "234",
        times: "01-1月-2016",
        arr: [{
          textW: "生活总能带给我们许多惊喜，有时我们会在意想不到的地方落地生根。" +
          "比如独自一人在全新的小家中生活。" +
          "小家经过改装和升级往往能带来意想不到的惊喜。" +
          "以下是打造全新居住环境的几点建议。",
          src: "../../images/jiazt1.jpg",

        }, {
          textW: "虽然小家非常温馨，但却缺少我们视为“奢侈”的额外房间。" +
          "然而，没有专用的家庭办公室并不意味着你无法打造一个功能齐全的工作空间。客厅是最适合打造成多功能空间的地方。" +
          "沙发的后面一般是不常用的空间，而这里正适合放一张书桌或桌子。" +
          "放一把椅子和一盏台灯，并利用内置储物空间收纳零碎的小物件（尽可能让房间不那么杂乱）。" +
          "别忘了铺块大地毯划分出工作区。",
          src: "../../images/jiazt2.jpg",
        }, {
          textW: "许你拥有的空间小，但这并不意味着你的东西少。" +
          "试着借助墙壁来解决空间不足的问题。" +
          "从地板一直延伸到天花板的搁架能够摆放包括收藏品、书和工作必需品在内的所有物品。" +
          "通过组合封闭式和开放式储物装置，你就可以收纳和展示物品。" +
          "更棒的是随着时间推移，你还可以随时更改这款储物单元以满足自身不断变化的需求。",
          src: "../../images/jiazt3.jpg",
        }, {
          textW: "无论你是邀请朋友过来吃个家常便饭，还是打几通工作电话，这片用餐空间都能排得上用场，它不仅要舒适宽敞，还要用途多样。" +
          "最重要的一点是，家中的每个角落都要凸显出你的个性。" +
          "所以忘记关于重新开始的一切，将新物件与你最喜欢的旧物件混搭在一起，营造温暖个性的氛围。",
          src: "../../images/jiazt4.jpg",
        }
        ]
      })
    }
    if (Tips==1){
      this.setData({
        title: "设计师的秘诀：浴室用架展示",
        cishu: "243",
        times: "01-2月-2017",
        arr: [{
          textW: "想给浴室注入一抹清新活力？清新怡人的墙面展示是个绝佳方案。"+
          "以下建议来自我们的设计师Amanda，可以帮助你设计出理想的墙面展示。",
          src: "../../images/jiazt5.jpg",

        }, {
          textW: "虽然小家非常温馨，但却缺少我们视为“奢侈”的额外房间。" +
          "然而，没有专用的家庭办公室并不意味着你无法打造一个功能齐全的工作空间。客厅是最适合打造成多功能空间的地方。" +
          "沙发的后面一般是不常用的空间，而这里正适合放一张书桌或桌子。" +
          "放一把椅子和一盏台灯，并利用内置储物空间收纳零碎的小物件（尽可能让房间不那么杂乱）。" +
          "别忘了铺块大地毯划分出工作区。",
          src: "../../images/jiazt2.jpg",
        }
        ]
      })
    }
    if (Tips == 2){
      this.setData({
        title: "灵活工作：放上一张门厅办公桌",
        cishu: "193",
        times: "01-2月-2017",
        arr: [{
          textW: "在Sara繁忙的家里，所有卧室都被占用，所以她就在门厅里打造了一个家庭办公室。"+
          "“这是开放的，所有人都可以使用，不占用宝贵的睡觉空间，而且这意味着你工作的时候，也仍然是家庭活动的一部分。”"+
          "她说道。",
          src: "../../images/jiazt6.jpg",

        }, {
            textW: "增添别具一格的展示品家庭纪念品、艺术品和留言可为简单的办公空间注入活力，这样每个人都可以轻松为这个空间做一点贡献。"+
            "“这个空间本身是一个门厅，所以大家都用电线储物装置存放自己最喜欢的杂物，方便取用。”"+
            "Sara说道。",
          src: "../../images/jiazt7.jpg",
        },{
            textW: "营造富有创意的氛围用灯光、色彩、图案和香味激发你的思维，让多功能办公空间协调统一。"+
            "“一个细小的日常举动，比如点一根蜡烛，或者照顾一株植物，都是很好的开始进入‘工作时间’的方式。"+
            "Sara说道。",
            src: "../../images/jiazt8.jpg",
        }
        ]
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
// pages/good/good.js
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    list:'', goodsimg:'https://lg-kn5jpef4-1257375135.cos.ap-shanghai.myqcloud.com/jcob-nasyr-698701-unsplash.jpg',
    goodsname:'马尔代夫之旅',
    goodsprice:'￥50000',
    pinlun: [{ src: 'https://lg-kn5jpef4-1257375135.cos.ap-shanghai.myqcloud.com/p1.png', name: '小明', time: '2018-5-17', text: '这里真好玩，我下次还要去' }, { src: 'https://lg-kn5jpef4-1257375135.cos.ap-shanghai.myqcloud.com/p2.png', name: '小红', time: '2018-5-18', text: '这里风景真美，我下次还要去' }],
    isshow:true,
    pinluntext:'',
    num:''
  },
  tset: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
  },
  pinlun(){
    this.setData({
      isshow:false
    })
  },
  cancel(){
    this.setData({
      isshow: true
    })
  },
  confirm(e){
    console.log(this.data.pinluntext)
    wx.getUserInfo({
      success:(res)=>{
        var a = {};
        a.name = res.userInfo.nickName;
        a.src = res.userInfo.avatarUrl;
        var b = new Date();
        b = b.toLocaleDateString();
        a.time = b;
        a.text = this.data.pinluntext;
        var c = this.data.pinlun;
        c.push(a);
        this.setData({pinlun:c,isshow:true});
      }
    })
  },
  gocar: function (e) {
    if(this.data.num==''){
      wx.showToast({
        title: '请选择规模',
        icon:'none'
      })
    }else{
      var goodlist = this.data.list;
      if (this.data.num = 1) {
        goodlist.num = 1;
      }
      if (this.data.num = 2) {
        goodlist.num = 8;
      }
      if (this.data.num = 3) {
        goodlist.num = 12;
      } 
      wx.getStorage({
        key: 'orders',
        success: function(res) {
          if(res.data[0]==undefined){
            var a = [];
            a.push(res.data)
            a.push(goodlist);
            wx.setStorageSync('orders', a)
          }else{
            var a = res.data;
            a.push(goodlist);
            wx.setStorageSync('orders', a)
          }
         
        },
        fail:function(){
          wx.setStorageSync('orders', goodlist)
        }
      })
      
      wx.showModal({
        title: '购买成功',
        content: '是否继续购物',
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../shopindex/shopindex',
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  },
  goshouchang: function (e) {
    if (this.data.num == '') {
      wx.showToast({
        title: '请选择规模',
        icon: 'none'
      })
    } else {
      var goodlist = this.data.list;
      if (this.data.num = 1) {
        goodlist.num = 1;
      }
      if (this.data.num = 2) {
        goodlist.num = 8;
      }
      if (this.data.num = 3) {
        goodlist.num = 12;
      }
      wx.getStorage({
        key: 'shouchang',
        success: function (res) {
          if (res.data[0] == undefined) {
            var a = [];
            a.push(res.data)
            a.push(goodlist);
            wx.setStorageSync('shouchang', a)
          } else {
            var a = res.data;
            a.push(goodlist);
            wx.setStorageSync('shouchang', a)
          }

        },
        fail: function () {
          wx.setStorageSync('shouchang', goodlist)
        }
      })

      wx.showModal({
        title: '收藏成功',
        content: '是否继续购物',
        success: function (res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../good/good',
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  },
  pinluntext(e){
    this.setData({ pinluntext: e.detail.value})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'goods',
      success: function(res) {
        that.setData({
          list:res.data,
          goodsimg:res.data.src,
          goodsname:res.data.name,
          goodsprice:res.data.price
        })
      },
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
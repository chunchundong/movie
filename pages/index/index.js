//index.js
//获取应用实例
const app = getApp()
var API = "https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a";
Page({
  data: {
    movies:[],
  },
  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: API,
      method: 'GET',
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res){
        console.log(res)
        wx.hideLoading();
        that.setData({
          movies: res.data.subjects
        })
      }
    });
  }
  
})

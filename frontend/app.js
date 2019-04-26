//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    myVideos: [
      {
        id: '1',
        title: "video1",
        author: "author1",
        address: "http://localhost:5000/DDD5016A251D51A4810A0EB1FB679932.mp4",
        type: "type1",
        shared: 10,
        collect: 4,
        star: 16,
        photo:"http://localhost:5000/photo1.png"
      },
      {
        id: '2',
        title: "video2",
        author: "author3",
        address: "http://localhost:5000/B120015885A8B7EED6939926CEFAE0A0.mp4",
        type: "type2",
        shared: 12,
        collect: 14,
        star: 42,
        photo: "http://localhost:5000/photo2.png"
      },
      {
        id: '3',
        title: "video3",
        author: "author2",
        address: "http://localhost:5000/40FE016A263BC5E6BA3E6BDF0D33E3E2.mp4",
        type: "type2",
        shared: 2,
        collect: 4,
        star: 8,
        photo: "http://localhost:5000/photo3.png"
      }
    ]
  }
})
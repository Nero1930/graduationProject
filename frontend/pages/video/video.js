const util = require('../../utils/util.js')

const app = getApp()
Page({
  data: {
    video: {},
    comment: []
  },
  onLoad(option){
    const comment = [
      {
        author: 'lixiang',
        content: 'some comment content',
        time: util.formatTime(new Date())
      },
      {
        author: '路人甲',
        content: 'some other comment content',
        time: util.formatTime(new Date())
      }
    ]
    this.setData({video: app.globalData.myVideos[option.id-1]})
    this.setData({comment: [...this.data.comment, ...comment]})
    console.log(this.data.comment)
  },
  comment(event) {
    const content = event.detail.value
    const newComment = {
      author: 'lxiang',
      time: util.formatTime(new Date()),
      content
    }
    this.setData({comment: [...this.data.comment, newComment]})
  }
})
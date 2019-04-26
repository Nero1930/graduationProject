const helloMessage = {
  name: 'Cien'
}
Page({
  data: helloMessage,
  changeName(e) {
    this.setData({
      name: 'DuyiTng'
    })
  }
})
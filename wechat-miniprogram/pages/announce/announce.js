// pages/updateAI/updateAI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    qqL: []
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.setData({
      value: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  afterClick() {
    const that = this;
    const app = getApp();
    console.log(this.data.value)
    wx.showModal({
      title: '提示',
      content: '通知发布成功'
    })
    this.setData({
      value: []
    })
  },
  onLoad(options) {
    const app = getApp();
    const rrid = app.globalData.sId;
    const dqList = [];
    const that = this;
    this.setData({
      rid: rrid,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
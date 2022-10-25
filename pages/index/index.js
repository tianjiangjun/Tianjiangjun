// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    arr:[],
    num:0
  },
  username(e){
    this.setData({ 
      username:e.detail.value,
    })
  },
  password(e){
    this.setData({ 
      password:e.detail.value,
    })
  },
add(){
this.data.arr.push({username:this.data.username,password:this.data.password})
this.setData({
  arr:this.data.arr
})
 
},
del(index){
  this.data.arr.splice(index.target.dataset.index,1)
  this.setData({
   arr:this.data.arr      
  })
},
qie(){
  this.setData({
    flag: this.data.flag=! this.data.flag
  })
},
jia(){
  this.setData({
    num:this.data.num+1
  })
},
jian(){                            
  this.setData({
    num:this.data.num-1
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
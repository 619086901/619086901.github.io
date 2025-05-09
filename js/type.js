let type = {
  text1: '生吃个人我很抱歉',
  text2: '今天不学习，明天变废物',
  text3: '学了忘，忘了又学，好痛苦',
  index: 0, //文字下标
  yanchi: 200, //延迟
  Ntrue: false, //标签是否存在
  timeout1: null, //计时器
  timeout2: null,
  timeout3: null,
  text1html() {
    if (document.querySelector('.home-blog .hero .description')) {
      //获取元素
      this.html = document.querySelector('.home-blog .hero .description')
      //文字下标+1
      this.index++
      //修改元素文字
      this.html.innerText = this.text1.substring(0, this.index)
      if (this.html.innerText.length >= this.index) {
        //检测是否有别的计时器在执行
        this.timeout2 && clearTimeout(this.timeout2)
        this.timeout3 && clearTimeout(this.timeout3)
        //尾循环递归
        this.timeout1 = setTimeout(() => {
          this.text1html()
        }, this.yanchi)
      } else {
        this.index = 0 //重置
        this.timeout1 && clearTimeout(this.timeout1)
        this.timeout3 && clearTimeout(this.timeout3)
        this.timeout2 = setTimeout(() => {
          this.text2html()
        }, this.yanchi)
      }
    }
  },
  text2html() {
    if (document.querySelector('.home-blog .hero .description')) {
      this.index++
      this.html.innerText = this.text2.substring(0, this.index)
      if (this.html.innerText.length >= this.index) {
        this.timeout1 && clearTimeout(this.timeout1)
        this.timeout3 && clearTimeout(this.timeout3)
        this.timeout2 = setTimeout(() => {
          this.text2html()
        }, this.yanchi)
      } else {
        this.index = 0 //重置
        this.timeout1 && clearTimeout(this.timeout1)
        this.timeout2 && clearTimeout(this.timeout2)
        this.timeout3 = setTimeout(() => {
          this.text3html()
        }, this.yanchi)
      }
    }
  },
  text3html() {
    if (document.querySelector('.home-blog .hero .description')) {
      this.index++
      this.html.innerText = this.text3.substring(0, this.index)
      if (this.html.innerText.length >= this.index) {
        this.timeout1 && clearTimeout(this.timeout1)
        this.timeout2 && clearTimeout(this.timeout2)
        this.timeout3 = setTimeout(() => {
          this.text3html()
        }, this.yanchi)
      } else {
        this.index = 0 //重置
        this.timeout2 && clearTimeout(this.timeout2)
        this.timeout3 && clearTimeout(this.timeout3)
        this.timeout1 = setTimeout(() => {
          this.text1html()
        }, this.yanchi)
      }
    }
  },
  time: null, //开始
  functime1() {
    if (document.querySelector('.home-blog .hero .description')) {
      this.timeout1 = setTimeout(() => {
        this.text1html()
      }, this.yanchi)
    }
  },
  time1() {
    return new Promise((resolve, reject) => {
      if (this.Ntrue) {
        this.time && clearTimeout(this.time)
      } else {
        this.time = setTimeout(() => this.functime1(), 1000)
      }
      resolve()
    })
  },
  time2() {
    return new Promise((resolve, reject) => {
      this.Ntrue = document.querySelector('.home-blog .hero .description')
        ? true
        : false
      resolve()
    })
  }
}
//为了在vue渲染中使用
window.onload = () => {
  setInterval(() => {
    type.time1().then(() => type.time2())
  }, 2000)
}

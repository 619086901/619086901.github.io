let type = {
  text1: '生吃个人我很抱歉',
  text2: '为了以后做前端而努力',
  text3: '我是一个在挣扎的小前端',
  index: 0,
  text1html() {
    if (document.querySelector('.hero .description')) {
      this.html = document.querySelector('.hero .description');
      this.index++;
      this.html.innerText = this.text1.substring(0, this.index);
      if (this.html.innerHTML.length >= this.index) {
        this.settimer1();
      } else {
        this.index = 0;
        this.settimer2();
      }
    }
  },
  text2html() {
    this.index++;
    this.html.innerText = this.text2.substring(0, this.index);
    if (this.html.innerText.length >= this.index) {
      this.settimer2();
    } else {
      this.index = 0;
      this.settimer3();
    }
  },
  text3html() {
    this.index++;
    this.html.innerText = this.text3.substring(0, this.index);
    if (this.html.innerText.length >= this.index) {
      this.settimer3();
    } else {
      this.index = 0;
      this.settimer1();
    }
  },
  settimer3() {
    setTimeout(() => {
      this.text3html(this.index);
    }, 200);
  },
  settimer2() {
    setTimeout(() => {
      this.text2html(this.index);
    }, 200);
  },

  settimer1() {
    setTimeout(() => {
      this.text1html(this.index);
    }, 200);
  }
};
window.onload = function() {
  if (document.querySelector('.hero .description')) {
    type.settimer1();
  }
};
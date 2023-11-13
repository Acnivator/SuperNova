AFRAME.registerComponent('exp', {
  schema: {

  },

  init: function () {
    var totalyears = 0;
    var novaEl = document.querySelector("#nova");
    var uniEl = document.querySelector("#uni");
    var timerEl = document.querySelector("#mainTimer")
    this.explosion(totalyears,novaEl,uniEl,timerEl);
  },

  explosion: function (totalyears,novaEl,uniEl,timerEl) {
    setInterval(()=> {
        var years = 0
      if (totalyears < 6100000000) {
        years = totalyears + 100000000;
        totalyears += 100000000
        novaEl.pause()
      } 
      else {
        uniEl.setAttribute("visible",false)
        timerEl.setAttribute("visible",false)
        novaEl.setAttribute("visible",true)
        novaEl.play()
      }
    },1000)

  },
});
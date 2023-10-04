AFRAME.registerComponent('size', {
  schema: {
    rad : {type:"number",default:2}
  },

  init: function () {
    var totalyears = 0;
    var sunEl = document.querySelector("#sun");
    this.sunIncrement(totalyears,sunEl);
  },

  update: function () {

  },

  sunIncrement: function (totalyears,sunEl) {
    setInterval(()=> {
        var years = 0
      if (totalyears < 1200000000) {
        years = totalyears + 100000000;
        totalyears += 100000000

        this.data.rad += 0.1
        sunEl.setAttribute("radius", this.data.rad)
      } 
      else {
        sunEl.setAttribute("visible",false)
      }
    },1000)
  },

  tick: function (time, timeDelta) {

  }
});
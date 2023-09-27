AFRAME.registerComponent('size', {
  schema: {
    
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
        var rad = sunEl.getAttribute("radius")
      if (totalyears < 6200000000) {
        years = totalyears + 100000000;
        totalyears += 100000000

        rad += 0.05
        sunEl.setAttribute("radius", rad)
        console.log(rad)
      } 
      else {
        console.log("error-1")      
      }
    },1000)
  },

  tick: function (time, timeDelta) {

  }
});
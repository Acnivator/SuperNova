


AFRAME.registerComponent('exp', {
  schema: {

  },

  init: function () {
    var totalyears = 0;
    var novaEl = document.querySelector("#nova");
    var sEl = document.querySelector("#1")
    this.explosion(totalyears,novaEl,sEl);
  },

  explosion: function (totalyears,novaEl,sEl) {
    setInterval(()=> {
        var years = 0
      if (totalyears < 6200000000) {
        years = totalyears + 100000000;
        totalyears += 100000000
      } 
      else {
        novaEl.setAttribute("visible",true)
        console.log("completed3")
        sEl.setAttribute("visible",false)
        novaEl.setAttribute("visible",false)

      }
    },1000)

  },
});
AFRAME.registerComponent("timer", {
  /*schema: {
    elementId: { type: "integer", default: 0},
  },*/

  init: function () {
    var totalyears = 0;
    var timerEl = document.querySelector("#timer")
    this.startTimer(totalyears, timerEl);
  },

  update: function () {

  },

  startTimer: function (totalyears, timerEl) {
    setInterval(()=> {
        var years = 0
      if (totalyears < 6200000000) {
        years = totalyears + 100000000;
        timerEl.setAttribute("text", {
          value: years,
        });

        totalyears += 100000000;
      } 

      else {
      }
    },1000)
  },
});
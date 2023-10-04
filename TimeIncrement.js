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
      if (totalyears < 1200000000) {
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

  
 /*isCollided: function (elemntId) {
    var element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#ring")) {
        element.setAttribute("visible", false);
        this.updateScore();
        this.updateTargets();
      } 
      else {
        this.gameOver();
      }
    });
  },
  updateTargets: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  },
  updateScore: function () {
    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value;
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });
  },
  gameOver: function () {
    var planeEl = document.querySelector("#plane_model");
    var element = document.querySelector("#game_over_text");
    element.setAttribute("visible", true);
    planeEl.setAttribute("dynamic-body", {
      mass: 1
    });
  },*/
});
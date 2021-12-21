var App = {
  Constant: {
    LINK: "https://infil.ink/P4G91H0BvbHGvV-S5AZN"
  },
  Utility: {
    getRandomArbitrary: function(min, max) {
        return Math.random() * (max - min) + min;
    },
  },
  closeWindow: function(win) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        win.close();
        resolve();
      }, 2000 + App.Utility.getRandomArbitrary(1000,3000));
    });
  },
  init: function() {
    var interval = setInterval(async function() {
      var win = window.open(App.Constant.LINK);
      await App.closeWindow(win);
    }, 2000 + App.Utility.getRandomArbitrary(1000,3000));
  },
};
App.init();

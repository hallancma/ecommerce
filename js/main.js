(function(win) {
  function app() {
    return {
      hello: function(name) {
        return `Hi ${name}`;
      }
    };
  }
  win.app = app();
})(window);

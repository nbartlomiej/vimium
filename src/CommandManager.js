function CommandManager(){
  var private_commands = [];

  CommandManager.prototype.commands = function(){
    return private_commands;
  };

};

CommandManager.prototype.bindings = function(key){
  return this.commands().filter(function(c){
    return c.binding === key
  });
};

var a = ({
  scrollToBottom: function() {
    window.scrollTo(window.pageXOffset, document.body.scrollHeight);
  },
  scrollToTop: function() {
    window.scrollTo(window.pageXOffset, 0);
  },
  scrollToLeft: function() {
    window.scrollTo(0, window.pageYOffset);
  },
  scrollToRight: function() {
    window.scrollTo(document.body.scrollWidth, window.pageYOffset);
  }
});

console.log(a.keys);

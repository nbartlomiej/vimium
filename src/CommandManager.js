function CommandManager(){
  var private_commands = [];

  for (command in globalCommands){
    private_commands.push(globalCommands[command]);
  }

  CommandManager.prototype.commands = function(){
    return private_commands;
  };
};

CommandManager.prototype.bindings = function(key){
  return this.commands().filter(function(c){
    return c.binding === key
  });
};

CommandManager.prototype.get = function(commandName){
  return this.commands().filter(function(c){
    return c.name() === commandName
  }).pop();
};

var globalCommands = [];

var scrollActions = ({
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

for (action in scrollActions){
  var c = new Command(action, scrollActions[action]);
  globalCommands.push(c);
}


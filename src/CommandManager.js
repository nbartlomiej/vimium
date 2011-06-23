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

var commands = {
  'gg': new Command('scrollToTop', function() {
    window.scrollTo(window.pageXOffset, 0);
  }),
  'G': new Command('scrollToBottom', function() {
    window.scrollTo(window.pageXOffset, document.body.scrollHeight);
  })
};

for (mapping in commands){
  commands[mapping].bind(mapping);
  globalCommands.push(commands[mapping]);
}

function CommandManager(){
  var private_commands = [
    new Command('helloWorld', function(){
      console.log('oh, bugger off.');
    })
  ];

  CommandManager.prototype.__defineGetter__('commands', function(){
    return private_commands;
  });

};

CommandManager.prototype.bindings = function(key){
  return this.commands.filter(function(c){
    return c.binding === key
  });
};

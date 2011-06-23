function Command(action){
  Command.prototype.__defineGetter__('execute', function(){
    return action;
  });
};

Command.prototype.bind = function(key){
  this.binding = key;
  return true;
};

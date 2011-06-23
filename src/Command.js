function Command(action){
  Command.prototype.execute = function(){
    return action;
  };
};

Command.prototype.bind = function(key){
  this.binding = key;
  return true;
};

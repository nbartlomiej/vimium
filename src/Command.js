function Command(private_name, action){
  this.name = function(){
    return private_name;
  };
  this.execute = function(){
    return action();
  };
};

Command.prototype.bind = function(key){
  this.binding = key;
  return true;
};

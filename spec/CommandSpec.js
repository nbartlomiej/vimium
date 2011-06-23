describe("Command", function() {
  var command;
  beforeEach(function(){
    command = new Command('helloWorld', function(){
      console.log("Hello world from mock command 'helloWorld'");
    });
  });

  describe("Command()", function() {
    it('returns defined object', function(){
      expect(command).toBeDefined();
    });
    it("sets the command's name", function(){
      expect(command.name()).toEqual('helloWorld');
    });
  });

  describe('#bind(key)', function(){
    it('binds a key to the command', function(){
      expect(command.bind('a')).toEqual(true);
    });
  });

  describe('#binding', function(){
    beforeEach(function(){
      command.bind('a');
    });
    it('returns most recend binding', function(){
      expect(command.binding).toEqual('a');
    });
  });

  describe('#execute()', function(){
    var log;
    beforeEach(function(){
      log = spyOn(console, 'log');
      command.execute();
    });
    it('executes the command', function(){
      expect(log).toHaveBeenCalledWith("Hello world from mock command 'helloWorld'");
    });
  });

});

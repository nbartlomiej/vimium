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

});

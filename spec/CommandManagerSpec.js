describe("CommandManager", function() {
  var commandManager;
  beforeEach(function(){
    commandManager = new CommandManager();
  });

  describe("constructor", function() {
    it('returns defined object', function(){
      expect(commandManager).toBeDefined();
    });
  });

  describe('#bindings', function(){
    var helloWorld;

    beforeEach(function(){
      helloWorld = new Command('helloworld', function(){
        console.log("Hello world from a mock command 'helloWorld'");
      })
      helloWorld.bind('a');
      commandManager.commands().push(helloWorld);
    });

    it('remembers the bindings', function(){
      expect(commandManager.bindings('a')).toEqual([helloWorld]);
    });

    it('is empty when no bindings', function(){
      expect(commandManager.bindings('b')).toEqual([]);
    });

  });

});

describe("CommandManager", function() {
  var commandManager;
  beforeEach(function(){
    commandManager = new CommandManager();
  });

  describe("constructor", function() {
    it('is defined', function(){
      expect(commandManager).toBeDefined();
    });
    it('has no commands', function(){
      expect(commandManager.commands.length).toBe(0);
    });
  });

  describe('#addCommand()', function(){
    var helloWorld;
    beforeEach(function(){
      helloWorld = new Command('helloWorld', function(){
        console.log("Hello world from test command called 'helloWorld'!");
      });
    });

    it('returns true on successful add', function(){
      expect(commandManager.addCommand(helloWorld)).toBe(true);
    });
    it('remembers new commands', function(){
      commandManager.addCommand(helloWorld);
      expect(commandManager.commands.length).toBe(1);
    });
  });

  describe ('#getCommand()', function(){
    var helloWorld;
    beforeEach(function(){
      helloWorld = new Command('helloWorld', function(){
        console.log("Hello world from test command called 'helloWorld'!");
      });
      commandManager.addCommand(helloWorld);
    });
    it('returns exactly the same thing', function(){
      expect(commandManager.getCommand(helloWorld)===helloWorld).toBeTruthy();
    });
  });

});

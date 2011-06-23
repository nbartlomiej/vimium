describe("CommandManager", function() {
  var commandManager;
  var helloWorld;

  beforeEach(function(){
    helloWorld = new Command('helloWorld', function(){
      console.log("Hello world from a mock command 'helloWorld'");
    })
    commandManager = new CommandManager();
  });

  describe("constructor", function() {
    it('returns defined object', function(){
      expect(commandManager).toBeDefined();
    });
    it('has only commands in the command array', function(){
      for(command in commandManager.commands()){
        expect(Command.prototype.isPrototypeOf(
            commandManager.commands()[command]
        )).toBeTruthy();
      }
    });
  });

  describe('#bindings', function(){
    beforeEach(function(){
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

  describe('#get', function(){
    beforeEach(function(){
      commandManager.commands().push(helloWorld);
    });
    it('returns the command with specified name', function(){
      expect(commandManager.get('helloWorld')).toEqual(helloWorld);
    });
  });

  describe('scroll actions', function(){
    var scrollTo;
    beforeEach(function(){
      scrollTo = spyOn(window, 'scrollTo')
    });
    it('provides scroll to bottom', function(){
      commandManager.bindings('G').pop().execute();
      expect(scrollTo).toHaveBeenCalledWith(window.pageXOffset, document.body.scrollHeight);
    });
    it('provides scroll to top', function(){
      commandManager.bindings('gg').pop().execute();
      expect(scrollTo).toHaveBeenCalledWith(window.pageXOffset, 0);
    });
  });

});

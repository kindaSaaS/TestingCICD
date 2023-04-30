const targetAddress = '0x7f2db9af9720';

function hookMemoryFunction() {
  const targetFunction = new NativeFunction(ptr(targetAddress), 'void', ['int']);
  Interceptor.attach(targetFunction, {
    onEnter: function (args) {
      console.log('Memory function hooked');
      // Do something when the function is called
    },
    onLeave: function (retval) {
      // Do something when the function returns
    },
  });
}

// Wait for the target process to start and attach the hook
Process.enumerateModules({
  onMatch: function (module) {
    if (module.name === 'jenkins') {
      console.log('Found jenkins module');
      hookMemoryFunction();
    }
  },
  onComplete: function () {
    console.log('Module enumeration complete');
  },
});

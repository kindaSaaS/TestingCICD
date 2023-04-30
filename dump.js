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
      const payload = {
        args: [args[0].toInt32()],
        return_value: retval.toInt32(),
      };
      fetch('https://httpdump.app/dumps/a284ae76-e918-4f31-b7a6-0bb28d85721a', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('HTTP request successful:', data);
        })
        .catch((error) => {
          console.error('HTTP request error:', error);
        });
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

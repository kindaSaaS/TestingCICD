// Define the constructor signature
var runConstructor = new NativeFunction(ptr("0x7f2db9b018e0"), 'void', ['pointer', 'pointer', 'pointer']);

// Intercept the constructor call
Interceptor.attach(runConstructor, {
    onEnter: function(args) {
        // args[0] is the this pointer
        // args[1] is the hudson.model.Job object
        // args[2] is the hudson.model.Environment object

        // Log the arguments to the constructor
        console.log("Run constructor called with arguments:");
        console.log("this: " + args[0]);
        console.log("job: " + args[1]);
        console.log("env: " + args[2]);
    }
}); 

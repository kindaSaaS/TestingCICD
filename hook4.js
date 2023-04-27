// Attach to the target process with PID 4121
var target = Process.get(4121);

// Define the function to hook
var httpRequest = Module.findExportByName("libjenkins-core.so", "_ZN15hudson/Functions10httpGetURLERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEj");

// Intercept the HTTP request function
Interceptor.attach(httpRequest, {
    onEnter: function(args) {
        console.log("HTTP request made to URL: " + args[0].readUtf8String());
    }
});

var target = Process.getFromName("jenkins");

// Define the function to hook
var httpRequest = Module.findExportByName("libjenkins-core.so", "_ZN15hudson/Functions10httpGetURLERKNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEEj");

Interceptor.attach(httpRequest, {
    onEnter: function(args) {
        console.log("HTTP request made to URL: " + args[0].readUtf8String());
    }
});

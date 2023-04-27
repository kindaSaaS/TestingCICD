Java.perform(function() {
  var AbstractProject = Java.use("hudson.model.AbstractProject");
  AbstractProject.performDelete.implementation = function() {
    console.log("[*] Hooking AbstractProject.performDelete...");
    console.log("[+] Arguments:");
    console.log(JSON.stringify({
      "this": this.toString()
    }, null, 2));
    var result = this.performDelete.apply(this, arguments);
    console.log("[+] Return value:");
    console.log(JSON.stringify({
      "result": result
    }, null, 2));
    return result;
  };
});

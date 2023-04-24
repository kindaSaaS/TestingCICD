Java.perform(function() {
    var Jenkins = Java.use('jenkins.model.Jenkins');
    Jenkins.getACL.implementation = function() {
        console.log('getACL called!');
        return this.getACL();
    };
});

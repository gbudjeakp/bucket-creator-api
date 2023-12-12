pipeline {
    agent { 
        node {
            label 'docker-test-agent'
            }
      }
    environment {
        API_TOKEN = credentials('API_TOKEN')
    }
    stages {
        stage('Test') {
            steps {
                echo "test.."
                sh '''
                 npm install
                 export API_TOKEN="${API_TOKEN}"
                 ember test
                '''
            }
        }
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                docker build -f Dockerfile -t gbudjeakp/ember-node-api-cicd .
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
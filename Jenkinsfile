pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Tshewang247/TshewangSamdup_02250378_DSO101_A1.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Install') {
            steps {
                dir('Assignment1/todo-app/backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir('Assignment1/todo-app/backend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                dir('Assignment1/todo-app/backend') {
                    bat 'npm test'
                }
            }
            post {
                always {
                    junit 'Assignment1/todo-app/backend/junit.xml'
                }
            }
        }
    }
}
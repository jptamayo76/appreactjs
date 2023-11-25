pipeline {
    agent any

    stages {
        stage('Checkout from GitHub') {
            steps {
                script {
                    // Clonar el repositorio desde GitHub
                    git 'https://github.com/jptamayo76/appreactjs.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Ejecutar el comando npm install
                    sh 'npm install'
                }
            }
        }

        stage('Start Application') {
            steps {
                script {
                    // Ejecutar el comando npm start
                    sh 'npm start'
                }
            }
        }
    }
}

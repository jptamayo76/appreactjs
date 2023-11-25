pipeline {
    agent any

    stages {
        stage('Checkout from GitHub') {
            steps {
                script {
                    // Eliminar directorio existente para obtener una copia limpia
                    deleteDir()
                    
                    // Clonar el repositorio desde la rama main
                    checkout([$class: 'GitSCM', 
                              branches: [[name: 'main']], 
                              userRemoteConfigs: [[url: 'https://github.com/jptamayo76/appreactjs.git']]])
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

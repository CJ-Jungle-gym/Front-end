pipeline {
    agent any

    environment {
        AWS_REGION = "ap-northeast-2"
        ECR_REPO = "605134473022.dkr.ecr.ap-northeast-2.amazonaws.com/olive-front"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Dockerfile을 사용하여 이미지 빌드
                    docker.withRegistry("https://${ECR_REPO}/", '9b45eaf4-a184-44eb-ba8c-8e20a854de1b') {
                        myapp = docker.build('olive-front')  // Dockerfile 경로와 빌드할 디렉토리
                        myapp.push("${IMAGE_TAG}")
                    }
                }
            }
        }
    }
}

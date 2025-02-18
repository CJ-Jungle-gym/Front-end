pipeline {
    agent any

    environment {
        AWS_REGION = "ap-northeast-2"
        AWS_ACCOUNT_ID = "123456789012"
        ECR_REPO = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/my-react-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/CJ-Jungle-gym/Front-end.git'
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

        stage('Docker Build & Push') {
            steps {
                script {
                    sh """
                    aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}
                    docker build -t ${ECR_REPO}:${IMAGE_TAG} .
                    docker push ${ECR_REPO}:${IMAGE_TAG}
                    """
                }
            }
        }
    }
}
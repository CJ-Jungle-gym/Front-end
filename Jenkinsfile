pipeline {
    agent any

    tools {
        nodejs "npm"
    }

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

        // sonarqube test
        // stage('SonarQube Scanner') {
        //     steps {
        //         withSonarQubeEnv('jg-sonarqube') {
        //             sh 'npx sonar-scanner \
        //                 -Dsonar.projectKey=olive-front \
        //                 -Dsonar.sources=. \
        //                 -Dsonar.host.url=http://sonar-LB-1171679121.ap-northeast-2.elb.amazonaws.com \
        //                 -Dsonar.login=squ_defd65e305f5684bc10dd0e10f936c83ea846f74'
        //         }
        //     }
        // }

        // dependency-check
        // stage('OWASP Dependency-Check Vulnerabilities') {
        //     steps {
        //         dir("src"){
        //             dependencyCheck additionalArguments: ''' 
        //                 -o './'
        //                 -s './'
        //                 -f 'ALL' 
        //                 --prettyPrint''', odcInstallation: 'owasp'

        //             dependencyCheckPublisher pattern: 'dependency-check-report.xml'
        //         }
        //     }
        // }

        // stage('Run Tests') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }

        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${ECR_REPO}/", '9b45eaf4-a184-44eb-ba8c-8e20a854de1b') {
                        myapp = docker.build('olive-front')  
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${ECR_REPO}/", '9b45eaf4-a184-44eb-ba8c-8e20a854de1b') {
                        myapp.push("${IMAGE_TAG}")
                    }
                }
            }
        }


        // image scan
        stage('Scan Image with Trivy') {
            steps {
                script {
                    try {
                        // Trivy로 이미지 스캔하고 HTML 리포트 생성
                        sh 'trivy image --format template --template "@/root/html.tpl" --output trivy-report.html "${ECR_REPO}:${IMAGE_TAG}"'
                        echo "Trivy scan completed"
                    } catch (Exception e) {
                        echo "Trivy scan failed: ${e.getMessage()}"
                        currentBuild.result = 'FAILURE' // 빌드 상태를 실패로 설정
                        throw e // 예외를 던져서 이후 단계를 실행하지 않도록 함
                    }
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                script {
                    // HTML 리포트가 존재하는지 확인하고 리포트를 출력
                    if (fileExists('trivy-report.html')) {
                        echo "Trivy report found, publishing HTML report"
                        publishHTML(target: [
                            allowMissing: false,
                            alwaysLinkToLastBuild: false,
                            keepAll: false,
                            reportDir: '.',
                            reportFiles: 'trivy-report.html',  // 리포트 파일 경로
                            reportName: 'Trivy Vulnerability Report'
                        ])
                    } else {
                        echo "Trivy report not found, skipping HTML report publishing"
                    }
                }
            }
        }        
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'oc new-build --name=fire-starters:latest --binary --strategy=docker'
                sh 'oc start-build fire-starters:latest --from-dir=. --follow'

            }
        }
        stage('Deploy') {
            steps {
                sh 'oc delete all -l app=fire-starters'
                sh 'oc new-app --image-stream=fire-starters:latest --name=fire-starters'
                sh 'oc expose svc/fire-starters --port=5173'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'oc new-build --name=fire-starters --binary --strategy=docker'
                sh 'oc start-build fire-starters --from-dir=. --follow'

            }
        }
        stage('Deploy') {
            steps {
                sh 'oc delete all -l app=fire-starters'
                sh 'oc new-app --image-stream=fire-starters --name=fire-starters'
                sh 'oc expose svc/onestop-be --port=5173'
            }
        }
    }
}

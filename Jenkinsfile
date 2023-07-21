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
        sh 'oc new-app --image-stream=fire-starters:latest --name=fire-starters --allow-missing-imagestream-tags' // Add the --allow-missing-imagestream-tags option here
        sh 'oc expose svc/fire-starters --port=5173'
    }
        }
    }
}

pipeline {
    agent any

   stages {
    stage('Build') {
        steps {
            sh 'oc new-build --name=fire-starters --binary --strategy=docker'
            sh 'oc start-build fire-starters --from-dir=. --follow --tag=latest' // Adding :latest tag during build
        }
    }
    stage('Deploy') {
        steps {
            sh 'oc delete all -l app=fire-starters'
            sh 'oc new-app fire-starters:latest --name=fire-starters' // Using the :latest tag for deployment
            sh 'oc expose svc/fire-starters --port=5173'
        }
    }
}
}


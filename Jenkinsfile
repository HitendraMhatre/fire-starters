pipeline {
    agent any

   stages {
    stage('Build') {
        steps {
            // Build the Docker image with :latest tag
            sh 'docker build -t fire-starters:latest .'

            // Create an image stream in OpenShift
            sh 'oc new-build --name=fire-starters --binary --strategy=docker'

            // Start the build using the built image with :latest tag
            sh 'oc start-build fire-starters --from-dir=. --follow'
        }
    }
    stage('Deploy') {
        steps {
            sh 'oc delete all -l app=fire-starters'
            sh 'oc new-app fire-starters:latest --name=fire-starters'
            sh 'oc expose svc/fire-starters --port=5173'
        }
    }
}

}


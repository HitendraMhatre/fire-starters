pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'oc new-build --name=fire-starters --binary --strategy=docker'
                sh 'oc start-build fire-starters --from-dir=. --follow'
                sh 'docker build -t hitendra7-dev/fire-starters:latest .'
                sh 'docker tag hitendra7-dev/fire-starters:latest image-registry.openshift-image-registry.svc:5000/hitendra7-dev/fire-starters:latest'
                sh 'docker push image-registry.openshift-image-registry.svc:5000/hitendra7-dev/fire-starters:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'oc delete all -l app=fire-starters'
                sh 'oc new-app --image-stream=fire-starters --name=fire-starters'
                sh 'oc expose svc/fire-starters --port=5173'
            }
        }
    }
}

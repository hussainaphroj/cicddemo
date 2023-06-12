pipeline{
    agent any
    options{
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '5'))
        timestamps()
    }
    environment{
        
        registry = "hussainafroz/myhttpd"
        registryCredential = 'DockerHub'        
    }
    
    stages{
       stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
       stage('Push Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage ('Deploy k8s') {
          steps {
              script{
                  def image_id = registry + ":$BUILD_NUMBER"
                  sh "ansible-playbook playbook.yml --extra-vars \"image_id=${image_id}\""
              }
          }
      }
  }
}

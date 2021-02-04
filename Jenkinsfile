pipeline {
  agent {
    node {
      label 'env'
    }

  }
  stages {
    stage('build') {
      agent any
      environment {
        git_last_commit_description = ''
      }
      steps {
        sh '''npm install . 
node -v
npm -v 
sudo npm run build
'''
        sh 'echo GIT_LAST_COMMIT_DESCRIPTION=\\""$(git log --format="medium" -1 ${GIT_COMMIT})"\\" | sed -E \'s/$/\\\\n/g\' | tr -d \'\\n\' | sed \'s/..$//\' > git_last_commit_description'
        slackSend()
      }
    }

  }
}
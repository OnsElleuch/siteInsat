pipeline {
  agent any
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
  environment {
    GIT_LATEST_COMMIT_AUTHOR = """${sh(
      	        returnStdout:true,
              	script: 'git show -s --pretty=%an '
              ).trim()}"""
      GIT_LATEST_COMMIT_MESSAGE = """${sh(
        		returnStdout:true,
        		script: 'git log -1 --pretty=%B'
        	).trim()} """
        GIT_STAT = """ ${sh(
          		returnStdout: true,
          		script: 'git diff --stat $GIT_PREVIOUS_SUCCESSFUL_COMMIT'
        ).trim()} """
        GIT_SHORT_STAT = """ ${sh(
          		returnStdout: true,
          		script: 'git diff --shortstat $GIT_PREVIOUS_SUCCESSFUL_COMMIT'
        ).trim()} """
        GIT_REPO_URL = """ ${sh(
          		returnStdout: true,
          		script: 'echo $GIT_URL | sed -e "s/\\.git[^.]*$//"'
          	).trim()} """
          GIT_COMPARE_URL = """ ${sh(
            		returnStdout: true,
            		script: ' echo "${GIT_REPO_URL}/compare/${GIT_COMMIT}..${GIT_PREVIOUS_SUCCESSFUL_COMMIT}" '
            	).trim()} """
          }
          post {
            success {
              slackSend(color: 'good', message: """
              Build ${env.BUILD_NUMBER} completed successfully for ${env.JOB_NAME}.
              changes: <${env.RUN_CHANGES_DISPLAY_URL}|here>
              Latest Commit: <${env.GIT_REPO_URL}/commit/${env.GIT_COMMIT}|${env.GIT_LATEST_COMMIT_MESSAGE}>
              with id: ${env.GIT_COMMIT}
              ${env.GIT_SHORT_STAT}
              written by ${env.GIT_LATEST_COMMIT_AUTHOR}
              <${env.GIT_COMPARE_URL}|Compare against previous build>
              More Details <${env.BUILD_URL}|here>
              			      """, channel: 'front-office')
            }

            failure {
              slackSend(color: 'danger', message: """
              	Build ${env.BUILD_NUMBER} Failed for ${env.JOB_NAME}. 
              	changes: <${env.RUN_CHANGES_DISPLAY_URL}|here>
              	Latest commit: <${env.GIT_REPO_URL}/commit/${env.GIT_COMMIT}|${env.GIT_LATEST_COMMIT_MESSAGE}>
              	${env.GIT_SHORT_STAT}
              	written by ${env.GIT_LATEST_COMMIT_AUTHOR}
              	<${env.GIT_COMPARE_URL}|Compare against previous build>
              	More Details<${env.BUILD_URL}|here>
              			       """, channel: 'front-office')
            }

          }
        }
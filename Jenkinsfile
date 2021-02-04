pipeline {
    agent any
    environment {
	GIT_LATEST_COMMIT_AUTHOR= """${sh(
	        returnStdout:true,
        	script: 'git show -s --pretty=%an '
        ).trim()}"""
	GIT_LATEST_COMMIT_MESSAGE= """${sh(
		returnStdout:true,
		script: 'git log -1 --pretty=%B'
	).trim()} """
	GIT_STAT= """ ${sh(
		returnStdout: true,
		script: 'git diff --stat $GIT_PREVIOUS_SUCCESSFUL_COMMIT'
).trim()} """
	GIT_SHORT_STAT= """ ${sh(
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
    stages {
		
    stage('build') {
      steps {
        sh '''npm install . 
node -v
npm -v 
sudo npm run build
sudo cp -r dist/* /var/www
'''
      }
    }
    }
    post {
        success {
            slackSend color: 'good',
	    	              message: """
Build ${env.BUILD_NUMBER} completed successfully for ${env.JOB_NAME}.
changes: <${env.RUN_CHANGES_DISPLAY_URL}|here>
Latest Commit: <${env.GIT_REPO_URL}/commit/${env.GIT_COMMIT}|${env.GIT_LATEST_COMMIT_MESSAGE}>
with id: ${env.GIT_COMMIT}
${env.GIT_SHORT_STAT}
written by ${env.GIT_LATEST_COMMIT_AUTHOR}
<${env.GIT_COMPARE_URL}|Compare against previous build>
More Details <${env.BUILD_URL}|here>
			      """,
			      channel: 'front-office'

        }
      failure {
         slackSend color: 'danger',
	    	              message: """
	Build ${env.BUILD_NUMBER} Failed for ${env.JOB_NAME}. 
	changes: <${env.RUN_CHANGES_DISPLAY_URL}|here>
	Latest commit: <${env.GIT_REPO_URL}/commit/${env.GIT_COMMIT}|${env.GIT_LATEST_COMMIT_MESSAGE}>
	${env.GIT_SHORT_STAT}
	written by ${env.GIT_LATEST_COMMIT_AUTHOR}
	<${env.GIT_COMPARE_URL}|Compare against previous build>
	More Details<${env.BUILD_URL}|here>
			       """,
			       channel: "front-office"

      }
}
}

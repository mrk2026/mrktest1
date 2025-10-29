pipeline {
    agent any

    environment {
        PLAYWRIGHT_TEST_DIR = 'Tests'
        REPORT_DIR = 'playwright-report'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat "npx playwright test --reporter=html --headed"
            }
        }

        stage('Archive Reports') {
            steps {
                archiveArtifacts artifacts: "${REPORT_DIR}/**", allowEmptyArchive: true
            }
        }
    }
}

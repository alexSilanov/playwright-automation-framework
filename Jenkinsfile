pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS2290') {
                    bat '''
                        echo === INSTALL DEPENDENCIES ===
                        call npm ci

                        echo === INSTALL PLAYWRIGHT ===
                        call npx playwright install

                        echo === RUN TESTS ===
                        call npm run test
                    '''
                }
            }
        }

        stage('Reports') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}

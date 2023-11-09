# firewall-web-app
Firewall Cafe web app

# Installation

Install [node](https://nodejs.org/en/download) and [nvm](https://github.com/nvm-sh/nvm).

When you have install nvm, navigate to the root of this project and run `nvm use`. Install version 16 if necessary when prompted.

Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable). Navigate to the root of this project and run `yarn dev`.

Visit http://localhost:3000/

# Deployment
https://fwc-2023.ue.r.appspot.com/

Please let the codeowner know which emails need permission to access GAE, the service where the app is hosted.

Install the [Cloud SDK](https://cloud.google.com/sdk?hl=en) and set the project to the current Firewall GCP project name.

Navigate to the root of the project and run `gcloud app deploy`.

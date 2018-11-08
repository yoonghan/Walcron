# Walcron's own nodeJS

# Installation
Run
```
  npm install
  npm install --only=dev
```
If there are missing webpack installation, manually execute 'npm install next'

# Deployment into AWS Elasticbeanstalk
1. Check that the start port is 8081.
2. Check that 'npm install' and 'npm start' can be triggered.
3. Go to Configuration->Software to add "Environment Properties" with NODE_ENV=production and PORT=8081
4. Go to Configuraiton->Software to add "Node Command" with "npm start", and not default server.js

# Deployment from Windows server to Unix System.
1. After npm build, look for "\\" in folders .next\**\*.json.
2. Replace all folders with "\\" with "/".
3. Deploy into servers, e.g. AWS and so on.
4. Make sure NODE_ENV is case sensitive.

## Enhance Image performance.
Install magickImage and execute the command:
```
export FILE=bg-pattern.gif
magick convert $FILE -strip -sampling-factor 4:2:0 -quality 85 -colorspace sRGB $FILE
```

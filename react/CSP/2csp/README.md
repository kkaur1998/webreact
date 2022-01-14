In this course, we will learn ReactJS by exploring the implementations of the business requirements of an application called Customer Service Portal.

Steps to be followed for the deployment of case study in local machine

1. Install node.js from Node.js official site

2. Download case study folder from this link - React CaseStudy

3. Open a node.js command prompt and navigate to the folder where the case study is downloaded. And execute the command npm install which installs all the required packages

After step 3, install the json-server manually by running the below command 

npm install json-server -g
4. Open the 2nd node.js command prompt and navigate to the same folder. And start the json server by running the command 

json-server --watch db.json --port 4000
5. Once the installation is done, execute the below command to start the application
In this course, we will learn ReactJS by exploring the implementations of the business requirements of an application called Customer Service Portal.

Steps to be followed for the deployment of case study in local machine

1. Install node.js from Node.js official site or from Software House

2. Download case study folder from this link - React Casestudy

3. Installing the required packages:

Note: Installing the npm modules is prevented if your machine is connected to the Infosys network. To bypass that set the proxy as follows from the node.js command prompt

D:\> npm config set registry https://infyartifactory.ad.infosys.com/artifactory/api/npm/npm
D:\> npm login
 

4. Open node.js command prompt and navigate to the folder where the case study is downloaded. And execute the below command

npm install
The above command installs all the required packages

After step 4, install the json-server manually by running the command 

npm install json-server -g
5. Open the 2nd node.js command prompt and navigate to the same folder. And start the JSON server by running the below command

json-server --watch db.json --port 4000

The json-server will run in 4000 port

6. Once the installation is done, execute the below command to start the application

npm start
7. The application will run in the 3000 port.
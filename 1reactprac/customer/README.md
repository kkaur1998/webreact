React JS is a JavaScript library for creating user interfaces, making development of UI components easy and modular.

---------------------------------------------------------------------------------------------------
#Files-                               Purpose
----------------------------------------------------------------------------------------------------
node_modules                         All the node module dependencies are created in this folder
public                               This folder contains the public static assets of the application
public/index.html                    This is the first page that gets loaded when we run the application
src                                  All application related files/folders are created in this folder
src/index.js                         This is the entry point of the application
package.json                         Contains the dependencies of the React application
------------------------------------------------------------------------------------------------------

The key features of React are:

Component-based: Components are the smallest unit in a React application. Anything that we want to render is rendered through components. Components help in maintainability and 
Virtual DOM: React uses virtual DOM concept for DOM manipulation which improves the performance of the application
Unidirectional data flow:  React’s one-way data flow (also called one-way binding) keeps everything modular and fast and easy for debugging.
JSX syntax: React used JSX syntax which is similar to XML and HTML syntax which makes it easy for writing markup and binding events in components 
SEO performance: The SEO performance can be improved using the server-side rendering concept. We can develop isomorphic applications using React which increases the SEO performance.
 
-------------------------------------------------------------------------------------------------------

Angular is one of the popular frameworks used for UI development. Let us compare React and Angular in brief:

React

Angular

React is a small view library                          |Angular is a full framework 
React covers only the rendering and event handling part|    Angular provides the complete solution for front-end development
Presentation code in JavaScript powered by JSX         |    Presentation code in HTML embedded with                                                      with JavaScript expressions
React's core size is smaller than Angular(so fast)	   |    Angular being a framework contains        z                                                         lot    of code, resulting in longer load time
React is very flexible	                               |    Angular has less flexibility
Great performer, since it uses Virtual DOM	           |    Angular uses actual DOM which affects its performance
 
 -----------------------------------------------------------------------------------------------------

 ReactDOM.render is used to render an element or component to the virtual DOM.
The first argument specifies what needs to be rendered
The second argument specifies where to render.
The root element is present inside index.html
------------------------------------------------------------------------------------------------------

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
------------------------------------------------------------------------------------------------------
React components are the fundamental unit of any React application. They are capable of encapsulating data and view as a single unit. These components can work in conjunction with each other.

Components make code reusable, testing easy, and can take care of separation of concerns.

The capability of creating own components is a major productivity boost to any web application development. 

Here, in ReactJS, components reside in virtual DOM and these components will be available as nodes in actual DOM.

 
*************************picture - 1component.png-***********************************
 


 

Before discussing the creation of components, let’s discuss what is Virtual DOM and why React uses Virtual DOM.

Virtual DOM is an abstraction of actual DOM, where components are the nodes. We can programmatically modify virtual DOM by updating components. These updates are internally handled by React and in turn, updated in actual DOM.

As we all know, DOM manipulation is expensive, because it requires traversal through entire DOM tree to find the element to be updated. If these updates are very frequent, this leads to a poor performance of an application.

Different frameworks handle above scenario in different ways like dirty checking, data-binding etc.

React, rather than updating DOM directly, builds an abstract version of it called Virtual DOM.
-----------------------------------------------------------------------------------------------



Below diagram illustrates the working of virtual DOM:

        ********** 2component.png*********************

 

* Whenever any updates happens in the application, the virtual DOM gets modified. React computes the difference between the previous virtual tree and the current virtual tree

*Based on these differences React will figure out how to make updates to the actual DOM efficiently

*React does all the computations in its abstracted DOM and updates the DOM tree accordingly

*Virtual DOM enhances performance and efficiency by minimizing expensive updates in the actual DOM

*Hence React is said to be a great performer because it manages a Virtual DOM


--------------------------------------------------------------------------------------------

In our case study-customer service portal, we can identify below components:

Login:
Purchased Items:
Product Details:
  
Lets now learn how to create components.

------------------------------------------------------------------------------------------
How to create a React component?

We can create a component by extending React.Component class which is as per the ES6 specification.
Let's see how to create the App component.

 

App.js:


import React from 'react';       
class App extends React.Component { 
    render() {
        return React.createElement("h1", {}, "Hello World!!!");
    }
}
export default App;

*App - The component name should be in Pascal Casing
*render() - method will render the component’s elements
*React.createElement - helps to create an element in plain JavaScript
In the above code, React.createElement("h1", {}, "Hello World!!!");
 h1 - is the HTML element to be used
{ } - Attributes of an element can be mentioned
"Hello World!!!" - Content to be appended to the h1 element

*export default App - App component has to be exported so that it could be used in any other files

-----------------------------------------------------------------------------------------------

DEMO OF REACT COMPONENT


Highlights:

Creation of component

Rendering a component

Demo steps:

1. Create App component in App.js and create an element to render "Hello World" in the heading format as shown below:

import React from 'react';
class App extends React.Component {
  render() {
    return React.createElement("h1", {}, "Hello World");
  }
}
export default App;
2. In main.js, render AppComp using the ReactDOM.render method as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

 

3.  Observe the below output:

-----------------------------------------------------------------

WHY JSX



Let us understand the need of JSX by taking the below example:

Code using pure JavaScript:

class App extends React.Component{
         render(){
                  return (
                          React.createElement('form', {},
                          React.createElement("h1", {}, "Login"),
                          React.createElement('input', {type: 'text',placeholder:'Name', value: '',}),
                          React.createElement('br', {}),React.createElement('br', {}), 
                          React.createElement('input', {type: 'password', placeholder: 'password',
                                               value: '',}), 
                          React.createElement('br', {}), React.createElement('br', {}), 
                          React.createElement('button', {type: 'submit'}, "Login"))
                         )
                }
};
                          
export default App;
 

We can observe from the above code, that we need to write more lines of JavaScript code to implement the Login component. The Code looks difficult to understand and hence productivity goes down.

JSX has been introduced in React to create elements that are very easy to read and write, which makes the component's code simple and understandable.

Let us see how to write the same above Login component using JSX in a easier way:

class App extends React.Component{
              render(){
                       return (<form><h2>Login</h2>
                                     <input type="text" placeholder="Name" /><br/><br/>
                                     <input type="password" placeholder="password" /> <br/><br/>
                                     <input type="submit" nvalue="log" />                 
                                </form>);
                       }
};
export default App;
 

This technique is a replacement for writing pure JavaScript code and hence enhances productivity.

------------------------------------------------------------------------------------------------

JSX is a special syntax introduced in ReactJS to write elements of components. It is syntactically identical to HTML and hence it can be easily read and written. Code written using JSX helps in visualizing the DOM structure easily.

 

We can modify the demo-1 using JSX as follows:

class App extends React.Component {
    render() {
        return <h1> Hello World </h1>	                        
    }
}
export default App;
 

As the browser does not understand JSX code, this gets converted to JavaScript using the plugins of the babel.

 

Conversion of JSX to JavaScript happens as shown below:

******************************pic 1jsx.png*******************
------------------------------------------------------------------------------


When working with React components, we may need to render multiple React elements. For example, let us consider the below code where we need to render multiple React elements:

class App extends React.Component {
      render(){
      	       return  <h3>ReactJS:</h3>
                       <img src="./image/react.PNG" width="120" height="120"/>
                       <p> React is a JavaScript library for creating User Interfaces.</p>
                      
   	       }
}
The above code logs an error saying "Adjacent JSX elements must be wrapped in an enclosing tag".  As per the JSX syntax, all the adjacent elements must be wrapped in an enclosing tag i.e. there should be only the outermost element. Hence the above code can be modified as follows:

class App extends React.Component {
      render(){
      	       return  <div>
                           <h3>ReactJS:</h3>
                           <img src="./image/react.PNG" width="120" height="120"/>
                           <p> React is a JavaScript library for creating User Interfaces.</p>
                       </div>
   	       }
}
 

By adhering to JSX syntax we use <div> for grouping the elements and this introduces an extra and unnecessary node into the DOM. As a solution to this, React Fragments are introduced which is a common pattern in React for a component to return multiple elements. React Fragments allows us to group a list of React elements without adding any extra node to the DOM.

Let us modify the previous code as follows using React Fragments:

class App extends React.Component {
      render(){
      	       return  <React.Fragment>
                           <h3>ReactJS:</h3>
                           <img src="./image/react.PNG" width="120" height="120"/>
                           <p> React is a JavaScript library for creating User Interfaces.</p>
                       </React.Fragment>
                      
   	       }
}


----------------------------------------------------------------------------------

CONDITIONAL RENDERING


Let us see, how to render the content conditionally.

In any web application, we may require to show and hide any content based on some condition. For example, if admin is logged in to an application it should display a message saying "Welcome" else it should display saying "Please Login". Similarly, displaying the list of products based on its availability. 

To achieve these requirements, the if-else or ternary operator can be used for conditional rendering.

Using if-else:

class App extends React.Component {
      
       render() {
               let isLoggedIn = true
               if(isLoggedIn) {
                       return <h2>Welcome Admin</h2>
                }
               else{
                        return <h2>Please Login</h2>
               }    
       }
}
 

The above code can also be written as shown below:

class App extends React.Component {
      
       render() {
               let element = null;
               let isLoggedIn = false
               if(isLoggedIn) {
                       element = <h2>Welcome Admin</h2>
                }
               else {
                        element = <h2>Please Login</h2>
               }  
               return (<React.Fragment>
                       {element}
               </React.Fragment>)  
       }
}
export default App;
 

Using ternary operator:

class App extends React.Component {
       render() {
               let element = null;
               let isLoggedIn = false
               isLoggedIn ? element = <h2>Welcome Admin</h2> : element = <h2>Please Login</h2>
               return (<React.Fragment>
                       {element}
               </React.Fragment>)  
       }
}
 
----------------------------------------------------------------------------------
Let us see how to render lists in React, using map() method.

class App extends React.Component {
       render() {
                var employees = [
                  { empId: 1234, name: 'John', designation:'SE' },
                  { empId: 4567, name: 'Tom', designation:'SSE'},
                  { empId: 8910, name: 'Kevin',designation:'TA'}
                ]
               
               return (<React.Fragment>
                       <table style={{width:'60%'}} className='table'>
                            <thead className="thead-light">
                                <tr>
                                     <th>EmpID</th>
                                     <th>Name</th>
                                     <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {employees.map(employee => {
                                        return (<tr>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>)
                                })
                                }
                            </tbody>
                       </table>
               </React.Fragment>)  
       }
}
export default App;
The above code provides a warning in the console as shown below

                   **************picture 4warning.png***********************

To overcome the above error, we have to provide a unique key to each element in an array as shown below:

<tbody>
    {employees.map(employee => {
        return (<tr key={employee.empId}>
            <td>{employee.empId}</td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
         </tr>)
     })
     }
</tbody>
Every item in an array will be rendered in <tr>, hence provided a key to <tr> tag in the above code.


-----------------------------------------------------------------------------


Highlights:

Usage of ternary operator for conditional rendering

Usage of map function for looping

Demo Steps:

1. Create App component within App.js file as shown below

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
       render() {
                var employees = [
                  { empId: 1234, name: 'Jack', designation:'SE', salary:23000},
                  { empId: 4567, name: 'Johnson', designation:'SSE', salary:15000},
                  { empId: 8910, name: 'Sachin',designation:'TA', salary:30000}
                ]
               
               return (<React.Fragment>
                       <table style={{width:'60%'}} className='table'>
                            <thead className="thead-light">
                                <tr>
                                     <th>EmpID</th>
                                     <th>Name</th>
                                     <th>Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {employees.map(employee => {
                                       return employee.salary > 15000 ? (<tr key={employee.empId}>
                                                <td>{employee.empId}</td>
                                                <td>{employee.name}</td>
                                                <td>{employee.designation}</td>
                                        </tr>) : null
                                }) 
                                }
                            </tbody>
                       </table>
               </React.Fragment>)  
       }
}
export default App;
2. Render App component to the DOM in the index.js file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
The output of the above code is 
-------------------------------------------------------------------------------------



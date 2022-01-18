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

*************************STYLING ((((((components))))))
Look at the below component which renders an heading and a button.



In the above component, as we have not applied any styles, it is not attractive.

We can make the above component more attractive by applying styles. In React, we can apply the styling using CSS or any styling libraries/frameworks like bootstrap, react-bootstrap, material UI etc.

--------------------------------------------------------------------------------------------
Let us see how to use CSS inline styling to style React components.

In React, components will have inline styles and it should be specified as an object as shown below

<h1 style={{color:'green'}}>Welcome to React</h1>
The CSS properties has to be mentioned within an object and the object has to be provided as a value to the style property within an expression. The 2 pairs of curly braces are used, where the first pair is the object with style properties and second pair is the JSX expression specified to the style property.

When we have CSS properties with multiple words like background-color, font--family etc, in React, those properties should be camelCased by removing hypen as shown below.

<h1 style={{color:'green',fontFamily:'verdana'}}>Welcome to React</h1>
 
------------------------------------------------------------------------------------------------
If you want to apply a style using CSS file, then you have to import the CSS file.

If you observe the folder structure of create-react-app, you can see that there is an index.css file



The index.css file is imported in the index.js file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
So any styling written in the index.css file can be used in our components.

Remove the styling provided in the index.css file and add below code

body {
  background-color:lightgrey;
}

 Now run the application, you can observe the background-color is grey when App component is rendered, as shown below



index.css is like a global CSS file for the application, any styling that is written within that file will be applied to all the components, since it is imported within the index.js file

If you want to create a specific CSS file for your component, create a css file and import the CSS file only within that component.

-------------------------------------------------------------------------------------------------

The CSS class can be applied to any JSX element using className attribute as shown below

<h1 className="highlight">Heading</h1>
Modify the CSS file App.css within the src folder and create a class button within App.css file as shown below

.button {
  background-color:blue;
  color:white;
  border-radius:10px;
  width:100px;
  height:30px;
}
Import the App.css file within the App component and apply the button class to the button element as shown below

import './App.css';
<button className="button">Submit</button>

-------------------------------------------------------------------------------------------------------

To style components using the bootstrap library, we need to install the bootstrap library

npm install bootstrap 
Once you install bootstrap, the bootstrap CSS file will be present within the node_modules folder 



import the bootstrap CSS file within the AppComp component and apply the bootstrap btn btn-success class to the button as shown below

import 'bootstrap/dist/css/bootstrap.min.css';
<button className="btn btn-success">Submit</button>

If you are using the js file of Bootstrap then import the bootstrap js file but before that install jQuery, as the bootstrap JavaScript depends on jQuery

---------------------------------------------------------------------------------------------


React-Bootstrap is a library of re-useable front-end components. We can have the look-and-feel of Twitter Bootstrap, but with much cleaner code, via Facebook's React JS framework.

React-bootstrap can be installed by running the below command 

npm install react-bootstrap bootstrap.
Whenever any react-bootstrap component is used in an application, the corresponding react-bootstrap library should be imported

For example, if react-bootstrap button is created, then the corresponding bootstrap library should be imported as follows:

import Button from 'react-bootstrap/Button';
<Button variant="warning"> Click here </Button>
 
 -----------------------------------------------------------------------------------------------



Material-UI is a popular React UI framework which provides various components and themes for styling React components.

Material-UI can be installed by running the below command

npm install @material-ui/core
Whenever any Material-UI component is used in an application, the corresponding Material-UI library should be imported. For example to style buttons Material-UI provides Button component, which has to be imported from @material-ui/core/Button library. The components provided by Material-UI would be present inside node_modules



import Button from '@material-ui/core/Button';
 ---------------------------------------------------------------------------------------------------

Material-UI is designed considering Roboto font. By default, Material-UI will not load Roboto font.

We have to include Roboto font using the CDN link inside the index.html file as shown below

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
Then import Typography component and use it within React component. We can display various typography variants like h1,h2,subtitle,body,caption using variant attribute as shown below

<Typography variant="h4" gutterBottom>Welcome to React</Typography>
gutterBottom adds a margin-bottom of 0.35em.

-------------------------------------------------------------------------------------------------

Highlights:

Use CSS inline styling 

Use CSS classes

Demo Steps:

1. Modify the App.css file as shown below

.button {
  background-color:blue;
  color:white;
  border-radius:10px;
  width:100px;
  height:30px;
}
2. Modify the AppComp component as shown below

import React from 'react';
import './App.css';
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1 style={{color:'green',fontFamily:'verdana'}}>Welcome to React</h1>
                       <button className="button">Submit</button>
               </React.Fragment>)
       }
}
export default AppComp;
3. Render the AppComp component in index.js file 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

The AppComp component will be styled as shown below

--------------------------------------------------------------------------------------------

Highlights:

Styling the components using bootstrap library

Demo Steps:

1. Modify the AppComp component as shown below

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1>Welcome to React</h1>
                       <button className="btn btn-success">Submit</button>
               </React.Fragment>)
       }
}
export default AppComp;
 2. Render the AppComp component inside index.js file

The AppComp component is styled as shown below

-----------------------------------------------------------------------------------------

Highlights:

Styling the components using react-bootstrap library

Demo Steps:

1. Modify the AppComp component as shown below:

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1>Welcome to React</h1>
                       <Button variant="success">Submit</Button>
               </React.Fragment>)
       }
}
export default AppComp;
 2. Render the AppComp component inside index.js file

 

The AppComp component is styled as shown below:



 ----------------------------------------------------------------------------------------------------

Highlights:

1. Style the components using the Material-UI library

Demo Steps

1. Modify the AppComp component as shown below

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <Typography variant="h4" gutterBottom>
                                Welcome to React</Typography>
                       <Button variant="contained" color="primary">Submit</Button>
               </React.Fragment>)
       }
}
export default AppComp;
2. Include Roboto font CDN link within index.html file as shown below

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#EC3224" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>

3. Render AppComp component within index.js file as shown below

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

The AppComp component is styled as shown below

----------------------------------------------------------------------------------------
Problem Statement:

Style the Defect Tracker Application as per the below screenshot provided below using bootstrap 

 ---------------------------------------------------------------------------------------------
 ------------------------------------------------------------------------------------------------
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 -----------------------------------------------------------------------------------------------

 ************************************PROPS AND STATS****************************************

 Let's have a look at the below Product component. We can notice that the product details are hardcoded.

 

Product component:

  class Product extends React.Component{
                render(){
                         return(<div>
                                     <div className={"thumbnail"}>
                                     <img src = ”Images/Laptop.jpg” class="img img-rounded img-responsive"/>
                                     <div class = "caption" style="text-align:center">
                                          /* Hardcoded value for a product */
                                         <a href = ”/productDetails”}> <h3> Gamia Laptop </h3></a> 
                                         <h4><span style = "color:red">Rs. 33000</span></h4>
                                         <p>An excellent choice for an awesome gaming experience.</p>}
                                         <Rater />
                                         <span style = "fontSize:9px">3/5</span>
                                     </div>
                                     </div>
                                 </div>);
                         }
    }



In a real-time application, we will be retrieving data from the server and will be passed as an array to components.

In order to bind the retrieved data to the component, we need two JS objects i.e. props and state.

In this module, lets understand the concept of props and state to handle the data in our application.
-----------------------------------------------------------------------------------------

What is State?

The state is an initial value set for a component, which is used for interactivity.

Let's see how to set the state of a component.

Using constructor, the state of a component is created and initialized using this.state as follows:

Syntax:

 constructor() {
     super();
	 this.state = { counter: 1 };
}
 

In the above code, the state 'counter' is set to 1 and 'counter' would be accessed as this.state.counter.

As the user-defined component extends React.Component, it becomes a child component of it. Hence, whenever a child component has a constructor, it has to call the parent class's constructor using the super() method. And super() method should be the first statement within a constructor.


---------------------------------------------------------------------------------------

Now let's create a Timer component where on clicking a button, the timer starts.

Below is the implementation to start the timer:

When a button is clicked, by invoking the handleClick() method - set the interval and pass it to start() method.

handleClick(e) {
       this.interval = setInterval(this.start, 1000);
}
 

In start() method, for every second, state will be updated using setState() method. Whenever setState() is called, it calls render() method to render the updated value on UI.

start() {
      this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
}
 
---------------------------------------------------------------------------------------

When an event occurs in the component, we will update the state of the component using the setState() method inside the event handler method as shown below:

class Timer extends React.Component {
    constructor() {
        super ()
        this.state = {
            counter: 0
        }
    }
    handleClick(e){
        this.setState({counter:this.state.counter+1})
    }
    render() {
        return(<React.Fragment>
            <h2> Seconds Elapsed: {this.state.counter} </h2>
            <button onClick = {this.handleClick}> Increment Counter </button>
        </React.Fragment>)
    }
}
When we run the above code and click on the increment counter button, it throws an error as shown below:



The above error is because this keyword is not pointing to the component

This error can be resolved using the arrow functions as shown below.

handleClick = (e) => {
    this.setState({counter:this.state.counter+1})
}
Now we would get the output as shown below after clicking on the increment counter button



---------------------------------------------------------------------------------------

 

setState() is asynchronous:

 

Consider the below code snippet to understand how setState() is asynchronous:

class App extends React.Component {
        constructor() {
                super()
                this.state = {
                        quantity: 0,
                        price:0
                }
        }
        update = () => {
                this.setState({quantity:5})
                        if(this.state.quantity == 5) {
                                this.setState({price:2000-100})
                        }
        }
        render() {
               return(<React.Fragment>
                        <h1>{this.state.quantity}</h1>
                        <h1>{this.state.price}</h1>
                        <button onClick={this.update}>Update</button>
                </React.Fragment>)}
               
}
In the above code snippet, the price is updated based on quantity. 

When we run the above code and click on the update button, below is the output we get:



The price is not updated in the above screenshot. This is because setState() is asynchronous, the price gets updated before quantity gets updated. 

To overcome the above problem, we can pass a callback function to the setState() method as shown below:

 update = () => {
                this.setState({quantity:5},()=>{
                        if(this.state.quantity == 5) {
                                this.setState({price:2000-100})
                        }
                })
        }
Now, the price gets updated after the quantity is updated. 

When we run the above code and click on the update button, the output is:


-------------------------------------------------------------------------------------------

*********************************************8Demo: State*************************************

Highlights:

Handling data in a component

Making component interactive

Usage of state

Demo steps:

Create a component to start the timer:

1. Create a component Timer inside the Timer.js file as shown below:

import React from 'react';
class Timer extends React.Component {
        constructor() {
            super();
            this.state = {
                secondsElapsed: 0
            };
        }
        start = () => {
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1
            });
        }
        handleClick = (e) => {
            this.interval = setInterval(this.start, 1000);
        }
        render() {
            return ( <React.Fragment><br/><br/>
                <button onClick = {this.handleClick}>Start timer</button><br/><br/>
                <h2> Seconds Elapsed: 
                    {this.state.secondsElapsed} 
                </h2> 
                </React.Fragment>);
            }
        }
export default Timer;
 

2. Render Timer component to the DOM within the index.js file as shown below

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer />, document.getElementById('root'));
serviceWorker.unregister();

 

3. Observe the below output:

 
 ----------------------------------------------------------------------------------------------

 Key points to be remembered while handling data in a component:

 

States are mutable and only used on top level component

They are reserved only for interactivity and component's event handlers may change to trigger a UI update

The state will be set with a default value when component mounts and will mutate in time based on user events generated

 

------------------------------------------------------------------------------------

****************************************How to use props*******************************

In this section, let us understand how to pass data between components. 

When we want to pass any data from one component to another component, it is passed as a prop.

Props allow us to pass data from one component to another component

Props are immutable - a component cannot change its props however it is responsible for putting together

Props can be accessed as this.props

 

How to use props?

Let's now learn how to pass data to a component:

    <App initial = {10} />

Here, we are passing a property 'initial' with a value '10', to a component App.

In the component App, this property would be accessed as this.props.initial

-------------------------------------------------------------------------------

If we want to access props within constructor as shown below:

 constructor() {
      super()
      console.log(this.props.name)
}
 

We get the below error:



 

In order to access props within the constructor, we need to pass props as an argument to both the constructor() and super() as shown below:

constructor(props) {
    super(props)
    console.log(this.props.name)
}





------------------------------------------------------------------------------------------------------

Highlights:

Passing data

Accessing data

Demo steps:

Create 2 components as mentioned below:

1. Timer - It holds state and handles button click

2. Resultant - It takes result from Timer component and displays it

 

1. Modify Timer component as shown below:

import React from 'react';
class Timer extends React.Component {
    constructor() {
    super();
    this.state = {
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return ( <React.Fragment><br/>
                    <button onClick = {this.handleClick}>
                        Start Timer 
                    </button><br/><br/>
                    <Resultant new = {this.state.secondsElapsed}/> 
                </React.Fragment>);
            }
}
class Resultant extends React.Component {
    render() {
            return ( <div>
                        <h3> Seconds Elapsed: {this.props.new} </h3> 
                    </div>);
                }
}
export default Timer;
As we want to display result from Resultant component, we are passing state (which holds result) to Resultant component.

When data is passed from parent component to child component, it becomes property of child component

These properties are immutable and are accessible as this.props.new in Resultant component

 

2. Render Timer component to the DOM within index.js as shown below

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
serviceWorker.unregister();

 

3. Observe the below output:

 



 -------------------------------------------------------------------------------------------

 In the previous section, the way we passed the data explains about passing data from parent to child component. Similarly, we can also pass data from the child to the parent component. If the child component wants to send data to the parent component, it can send it by invoking a function that is passed as props from the parent component.

Let us understand by taking the below example:

Consider the below parent component 

import React from 'react';
import Child from './Child';
class App extends React.Component {
        constructor() {
          super()
          this.state = {
            name: 'John'
          }
        }
        update = (value) => {
         let newValue = value;
         this.setState({name:newValue})
        }
        render() {
          return ( <React.Fragment>
            <h1>{this.state.name}</h1><br/><br/>
            <Child nameValue={this.state.name} update={this.update}/>
          </React.Fragment>)
        }
      }
export default App;
 

The Parent component contains the state 'name', which gets updated in the child component as shown below:

import React from 'react';
class Child extends React.Component {
    constructor() {
        super()
        this.state = {
            nameValue:null
        }
    }
    handleChange = () => {
        let newValue = 'Jack'
        this.setState({nameValue: newValue})
        this.props.update(newValue)
    }
    render() {
        return(<React.Fragment>
            <button onClick={this.handleChange}>Change</button>
        </React.Fragment>)
    }
}
export default Child;
In the child component on clicking of the change button, the value of the state 'nameValue' changes to 'Jack' and the same value is sent to the parent component by calling the update() method from Child component as this.props.update(newValue).

The update() method is a prop passed to the Child Component.

The Parent component gets the updated value from the child and updates its state.



----------------------------------------------------------------------------------------

In the previous module, we have discussed the need for state, props, and passing data between components through demos. We can categorize components as 2 types:

1. Functional Component:

Created as a simple JavaScript function

It just returns the valid JSX

The functional component can be created as follows:

function Resultant(props){
return (
        <h3> New Result: {props.new} </h3>
       )
}
Props passed to the functional component, can be accessed as just props followed by name of the prop i.e. props.new

2. Class Component:

Created as a class component

It encapsulates interaction logic as well as renders data

class App extends React.Component {
        render() {
          return (
               /* return JSX elements */
         )
        }
 }
 
 ----------------------------------------------------------------------------------------------

 Highlights:

Creating a Functional component
Accessing props within the functional component
Demo steps:

Revisiting the Props Demo with the below changes:

The Resultant component is written as a functional component

1. Modify the Timer component as shown below:

import React from 'react';
class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return (<React.Fragment>
                <button onClick = {this.handleClick}> 
                    Start Timer 
                </button> 
                <Resultant new = {this.state.secondsElapsed}/> 
            </React.Fragment>);
    }
}
function Resultant(data) {
            return ( <h2> 
                Seconds Elapsed: {data.new} 
            </h2>
        )
}
export default Timer;
 

2. Render Timer component to the DOM within index.js file as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
serviceWorker.unregister();
 

 -----------------------------------------------------------------------------------------

 Let's see how to access child nodes of a component.

 

Consider an AppComp which has child nodes as shown below:

<AppComp>
        <li> List element </li>
        <h4> Heading element </h4>
        <p> Paragraph element </p>
        <span> Span element </span> 
<Appcomp />
 

To access these child nodes of a component, React uses this.props.children.

React.Children provide utilities to deal with this.props.children.

React.Children.map can be used to iterate this.props.children as follows:

    React.Children.map (this.props.children, function fn (arg) { })
 

Function fn() will be invoked on every immediate child contained within children. If children is null or undefined, fn() returns null or undefined.

--------------------------------------------------------------------------------------------------------

********************************************Accessing child node*************************

Highlights:

Creating child nodes to a parent component

Accessing child nodes from parent

Demo steps:

Create a component to access child nodes of a component:

 

1. Create App component as shown below

import React from 'react';
var count = 1;
class App extends React.Component {
        render() {
                React.Children.map(this.props.children, () => {
                        console.log('child', count++);
                });
                return ( <ul> 
                                {this.props.children} 
                        </ul>)
        }
};
export default App;
2. Render App component to the DOM within index.js as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App>
      <li>List element</li>
      <h3>Heading element</h3>
      <p>Paragraph element</p>
      <span>Span element</span>
</App>, document.getElementById('root'));
serviceWorker.unregister();
 

3. Observe the below output:

                **********************5 out***********************



 -------------------------------------------------------------------------------------

 In this section, let us understand how to set a default value for a prop and validating its value.

We can set default values to the props using the defaultProps property as shown below:

Syntax:

AppComp.defaultProps = {
    element1 : "Hello",
	element2: "default value", 
}
 

In case there is no value passed to the prop and if it is being accessed within the component, then the default values will be considered.


Here, we need to mention to which component, we need to set the default values for props.

----------------------------------------------------------------------------------

As the application grows, there will be a lot of bugs with type checking. In some of the applications, we can use JavaScript extensions such as Typescript to type check the whole application. But here in React, it is providing some built-in typechecking abilities. To valid the props for a component, we can use propTypes property.

'propTypes' are used to validate props using different validators. For invalid value, a warning will be logged on the console.

Consider below code snippet for setting value for properties and validating it using PropTypes:

Setting a different set of default values for props for testing:

AppComp.defaultProps = {
                        array: [1,2,3,4,5],
                        boolean: false,
                        function: function(e){return e},
                        number: 23,
                        string: "React",	
                        emp: {
                              empName:"Roopashri",
                              empId: 681592,
                              unit: "ETA - UIM"
                             }
                       }
 

Validating these properties using PropTypes:

AppComp.propTypes = {
                     array: PropTypes.array,
                     boolean: PropTypes.bool,
                     function: PropTypes.func,
                     number: PropTypes.number,
                     string: PropTypes.string,
                     emp: PropTypes.object
                    }
For using propTypes, we need to install prop-types' library and import it in the required file.

-----------------------------------------------------------------------------------------------------

Highlights:

Setting default value for props

Using defaultProps()

Demo steps:

 

1. Create App component as shown below:

import React from 'react';
class App extends React.Component {
    render() {
      return(<React.Fragment>
                  <h1> {this.props.element1} </h1>
                  <h1> {this.props.element2} </h1>
              </React.Fragment>);
    }
}
App.defaultProps = {
    element1 : "Hello",
	  element2 : "World",
} 
export default App;
2. Render App component within the index.js file as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App element2="React"/>, document.getElementById('root'));
 

In this demo, the default value "Hello" will be taken for the prop element1, as we are not passing any value explicitly for it, and the value "React " will be taken for the element2 prop.

 

4. Observe the below output:



--------------------------------------------------------------------------------------

Highlights:

Validating props using PropTypes

Using different validators

Demo steps:

 

Create a component with properties defined for it and validate these props using PropTypes

 

1. Create App component as shown below:

import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
   render() {
      return (
         <React.Fragment>
            <h3>Array: </h3> <p>{this.props.array}</p>
            <h3>Boolean: </h3><p>{this.props.boolean ? "True" : "False"}</p>
            <h3>Function: </h3><p>{this.props.function(10)}</p>
            <h3>Number: </h3><p>{this.props.number}</p>
            <h3>String: </h3><p>{this.props.string}</p>
            <h3>Object: </h3><p>{this.props.emp.empName} <br/>
                        {this.props.emp.empId}< br/>
                        {this.props.emp.unit}</p>
         </React.Fragment>
      );
   }
}
App.propTypes = {
   array: PropTypes.array,
   boolean: PropTypes.bool,
   function: PropTypes.func,
   number: PropTypes.number,
   string: PropTypes.string,
   emp: PropTypes.object
}
App.defaultProps = {
   array: "John",
   boolean: false,
   function: function(e){return e},
   number: 23,
   string: "React",
	
   emp: {
         empName:"John",
         empId: 123456,
         unit: "Systems Engineer"
        }
}
export default App;
2. Render App component within the index.js file as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();

 

3. Observe the below output:

The data type of the array prop passed to the App component should be an array, but we are passing a string instead of an array

 
Observe the warning message logged when the invalid value is passed to the array props:



------------------------------------------------------------------------------------------------------

*******************************************Case study milestone 2******************************


Highlights:

Passing data to a component

Updating state

Demo steps:

 

Now we shall add data to Product and Rater components using props and state as follows:

Instead of hardcoding the values in the component, lets move the data to a separate JSON array as follows:

var data= [{
	        _id:123901239412,
	        pdtName: “Gamia Laptop”,
	        pdtPrice: “33000”,
            pdtDescription: “An excellent choice for an awesome gaming experience    
	        img: “Images/laptop.jpg”,
	        rating: “3”,
	        isDiscontinued:false
         }];
 

Let us create a parent component named ProductDetails and Product component. As we discussed props are used to pass the data from parent to child, here data will be passed to Product component from ProductDetails.

 

ProductDetails Component:

import React from ‘react’;
import Product from ‘./Product.js’;
class ProductDetails extends React.Component{
    constructor(props){
        super(props)
}
    render(){
        return <div>
<Product pid={item._id} 
         price={item.pdtPrice} 
name={item.pdtName} 
key={item._id} 
desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued}/>
</div>
    }
}
export default ProductDetails;
 

Let us see the changes to be made inside Product and Rater components after making the above changes:

 

Product component:

import React from 'react';
import Rater from './Rater.js';
class Product extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className={"thumbnail"}>
          <img src={this.props.img} class="img img-rounded img-responsive"/>
          <div class="caption" style="text-align:center">
            <a href=”/productDetails”}><h3> {this.props.name} </h3></a>
              <h4><span style="color:red"> Rs.{this.props.price} </span></h4>
              {this.props.status ? <h5 style={{"color":"red","font-weight":"bold"}}>The product is discontinued.</h5> :
              <p className={"description"}>{this.props.desc}</p>}
              <Rater value={this.props.rating} maxlength="6"/>&nbsp;&nbsp;
              <span style={{"fontSize":"9px"}}>{this.props.rating}/5</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;
 

Rater component: 

import React from 'react';
class Rater extends React.Component {
  render() {
    var items = [];
    for (var i = 1; i < this.props.maxlength; i++) {
      var clickHandler = this.props.onSelected && this.props.onSelected.bind(null, i);
      items.push(<li key={i} className={i <= this.props.value ? 'filled' : ''} onClick={clickHandler}>{'\u2605'}</li>)
    }
    return (
      <ul className="rating">{items}</ul>
    )
  }
}
export default Rater;
 

Now we have successfully added the props to the components. As we have static data, user cannot interact with it. In order to understand how to handle the dynamic data, let us create a new component as shown below:

 


 

In the above screenshot, component is just displaying the existing feedback rating and feedback form for providing feedback, which are not interactive.

But the Rater component, above the submit button is interactive.

Let us make it interactive by making the below changes:

Create a JSON array of feedback data:

var feedbackData = [{
    user:”khalid”,
    feedbackDetails:”Worst product. First of all    received very late. Forget about it.”,
    rating:”2”
}];
 

Add the FeedbackComp reference in ProductDetails component and modify render method of ProductDetailscomponent as follows:

    render(){
	     return <div>
                     <Product pid={item._id} 
                      price={item.pdtPrice} 
                      name={item.pdtName} 
                      key={item._id} 
                      desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued}/>
                      <FeedbackComp feedbacks={feedbackData} />
                  </div>
	       }
 

Create a new js page named FeedbackComp.js and include the below code. Import the necessary modules and components. Here we are initializing the latestFeedback state to just quotes inside the constructor

import React from ‘react’;
import Rater from ‘Rater.js’;
class FeedbackComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
              latestFeedback:"",
     rating:'5'
        };
}
    render(){
        return(
          //Component description.
);
}
}
export default FeedbackComp;

 

Component description is shown below:

render(){
      var items=[];
      this.props.feedbacks.forEach(function(fb){
      items.push(<div key={fb.pdtCode}><a href="#"><h4>{fb.user}</h4></a>
      <Rater value={fb.rating} maxlength="6" />
      &nbsp;&nbsp;<span style={{"fontSize":"9px"}}>{fb.rating}/5</span><br/><div>{fb.body}</div>
      <h6 style={{"fontStyle":"italic","color":"lightgrey"}}>-{fb.updatedAt.substr(0,10)}</h6>
      </div>)
    });
 

Here we are iterating through the feedbacks array and assigning the elements with values from the array. The output of this forEach operation is components array which will be added to the return statement of the FeedbackComp.

return(
        <div>
             {items}
             <div className={"form-group"}>
             <textarea className={"form-control"}   rows="5" cols="12" value={this.state.latestFeedback}
              name="username"></textarea>
            </div>
            <div>
                 <Rater value={this.state.rating} maxlength="6"/><span style={{"fontSize":"9px"}}/>
                 <span>{this.state.rating}/5</span>
           </div><br/>
           <button class="btn btn-primary">Submit Feedback</button
      </div>
);
}

As per the above updates, now user will be able to provide feedback and feedback rating.

-----------------------------------------------------------------------------------------------------------------

********************************Defect tracker ex-3******************************************

Problem Statement:

Continuing with the previous assignment, wherever we had the hard coded data, that should be used as state and props. 

Note 1: hardcode the priority and category value.


Developer view of Defect Tracker is shown below:

------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////////////////////////////
--------------------------------------------------------------------------------------------
-----------------React Component lifecycle method-----------------------------------------
--------------------------------------------------------------------------------------

Let's consider below Educator component which uses an array of JSON data assigned to a JavaScript variable course.

 

Code snippet:

var course = [{
             "Name": "Angular",
             "educator": "Khalid"
            },
            {
             "Name": "ReactJS",
             "educator": "Roopashri"
            },
            {
             "Name": "Ajax",
             "educator": "Krishna"
            }
          ]
class Educator extends React.Component {
               constructor(props){
		                   super(props);
		                   this.state = {crsData:course};
	                         }
               render(){
                        var users = this.state.crsData;
                        return(<div>
                                   <h4>UI Courses list</h4>
	                           <div> {users.map(function(userDetails){
                                   return (<div>
                                                <b>Course: </b>{userDetails.Name}, <b><br/>Educator: </b>
                                                {userDetails.educator} <br/><br/>
                                           </div>); })}
                                    </div>
		                </div>);
	                 }
}
export default Educator;

 

In the above example course data is hard coded in a component. But in real time examples, we may require to load data from server, for this we use Ajax.

Using Ajax, we can retrieve the data from server, but Ajax call cannot be made from render method of a component. And if we want to display this data on load of the page, we should make a call to server immediately after the component mounts to DOM.

But we will not be aware of, when the component mounts to DOM and when it is available for accessing.

In this scenario, we can use the component lifecycle methods of React that allows us execute actions at particular times.

Now let us discuss what are these lifecycle methods and how it helps us in different scenarios.

-------------------------------------------------------------------------------------------------
what are lifecycle method-------------------------


Every component will have following phases in its Lifecycle:

 Mounting phase - when the component is mounted to DOM tree

 Updating phase - when component is being updated with new state, new props are being received

 Unmounting phase - destroying component from DOM tree

Error Handling - Handling errors within React Component

 

Every phase in the lifecycle of a component has few methods which will be invoked during that phase of a component's lifecycle. We can override these methods to provide the desired functionality.

 

These methods can be used in the following cases:

For making an Ajax call, to set timer and to integrate with other frameworks

To avoid unnecessary re-rendering of a component

To update the component, based on the props changes

For clearing the values when component is unmounted

--------------------------------------------------------------------------------------------------
---------------------------Lifecycle Mounting Phase --------------------------------------------

At mounting phase of a component, following methods which will be invoked:

constructor()

static getDerivedStateFromProps()

render()

componentDidMount()

 

constructor(): Constructors are used only for the below 2 purposes which we have already seen in the state demo:

Initializing state of a component

For binding event handler methods to an instance

 

static getDerivedStateFromProps(): getDerivedStateFromProps() is invoked right before the render method. This method is called both in mounting and updating phase. 

 

render(): Every React component must have render() method. render() method should be a pure function which returns the same result every time it is called which means, it doesn't modify any component's state.

 

componentDidMount():

Invoked immediately after the component is mounted to DOM tree

Now will have access to all the DOM nodes hence any initialization which requires DOM nodes should be done here

Best place for setting timers and handling Ajax request


------------------------------------------------------------------------------------------------------------

getDerivedStateFromProps() is a static method. Since it is a static method, we cannot access 'this' keyword within this method. Hence we cannot call setState method. 

This method returns an object which will be the updated state and return null if there is no state update.

This method is used to update the state of a component based on the changes of the props as shown below

class Employee extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.isLoggedIn !== state.isLoggedIn) {
      return {
        isLoggedIn: props.isLoggedIn,
      };
    }
    return null;
  }
}
The above method introduces some complexity, hence it is rarely used.

----------------------------------------------------------------------------------------------

***********************DEMO- MOUNTING PHASE***********************************

Modify the Timer component by introducing lifecycle methods in it.

Here in this demo, Timer will start immediately after the component is mounted.

 

1. Modify the Timer component as shown below:

import React from 'react';
class Timer extends React.Component {
        constructor() {
            super();
            this.state = {
                secondsElapsed: 0
            };
        }
        start = () => {
            this.setState({
                secondsElapsed: this.state.secondsElapsed + 1
            });
        }
        componentDidMount() {
            this.interval = setInterval(this.start, 1000);
        }
        render() {
            return ( <React.Fragment>
                    <h2> Seconds Elapsed: {this.state.secondsElapsed} </h2>
                </React.Fragment>);
            }
        }
export default Timer;
2. Render Timer component to the DOM within the index.js file as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
serviceWorker.unregister();

 

3. Observe the below output:

 

The Timer will start as shown below, as soon as the component is mounted


----------------------------------------------------------------------------------
***********************Lifecycle method updating phase *******************************

At updating phase of a component, below methods are executed based on props or state being received and updates happens in a component:

static getDerivedStateFromProps()

shouldComponentUpdate()

render()

getSnapshotBeforeUpdate()

componentDidUpdate()

 

shouldComponentUpdate(nextProps, nextState):

Executed before rendering when new state or props are being received

By default it will return true by calling componentDidUpdate() method. If it returns false componentDidUpdate() method will not be invoked

In case we want to skip re-rendering, this method could be used by returning false, so this would skip re-rendering

This method only exists as a performance optimization

 

getSnapshotBeforeUpdate(prevProps, prevState):

Invoked right before changes are made to the DOM

It is recommended to return a value from this method which will be passed as a third parameter(as 'snapshot') to the componentDidUpdate()

Once the updates flushed to the DOM, immediately next lifecycle method will be invoked


componentDidUpdate(prevProps, prevState, snapshot):

Invoked immediately after the changes are updated

----------------------------------------------------------------------------------------------------------

getSnapshotBeforeUpdate(prevProps, prevState): This method is called immediately after the render and before the changes are uodated to the DOM.

One of the use case of this method is to save the scroll position in chat application

This method is the last chance to get the prevState and prevProps values before the component is updated. The method can return values based on the prevState and prevProps values.

getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.chats.length < this.state.chats.length) {
      const layout = this.layout.current;
      const isAtBottomOfChatWindow =
        window.innerHeight + window.pageYOffset === layout.scrollHeight;
      return { isAtBottomOfGrid };
    }
    return null;
}
The above method checks whether the user is at the bottom of the chat window. If so, then the user should be scrolled to the bottom of the chat window, when new messages comes up in the chat window.

If user is not at the bottom of the chat window, then keep them there. Hence we return null

The snapshot returned from getSnapshotBeforeUpdate method will be passed as a third argument to the componentDidUpdate method as shown below

componentDidUpdate(prevProps, prevState, snapshot) {
 
  if (snapshot.isAtBottomOfChatWindow) {
    window.scrollTo({
      top: this.layout.current.scrollHeight
    });
  }
}
In the componentDidUpdate method, we check whether user was at the bottom on chat window using snapshot argument. If yes, we scroll the user to the bottom of the new messages that has come.

----------------------------------------------------------------------------------------------------------

*********************************************Demo Updating Phase ******************************


Highlights:

Lifecycle methods usage at updating phase

Demo steps:

Add other lifecycle methods to Timer component and observe how the component will be updated:

Component will be updated only if the value is >3

 

1. Modify Timer component as shown below:

import React from 'react';
class Timer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    componentDidMount() {
        this.interval = setInterval(this.start, 2000);
    }
    render() {
        return ( <React.Fragment>
                    <Updates new = {this.state.count} /> 
                </React.Fragment>);
            }
        }
class Updates extends React.Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.new <= 3) {
            console.log('shouldComponentUpdate:', newProps);
                return false;
            } else {
                 return true;
            }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Previous value destroyed:', prevProps);
            console.log('Updated');
    }
    render() {
        return ( <React.Fragment>
                    <h2> Seconds Elapsed: {this.props.new} </h2> 
                </React.Fragment>);
            }
}
export default Timer;
2. Render Timer component to the DOM as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
serviceWorker.unregister();

 

3. Observe the below output: It is updating the value from 4

------------------------------------------------------------------------------------------------------

***************************LIfecycle method: Unmounting Phase**********************************

componentWillUnmount() method will be invoked immediately before a component is unmounted and destroyed.

This method is used at the unmounting process of a component

This is the place for performing any necessary cleanup. e.g: any subscription which was created in componentDidMount()

A component can be unmounted from DOM using ReactDOM.unmountComponentAtNode()

In the previous demo, componentWillUnmount() can be added in the Timer component and updated as follows:

 componentWillUnmount(){
                        console.log('Component WILL UNMOUNT!')
                        //clean up code
                        clearInterval(this.interval);
                       }
 

 ----------------------------------------------------------------------------------------------------------

 *******************************Demo Unmounting Phase********************************************
 Highlights:

Lifecycle methods usage at unmounting phase

Demo steps:

Revisiting the Updating Phase demo:

1.  Add componentWillUnmount() lifecycle method to Timer component

2. Component will be unmounted from DOM after 15 seconds and observe how componentWillUnmount() is used for code cleanup

1. Update Timer component as shown below:

import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    componentDidMount() {
        this.interval = setInterval(this.start, 2000);
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
        clearInterval(this.interval);
    }
    render() {
        return ( <React.Fragment>
                <Updates new = {this.state.count} /> 
            </React.Fragment>);
        }
    }
    class Updates extends React.Component {
        shouldComponentUpdate(newProps, newState) {
            if (this.props.new <= 3) {
                console.log('shouldComponentUpdate:', newProps);
                    return false;
                } else {
                    return true;
            }
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log('Previous value destroyed:', prevProps);
            console.log('Updated');
        }
        render() {
            return ( <React.Fragment>
                        <h2> Seconds Elapsed: {this.props.new} </h2> 
                    </React.Fragment>);
                }
}
export default Timer;
2. Render Timer component to the DOM and unmount the component after 15 seconds within the index.js file as shown below:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Timer/>, document.getElementById('root'));
setTimeout(() => {
    ReactDOM.unmountComponentAtNode( document.getElementById('root') );
   }, 15000);
serviceWorker.unregister();

The output of the above code is: 

------------------------------------------------------------------------------------------------------------

**********************************************error handling************************************


Error handling can be taken care in React using the below methods

static getDerivedStateFromError()  

componentDidCatch()

Error boundaries should be defined in order to catch errors occurring within the child components. Whenever a component crashes because of a JavaScript error, the error will be logged and fall back UI is displayed.

Error boundaries are nothing but class components which defines either getDerivedStateFromError or componentDidCatch method

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    render() {
        if (this.state.count > 5) {
            throw new Error('Count cannot be greater than 5 ')
        }
        return ( <React.Fragment>
                <h1>{this.state.count}</h1><br/>
               <button onClick={this.start}>Update</button> 
            </React.Fragment>);
        }
    }
 
The above component throws an error as shown below when the value of count is greater than 5



Here we will not be able to get to know, the error occurred in which component. 

In order to know the component tree, we need to define Error boundaries, as shown below

import React from 'react';
class ErrorHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info,
      });
    }
  
    render() {
      if(this.state.error) {
        return (
          <React.Fragment>
            <h5>Sorry. Counter value is greater than 5</h5>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo}
          </details>
          </React.Fragment>
        );
      }
      return this.props.children;
    }
  }
export default ErrorHandler;
The ErrorHandler is just a class component which implements the componentDidCatch method. The componentDidCatch method receives the error and info as arguments. 

error is the actual error message which tells the reason for the error and info contains stack trace of the error  

Now wrap the Timer component within the ErrorHandler component as shown below

ReactDOM.render(<ErrorHandler>
        <Timer/>
    </ErrorHandler>,document.getElementById('root'));
Now when the counter value is greater than 5, the error is displayed as shown below



The stack trace is also displayed in the console, where it logs the exact component where the error occurred


-------------------------------------------------------------------------------------------------------

If we render 2 components within a single error boundary as shown below

ReactDOM.render(<ErrorHandler>
        <Timer/>
        <Timer/>
    </ErrorHandler>,document.getElementById('root'));
In the above example, if there is an error in one component then both the components will crash since the error boundary is the same.

To prevent the above problem, we need to wrap each component with it's own error boundary.

ReactDOM.render(<div>
                    <ErrorHandler>
                        <Timer/>
                    </ErrorHandler>
                    <ErrorHandler>
                        <Timer/>
                    </ErrorHandler>
                </div>
,document.getElementById('root'));
 
 -------------------------------------------------------------------------------------------------------

***********************************error handling demo******************************************


Highlights:

Error handling using the componentDidCatch method

Demo Steps

1. Modify the Timer Component which throws an error as shown below

import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    start = () => {
        this.setState({
        count: this.state.count + 1
        });
    }
    render() {
        if (this.state.count > 5) {
            throw new Error('Count cannot be greater than 5 ')
        }
        return ( <React.Fragment>
                <h1>{this.state.count}</h1><br/>
               <button onClick={this.start}>Update</button> 
            </React.Fragment>);
        }
}
export default Timer;

2. Create an ErrorHandler component and implement the componentDidCatch method as shown below

import React from 'react';
class ErrorHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: false,
        errorInfo: null,
      };
    }
  
    componentDidCatch(error, info) { 
      this.setState({
        error: error,
        info: info,
      });
    }
  
    render() {
      if(this.state.error) {
        return (
          <React.Fragment>
            <h5>Sorry. Counter value is greater than 5</h5>
            <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo}
          </details>
          </React.Fragment>
        );
      }
      return this.props.children;
    }
  }
export default ErrorHandler;

3. Render the Timer Component within the ErrorHandler Component 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';
import ErrorHandler from './ErrorHandler';
ReactDOM.render(<ErrorHandler>
        <Timer/>
    </ErrorHandler>, 
document.getElementById('root'));
serviceWorker.unregister();

The output of the above code is :



The entire rendering will be replaced with an error screen after a brief moment. The Error boundary message can be seen again by hitting escape.

************************************************************************************************

**********Loading data using ajax****************************

In this section, let us understand how to handle Ajax requests in React.

React by default does not provide any helper method to manage Ajax requests

Any other third party JavaScript library can be used to handle Ajax requests

As we discussed already, in lifecycle methods, the componentDidMount method is the best place to handle Ajax request

Using Ajax fetch the data in the event handler of componentDidMount()

Once we have the data, make it available to our component by setting the state of a component to trigger re-render

 

In our course, we will be using Axios API for handling ajax requests.
--------------------------------------------------------------------------------------

Axios is a promise-based API that can be used to make asynchronous calls to the back end in our applications.


In order to use axios we need to install axios using the below command

npm install axios
Axios offers the following methods:


axios.get()
axios.post()
axios.put()
axios.delete()
axios.patch()
axios.options()

Get request syntax

 axios.get('url')
        .then(result => 
           console.log(result.data)
        )
        .catch(error => 
            console.log(error)
        );

Post request syntax

axios.post('url', { data }).
    then(result =>
        console.log(result.data)
    )
    .catch(error =>
        console.log(error)
    );
We can also use fetch for making API calls, but axios offers some advantages over axios

1. The response returned by axios is the response that we need, but with fetch we need to use .json method to get the actual response

Axios output



Fetch output



2. Axios is more secure than fetch and protects from XSRF attacks

3. Axios are supported by most of the browsers including Internet Explorer 8+

4. Axios has better error handling

For example, if we try to make the request to a non-existent JSON file employees1.json file 

Axios returns



Fetch returns

--------------------------------------------------------------------------------------------------------

Highlights:

Retrieving data

Using Axios to fetch the data from the JSON file within the componentDidMount method

Demo steps:

Create Employees component and retrieve data from the employees.json file.

 

1. Create employees.json within the public folder as shown below:

 

[
    { "empId": 1234, "name": "John", "designation":"SE" },
    { "empId": 4567, "name": "Jack", "designation":"SSE"},
    { "empId": 8910, "name": "Harry","designation":"TA"}
]
2. Create Employee component within Employee.js file as shown below:

 

import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class Employee extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('employees.json')
        .then(result => 
            this.setState({
                employees: result.data,
                isLoading: false
            })
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
    }
    render() {
        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }
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
                              {this.state.employees ?
                              this.state.employees.map(employee => {
                                     return (<tr key={employee.empId}>
                                             <td>{employee.empId}</td>
                                             <td>{employee.name}</td>
                                             <td>{employee.designation}</td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table>
            </React.Fragment>)  
    }
}
export default Employee;

3. Render employees component to the DOM within the index.js file as shown below:

 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employee from './Employee';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Employee/>, document.getElementById('root'));
serviceWorker.unregister();

4. Observe the below output:



 --------------------------------------------------------------------------------
***********************case study milestone 3*******************************


Highlights:

Using the lifecycle method

Retrieving data from the server

Demo steps:

In our last assignment, we rendered the component with data from a hardcoded JSON array. Now let us see how to fetch the same data from the JSON file using the axios.

Create a products.json file within the public folder, and store all the products details in an array of JSON objects.

ProductDetails Component:

import React from 'react';
import Product from './Product.js';
import axios from 'axios';
class ProductDetails extends React.Component {
    constructor() {
        super()
        this.state = {
            productDetails: []
        }
    }
    componentDidMount() {
        axios.get('/products.json').then(response=>{
            this.setState({productDetails:response.data})
        }).catch(error => 
            this.setState({
                error
            })
        );
    }
    render() {
        return (<div>
            {this.state.productDetails.map(function(productDetail){
                 return <Product pid={productDetail.pdtCode}
                 price = {productDetail.pdtPrice}
                 name = {productDetail.pdtName}
                 key = {productDetail.pdtCode}
                 desc = {productDetail.pdtDescription}
                 img = {productDetail.pdtImg}
                 rating = {productDetail.rating}
                 avgRating = {productDetail.avgFeedback}
                 />
            })}
           
        </div>)
    }
}
export default ProductDetails;

-----------------------------------------------------------------------------------------------

Problem Statement:

In the previous exercise, we had hardcoded the defect details values as props and states properties. Now fetch these defect details from any of the sources like localStorage, sessionStorage, or a database as per the below screenshot. Component life cycle methods should be used to implement the above calls to any of the above sources.         


------------------------------------------------------------------------------------------------

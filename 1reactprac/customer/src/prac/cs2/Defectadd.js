import React from "react";
class Defectadd extends React.Component{
    render(){
        return(
            <div className="w-50 m-auto form border">
                <h1 className="heading m-4">Defect Tracker</h1>
                <div><a href="#">Logout</a></div>
                <nav className="">
                    <a href="#" className="col m-2">Add Defect</a>
                    <a href="#" className="col m-2">View Defects</a>
                </nav>
                <div className="my-4 login">Add Defects</div>
                <div className="m-4">
                    Defect Category:&nbsp;&nbsp;&nbsp;
                    <select className="col w-auto g-2 h-4">
                        <option>Select</option>
                        <option>UI</option>
                        <option>Functional</option>
                        <option>Change Request</option>
                    </select>
                </div>
                <div className="m-4">
                    Description:&nbsp;&nbsp;&nbsp;
                    <textarea></textarea>
                </div>
                <div className="m-4">
                    Priority:   &nbsp;&nbsp;&nbsp;
                    <input/>
                </div>
                <div className="m-4">
                    <button className="btn btn-info">Add Defect</button>
                </div>
            </div>
        )
    }
}
export default Defectadd;
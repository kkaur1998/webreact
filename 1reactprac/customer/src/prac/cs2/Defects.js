import React from "react";

class Defects extends React.Component{

    render(){
        return(
            <div className="formdefect border w-50 m-auto my-4">
                <h1>Defect Tracker</h1>
                <a href="#" className="m-auto">Logout</a>
                <nav>
                    <a href='#' className="m-2">Add Defects</a>
                    <a href="#" className="m-2">View Defects</a>
                </nav>
                <div className="border m-3">
                    <div><h3>Filter Details</h3></div>
                    <div className="row m-3">
                        <h6 className="col">Priority</h6>
                        <select className="col w-auto">
                            <option>All</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="row m-3">
                        <h6 className="col">Category</h6>
                        <select className="col w-auto">
                            <option>All</option>
                            <option>UI</option>
                            <option>Functional</option>
                            <option>Change Request</option>
                        </select>
                    </div>
                </div>
                <div><h3>Defect Details</h3></div>
                <p className="text-danger">Search Results:3</p>
                <div className="table table-border">
                    <table border>
                        <tr className="table-header">
                            <th>Defect Category</th>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Change status</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>UI</td>
                                <td>Submit button  coming to the extreme left. Refer the screenshot</td>
                                <td>2</td>
                                <td>open</td>
                                <td className="text-info">Close Defect</td>
                            </tr>
                            <tr>
                                <td>Functional</td>
                                <td>Submit button  coming to the extreme left. Refer the screenshot</td>
                                <td>2</td>
                                <td>open</td>
                                <td className="text-info">Close Defect</td>
                            </tr>
                            <tr>
                                <td>Change Request</td>
                                <td>Submit button  coming to the extreme left. Refer the screenshot</td>
                                <td>3</td>
                                <td>closed</td>
                                <td className="text-muted">No action pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
export default Defects;
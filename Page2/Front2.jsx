import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AddCircleOutlineOutlined} from '@material-ui/icons';
import {ToggleOffRounded,ToggleOnRounded} from '@material-ui/icons';
import '../Page1/Front.css';
import Header from '../Common/Header';
import Front2same from './Front2same';
import '../Page3/Style.css';

const Front2=()=>{
    return(
        <div className="main_front">
            <Header/>
            <div className="table_div">

                <Front2same/>
                <dl>
                    <li>Access Control</li>
                    <li>Assigned Members</li>
                </dl>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Department/Role Name</td>
                            <td>Access Level</td>
                            <td>Summary</td>
                            <td>Last Updated</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Budget</td>
                            <td><button>All Access</button></td>
                            <td>View|Create|Edit|Delete</td>
                            <td>1 min ago</td>
                            <td><span className="s2"><ToggleOnRounded/></span></td>
                        </tr>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Bidding</td>
                            <td><button className="no"> No Access</button></td>
                            <td>-</td>
                            <td>1 min ago</td>
                            <td><span className="s3"><ToggleOffRounded/></span></td>
                        </tr>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Vendor Portal</td>
                            <td><button className="btn btn-danger">Restricted Access</button></td>
                            <td>View|Create</td>
                            <td>1 min ago</td>
                            <td><span className="s2"><ToggleOnRounded/></span></td>
                        </tr>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Purchase Order/Work Order</td>
                            <td><button className="btn btn-danger">Restricted Access</button></td>
                            <td>View|Create</td>
                            <td>1 min ago</td>
                            <td><span className="s2"><ToggleOnRounded/></span></td>
                        </tr>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Organisational Profile</td>
                            <td><button>All Access</button></td>
                            <td>View|Create|Edit|Delete</td>
                            <td>1 min ago</td>
                            <td><span className="s2"><ToggleOnRounded/></span></td>
                        </tr>
                        <tr>
                            <td><span><AddCircleOutlineOutlined/></span>Permissions & Access Control</td>
                            <td><button className="no">No Access</button></td>
                            <td>-</td>
                            <td>1 min ago</td>
                            <td><span className="s3"><ToggleOffRounded/></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Front2;
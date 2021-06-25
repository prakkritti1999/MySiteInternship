import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Add,DeleteOutline,CreateOutlined,VisibilityOutlined} from '@material-ui/icons';
import { RadioButtonUnchecked} from '@material-ui/icons';
import './Front.css';
import Header from '../Common/Header';

const Front=()=>{
    return(
        <div className="main_front">
            <Header/>
            
            <div className="table_div">
                <button><span className="pull-left"> <Add/> Add Role </span> </button>
                <ol>
                    <li id="l1"><span> <CreateOutlined/> </span></li>
                    <li id="l2"><span> <DeleteOutline/> </span></li>
                </ol>
                <br/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Department/Role Name</td>
                            <td>Access Level</td>
                            <td>No.of members</td>
                            <td>Last Updated</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span><RadioButtonUnchecked/></span>Management Team</td>
                            <td><button>All Access</button></td>
                            <td>4</td>
                            <td>1 min ago</td>
                            <td><span><VisibilityOutlined/></span></td>
                        </tr>
                        <tr>
                            <td><span><RadioButtonUnchecked/></span>Procurement Team</td>
                            <td><button className="btn btn-danger">Restricted Access</button></td>
                            <td>8</td>
                            <td>1 min ago</td>
                            <td><span><VisibilityOutlined/></span></td>
                        </tr>
                        <tr>
                            <td><span><RadioButtonUnchecked/></span>Project Team</td>
                            <td><button className="btn btn-danger">Restricted Access</button></td>
                            <td>16</td>
                            <td>1 min ago</td>
                            <td><span><VisibilityOutlined/></span></td>
                        </tr>
                        <tr>
                            <td><span><RadioButtonUnchecked/></span>IT Team</td>
                            <td><button className="btn btn-danger">Restricted Access</button></td>
                            <td>4</td>
                            <td>1 min ago</td>
                            <td><span><VisibilityOutlined/></span></td>
                        </tr>
                        <tr>
                            <td>Super Admin</td>
                            <td><button>All Access</button></td>
                            <td>1</td>
                            <td>1 min ago</td>
                            <td><span><VisibilityOutlined/></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Front;
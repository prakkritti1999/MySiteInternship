import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DashboardOutlined,LocalMall,SecuritySharp} from '@material-ui/icons';
import './Sidebar.css';

const Sidebar=()=>{
    return(
        <>
            <div className="side_div">
                <div className="mysite_div">
                    <b>MYSITE</b>
                </div>
                <div className="back_div">
                <dl>
                    <li> <span><DashboardOutlined/></span>Projects</li>
                    <li><span><LocalMall/></span>Organization Profile</li>
                    <li><span><SecuritySharp/></span>Access Control</li>
                </dl>
                </div>
            </div>
        </>        
    )
}
export default Sidebar;
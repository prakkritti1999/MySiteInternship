import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RssFeed,ViewModuleOutlined} from '@material-ui/icons';
import { NotificationsNone,HelpOutlineOutlined} from '@material-ui/icons';
import {FiberManualRecord} from '@material-ui/icons';
import '../Page1/Front.css';

const Header=()=>{
    return(
        <>
            <div className="list_div">
                <ol>
                    <li> <span> <RssFeed/> </span> Permissions</li>
                    <li><span><ViewModuleOutlined/></span>Approval Matrix</li>
                </ol>
            </div>
            <div className="help_div pull-right">
                <ol>
                    <li><span><FiberManualRecord/></span>Kishore</li>
                    <li><span><NotificationsNone/></span></li>
                    <li><span><HelpOutlineOutlined/></span></li>   
                </ol>
            </div>
        </>   
    )
}
export default Header;
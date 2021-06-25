import React from 'react';
import {ArrowBackOutlined,CreateOutlined} from '@material-ui/icons';
import './Front2same.css';

const Front2same=()=>{
    return(
        <>
            <div className="same_div">
                <ArrowBackOutlined/><span>Management Team</span>
                <ol>
                <li id="edit"><CreateOutlined/></li>
                </ol>
            </div>
        </>
    )
}
export default Front2same;
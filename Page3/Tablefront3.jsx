import React from 'react';
import {RadioButtonCheckedRounded,RadioButtonUncheckedRounded} from '@material-ui/icons';
import {CheckBoxOutlineBlankRounded,CheckBoxRounded} from '@material-ui/icons';
import './Tablefront3.css';

const Tablefront3=()=>{
    return(
        <div className="sub_table_div ">
                <table>
                    <thead>
                        <tr>
                            <td>Access Control</td>
                            <td>Permissions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td>
                                <span><RadioButtonUncheckedRounded/>
                                </span>
                                All Access<br/>Can access all items
                            </td>
                            <td>
                                <span><CheckBoxOutlineBlankRounded/></span>
                                View Items in access
                            </td>
                            <td></td>
                            </tr>
                            <tr> 
                                <td>
                                    <span className="purple"><RadioButtonCheckedRounded/>
                                    </span>
                                    Restricted Access <br/>Can access only assigned or created items
                                </td>
                                <td>
                                    <span className="purple"><CheckBoxRounded/></span>
                                    Edit Items in access
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span><CheckBoxOutlineBlankRounded/></span>
                                    Create Items in access
                                </td>
                                <td>
                                    <span><CheckBoxOutlineBlankRounded/></span>
                                    Delete Items in access
                                </td>                     
                            </tr>
                        </tbody>
                    </table>
        </div>
    )
}
export default Tablefront3;
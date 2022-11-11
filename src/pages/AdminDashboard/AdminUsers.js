import React from "react";
import AdminSidebar from "../../components/Admin_comps/AdminSidebar";
import adminUsersCSS from "./adminUsers.module.css"
import { faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 


export const AdminUsers = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <AdminSidebar />

        <div className="topAdmin">
          <ul className="admin_Dash_Nav">
            <li>
              <h3 id="dashBar">USERS</h3>
            </li>
            {/* THE TIME AND DATE SECTION */}
            <li>
              <div className="time">
                <p className="time-one">10:15</p>
                <p className="time-two">02:11:2022</p>
              </div>
            </li>
            <li>
              <div className="forTheprofileImage">
                <div id="profile-container">
                  <img id="profileImage" src="/assets/newUser.png" />
                </div>
                <input
                  id="imageUpload"
                  type="file"
                  name="profile_photo"
                  placeholder="Photo"
                  required
                  capture
                />
                <span className="Admin-ID" id="profilename">
                  {" "}
                </span>
              </div>
            </li>
          </ul>
          <div className={adminUsersCSS.Display_comtainier}>
                <div className={adminUsersCSS.checkSearchBar}>
                    <input type="text" className={adminUsersCSS.search_Bar} placeholder="Search by Name or Email"/>
                    <span>
                    <input type="checkbox" className={adminUsersCSS.checkboxes}/>
                    <p>Show anaonymous Users</p>
                    </span>
                    <span>    
                    <input type="checkbox" id="checkboxes"/> <p>Show Registered Users</p>
                    </span> 

             </div>
            <div className="Table-display-section">
              <table className= {adminUsersCSS.table_interfc}>
                <tbody className= {adminUsersCSS.table_rowss}>
                  <tr className= {adminUsersCSS.table_rowss}> 
                    <th>Email</th>
                    <th>Username</th>
                    <th>Registration Date</th>
                    <th>Reports</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td>
                    <FontAwesomeIcon id= 'cardicons'icon ={faUser} /> Anonymous@mail.com
                    </td>
                    <td> Anonymous</td>
                    <td>03-03-2022</td>
                    <td>1</td>
                    <td>
                    <FontAwesomeIcon id= 'cardicons'icon ={faTrash} /> Delete
                    </td>
                  </tr>
                  {/* <tr>
                    <td>
                      <i className="fa fa-user" /> Goddess@rocketmail.com
                    </td>
                    <td>Whacky Theo</td>
                    <td>03-03-2022</td>
                    <td>1</td>
                    <td>
                      <i className="fa fa-trash" /> Delete
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-user" /> Anonymous@mail.com
                    </td>
                    <td> Anonymous</td>
                    <td>03-03-2022</td>
                    <td>1</td>
                    <td>
                      <i className="fa fa-trash" /> Delete
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

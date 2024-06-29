import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import './userManage.scss';
import {getAllUsers ,createNewUserSerice} from '../../services/userService'
import { bind } from 'lodash';
import MondalUsers from './ModalUsers';
import { Modal } from 'reactstrap';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state ={
            arrUsers: [],
            isOpenModalUser: false,
        }
    }

   async componentDidMount() {
       await this.getAllUsersFromReact( )
    }
    getAllUsersFromReact = async() =>{
        let response = await getAllUsers("ALL");
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
        })
        }
    }
    
    handleAddNewUser = () =>{
        this.setState({
            isOpenModalUser: true,
        })
        
    }
    toggleUserModal = () =>{
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    createNewuser = async(data) => {
        try{
          let reponese= await  createNewUserSerice(data);
          if(reponese && reponese.errCode !==0){
            alert(reponese.errMessage)
          }else{
            await this.getAllUsersFromReact();
            this.setState({
                isOpenModalUser: false
            })
          }
        }catch(e){
            console.log(e)
        }
    }

    render() {

        let arrUsers =this.state.arrUsers;
        console.log(arrUsers)
        return (
            <div className="user-container">
            <MondalUsers  
            isOpen ={this.state.isOpenModalUser}  
            toggleFromParent={this.toggleUserModal}
            createNewuser ={this.createNewuser}
            
            />
            <div className='title text-center'>Manage user with Fruzii </div>
            <div className='mx-1'>
            <button className='btn btn-primary px-3'
            onClick={()=>this.handleAddNewUser(bind,this)}
            ><i className="fas fa-plus"></i>Add new user</button>
            </div>    
            <div className='user-table mt-3 mx-1'>
            <table id="customers">
            <tbody>
  <tr>
    <th>Email</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Address</th>
    <th>Actions</th>
  </tr>
       
    { arrUsers && arrUsers.map((item,index)=>{

        return(
            <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                        <button className='btn-edit'><i className='fas fa-pencil-alt'/></button>
                        <button className='btn-delete'><i className='fas fa-trash'/></button>
                    </td>

            </tr  >
            
        )
    }) }
</tbody>
    </table>
             </div>
            </div>  
       
    );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

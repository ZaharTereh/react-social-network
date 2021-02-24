import React from 'react';
import Preloader from '../../../Preloader/Preloader'
import s from '../ProfileStatus/ProfileStatus.module.css'

class ProfileStatus extends React.Component{

    state = {
        editMode:false,
        status:this.props.status
    }

    activateEditMode = () =>{
        this.setState({
            editMode : true
        });        
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode : false
        });
        this.props.updateStatus(this.state.status);
    }
    statusOnChange = (e) =>{
        this.setState({
            status : e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            });
        }
    }

    render(){
        return(
        <div>
            {this.state.editMode
            ?   <div>
                    <input autoFocus={true} onChange={this.statusOnChange} value={this.state.status} onBlur={this.deactivateEditMode}/>
                </div>
            :   <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---------"}</span>
                </div>
            }            
        </div>
        )
    }
}

export default ProfileStatus;
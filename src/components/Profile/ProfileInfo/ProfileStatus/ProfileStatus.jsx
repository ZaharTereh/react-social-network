import React from 'react';
import Preloader from '../../../Preloader/Preloader'
import s from '../ProfileStatus/ProfileStatus.module.css'

class ProfileStatus extends React.Component{

    state = {
        editMode:false
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
    }

    render(){
        return(
        <div>
            {this.state.editMode
            ?   <div>
                    <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                </div>
            :   <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }            
        </div>
        )
    }
}

export default ProfileStatus;
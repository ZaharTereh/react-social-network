import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) => {
    let [status,setStatus] = useState(props.status);
    let [editMode,setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const statusOnChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} onChange={statusOnChange} value={status}
                           onBlur={deactivateEditMode}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || "---------"}</span>
                </div>
            }
        </div>
    )
};

export default ProfileStatusWithHook;
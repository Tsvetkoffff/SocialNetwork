import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => setStatus(props.status), [props.status]);

    const editModeToggle = () => {
        setEditMode(!editMode);
        if (editMode && props.status.toLowerCase() !== status.toLowerCase()) {
            props.updateUserStatus(status)
        }
    };

    const onStatusTextChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return <>
        {
            !editMode
                ? <p onClick={editModeToggle}> {status} </p>
                : <input onBlur={editModeToggle}
                         autoFocus={true}
                         value={status}
                         onChange={onStatusTextChange}/>
        }
    </>
};

export default ProfileStatus;
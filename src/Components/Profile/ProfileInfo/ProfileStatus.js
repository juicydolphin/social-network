import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
            <div>
                { !editMode &&
                    <div>
                        <span onClick={props.isOwner ? activateEditMode : null}><b>Статус:</b> {props.status}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode}
                               value={status} autoFocus={true}/>

                    </div>
                }
            </div>
        );
}

export default ProfileStatus;
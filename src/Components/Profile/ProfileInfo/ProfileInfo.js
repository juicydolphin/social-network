import React, {useState} from 'react';
import styles from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/noavatar.png'
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)


    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
       props.saveProfile(formData)
    }

    return (
        <div>
            <div className={styles.avatar}><img
                src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus isOwner={props.isOwner} updateStatus={props.updateStatus} status={props.status}/>
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/>
                    : <ProfileData activateEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}


            </div>
        </div>
    );
};
const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={activateEditMode}>Редактировать</button>
        </div>}
        <div><h3>{profile.fullName}</h3></div>
        <div><b>Ищу работу:</b> {profile.lookingForAJob ? 'да' : 'нет'}</div>
        <div><b>Профессиональные навыки:</b> {profile.lookingForAJobDescription}</div>
        <div><b>Обо мне:</b> {profile.aboutMe}</div>
    </div>

}



export default ProfileInfo;
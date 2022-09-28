import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

const ProfileDataForm = ({handleSubmit}) => {
    return (<form onSubmit={handleSubmit}>
        <div>
            <button>Сохранить</button>
        </div>
        <div><Field validate={[required]} placeholder={'Имя пользователя'} name={'fullName'} component={Input}/></div>
        <div><b>Ищу работу:</b><Field validate={[required]} name={'lookingForAJob'} component={Input} type={'checkbox'} /> </div>
        <div><b>Профессиональные навыки:</b><Field validate={[required]} name={'lookingForAJobDescription'} component={Textarea} /> </div>
        <div><b>Обо мне:</b><Field validate={[required]} name={'aboutMe'} component={Textarea}/></div>
    </form>)
}

const ProfileDataReduxForm = reduxForm({form: 'profileForm'}) (ProfileDataForm)

export default ProfileDataReduxForm;
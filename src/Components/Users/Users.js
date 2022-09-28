import React from 'react';
import styles from "./users.module.css";
import noAvatar from '../../assets/images/noavatar.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,...props}) => {

    return (
        <div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={styles.userPhoto}
                             src={u.photos.small != null ? u.photos.small : noAvatar}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Отписаться</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Подписаться</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>

                </div>)}
            </div>
        </div>
    );
};

export default Users;
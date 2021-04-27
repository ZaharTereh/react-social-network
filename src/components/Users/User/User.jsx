import React from 'react';
import s from './User.module.css';
import defaultUserPhoto from '../../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

const User = ({user,followingInProgress,follow,unfollow}) => {
    return (
        <div key={user.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto}
                             className={s.userPhoto}></img>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={
                                          () => {
                                              unfollow(user.id);
                                          }
                                      }>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={
                                          () => {
                                              follow(user.id);
                                          }
                                      }>Follow</button>
                    }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.city},{user.location.country"}</div>
            </div>
        </div>
    )

}

export default User;
import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.userCount / props.pageSize);
        let pages = [];
        
        for(let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
                
        return(
            <div>
                <div className={s.pages}>
                    {
                        pages.map(page=>{
                            return <span className={props.selectedPage === page && s.selectedPage}
                                         onClick={(e)=>{props.changeSelectedPage(page,props.pageSize)}}
                                >{page} </span>
                        })
                    }
                </div>
                {
                    props.users.map(user => 
                        <div key={user.id}>
                            <div>
                                <div>
                                    <NavLink to={'/profile/'+user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto}
                                         className={s.userPhoto}></img>
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        user.followed 
                                        ?<button disabled={props.followingInProgress.some(id=>id===user.id)}
                                        onClick={
                                            ()=>{
                                                props.unfollow(user.id);
                                            }
                                        }>Unfollow</button>
                                        
                                        :<button disabled={props.followingInProgress.some(id=>id===user.id)}
                                        onClick={
                                            ()=>{
                                                props.follow(user.id);
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
            </div>
            );
}

export default Users;
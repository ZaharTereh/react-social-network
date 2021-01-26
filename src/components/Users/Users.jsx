import React from 'react';
import s from './Users.module.css';
import defaultUserPhoto from '../../assets/images/user.png';

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
                                         onClick={(e)=>{props.changeSelectedPage(page)}}
                                >{page}</span>
                        })
                    }
                </div>
                {
                    props.users.map(user => 
                        <div key={user.id}>
                            <div>
                                <div>{
                                    user.image != null
                                    ?<img src={user.image} className={s.userPhoto}></img>
                                    :<img src={defaultUserPhoto} className={s.userPhoto}></img>
                                    }
                                </div>
                                <div>
                                    {
                                        user.followed 
                                        ?<button onClick={()=>{props.unfollow(user.id)}}>Unfollow</button>
                                        :<button onClick={()=>{props.follow(user.id)}}>Follow</button>
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
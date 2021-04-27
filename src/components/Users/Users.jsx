import React from 'react';
import Paginator from "../commons/Paginator/Paginator";
import User from "./User/User";

const Users = ({selectedPage,changeSelectedPage,userCount,pageSize,users,...props}) => {
        return(
            <div>
                <Paginator selectedPage={selectedPage} changeSelectedPage={changeSelectedPage}
                           userCount={userCount} pageSize={pageSize} />
                {
                    users.map(user =>
                        <User user={user} followingInProgress={props.followingInProgress}
                              follow={props.follow} unfollow={props.unfollow}/>
                    )
                }
            </div>
        );
}

export default Users;
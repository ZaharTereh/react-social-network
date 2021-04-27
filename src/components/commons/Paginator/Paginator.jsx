import React from 'react';
import s from './Paginator.module.css';

const Paginator = ({userCount,pageSize,changeSelectedPage,selectedPage}) => {

    let pagesCount = Math.ceil(userCount / pageSize);
    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return (
        <div className={s.pages}>
            {
                pages.map(page => {
                    return <span className={selectedPage === page && s.selectedPage}
                                 onClick={(e) => {
                                     changeSelectedPage(page,pageSize)
                                 }}>{page} </span>
                })
            }
        </div>
    )
}

export default Paginator;
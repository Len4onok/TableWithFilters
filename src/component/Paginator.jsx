import React from 'react';
import s from './Paginator.module.css';


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.itemsOnPage);
    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    };

    const onPageChange = (p) => {
        props.getOperations(props.itemsOnPage, p, props.column, props.condition, props.searchField);
        props.setCurrentPage(p);
    }

    const pageNumElem = pagesArr.map((p, index) => {
        return <span key={index} onClick={() => { onPageChange(p) }}
            className={(p === props.currentPage) ? s.selected+' '+s.usual: s.usual}
        >{p}</span>
    });

   
    
    return (
        <div>
            {pageNumElem}
        </div>            
    );
}

export default Paginator;
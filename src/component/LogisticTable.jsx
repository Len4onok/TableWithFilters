import React from 'react';
import s from './LogisticTable.module.css';
import Paginator from './Paginator';
import SearchForm from './SearсhForm';


const LogisticTable = (props) => {

    const headers = props.headers.map((header) => {
        return (
            <tr key={header.id}>
                <td>{header.date}</td>
                <td>{header.name}</td>
                <td>{header.quantity}</td>
                <td>{header.distance}</td>
            </tr>
        )
    })

    const operationsElements = props.operations.map((operation) => {
        return (
            <tr key={operation.id}>
                <td>{operation.date}</td>
                <td>{operation.name}</td>
                <td>{operation.quantity}</td>
                <td>{operation.distance}</td>
            </tr>
        )
    })

    return (
        <div className={s.tableWrapper}>
            <Paginator {...props}/>
            <SearchForm {...props}/>
                <table className={s.table}>
                    <thead>
                        {headers}
                    </thead>
                    <tbody>
                        {operationsElements}
                    </tbody>
                </table>
        </div>
    );
}

export default LogisticTable;
import React from 'react';


const ColumnFilter: React.FC<any> = (props) => {
    const { filterValue, setFilter } = props.column;

    return (
        <span>
            <input className="form-control rounded" placeholder="Search here..." value = { filterValue || '' } onChange = { (event: React.ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}/>
        </span>
    )
}

export default ColumnFilter;

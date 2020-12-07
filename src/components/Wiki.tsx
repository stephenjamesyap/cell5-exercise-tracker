import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { IDescription } from '../interface/IDescription';
import axios from 'axios';

const Wiki: React.FC<RouteComponentProps<IDescription>> = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { description } = props.match.params;

    const summary = `https://en.wikipedia.org/api/rest_v1/page/summary/${description}`;
    

    axios.get(summary)
    .then(response => {
         setTitle(response.data.title);
         setBody(response.data.extract);
         console.log('test');
    })    
    .catch(error => console.log(error));

    return (
        <div className="container p-3 my-3  bg-primary text-white rounded">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-8"></div>
            </div>
            <div className="row">
                <div className="col-sm-4"><h1 className="text-center">{title}</h1></div>
                <div className="col-sm-8"><p>{body}</p></div>
            </div>
        </div>
    )
}

export default Wiki

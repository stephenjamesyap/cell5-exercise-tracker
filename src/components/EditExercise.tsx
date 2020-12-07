import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RouteComponentProps  } from 'react-router-dom';
import { IParams } from '../interface/IParams';


const EditExercise: React.FC<RouteComponentProps<IParams>> = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const { id } = props.match.params;
    const location:any = '/list';

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/' + id)
        .then(response => {
            setFirstName(response.data.firstname);
            setLastName(response.data.lastname);
            setDescription(response.data.description);
            setDuration(response.data.duration);
        })
    }, [])

    const onChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    }

    const onChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    }

    const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }
    const onChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
        const duration = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)
        setDuration(duration);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const exerciseData = {
            firstname: firstname,
            lastname: lastname,
            description: description,
            duration: duration,            
        }
        axios.post('http://localhost:5000/exercises/update/' + id, exerciseData)
        .then(res => console.log(res.data));
        alert('Exercise successfully updated!');
        window.location = location;
    }

    return (
        <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={firstname} 
                            onChange={onChangeFirstName} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={lastname} 
                            onChange={onChangeLastName} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={description} 
                            onChange={onChangeDescription} />
                        </div>
                        <div className="form-group">
                            <label>Duration(minutes)</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={duration} 
                            onChange={onChangeDuration} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update" className="btn btn-dark" />
                        </div>
                    </form>              
                </div>
                <div className="col-sm-4"></div>
            </div>
       
    )
}

export default EditExercise

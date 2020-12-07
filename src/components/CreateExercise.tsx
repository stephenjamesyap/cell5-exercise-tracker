import React, { useState } from 'react';
import axios from 'axios';


const CreateExercise: React.FC = () => {
    const [firstname, setFirstName] = useState<string>('');
    const [lastname, setLastName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [duration, setDuration] = useState<number>(0);
    const location:any = '/list';

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
        const duration = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
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
        axios.post('http://localhost:5000/exercises/add', exerciseData)
        .then(res => console.log(res.data));
        alert('Exercise successfully added!');
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
                            className="form-control input-sm" 
                            value={firstname} 
                            onChange={onChangeFirstName} />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input 
                            type="text" 
                            className="form-control input-sm" 
                            value={lastname} 
                            onChange={onChangeLastName} />
                        </div>
                    
                        <div className="form-group">
                            <label>Description</label>
                            <input 
                            type="text" 
                            className="form-control input-sm" 
                            value={description} 
                            onChange={onChangeDescription} />
                        </div>

                        <div className="form-group">
                            <label>Duration(minutes)</label>
                            <input 
                            type="text" 
                            className="form-control input-sm" 
                            value={duration} 
                            onChange={onChangeDuration} />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Save" className="btn btn-dark" />
                        </div>
                    </form>         
                </div>
                <div className="col-sm-4"></div>
            </div>
    )
}

export default CreateExercise

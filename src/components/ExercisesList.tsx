import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Column, UseFiltersColumnOptions } from 'react-table';
import axios from 'axios';
import ExerciseTable from './ExerciseTable';
import ColumnFilter from './ColumnFilter';
import { IExercise } from '../interface/IExercise';


const ExercisesList: React.FC = () => {
    const [exercises, setExercises] = useState([]);
    let columns: Column<IExercise>[] & UseFiltersColumnOptions<IExercise>[];
    let data: IExercise[];
    const history = useHistory();

    useEffect(() => {
        axios
        .get("http://localhost:5000/exercises/")
        .then(response => {
            setExercises(response.data);
        }).catch(error => {
                console.log(error);
        });
            return () => {
            }
        }, []);

    const EditButton: React.FC<{accessor: IExercise}> = (props) => {
        const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
            history.push('/edit/'+props.accessor._id);
        }
        return (
            <button className="btn btn-primary m-1" onClick={handleEdit}>Edit</button>
        )
    }

    const DeleteButton: React.FC<{accessor: IExercise}> = (props) => {
        const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
            axios.delete('http://localhost:5000/exercises/delete/'+props.accessor._id)
            .then(res => console.log(res.data));
            setExercises(exercises.filter((exercise: IExercise) => exercise._id !== props.accessor._id));        
        }
        return (
            <button className="btn btn-primary m-1" onClick={handleDelete}>Delete</button>
        )
    }

     columns = [
        {
            Header: 'Firstname',
            accessor: (accessor) => accessor.firstname,
            Filter: ColumnFilter
        },
        {
            Header: 'Lastname',
            accessor: (accessor) => accessor.lastname,
            Filter: ColumnFilter            
        },
        {
            Header: 'Description',
            accessor: (accessor) => 
            { return (
                    <Link to={{pathname: `/wiki/${accessor.description}`}}>{accessor.description}</Link>
            )
            },
            Filter: ColumnFilter,
            disableFilters: true 
        },
        {
            Header: 'Duration',
            accessor: (accessor) => accessor.duration,
            Filter: ColumnFilter,
            disableFilters: true 
        },
        {
            Header: 'Action',
            accessor: (accessor) =>   { return <><EditButton accessor={accessor} /><DeleteButton accessor={accessor} /></>},
            disableFilters: true 
        },
    ]
    
    data = exercises;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-responsive">                     
                        <ExerciseTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisesList



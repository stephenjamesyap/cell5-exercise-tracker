import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import CreateExercise from './components/CreateExercise';
import ExercisesList from './components/ExercisesList';
configure({ adapter: new Adapter() });

test('Renders react App', () => {
  shallow(<App />);
});

test('Render CreateExercise component', () => {
    shallow(<CreateExercise />);
});

test('Render ExercisesList component', () => {
    shallow(<ExercisesList />);
});

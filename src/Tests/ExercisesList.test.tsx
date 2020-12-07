import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExercisesList from '../components/ExercisesList';
configure({ adapter: new Adapter() });


it('Render CreateExercise component', () => {
    shallow(<ExercisesList />);
});
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExerciseTable from '../components/ExerciseTable';
configure({ adapter: new Adapter() });


it('Render CreateExercise component', () => {
    shallow(<ExerciseTable />);
});
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExercisesList from '../components/ExercisesList';
configure({ adapter: new Adapter() });


test('Render ExercisesList component', () => {
    shallow(<ExercisesList />);
});
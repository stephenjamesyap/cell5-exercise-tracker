import { configure, shallow } from 'enzyme';
import CreateExercise from '../components/CreateExercise';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


test('Render CreateExercise component', () => {
    shallow(<CreateExercise />);
});
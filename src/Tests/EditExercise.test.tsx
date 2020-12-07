import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditExercise from '../components/EditExercise';
configure({ adapter: new Adapter() });


it('Render CreateExercise component', () => {
    shallow(<EditExercise />);
});
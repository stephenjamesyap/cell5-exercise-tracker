import { configure, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditExercise from '../components/EditExercise';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router-dom';

configure({ adapter: new Adapter() });

const history = createMemoryHistory();
const path = '/edit/:id';
const match: match<{ id: string }> = {
    isExact: true,
    path,
    url: path.replace(':id', '5fcda1483c104714f0e10d0b'),
    params: { id: "5fcda1483c104714f0e10d0b" }
};
const location = createLocation(match.url);

test('Render EditExercise component', () => {
    shallow(<EditExercise history={history} location={location} match={match} />);
})
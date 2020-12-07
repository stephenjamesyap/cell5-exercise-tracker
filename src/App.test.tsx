import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('Renders react App', () => {
  shallow(<App />);
});

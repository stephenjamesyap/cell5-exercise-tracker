import React from 'react';
import * as ReactDOM from 'react-dom';
import CreateExercise from './components/CreateExercise';

test('CreateExercise render', () => {
  const root = document.createElement("div");
  ReactDOM.render(<CreateExercise />, root)
  expect(root.querySelector("label")?.textContent).toBe("First Name");
});

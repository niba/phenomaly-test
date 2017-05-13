import React from 'react';
import renderer from 'react-test-renderer';
import FizzBuzz from './FizzBuzz';

it('check fizz', () => {
  const component = renderer.create(
    <FizzBuzz />
  );
  component.getInstance().incrementCounter();
  component.getInstance().incrementCounter();
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('check buzz', () => {
  const component = renderer.create(
    <FizzBuzz />
  );

  for (let i = 1; i < 10; i++) {
     component.getInstance().incrementCounter();
  }

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

it('check fizz buzz', () => {
  const component = renderer.create(
    <FizzBuzz />
  );
  for (let i = 1; i < 30; i++) {
     component.getInstance().incrementCounter();
  }
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
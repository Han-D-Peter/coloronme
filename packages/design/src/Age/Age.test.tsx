import renderer from 'react-test-renderer';
import Age from './Age';

it('changes the class when hovered', () => {
  const component = renderer.create(<Age />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

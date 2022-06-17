import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { repeatComponent } from '../src';

describe('repeatComponent function', () => {
  it('should render a component', () => {
    const component = repeatComponent(() => <div>Hello</div>, 3);
    const div = document.createElement('div');
    ReactDOM.render(<>{component}</>, div);
    expect(div.innerHTML).toBe('<div>Hello</div><div>Hello</div><div>Hello</div>');
  });

  it('should render a component with a negative count', () => {
    const component = repeatComponent(() => <div>Hello</div>, -3);
    const div = document.createElement('div');
    ReactDOM.render(<>{component}</>, div);
    expect(div.innerHTML).toBe('<div>Hello</div><div>Hello</div><div>Hello</div>');
  });

  it('should render a component with a zero count', () => {
    const component = repeatComponent(() => <div>Hello</div>, 0);
    const div = document.createElement('div');
    ReactDOM.render(<>{component}</>, div);
    expect(div.innerHTML).toBe('');
  });

  it('should repeat component without function wrapper', () => {
    const component = repeatComponent(<div>Hello</div>, 3);
    const div = document.createElement('div');
    ReactDOM.render(<>{component}</>, div);
    expect(div.innerHTML).toBe('<div>Hello</div><div>Hello</div><div>Hello</div>');
  });

  it('should render a component with a negative count without function wrapper', () => {
    const component = repeatComponent(<div>Hello</div>, -3);
    const div = document.createElement('div');
    ReactDOM.render(<>{component}</>, div);
    expect(div.innerHTML).toBe('<div>Hello</div><div>Hello</div><div>Hello</div>');
  });
});

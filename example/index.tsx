import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { repeatComponent } from '../src';

const ComponentToRepeat = () => <div>star</div>

const App = () => {
  return (
    <div>
      {repeatComponent(<ComponentToRepeat />, 10)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

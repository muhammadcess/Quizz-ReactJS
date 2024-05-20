import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import ClickCounter from './ClickCounter';
import DisplayProp from './DisplayProp';
import StateLogger from './StateLogger';
import SimpleForm from './SimpleForm';

const App = () => {
  return (
    <div>
      <Greeting />
      <ClickCounter />
      <DisplayProp message="Ini adalah pesan dari prop!" />
      <StateLogger />
      <SimpleForm />
    </div>
  );
};

export default App;

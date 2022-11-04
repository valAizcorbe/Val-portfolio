import React from 'react';
import {HashRouter} from 'react-router-dom'
import SideBar from './components/sidebar';
import routes from './routes';
import {Wrapper} from './StyledApp'

function App() {
  return (
    <HashRouter>
      <Wrapper>
    
      <SideBar/>
      {routes}
    </Wrapper>
    </HashRouter>
    
  );
}

export default App;

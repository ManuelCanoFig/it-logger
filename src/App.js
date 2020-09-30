import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import TechListModal from './components/techs/TechListModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import AddLogModal from './components/logs/AddLogModal'
import SearchBar from './components/layaout/SearchBar'
import AddBtn from './components/layaout/AddBtn'
import Logs from './components/logs/Logs'
const App = () => {
  
  useEffect(() => {
  //Initial Materialize JS
    M.AutoInit();
  });

  return (


    <div className="App">
      <SearchBar/>
      <div className='container'>
        <AddBtn/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <Logs/>
      </div>
    </div>
  );
}

export default App;

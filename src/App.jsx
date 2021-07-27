import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (

    //BEM naming convention
    <div className="app">
      <h1>Hello Twitter</h1>

      {/**Sidebar */}
      <Sidebar/>

      {/**Feed */}


      {/**Widgets */}
    </div>
  );
}

export default App;

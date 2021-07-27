import "./App.css";
import Feed from "./Components/Feed/Feed";
import Sidebar from "./Components/Sidebar/Sidebar";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      {/**Sidebar */}
      <Sidebar />

      {/**Feed */}

      <Feed />

      {/**Widgets */}
      <Widgets />
    </div>
  );
}

export default App;

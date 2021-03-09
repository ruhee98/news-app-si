import './App.css';
import HeaderComponent from './Header/header';
import BodyComponent from './Body/content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <HeaderComponent />
     <BodyComponent />
    </div>
  );
}

export default App;

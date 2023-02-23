import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/TitlePage';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <div>
        <Title />
        <UpcomingEvents />
      </div>
    </div>
  );
}

export default App;

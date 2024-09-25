import logo from './logo.svg';
import './App.css';
import myPhoto from './assets/yo.jpg';

function Curriculum() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0',color: '#333', borderRadius: '10px' }}>
      <h2>Ricardo Garcia Herbas</h2>
      <h3>correo:ricardogarciaherbas@gmail.com</h3>
      <h3>correo:ricardogarciaherbas@gmail.com</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myPhoto} alt="Mi foto" style={{ width: '150px', borderRadius: '50%' }} />
        <Curriculum />
      </header>
    </div>
  );
}

export default App;

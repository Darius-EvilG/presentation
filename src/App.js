import logo from './logo.svg';
import './App.css';
import myPhoto from './assets/yo.jpg';

function Curriculum() {
  return (
    <div className="curriculum-container">
    <div className="header">
      <h1>Ricardo Garcia Herbas</h1>
      <h2>Desarrollador de Software</h2>
    </div>
    
    <div className="contact-info">
      <p><strong>Email:</strong> ricardogarciaherbas@gmail.com</p>
      <p><strong>Teléfono:</strong> 69548672</p>
      <p><strong>Nivel de Inglés:</strong> B2</p>
    </div>
    
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li>Deportes</li>
        <li>Videojuegos</li>
        <li>Series</li>
      </ul>
    </div>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={myPhoto} alt="Mi foto" className="profile-photo" />
        <Curriculum />
      </header>
    </div>
  );
}

export default App;

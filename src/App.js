import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='page-content'>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;

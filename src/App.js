import './App.css';
import About from './components/main/about';
import Contact from './components/main/contact';
import Content from './components/main/content';
import Footer from './components/main/footer';
import Header from './components/main/header.js';
import MainContent from './components/main/mainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Content />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
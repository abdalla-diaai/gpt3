import logo from './logo.svg';
import './App.css';
import { Blog, Features, Footer, Header, Possibility, GPT3 } from './containers'
import { Brand, CTA, Navbar } from './components'

function App() {
  return (
    <div className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <GPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { Header, Tutorial } from './components';

function App() {
  return (
    <div className='bg-black'>
      <Header />
      <div className='max-w-[1200px] m-auto p-10'>
        <Tutorial />
      </div>
    </div>
  );
}

export default App;

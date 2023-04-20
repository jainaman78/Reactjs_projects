import './App.css';
import NAvbar from './components/NAvbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <NAvbar title="Project" />
    <div className='container'>
    <TextForm heading="Heading"></TextForm>
    </div>
    
    </>
  );
}

export default App;

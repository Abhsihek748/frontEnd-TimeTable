import './App.css';
import Container from '@mui/material/Container';
import DataHeader from './Components/DataHeader';

function App() {
  return (
    <>
    <div className="App">        {/* App Component*/}
    <Container maxWidth="md">  {/* added container */}
      <DataHeader/>             {/* main component */}
    </Container>
    </div>
    </>
  );
}

export default App;

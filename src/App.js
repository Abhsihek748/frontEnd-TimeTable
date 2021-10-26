import './App.css';
import Timetable from  './Components/Timetable'
import Container from '@mui/material/Container';
import DataHeader from './Components/DataHeader';

function App() {
  return (
    <>
    <div className="App">
    <Container maxWidth="md">
      <DataHeader/>
    </Container>
    </div>
    </>
  );
}

export default App;

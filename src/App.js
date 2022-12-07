import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
         </Routes>
    </Box>
  );
}

export default App;

//import Directory from './components/directory/directory.component.jsx'
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Authentication from './routes/sign-in/authentication.component';


const Shop = () => {
  return (
    <h1>I am the shop component</h1>
  )
}

const App = () => {
  return (  
  <Routes> 
    <Route path='/' element={<Navigation/>}>

      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='auth' element={<Authentication />}/>

    </Route>
  </Routes>
  );
};

export default App;

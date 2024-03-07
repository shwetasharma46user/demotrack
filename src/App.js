import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';

import Home from './components/Home';
import Service from './components/main/Service';
import Contact from './components/main/Contact';
import Footer from './components/Footer';
import Notfound from './components/Notfound';
import Portfolios from './components/main/Portfolios';
import Blogs from './components/main/Blogs';
import Calculator from './components/main/Calculator';
import About from './components/main/About';
import Career from './components/main/Career';
import TodoList from './components/main/ToDoList';
import ToDoEdit from './components/main/ToDoEdit';
import FormTodo from './components/main/FormTodo';

function App() {
  
  return (
    <div className="m-0 font-sans text-sm antialiased font-normal text-gray-500 bg-white App sm:text-base leading-default"
    style={{fontFamily: "'Manrope', sans-serif"}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/portfolio' element={<Portfolios />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/calculator' element={<Calculator/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path='/todoedit' element={<ToDoEdit />}/>
          <Route path='/formtodo' element={<FormTodo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

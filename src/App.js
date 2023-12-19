import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Banner from './components/banner';
import Header from './components/header';
import About from './components/main/about';
import Home from './components/home';
import Service from './components/main/service';
import Portfolio from './components/main/portfolio';
import Blog from './components/main/blog';
import Career from './components/main/career';
import Contact from './components/main/contact';
import Footer from './components/footer';
import Notfound from './components/notfound';

function App() {
  const titleHeadings= {
    aboutTitle: "About",
    aboutSubtitle: "Find more about us",
    serviceTitle: "Services",
    serviceSubtitle: "Check our services",
    portfolioTitle: "portfolio",
    portfolioSubTitle: "Check our portfolio",
    careerTitle: "Career",
    careerSubTitle: "Find Job  in our career page",
    contactTitle: "Contact",
    contactSubTitle: "Contact Us",
    blogTitle: "Blog",
    blogSubTitle: "Read our latest Blog"
  }
  return (
    <div className="m-0 font-sans text-sm antialiased font-normal text-gray-500 bg-white App sm:text-base leading-default"
    style={{fontFamily: "'Manrope', sans-serif"}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/header' element={<Header />} />
          <Route path='/banner' element={<Banner />} />
          <Route path='/about' element={<About titleAbout={titleHeadings}/>} />
          <Route path='/career' element={<Career titleCareer={titleHeadings}/>} />
          <Route path='/contact' element={<Contact titleContact={titleHeadings}/>} />
          <Route path='/blog' element={<Blog titleBlog={titleHeadings}/>} />
          <Route path='/service' element={<Service titleService={titleHeadings}/>} />
          <Route path='/portfolio' element={<Portfolio  titlePortfolio={titleHeadings}/>} />
          <Route path='/footer' element={<Footer />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

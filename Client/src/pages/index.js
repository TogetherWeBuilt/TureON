import React, {useState} from 'react';
import Sidebar from '../components/Slidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {   homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
  const [ isOpen, setIsOpen] = useState(false)

  const toggle = () => {
     setIsOpen(!isOpen)
  };

  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle}/>
     <HeroSection />
     
     <InfoSection {...homeObjTwo}/>
     <Services/>
     
     <Footer />
    </>
  );
};

export default Home;

//homeObjOne,homeObjThree,
//<InfoSection {...homeObjOne}/>
//<InfoSection {...homeObjThree}/>
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Carausel from './components/Caraousel/Carousel';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carausel />
      <div style={{textAlign:'center' , maxWidth:'70%' , margin:'4rem auto'}}>
        <h3 style={{fontWeight:'bold'}}>About Taste of Home </h3>
        <h6>
          Taste of Home offers you Pure Veg Food of your choice, using exotic spices and ingredients on a specially made huge
          unit. With delightful cuisine and excellent quality of the food being
          served, It will make your experience unforgettable and make you feel like you're HOME.
        </h6>
      </div>
      <FeaturedCategories/>
      <Contact/>
    </div>
  );
}

export default App;

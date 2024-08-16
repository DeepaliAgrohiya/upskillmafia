import React from 'react'
import Trialcard from './components/Trialcard'
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';
import image11 from './assets/image11.jpg';
import image12 from './assets/image12.jpg';
import './App.css';

function App() {
  return (
  <>  
  <h1 className=' text-white flex justify-center items-center text-xl my-5'><b>All cards are here. </b></h1>  
  <div className='flex flex-wrap gap-36 justify-center items-center mx-24 my-10'>
    <Trialcard username = 'Pikachu' description = 'Thunderbolt' images = 'https://facts.net/wp-content/uploads/2023/07/20-facts-about-pikachu-1689578613.jpg'/>
    <Trialcard username = 'Charizard' description = 'Flamethrower'images = {image2} />
    <Trialcard username = 'Bulbasaur' description = 'Solar beam' images = {image3}/>
    <Trialcard username = 'Squirtle' description = 'Watergun' images = {image4}/>
    <Trialcard username = 'Jigglypuff' description = 'Sing' images = {image5}/>
    <Trialcard username = 'Meowth' description = 'Pay day' images = {image6}/>
    <Trialcard username = 'Machamp' description = 'Dynamic Punch' images = {image7}/>
    <Trialcard username = 'Genger' description = 'Shadow ball' images = {image8}/>
    <Trialcard username = 'Eevee' description = 'Quick attack'images = {image9}/>
    <Trialcard username = 'Snorlax' description = 'Body slam' images = {image10}/>
    <Trialcard username = 'Gyarados' description = 'Hyper beam'images = {image11}/>
    <Trialcard username = 'Alakazam' description = 'Psychic'images = {image12}/>
  </div>
  </>
  )
}

export default App
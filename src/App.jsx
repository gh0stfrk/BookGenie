import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './miniComponents/Navbar'
import SearchElement from './miniComponents/SearchElement'
function App() {
  const textItems = [
    "I like books and I'm a software engineer",
    "I like to learn about spacecrafts, suggest me books",
    "What should I learn to become a spacecraft engineer",
    "I like karate",
    "Recommend books on artificial intelligence and machine learning",
    "Looking for novels with mystery and suspense",
    "Suggest coding books for beginners",
    "Interested in learning about renewable energy, any book recommendations?",
    "I'm a history enthusiast, recommend books on ancient civilizations",
    "Looking for books on mindfulness and meditation",
    "Recommendations for space exploration documentaries",
    "Books for improving communication skills",
    "I enjoy cooking, suggest me some good recipe books",
    "Best books for learning graphic design",
    "Looking for books on astrophysics and black holes",
    "Recommendations for classic literature",
    "Books on entrepreneurship and business strategy",
    "I like to travel, suggest books on different cultures",
    "Best books for understanding climate change",
    "Suggest me a good fantasy series",
    "I'm into photography, recommend books on photography techniques",
    "Books for improving productivity and time management",
    "Looking for books on artificial intelligence ethics",
    "Recommendations for self-help books",
    "I like to paint, suggest books on art history",
    "Books on sustainable living and eco-friendly practices",
    "Suggest me books on ancient philosophy",
    "I enjoy solving puzzles, recommend books on logical reasoning",
    "Looking for books on financial planning and investment",
    "Recommendations for science fiction novels"
  ];
  
  const [placeholderText, setPlaceholderText] = useState("Type what are you thinking...")

  const getRandomTextItem = () => {
    const randomIndex = Math.floor(Math.random() * textItems.length);
    return textItems[randomIndex];
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
        setPlaceholderText(getRandomTextItem())
      },5000)
    
      return () => clearInterval(interval)
  }, []);
  return (
    <>
    <div>
      <Navbar/>
      <SearchElement placeholderText={placeholderText}/>
    </div>
    </>
  )
}

export default App

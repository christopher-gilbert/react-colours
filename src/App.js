import React, { useState } from 'react';
import './App.css';
import ColorList from './components/ColorList';
import data from './data/colors.json';

function App() {
  const [colors, setColors] = useState(data);
  return (
    <ColorList 
      colors={colors} 
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }} 
      onRateColor={(id, rating) => {
          const newColors = colors.map(color => color.id == id ? {...color, rating} : color)
          setColors(newColors);

      }} 
    />
  );
}

export default App;

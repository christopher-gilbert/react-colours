import React, { useState } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import data from './data/colors.json';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(data);
  return (
    <>
    <AddColorForm
      onNewColor={(title, color) => {
        const newColors = [...colors, {    id: v4(),
        title,
        color, 
        rating: 0 }];
        setColors(newColors);
      }} />
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
    </>
  );
}

export default App;

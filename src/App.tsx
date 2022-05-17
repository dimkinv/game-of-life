import React, { useEffect, useState } from 'react';
import { generateNewMatrix, Matrix } from './api/api';
import './App.css';
import { calculateNextState } from './logic/logic';


let staticMatrix: Matrix = {};
let currentInterval: NodeJS.Timer;
function App() {
  const [matrix, setMatrix] = useState<Matrix>();

  useEffect(()=>{
    staticMatrix = generateNewMatrix()
    setMatrix(staticMatrix);
    document.onmousemove = (e)=>{
      if(e.buttons === 0){
        return;
      }

      const target = e.target as HTMLDivElement;

      const attr = target.attributes.getNamedItem('data-coordinates');
      if(!attr){
        return;
      }
      const value = attr?.value;
      
      const [x,y] = value?.split('-') ?? [];

      console.log(`${x}-${y}`)
      updateMatrix(y, x, true);
      setMatrix(staticMatrix);
    }
  }, []);

  return (
    <div className="App">
      <h1>Game of Life</h1>
      <div className="button">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="container">
        {matrix && Object.entries(matrix).map(([y, row]) => {
          return (
            <div key={`row${y}`} className="row">{Object.entries(row).map(([x, value]) => {
              return (
                <div key={`cell-${x}-${y}`} data-coordinates={`${x}-${y}`} style={{backgroundColor: value ? 'black' : 'white'}}></div>
              )
            })}</div>
          )
        })}
      </div>
    </div>
  );

  // function cellClicked(y: string, x: string, value:boolean){
  //   if(matrix[y][x]){
  //     return;
  //   }

  //   const newMatrix = updateMatrix(y, x, value, matrix);
  //   setMatrix(newMatrix)
  // }

  function reset(){
    staticMatrix = generateNewMatrix();
    setMatrix(staticMatrix);
  }

  function start(){
    if(!matrix){
      return;
    }

    currentInterval = setInterval(()=>{
      staticMatrix = calculateNextState(staticMatrix);
      setMatrix(staticMatrix);
      console.log('tick');
    }, 1000)
  }

  function stop(){
    clearInterval(currentInterval);
  }
}

function updateMatrix(y: string, x: string, value: boolean) {
  const newMatrix = JSON.parse(JSON.stringify(staticMatrix));
  newMatrix[y][x] = value
  staticMatrix = newMatrix;
  return newMatrix;
}

export default App;

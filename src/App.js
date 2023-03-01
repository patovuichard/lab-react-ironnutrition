import { useState } from 'react';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// import { Card, Row, Col, Divider, Input, Button } from "antd";
import { Row } from 'antd';
import './App.css';

function App() {

  const [food, setFood] = useState(foods);
  const [foodToDisplay, setFoodToDisplay] = useState(foods)

  const selectedFood = (searchInput) => {
    const filteredFood = food.filter((eachFood) => {
      let nameMin = eachFood.name.toLowerCase()
      let searchMin = searchInput.toLowerCase()
      if (nameMin.includes(searchMin)) {
        return true
      } else {
        return false
      }
    })
    // setFood(filteredFood)
    setFoodToDisplay(filteredFood)
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search selectedFood={selectedFood}/>
      <Row>
        {foodToDisplay.map((eachFood) => {
          return (
            <div key={eachFood.name}>
              {/* <p> {eachFood.name} </p>
            <img src={eachFood.image} width={'200px'} /> */}
              <Foodbox eachFood={eachFood} />
            </div>
          );
        })}
      </Row>
      <AddFoodForm 
        setFood={setFood}
        setFoodToDisplay={setFoodToDisplay}
      />
    </div>
  );
}

export default App;

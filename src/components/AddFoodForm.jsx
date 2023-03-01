import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };
    props.setFood((food) => {
      const stateClone = [...food];
      stateClone.push(newFood);
      return stateClone;
    });
    props.setFoodToDisplay((food) => {
      const stateClone = [...food];
      stateClone.push(newFood);
      return stateClone;
    });

    setNameInput('');
    setImageInput('');
    setCaloriesInput(0);
    setServingsInput(0);
  };

  return (
    <div>
      <form>
        <Divider>Add Food Entry</Divider>

        <label htmlFor="name">Name</label>
        <Input
          value={nameInput}
          name="name"
          type="text"
          onChange={(event) => {
            setNameInput(event.target.value);
          }}
        />

        <label htmlFor="image">Image</label>
        <Input
          value={imageInput}
          name="name"
          type="text"
          onChange={(event) => {
            setImageInput(event.target.value);
          }}
        />

        <label htmlFor="calories">Calories</label>
        <Input
          value={caloriesInput}
          name="calories"
          type="number"
          onChange={(event) => {
            setCaloriesInput(event.target.value);
          }}
        />

        <label htmlFor="servings">Servings</label>
        <Input
          value={servingsInput}
          name="servings"
          type="number"
          onChange={(event) => {
            setServingsInput(event.target.value);
          }}
        />

        <button onClick={handleSubmitForm}>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;

import { Card, Col, Button } from 'antd';

function Foodbox(props) {
  return (
    <div>
      <Col>
        <Card
          title={props.eachFood.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.eachFood.image} height={60} alt="eachFood" />
          <p>Calories: {props.eachFood.calories}</p>
          <p>Servings: {props.eachFood.servings}</p>
          <p>
            <b>
              Total Calories:{' '}
              {props.eachFood.calories * props.eachFood.servings}{' '}
            </b>{' '}
            kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    </div>
  );
}

export default Foodbox;

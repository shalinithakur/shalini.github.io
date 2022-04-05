import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import pic from "./asset/images/normal.jpg";
import { Form, Input, Button, Checkbox, Slider, Select, Switch } from 'antd';
import { useState, useEffect } from 'react';
function App() {

  const[height, setHeight]= useState('cm');
  const[weight, setWeight]= useState('kg');
  const[age, setAge]= useState('');
  const[activity, setActivity]= useState('');
  const[bmi, setBmi] = useState('0');
  const[weightType, setWeightType] = useState('');
  const [bmiClass, setBmiClass] = useState('');
  const calculateWeightType = () =>{
    if(Number(bmi)){
      if(bmi < 18.5){
        setWeightType('Underweight') ;
      }
      
      if(bmi>= 18.5 && bmi < 24.9){
        setWeightType('Normal weight');
      }
      if(bmi >= 25){
        setWeightType('Overweight');
      }
    }
    // switch(Number(bmi)){

    //   case (bmi < 18.5):
    //     setWeightType('Underweight') ;
    //   break;
    //   case (bmi >= 18.5 && bmi < 24.9):
    //     setWeightType('Normal weight');
    //   break;
    //   case (bmi >= 25):
    //     setWeightType('Overweight');
    //   break;
    //   default:
    //     setWeightType('default');
    //     break;
    // }
    
  }
  const calculateBmi=()=>{
    let bmiVal = Number(weight)/Math.pow(Number(height)/100,2);
    console.log(Number(weight));
    setBmi(bmiVal);
 }
  useEffect(()=>{
    if(age && weight && height){
      console.log(age, weight, height);
      calculateBmi();
    }
    
  }, [age, weight, height]);

  useEffect(()=>{
    calculateWeightType();
    
  },[bmi]);
  const { Option } = Select;
  const onFinish = (values) => {
    console.log('Success:', values);
    setWeight(values.weight);
    setHeight(values.height);
    setAge(values.age);
    setActivity(values.activity);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
  <>
      <div className="App">
      <div className="ant-form-images pull-right"><img src={pic} /></div>
        <div className="pull-left">
        {JSON.stringify(bmi)}
        {JSON.stringify(weightType)}
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Weight"
        name="weight"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Slider 
        min={1}
        max={200} />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Slider
         min={1}
         max={120}  />
      </Form.Item>
      <Form.Item
        label="Height"
        name="height"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Slider 
        min={1}
        max={200}  />
      </Form.Item>
      <Form.Item
        label="Activity Style"
        name="activitystyle"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Select>
    <Option value="Active">Active</Option>
    <Option value="Normal">Normal</Option>
    <Option value="Sedentary">Sedentary</Option>
    


  </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></div>
   
  </div>
  </>
  );
}

export default App;

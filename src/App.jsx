import React from "react";
import { BiCheckCircle, BiBookAlt } from "react-icons/bi";
import Button from "./components/Button";


const App = () => {
  const handleClick =()=>{
    console.log('clicked')
  }
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className='mb-5'>Buy now</Button>
      </div>
      <div>
        <Button rounded>Click to activate</Button>
      </div>
      <div>
        <Button warning rounded>
          Cancel
        </Button>
      </div>
      <div>
        <Button outline>
          {" "}
          <BiBookAlt />
          Add address
        </Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
      <div>
        <Button success>
          <BiCheckCircle />
          Created
        </Button>
      </div>
    </div>
  );
};

export default App;

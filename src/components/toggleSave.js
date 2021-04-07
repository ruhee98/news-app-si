import React from "react";
import { useGlobalContext } from "./Context";
import {Button} from 'react-bootstrap';
import Save from "./Save";

const ToggleSaveButton = () => {
  const { toggleSaveLater } = useGlobalContext();
  return (   
  <div>
    <Button onClick={toggleSaveLater}>
    </Button>
    <Save />

  </div>
    );
};

export default ToggleSaveButton;



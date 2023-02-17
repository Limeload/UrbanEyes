import React from 'react';
import { Dropdown } from 'react-bootstrap'

function DropDown({service}){
    console.log(service)
    return(
        <div>
            <Dropdown>Select a Service
      <Dropdown.Toggle variant="light" id="dropdown-basic">

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><li key={service.id}>{service.name}</li></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    )
}

export default DropDown;

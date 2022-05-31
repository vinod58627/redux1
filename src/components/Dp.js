import React from 'react';
import Select from 'react-select';
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownDivider, CDropdownMenu } from '@coreui/bootstrap-react';

const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];


const Dp = () => (

  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ techCompanies } />
      </div>
      <div className="col-md-4"></div>
    </div>
  

    {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((color, index) => (
  <CDropdown variant="btn-group" key={index}>
    <CDropdownToggle color={color}>{color}</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
          </CDropdown>
               ))}
</div>);

export default Dp;
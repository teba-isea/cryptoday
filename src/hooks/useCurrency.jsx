import React,{Fragment,useState} from 'react';
import styled from "@emotion/styled"

const Label = styled.label`
  text-align:center;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color:#FFF;
  text-transform:uppercase;
  font-weight:bold;
  font-size:1.5rem;
  margin-top:1rem;
  display:block;
`;

const Select = styled.select`
  text-align:center;
  width:100%;
  display:block;
  margin:0.5rem;
  padding:1rem;
  appearance:none;
  border-radius:2px;
  border:none;
  font-size:1rem;
`;

const useCurrency = (label,avalibleCurrencies) => {
  
  const [currency, setCurrency] = useState("")

  const SelectCoin = () => {
    return (
      <Fragment> 
      <Label>{label}</Label>
      <Select onChange={e => setCurrency(e.target.value)} value={currency}>
        <option value="">---Select---</option>
        {avalibleCurrencies.map(x =>(<option key={x.code} value={x.code}>{x.name}</option>))}
      </Select>
      </Fragment>
     );
  }
  return [currency,SelectCoin]
}
 
export default useCurrency;
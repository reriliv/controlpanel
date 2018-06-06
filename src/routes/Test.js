import React from 'react';
import { connect } from 'dva';
import xtb from '../components/xtb/xtb';
const { Slider } = xtb;
// import { Slider } from '../components/xtb/xtb';
// console.log(Slider);

const Test = ({dispatch}) => {
  return (
  	<Slider
  	 min={0}
     max={100}
     step={1}
     defaultValue={15}
  	/>
  )
};

export default connect()(Test);
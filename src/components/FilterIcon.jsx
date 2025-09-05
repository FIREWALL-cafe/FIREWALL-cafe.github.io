import React from 'react';
import FilterIconSvg from '../assets/icons/tune.svg';

const FilterIcon = ({ className }) => {
  return <img src={FilterIconSvg} alt="Filter" className={className} />;
};

export default FilterIcon;

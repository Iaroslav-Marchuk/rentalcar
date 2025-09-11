import Select from 'react-select';
import { useState } from 'react';

import css from './FilterBar.module.css';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

const FilterBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = option => {
    setSelectedOption(option);
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Car brand</label>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Choose a brand"
      />
    </div>
  );
};

export default FilterBar;

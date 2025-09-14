import Select from 'react-select';

import Icon from '../Icon/Icon.jsx';

import css from './Filter.module.css';

const Filter = ({ label, options, placeholder, value, onChange }) => {
  const customStyles = {
    control: provided => ({
      ...provided,
      width: '204px',
      height: '44px',
      padding: '12px 16px ',
      borderRadius: '12px',
      backgroundColor: 'var(--color-inputs)',
      cursor: 'pointer',
      border: 'none',
      boxShadow: 'none',

      '&:hover': {
        border: 'none',
      },
    }),

    input: provided => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),

    valueContainer: provided => ({
      ...provided,
      padding: '0',
    }),

    placeholder: provided => ({
      ...provided,
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.25,
      color: 'var(--color-main)',
    }),

    menu: provided => ({
      ...provided,
      backgroundColor: 'var(--color-white)',
      borderRadius: '12px',
      padding: '14px 18px ',
      marginTop: 4,
      boxShadow: '0 4px 36px rgba(0,0,0,0.2)',
    }),

    menuList: provided => ({
      ...provided,
      maxHeight: '272px',
      overflowY: 'auto',
      padding: 0,
    }),

    option: (provided, state) => ({
      ...provided,
      fontSize: 'var(--fs-body)',
      fontWeight: state.isSelected ? 'var(--fw-semi-bold)' : 'var(--fw-medium)',
      lineHeight: '1.25',
      color: state.isSelected ? 'var(--color-main)' : 'var(--color-gray)',
      paddingBottom: '8px',
      backgroundColor: state.isSelected
        ? 'var(--color-white)'
        : state.isFocused
        ? '#E2E8F0'
        : 'var(--color-white)',
      cursor: 'pointer',
    }),

    dropdownIndicator: provided => ({
      ...provided,
      padding: '0 12px',
    }),
  };

  const DropdownIndicator = props => {
    const { menuIsOpen } = props.selectProps;
    return (
      <div style={{ padding: 0 }}>
        <Icon
          name={menuIsOpen ? 'icon-arrow-up' : 'icon-arrow-down'}
          width={16}
          height={16}
        />
      </div>
    );
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>{label}</label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Filter;

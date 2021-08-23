import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

class ReportComboBox extends Component {
  customStyles = {
    valueContainer: (provided, state) => ({
      ...provided,
      textOverflow: "ellipsis",
      width: "90%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      display: "initial",
    }),
    control: (base) => ({
      ...base,
      height: 60,
      width: 735,
      backgroundColor: "transparent",
      outline: "none",
      border: 0,
      overflow: "hidden",
      scrollY: "auto",
    }),
    menu: (base) => ({
      ...base,
      width: "70%",
      maxHeight: 200,
      overflow: "auto",
    }),
  };

  multiValueContainer = ({ selectProps, data }) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex((selected) => selected.label === label);
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? ` (${allSelected.length})` : ", ";
    const val = `${label}${labelSuffix}`;
    return val;
  };

  render() {
    const { optionGroups,onChange} = this.props;
    const { CustomOption, multiValueContainer, customStyles, ValueContainer } =
      this;
    return (
      <Select
        options={optionGroups}
        onchange={onchange}
        isMulti
        components={{
          MultiValueContainer: multiValueContainer,
        }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        styles={customStyles}
        isSearchable={false}
      />
    );
  }
}
ReportComboBox.propTypes = {
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string, //for group
      options: PropTypes.arrayOf(
        // group options
        PropTypes.arrayOf(
          PropTypes.shape({
            //
            value: PropTypes.oneOf([
              PropTypes.string,
              PropTypes.number,
              PropTypes.object,
            ]).isRequired,
            label: PropTypes.string.isRequired,
          })
        ).isRequired
      ),
    })
  ),
};

export default ReportComboBox;

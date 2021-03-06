import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  ControlLabel,
  FormGroup,
  HelpBlock
} from 'react-bootstrap'
export default class BsTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleOnChange = this.handleOnChange.bind(this)
  }
  handleOnChange(e) {
    this.props.onChange({
      id: this.props.id,
      value: e.target.value
    })
  }
  render() {
    return (
      <FormGroup className={this.props.className ? this.props.className : ''} validationState={this.props.invalid ? 'error' : null}>
        <ControlLabel>{this.props.label ? this.props.label : ''}</ControlLabel>
        <FormControl
          type='text'
          defaultValue={this.props.defaultValue ? this.props.defaultValue : ''}
          onChange={this.handleOnChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ''}
          readOnly={this.props.readOnly ? this.props.readOnly : false}
        />
        <FormControl.Feedback />
        <HelpBlock>{this.props.helperText ? this.props.helperText : ''}</HelpBlock>
      </FormGroup>
    )
  }
}

BsTextInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.any,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool
}

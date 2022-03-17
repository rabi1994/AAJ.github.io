import React from 'react'

React.createClass({
    render: function() {
    return <div>
        <label> { this.props.label } </label>
        <input type="text" onChange={ this.props.valChange } value={ this.props.value } />
    </div>
    }
});
var Wrapper = React.createClass({
  getInitialState: function() {
    return {
      datafield: {
        name: ''
      }      
    }
  },
  nameChange: function(e) {

    this.setState({datafield: {name: e.currentTarget.value}})

  },
  render: function() {
    let datafield = this.state.datafield
    return <BasicInputBox label="Student Name :" valChange={this.nameChange} value={datafield.name}/>
  }
})
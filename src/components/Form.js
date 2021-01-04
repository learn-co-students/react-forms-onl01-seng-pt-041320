import React from 'react';

class Form extends React.Component {

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
          name="firstName"
          type="text"
          onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName}
          />
          <input
          name="lastName"
          type="text"
          onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName}
          />
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default Form;

import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.children[1].value
    this.sendFormDataSomewhere({ firstName, lastName })
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstname}</span>
      <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleFirstNameChange(event)}
            value={this.state.firstName}
          />
          <input
            type="text"
            onChange={event => this.handleLastNameChange(event)}
            value={this.state.lastName}
          />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}


export default Form;

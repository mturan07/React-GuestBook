import React from 'react';
// import { Form } from 'react-advanced-form'
// import { Input } from 'react-advanced-form-addons'

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = { FirstName: '', LastName: '', Email: '', Message: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});

    //console.log(this.state.FirstName);
  }

  ClearForm = (e) => {
    e.preventDefault();
    this.setState({ FirstName: '', LastName: '', Email: '', Message: '' });
  }

  GoHome = (e) => {
    e.preventDefault();
    this.props.history.push('/home');
  }

  handleClearForm(e) {
    e.preventDefault();
    document.getElementById("new-entry-form").reset();
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let userData = this.state;
    console.log(userData);

    fetch('/api/entries', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((response) => {
      response.json().then((response) => {
        console.log(response);
      })
    }).catch(err => {
      console.error(err)
    }).then(
      this.props.history.push('/home')
    )
  }

  render() {
    return (
      <div className="col-md-6 col-xs-12 mx-auto">
        <br/>
        <h2>New Message</h2>  
        <br/>
        <form ref={form => this.form = form} id="new-entry-form" action="POST" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" value={this.state.FirstName} onChange={this.handleChange} className="form-control" name="FirstName" id="FirstName" />
          </div>
          <div className="form-group">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" value={this.state.LastName} onChange={this.handleChange} className="form-control" name="LastName" id="LastName" />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" value={this.state.Email} onChange={this.handleChange} className="form-control" name="Email" id="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="Message">Message</label>
            <textarea className="form-control" value={this.state.Message} onChange={this.handleChange} name="Message" id="Message" rows="3"></textarea>
          </div>
          <button className="btn btn-primary mr-2" type="submit" value="Submit">Submit</button>
          <button className="btn btn-warning mr-2" onClick={this.ClearForm}>Reset</button>
          <button className="btn btn-success" onClick={this.GoHome}>Home</button>
        </form>
      </div>
    );
  }
}

export default New;
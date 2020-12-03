import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      FirstName: '', LastName: '', Email: '', Message: '', InsertDate: '',
      id: props.match.params.id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    //console.log(props.match.params.id);
  }

  componentDidMount() {
    //console.log("State Id : " + this.state.id)

    fetch('/api/entries/?id=' + this.state.id)
      .then(res => res.json())
      .then(
        json => {
          this.setState({
            isLoaded: true,
            items: json
          })
        }
      );

    //console.log(this.state);
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });

    //console.log(this.state.FirstName);
  }

  handleClearForm(e) {

    e.preventDefault();
    this.setState({
      FirstName: '',
      LastName: '',
      Email: '',
      Message: ''
    })

  }

  GoHome = (e) => {
    e.preventDefault();
    this.props.history.push('/home');
  }

  handleFormSubmit(e) {
    e.preventDefault();

    let userData = this.state;
    //console.log(userData);

    fetch('/api/entries/?id=' + this.state.id,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      // .then((response) => {
      //   if (!response.ok) {
      //     console.log('Bad status code from server.');
      //   }
      //   else
      //   {
      //     response.json().then((response) => {
      //       console.log(response);
      //     });
      //   }
      //   })
      .catch(err => {
        console.error(err)
      });

      this.props.history.push('/edit/' + this.state.id);
  }

  render() {

    //var isLoaded = this.state.isLoaded;
    var { isLoaded, items } = this.state;
    //console.log("render --> " + this.state);
    
    if (isLoaded) {
      if (this.state.FirstName === "")
      {
        this.setState({
          FirstName: items.FirstName,
          LastName: items.LastName,
          Email: items.Email,
          Message: items.Message
        });
      }
    }

    if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="col-md-6 col-xs-12 mx-auto">
          <br />
          <h2>Edit Message</h2>
          <br />
          <form action="POST" onSubmit={this.handleFormSubmit}>
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
            <button className="btn btn-success" onClick={this.GoHome}>Home</button>
          </form>
        </div>
      );
    }
  }
}

export default Edit;
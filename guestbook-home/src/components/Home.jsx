import React, { Component } from 'react';
//import {Redirect} from 'react-router-dom';
//import Edit from './Edit'
import Swal from 'sweetalert2'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('/api/entries')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

        //console.log(this.state.items);
    }

    handleClickEdit(e, param) {
        e.preventDefault();    
        //alert(param);
        this.props.history.push('/edit/' + param);      
    }

    handleClickDelete(e, param) {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText:'No',
          }).then((result) => {
            if (result.value) {

                //alert(param);               
         
                fetch('/api/entries/?Id=' + param, 
                {
                    method: 'DELETE',
                    headers: {'content-type': 'application/json'},
                    body: ''
                })
                .then(res => res.json())
                .then(res => console.log(res));            

                Swal.fire(
                    'Deleted!',
                    'Entry has been deleted.',
                    'success'
                ).then(
                    this.props.history.push('/home')
                );
              
            }
          });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>           
        }
        else {
            return (
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Insert Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.Id}>
                                    <th>{item.Id}</th>
                                    <td>{item.FirstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Message}</td>
                                    <td>{item.InsertDate}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary m-1"
                                            onClick={(e) => this.handleClickEdit(e, item.Id)}>Edit</button>
                                        <button type="button" className="btn btn-warning"
                                            onClick={(e) => this.handleClickDelete(e, item.Id)}>Delete</button>
                                    </td>
                                </tr>                                
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Home;
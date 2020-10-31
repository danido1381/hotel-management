import { Button } from "@material-ui/core";
import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

class CheckoutList extends Component {
    checkOut = async(id)=>{
        try{
            let data = await Axios.delete("http://localhost:5000/booking/"+id)
            console.log(data)
            this.props.getBooks(data.data)
        }catch(err){
            console.log(err)
        }
    }
  render() {
    return <div style={{padding:"50px"}}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No.</Table.HeaderCell>
            <Table.HeaderCell>firstname</Table.HeaderCell>
            <Table.HeaderCell>Lastname</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>Telephone</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.bookings.map((info,index)=><Table.Row key={index}>
              <Table.Cell>{index+1}</Table.Cell>
              <Table.Cell>{info.firstname}</Table.Cell>
              <Table.Cell>{info.lastname}</Table.Cell>
              <Table.Cell>{info.email}</Table.Cell>
              <Table.Cell>{info.telephone}</Table.Cell>
              <Table.Cell>{info.price}</Table.Cell>
              <Table.Cell><Button variant="contained" color="primary" onClick={()=>this.checkOut(info.id)}>Checkout</Button></Table.Cell>
          </Table.Row>)}
        </Table.Body>
      </Table>
    </div>;
  }
}
const bookingUser =(data)=>({type:"BOOKINGS",data})

const mapStateToProps = state =>{
  return {
    bookings: state.bookings
  }
}

const mapDispatchtoProps = dispatch =>{
    return {
      getBooks:(data)=>dispatch(bookingUser(data))
    }
  }
CheckoutList = connect(mapStateToProps,mapDispatchtoProps)(CheckoutList)
export default CheckoutList;

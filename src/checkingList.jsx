import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

class CheckingList extends Component {
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
            <Table.HeaderCell>RoomType</Table.HeaderCell>
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
              <Table.Cell>{info.roomType}</Table.Cell>
          </Table.Row>)}
        </Table.Body>
      </Table>
    </div>;
  }
}

const mapStateToProps = state =>{
  return {
    bookings: state.bookings
  }
}
CheckingList = connect(mapStateToProps,null)(CheckingList)
export default CheckingList;

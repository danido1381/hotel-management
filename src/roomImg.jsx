import React, { Component } from "react";
import { data } from "./dataRoom";
import { Card, Icon, Image } from "semantic-ui-react";

export default class RoomList extends Component {
  render() {
    return (
      <div>
        {data.map((info, index) => (
          <Card
            key={index}
            style={{ display: "block-inline", float: "left", margin: "5px" }}
          >
            <Image
              src={info.img}
              wrapped
              ui={false}
              style={{ height: "200px" }}
            />
            <Card.Content>
              <Card.Header>Description</Card.Header>
              <Card.Meta>
                <span className="date">{info.description}</span>
              </Card.Meta>
              <Card.Description>Price: Rs. {info.price}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="like" />
                Likes {info.likes}
              </a>
              <p>Size {info.size}</p>
            </Card.Content>
          </Card>
        ))}
      </div>
    );
  }
}

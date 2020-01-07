import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const VideoListItem = props => {
  return (
    <div className="m-2 " style={{ height: "auto", width: 300 }}>
      <Card>
        <iframe
          width="295"
          height="200"
          src={props.url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <CardBody>
          <CardTitle>{props.title} </CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default VideoListItem;

import React, { Component } from "react";
import "reactstrap";
import VideoListItem from "./videoListItem";
import "bootstrap/dist/css/bootstrap.min.css";

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        },
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        },
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        },
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        },
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        },
        {
          url: "https://www.youtube.com/embed/W6NZfCO5SIk",
          title: "JavaScript Tutorial for Beginners",
          subtitle: "1 674 448 vues•23 avr. 2018",
          text:
            "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. "
        }
      ]
    };
  }

  render() {
    return (
      <div className=" d-flex flex-wrap justify-content-center mt-5 container-fluid">
        {this.state.videos.map((video, index) => (
          <VideoListItem
            url={video.url}
            title={video.title}
            subtitle={video.subtitle}
            text={video.text}
          />
        ))}
      </div>
    );
  }
}

export default Videos;

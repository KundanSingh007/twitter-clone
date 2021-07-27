import React from "react";
import "./TweetBox.css";
import { Button, Input, Avatar } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/35429799?v=4" />
          <input placeholder="whats going guys" type="text" />
          <input placeholder="Enter image url" type="text" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

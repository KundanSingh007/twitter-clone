import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/35429799?v=4" />
          <input value={tweetMessage} placeholder="whats going guys" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;

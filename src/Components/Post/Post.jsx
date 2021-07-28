import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayNanme, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/35429799?v=4" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              kundan singh{" "}
              <span>
                <VerifiedUserIcon className="post__badge" />
                @reactninja
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/S5yqNNTQlEZfqQ7InC/giphy.gif"
          alt="https://gph.is/g/a9y90Ba"
        />
        <div className="post__footer">
          <ChatBubbleIcon />
          <RepeatIcon />
          <FavoriteIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetsContainer">
        <h2>Whats happening</h2>

        <TwitterTweetEmbed tweetId={"1416090043043573762"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="big bang theory"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/TheBigBangTheory"}
          options={{ text: "react js is awesome", via: "TheBigBangTheory" }}
        />
        <TwitterTweetEmbed tweetId={"1421259414745530371"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="onepieceanime"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverpragrammer"}
          options={{ text: "its one piece", via: "onepieceofficial" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

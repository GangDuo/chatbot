import React from 'react';

import avatar from '../avatar.png';
import classes from "./FloatingChatbot.module.css";

function FloatingChatbot({children}) {
  const [isIdle, setIsIdle] = React.useState(true);
  const handleClick = () => {
    setIsIdle(false)
  }

  console.log(classes)
  return (
    <div>
      {children}
      <div className={classes.chatbot} onClick={handleClick}>
        <figure style={{margin: 0}}>
          <img src={avatar} alt=""
               width="128" height="128"
               className={`${classes.circle} ${classes.border}`} />
        </figure>
        <div className={classes[`speech-wrapper`]}>
          <div className={classes.speech}>チャット受付中！</div>
        </div>
      </div>
    </div>
  );
}

export default FloatingChatbot;
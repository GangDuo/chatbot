import React from 'react';
import classNames from 'classnames/bind';

import styles from "./ChatApp.module.css";
import {SelfSpeechBubble, TextMessage} from './SelfSpeechBubble';

const cx = classNames.bind(styles);

export default function ChatApp() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  }
  const handleSubmit = (event) => {
    setMessages(prevState => prevState.concat(message))
    setMessage('');
    event.preventDefault();
  }

  return (
    <div className={cx("line-container")}>
      <div className={cx("line-title")}>
      タイトル
      </div>
  
      <div className={cx("line-contents", "scroll")}>
        {messages.map((message, i) => (
          <SelfSpeechBubble key={i} timestamp="0:30">
            <TextMessage>{message}</TextMessage>
          </SelfSpeechBubble>
        ))}

      </div>
      
      <div className={cx("line-footer")}>
        <form onSubmit={handleSubmit}>
          <input type="text" value={message} onChange={handleChange} />
          <button>send</button>
        </form>
      </div>
    </div>
  )
}
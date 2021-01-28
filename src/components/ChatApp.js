import React from 'react';
import classNames from 'classnames/bind';

import Stamp from './Stamp';
import styles from "./ChatApp.module.css";
import {SelfSpeechBubble, TextMessage as SelfTextMessage} from './SelfSpeechBubble';
import {SpeechBubble, TextMessage} from './SpeechBubble';
import person from '../icon.png';
import stamp13 from '../stamp/13.png';

const cx = classNames.bind(styles);

export default function ChatApp() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const handleChange = (event) => {
    setMessage(event.target.value);
  }
  const handleSubmit = (event) => {
    setMessages(prevState => prevState.concat([
      { message, isMe: true },
      { message: "そうなの！！", isMe: false }
    ]))
    setMessage('');
    event.preventDefault();
  }

  return (
    <div className={cx("line-container")}>
      <div className={cx("line-title")}>
      タイトル
      </div>
  
      <div className={cx("line-contents", "scroll")}>
        {
          messages.map(({message, isMe}, i) => {
            if(isMe) {
              return (
                <SelfSpeechBubble key={i} timestamp="0:30">
                  <SelfTextMessage>{message}</SelfTextMessage>
                </SelfSpeechBubble>
              )
            }
            return (
              <SpeechBubble key={i} avatar={person}
                            userName={"うさきち"}>
                <TextMessage>{message}</TextMessage>
                <Stamp><img src={stamp13} alt="stamp" /></Stamp>
                <Stamp src={stamp13} />
              </SpeechBubble>
            );
          })
        }


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
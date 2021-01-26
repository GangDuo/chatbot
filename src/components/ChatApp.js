import React from 'react';
import classNames from 'classnames/bind';

import styles from "./ChatApp.module.css";

const cx = classNames.bind(styles);

export default function ChatApp() {
  const [message, setMessage] = React.useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);
  }
  const handleSubmit = (event) => {
    alert('A name was submitted: ' + message);
    setMessage('');
    event.preventDefault();
  }

  return (
    <div className={cx("line-container")}>
      <div className={cx("line-title")}>
      タイトル
      </div>
  
      <div className={cx("line-contents", "scroll")}>
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
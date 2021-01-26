import React from 'react';
import classNames from 'classnames/bind';

import styles from "./SelfSpeechBubble.module.css";

const cx = classNames.bind(styles);

// 自分の吹き出し
export function SelfSpeechBubble({children, timestamp}) {
  const Status = () => {
    if(!timestamp) return <></>
    return <span className={cx("date")}>既読<br/>{timestamp}</span>
  }

  return (
    <div className={cx("line-right")}>
      {children}
      <Status/>
    </div>
  )
}

export function TextMessage({children}) {
  return <div className={cx("text")}>{children}</div>
}
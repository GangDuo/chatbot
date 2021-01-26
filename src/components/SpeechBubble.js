import React from 'react';
import classNames from 'classnames/bind';

import styles from "./SpeechBubble.module.css";

const cx = classNames.bind(styles);

// 相手の吹き出し
export function SpeechBubble({children, avatar, userName}) {
  const Avatar = () => {
    if(!avatar) return <></>
    return (
      <figure className={cx('avatar')}>
        <img className="circle" alt={userName} src={avatar} />
      </figure>
    )
  }

  return (<>
    <div className={cx("line-left")}>
      <Avatar/>

      <div className={cx("line-left-text")}>
        <div className={cx("name")}>{userName}</div>
        {children}
      </div>
    </div>
  </>)
}

export function TextMessage({children}) {
  return <div className={cx("text")}>{children}</div>
}
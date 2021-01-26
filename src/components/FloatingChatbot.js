import React from 'react';
import classNames from 'classnames/bind';

import avatar from '../avatar.png';
import styles from "./FloatingChatbot.module.css";
import { createModalChat } from './ModalChat';

const cx = classNames.bind(styles);

export function createFloatingChatbot(appElement) {
  const ModalChat = createModalChat(appElement);

  return function FloatingChatbot({children}) {
    const [isIdle, setIsIdle] = React.useState(true);
    const handleClick = () => {
      setIsIdle(false)
    }

    const closeModal = () => {
      setIsIdle(true);
    }

    return (
      <div>
        {children}
        <div className={cx({ 'd-none': !isIdle })}>
          <div className={cx('chatbot')} onClick={handleClick}>
            <figure style={{margin: 0}}>
              <img src={avatar} alt=""
                  width="128" height="128"
                  className={cx('circle', 'border')} />
            </figure>
            <div className={cx(`speech-wrapper`)}>
              <div className={styles.speech}>チャット受付中！</div>
            </div>
          </div>
        </div>
        <ModalChat modalIsOpen={!isIdle} onRequestClose={closeModal} />
      </div>
    );
  }
};
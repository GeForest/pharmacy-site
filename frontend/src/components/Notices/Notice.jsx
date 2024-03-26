import React, { useEffect } from 'react';
import styles from './Notices.module.css';
import { useAppContext } from '../../context/AppContext';

function Notification () {
  const {notice, setNotice } = useAppContext()

  const resetNotice = () => ({
    state: false,
    modification: {
      add: 'Add to cart: ',
      remove: 'Removed from cart: ',
    },
    title: ''
  })

  useEffect(() => {
    if(notice.state){
      const timer = setTimeout(() => {
        setNotice(resetNotice());
      }, 1800);

      return () => clearTimeout(timer);
  }
  }, [notice, setNotice]);

  const noticeText = notice.operation ? notice.modification[notice.operation] || '' : ''

  return (
    <div className={`${styles.notice} ${notice.state ? styles.active : ''}`}>
      <div className={styles.notice__text}>{noticeText}{notice.title}</div>
    </div>
  );
};

export default Notification;
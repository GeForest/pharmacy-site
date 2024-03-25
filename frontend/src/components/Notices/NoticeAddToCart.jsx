import React, { useEffect } from 'react';
import styles from './Notices.module.css';
import { useAppContext } from '../../context/AppContext';

function Notification () {
  const {notice, setNotice} = useAppContext()

  console.log(notice);
  useEffect(() => {
    console.log(notice)
    if(notice.state){
      const timer = setTimeout(() => {
        setNotice({state: false, productName: ''});
      }, 3000);

      return () => clearTimeout(timer);
  }
  }, [notice, setNotice]);

  return (
    <div className={`${styles.notice} ${notice.state ? styles.active : ''}`}>
      <div className={styles.notice__text}>Add to cart: {notice.productName}</div>
    </div>
  );
};

export default Notification;
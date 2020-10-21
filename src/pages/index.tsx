import React, { useEffect } from 'react';
import styles from './index.less';
import A from "../../ts/dist/es";
export default () => {
  useEffect(()=>{
    A.print("hello world");
  },[])
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

// Trong file CSS hoặc JSX của component Loading
import React from 'react';
import { Flex, Spin } from 'antd';
import styles from './Loading.module.scss';

function Loading() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.edit_form}>
                <div className={styles.edit_form_overlay}></div>
                <div className={styles.edit_form_body}>
                    <Flex align="center" justify="center">
                         <Spin size="large" />                       
                    </Flex>
                </div>
            </div>
        </div>
    );
}

export default Loading;

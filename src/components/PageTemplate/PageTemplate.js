import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => { //stateless 컴포넌트. state값이 없이 오직 값을 return하기 위해서만 사용하고, props만 받음
                                      //render함수도 없고 라이프사이클도 없음
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
               {children}
            </div>
        </div>
    );
};

export default PageTemplate;
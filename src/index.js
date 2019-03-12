import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); //service worker? 네트웍이 느리거나 오프라인인 상태에서도 온라인 인것 처럼 리소스들을 캐싱해서 보여주는 모듈

import React from 'react';
import ReactDOM from 'react-dom';
// import AppRouter from './AppRouter';
import AppRouterWithAntd from './AppRouterWithAntd';
// import './index.css';
import './index.scss';
import './base.scss';
import Carousel from './Pages/Carousel/index';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Carousel/>, document.getElementById('root'));
ReactDOM.render(<AppRouterWithAntd />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

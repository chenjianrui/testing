import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('show a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div); // 測試完要刪掉
});

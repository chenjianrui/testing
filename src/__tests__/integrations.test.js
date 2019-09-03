import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/posts', {
    status: 200,
    response: [{ title: 'title 1' }, { title: 'title 2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetchComments').simulate('click');

  // 這邊的 setTimeout 是模擬非同步事件需要等待 response 的時間
  moxios.wait(() => {
    // 先更新畫面
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);
    // 這個 done 是告訴測試說我們已經完成了，沒有要測試什麼了
    done();
    wrapped.unmount();
  });
});

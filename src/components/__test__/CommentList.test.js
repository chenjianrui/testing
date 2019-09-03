import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has element LI', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('show text for each comment', () => {
  // 測試沒辦法寫在一起，所以只能寫兩次 expect
  // 不過發現後面又 toEqual() 的話可以一行測試 ok，但沒那麼直覺還是寫兩行吧
  // expect(wrapped.render().text()).toEqual('comment 1comment 2')

  // 利用 render() and text() 來解析畫面上的字再加上 toContain()
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
});

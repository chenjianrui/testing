import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  // 掛載 dom 後必須卸載
  wrapped.unmount();
});

it('has a text area and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// describe 將某些測試集合在一起，這邊使用的需求是因為有相同的測試邏輯
// 而用 describe 包起來再用 beforeEach 將相同測試邏輯寫在裡面
describe('the text area', () => {
  beforeEach(() => {
    // 先測試 textarea 裡是否有輸入文字
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });
  it('has a test area that users can type in', () => {
    /*
    // .simulate 模擬事件
    wrapped.find('textarea').simulate('change', {
      // 這邊回傳一個假的事件物件，該物件提供給我們的 callback
      target: { value: 'new comment' }
    });
    // 強制更新畫面
    wrapped.update();
    */

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    /*
    // 先測試 textarea 裡是否有輸入文字
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
    */
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('test save comment reducer', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newAction = commentsReducer([], action);
  expect(newAction).toEqual(['new comment']);
});

it('test to unknown type', () => {
  const newAction = commentsReducer([], { type: 'howjfi' });
  expect(newAction).toEqual([]);
});

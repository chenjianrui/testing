import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const result = action.payload.data.map(item => item.title);
      return [...state, ...result];
    default:
      return state;
  }
};

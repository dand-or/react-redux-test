const initialState = {
    count: 1
}

const counterReducer = function (state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
            count: state.count - 1
        };
      default:
        return state;
    }
};

export default counterReducer;
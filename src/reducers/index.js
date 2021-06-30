const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [...state.mylist.filter(items => items.id === action.payload.id).length === 0 ?
          [...state.mylist, action.payload] :
          [...state.mylist],
        ],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter(items => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

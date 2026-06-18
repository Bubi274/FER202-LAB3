export const initialState = [];

export function studentReducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, action.payload];
    case 'DELETE_STUDENT':
      return state.filter((student) => student.id !== action.payload);
    case 'UPDATE_STUDENT':
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    case 'LOAD_STUDENTS':
      return action.payload;
    default:
      return state;
  }
}

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    github: "alicejohnson",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    github: "bobsmith",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    github: "charliebrown",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@example.com",
    github: "davidwilson",
  },
  {
    id: "5",
    name: "Eva Green",
    email: "eva@example.com",
    github: "evagreen",
  },
];
export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithID extends User {
    id: UserId;
}

export const initialState: UserWithID[] = (() =>{
  const persistenceState = localStorage.getItem('__redux_state__');
  return persistenceState ? JSON.parse(persistenceState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action:PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter(user => user.id !== id);
    }
  },
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser } = usersSlice.actions;
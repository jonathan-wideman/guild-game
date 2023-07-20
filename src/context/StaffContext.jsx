import { createContext, useContext, useReducer } from 'react';
import { initialStaff } from '../store';

const StaffContext = createContext(null);
const StaffDispatchContext = createContext(null);

export function StaffProvider({ children }) {
  const [staff, staffDispatch] = useReducer(staffReducer, initialStaff);

  return (
    <StaffContext.Provider value={staff}>
      <StaffDispatchContext.Provider value={staffDispatch}>
        {children}
      </StaffDispatchContext.Provider>
    </StaffContext.Provider>
  );
}

export function useStaff() {
  return useContext(StaffContext);
}

export function useStaffDispatch() {
  return useContext(StaffDispatchContext);
}

export const STAFF_ACTION_TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

function staffReducer(staff, action) {
  switch (action.type) {
    case STAFF_ACTION_TYPES.ADD: {
      return [...staff, { ...action.staff }];
    }
    case STAFF_ACTION_TYPES.REMOVE: {
      return staff.filter((s) => s.id !== action.id);
    }
    // case 'changed': {
    //   return Staff.map((t) => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

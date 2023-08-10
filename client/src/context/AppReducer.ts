import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";

export const AppReducer = (state, action) => {
  switch (action.type) {
    // NEW API USE CASES
    case "LOGIN":
      localStorage.setItem("token", action.payload);
      const { fullName, role } = getUserFromLocalStorage("token");

      return {
        ...state,
        role: role,
        fullName: fullName,
        unauthorizedPathname: null,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...state, role: null, fullName: null };

    case "SET_PATHNAME":
      return { ...state, unauthorizedPathname: action.payload };
    case "SET_USER_DATA":
      return {
        ...state,
        data: { ...state.data, users: action.payload },
      };
    case "SET_USER_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    case "SET_SORT":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    case "SET_REFETCH":
      return { ...state, refetch: action.payload };

    case "SET_USER_COUNT":
      return { ...state, userCount: action.payload };

    default:
      return state;
  }
};

export function useFetchData(dispatch: any) {
  return async (getFunction) => {
    const response = await getFunction();
    dispatch({ type: "SET_DATA", payload: response });
  };
}

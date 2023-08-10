import { useState } from "react";

export const useHandleChange = (filter) => {
  const [value, setValue] = useState({ ...filter });
  return [
    value,
    (e, id) => {
      let sanitizedInput;
      if (e.target.type === "datetime-local") {
        const date = new Date(e.target.value).toUTCString();
        sanitizedInput = new Date(date);
      } else {
        sanitizedInput = e.target.value;
      }
      setValue({ ...value, [id]: sanitizedInput });
    },
  ];
};

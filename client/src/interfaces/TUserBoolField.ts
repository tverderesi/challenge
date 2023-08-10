export type TUserBoolField =
  | {
      id: string;
      name: string;
      type: string;
      success: null;
      boolTrue: string;
      boolFalse: string;
      mask?: undefined;
    }
  | {
      id: string;
      name: string;
      type: string;
      success?: undefined;
      boolTrue?: undefined;
      boolFalse?: undefined;
      mask?: undefined;
    }
  | {
      id: string;
      name: string;
      type: string;
      mask: string;
      success?: undefined;
      boolTrue?: undefined;
      boolFalse?: undefined;
    };

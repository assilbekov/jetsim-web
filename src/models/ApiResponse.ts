export type ApiResponse<T, E = Error> = {
  payload: T;
  error?: E;
};

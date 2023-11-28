export type RegisterUser = {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type LoginUser = {
  username: string;
  password: string;
};

export type User<T> = {
  userid: string;
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

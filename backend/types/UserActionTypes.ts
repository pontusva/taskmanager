export interface RegisterUser {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginUser {
  username: string;
  password: string;
}

export interface User<T> {
  userid: string;
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

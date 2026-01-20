export interface User {
  id: string;
  email: string;
  token: string
}

export interface ApiError {
  message: string;
  errors?: { field: string; message: string }[];
}

export interface AuthState {

  token: string | null;
  user: User | null;
  loading: boolean;
  error: ApiError | null;
    isAuthenticated: boolean,
}

export interface LoginPayload {
  email: string;
  password: string;
}



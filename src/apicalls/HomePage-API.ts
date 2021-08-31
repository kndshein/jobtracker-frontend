import API from "./API"

export type LoginData = {
  login_info: {
    email: string
    password: string
  }
}

export type RegistrationData = {
  registration_info: {
    name: string
    email: string
    password: string
    password_confirmation: string
  }
}

export const login = (data: LoginData) => {
  return API("post", "/login", data)
}

export const register = (data: RegistrationData) => {
  return API("post", "/register", data)
}

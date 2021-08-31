import axios from "axios"

export default function API(action: string, endpoint: string, data?: any) {
  const backendUrl: "http://localhost:3000" = "http://localhost:3000"
  const url = backendUrl + endpoint

  const header = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }

  switch (action) {
    case "get":
      return axios.get(url, header)
    case "post":
      return axios.post(url, data, header)
    case "put":
      return axios.put(url, data, header)
    case "delete":
      return axios.delete(url, header)
    default:
      console.log("API does not work, bby.")
  }
}

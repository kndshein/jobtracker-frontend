import API from "./API"

type Job = {
  job_title: string
  company_name: string
  job_industry: string
  location_city: string
  location_state: string
  job_description: string
  status: string
  resume: string
  coverLetter: string
}

export const getJob = (id: number | string) => {
  return API("get", `/job/${id}`)
}

export const createJob = (data: Job) => {
  return API("post", `/job/create`, data)
}

export const updateJob = (id: number | string, data: Job) => {
  return API("put", `/job/${id}`, data)
}

export const deleteJob = (id: number | string) => {
  return API("delete", `/job/${id}`)
}

// todo loooool

export const createTime = (id: number | string, data: any) => {
  return API("post", `/job/${id}/time`, data)
}

export const deleteTime = (id: number | string) => {
  return API("delete", `/time/${id}`)
}

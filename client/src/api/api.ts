import axios from "axios";

export const api = axios.create({
  baseURL: "https://core.qclass.com.br/v0",
});

interface IloginData {
  user_name: string;
  password: string;
}

export async function login(loginData: IloginData) {
  const body = JSON.stringify(loginData);

  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await api.post("/login", body, config);
    const { name, username, type, token } = await res.data;

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name,
        username: username,
        type: type,
        token: token,
      })
    );

    return null;
  } catch (err: any) {
    if (err?.response && err?.response?.data && err?.response?.data?.message) {
      const errorMessage = err?.response?.data?.message;
      return errorMessage;
    } else {
      return "Ocorreu um erro durante seu login, tente novamente mais tarde.";
    }
  }
}

export async function getExams(): Promise<any> {
  const response = { data: null, errors: [] };
  const token = null;
  try {
    const res = await api.get("/exams", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.data.data;

    response.data = data;
  } catch (err: any) {
    const { status, data } = err.response;
    response.errors.push();
  }
  return response;
}

const login_Api = `https://argus.work/argus/api/v1/auth/login`;
const getUserData_Api = `https://argus.work/argus/api/v1/auth/user-profile`;

const mainApi = "https://api.hinduhope.com/api/v1/data";

export const hinduhope = `https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=hinduhope`;

export const scriptApi =
  "https://b191-114-47-178-228.ngrok.io/generation/callback";

export function getDay(day) {
  let today = new Date();
  let day_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(day_milliseconds);

  let tYear = today.getFullYear();
  let tMonth = today.getMonth();
  let tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}

function doHandleMonth(month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
}

let nowDate = getDay(0);
let LastNowDate = getDay(-30);

export const playgames =
  "https://api.hinduhope.com/api/v1/data/showWeb?groups_Type=playgames";

export function fetchAPIName(source) {
  return `${mainApi}?start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${source}`;
}

export const AloneApi = (id) => {
  return `${mainApi}/data/${id}`;
};

export function LoginApi(account, password) {
  let data = new FormData();
  data.append("email", account);
  data.append("password", password);
  return fetch(`${login_Api}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  });
}

export const FirstCheckUser = (token) => {
  return fetch(getUserData_Api, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export function addArticleApi(title, image, content, classification, author) {
  let data = new FormData();
  data.append("title", title);
  data.append("image", image);
  // formData.append('image', e.target.files[0]);
  data.append("content", content);
  data.append("classification", classification);
  data.append("author", author);
  return fetch(`http://localhost:3000/#/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: data,
  });
}

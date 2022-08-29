import Cookies from "universal-cookie";

export const isEnglish = () => {
  const cookies = new Cookies();
  return cookies.lang === "en-us" || !cookies.lang;
};

export const checkString = (value) => {
  return typeof value === "string" ? value : "";
};

import * as api from "../../api";
import * as types from "../constants/actionTypes";

export const getSurvey = (SurveyType) => async (dispatch) => {
  try {
    const { data } = await api.fetchSurvey(SurveyType);
    dispatch({ type: types.GET_SURVEY, survey: data.data });
  } catch (error) {
    console.log(error.message);
  }
};


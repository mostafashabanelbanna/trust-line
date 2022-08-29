import * as types from "../constants/actionTypes";

const intialState = {
  survey: {},
  surveyAnswers: []
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.GET_SURVEY:
      return {...state, survey: action.survey};
    case types.SET_SURVEY_ANSWER:
      return {...state, surveyAnswers: action.surveyAnswers};
    default:
      return state;
  }
};

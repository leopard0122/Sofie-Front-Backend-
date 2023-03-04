import * as t from "../types";

export type StateType = {
  currentPage: string;
  prevPages: string[];
  formData: any;
  tempFormData: any;
};

const main = (
  state = {
    currentPage: "0",
    prevPages: [],
    formData: {},
    tempFormData: {},
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_PAGE_INFO:
      return {
        ...state,
        prevPages: action.payload.prevPages,
        currentPage: action.payload.currentPage,
      };

    case t.SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload?.formData,
        },
      };

    case t.SET_TEMP_FORM_DATA:
      return {
        ...state,
        tempFormData: {
          ...state.tempFormData,
          ...action.payload?.tempFormData,
        },
      };

    case t.SET_TEMP_TO_FORM:
      return {
        ...state,
        tempFormData: {},
        formData: {
          ...state.formData,
          [action.payload?.fieldName]: action.payload?.data,
        },
      };

    default:
      return state;
      break;
  }
};

export default main;

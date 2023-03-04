import * as t from "../types";

export const setPageInfo = (pageInfo: { currentPage: string; prevPages: string[] }) => (dispatch: any) => {
  dispatch({
    type: t.SET_PAGE_INFO,
    payload: pageInfo,
  });
};

export const setFormDataInfo = (formData: any) => (dispatch: any) => {
  dispatch({
    type: t.SET_FORM_DATA,
    payload: formData,
  });
};

export const setTempFormDataInfo = (tempFormData: any) => (dispatch: any) => {
  dispatch({
    type: t.SET_TEMP_FORM_DATA,
    payload: tempFormData,
  });
};

export const setTempToForm = (tempFormData: any) => (dispatch: any) => {
  dispatch({
    type: t.SET_TEMP_TO_FORM,
    payload: tempFormData,
  });
};

import React from "react";
import * as actionTypes from "./actionTypes";
let initialState = {
  errormessage: "",
  loading: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_FAILED:
      return { ...state, loading: false, errormessage: action.error };
    case actionTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, loading: false };
      case actionTypes.REMOVE_ERROR:{
          return {...state,errormessage:""}
      }
      case actionTypes.REGISTER_REQUEST:
          return {...state,loading:true}
          case actionTypes.REGISTER_SUCCESS:
              return{...state,loading:false}
              case actionTypes.REGISTER_FAILED:{
                  return {...state,loading:true,errormessage:action.error}
              }
    default:
      return state;
  }
}

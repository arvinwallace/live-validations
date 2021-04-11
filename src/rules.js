export const hasUpperCase = /[A-Z]/;

export const hasLowerCase = /[a-z]/;

export const hasSpecial = /[@#$%^&+=!*]/;

export const hasNumber = /[0-9]/;

export const validateRegex = (string,dispatch) => {

  //////////////////////////////////////////////////
  ///////////////// UPPERCASE //////////////////////
  /////////////////////////////////////////////////

  if(hasUpperCase.test(string)){
      dispatch({
          type: 'CAPITAL_VALID'
      })
  } else {
      dispatch({
          type: 'CAPITAL_NOT_VALID'
      })
  }
  //////////////////////////////////////////////////
  ///////////////// LOWERCASE //////////////////////
  /////////////////////////////////////////////////

  if(hasLowerCase.test(string)){
      dispatch({
          type: 'LOWER_CASE_VALID'
      })
  } else {
      dispatch({
          type: 'LOWER_CASE_NOT_VALID'
      })
  }

  //////////////////////////////////////////////////
  ///////////////// SPECIAL //////////////////////
  /////////////////////////////////////////////////

  if(hasSpecial.test(string)){
      dispatch({
          type: 'SPECIAL_CHAR_VALID'
      })
  } else {
      dispatch({
          type: 'SPECIAL_CHAR_NOT_VALID'
      })
  }

  //////////////////////////////////////////////////
  ///////////////// NUMBER //////////////////////
  /////////////////////////////////////////////////

  if(hasNumber.test(string)){
      dispatch({
          type: 'NUMBER_VALID'
      })
  } else {
      dispatch({
          type: 'NUMBER_NOT_VALID'
      })
  }

  //////////////////////////////////////////////////
  ///////////////// LENGTH ////////////////////////
  /////////////////////////////////////////////////

  if(string.length >= 8){
      dispatch({
          type: 'LENGTH_VALID'
      })
  } else {
      dispatch({
          type: 'LENGTH_NOT_VALID'
      })
  }
}
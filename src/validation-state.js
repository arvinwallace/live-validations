import React from 'react'

const initialState = {
    capital : {
        valid : false,
        text : "You need one uppercase letter",
        class: 'invalid-regex'
    },
    lower : {
        valid : false,
        text : "You need one lowercase letter",
        class: 'invalid-regex'
    },
    special : {
        valid : false,
        text : "You need one special character",
        class: 'invalid-regex'
    },
    number : {
        valid : false,
        text : "You need one number",
        class: 'invalid-regex'
    },
    length : {
        valid : false,
        text : "You need at least 8 characters",
        class : "invalid-regex"
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'CAPITAL_NOT_VALID':
        return {
            ...state,
            capital:{
                valid: false,
                text: "You need one uppercase letter",
                class: 'invalid-regex'
            }
        };
        case 'CAPITAL_VALID':
        return {
            ...state,
            capital:{
                valid: true,
                text: "You have one uppercase letter",
                class: 'valid-regex'
            }
        };
        case 'LOWER_CASE_NOT_VALID':
            return {
                ...state,
                lower:{
                    valid: false,
                    text: "You need one lowercase letter",
                    class: 'invalid-regex'
                }
            };
        case 'LOWER_CASE_VALID':
        return {
            ...state,
            lower:{
                valid: true,
                text: "You have one lowercase letter",
                class: 'valid-regex'
            }
        };
        case 'SPECIAL_CHAR_NOT_VALID':
            return {
                ...state,
                special:{
                    valid: false,
                    text: "You need one special character",
                    class: 'invalid-regex'
                }
            };
        case 'SPECIAL_CHAR_VALID':
        return {
            ...state,
            special:{
                valid: true,
                text: "You have one special character",
                class: 'valid-regex'
            }
        };
        case 'NUMBER_NOT_VALID':
            return {
                ...state,
                number:{
                    valid: false,
                    text: "You need one number",
                    class: 'invalid-regex'
                }
            };
        case 'NUMBER_VALID':
        return {
            ...state,
            number:{
                valid: true,
                text: "You have one number",
                class: 'valid-regex'
            }
        };
        case 'LENGTH_NOT_VALID':
        return {
            ...state,
            length:{
                valid: false,
                text: "You need at least 8 characters",
                class: 'invalid-regex'
            }
        };
        case 'LENGTH_VALID':
        return {
            ...state,
            length:{
                valid: true,
                text: "You have at least 8 characters",
                class: 'valid-regex'
            }
        };
      default:
        throw new Error();
    }
  }

export const useValidationState = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const show =
        state.number.valid &&
        state.capital.valid &&
        state.lower.valid &&
        state.length.valid &&
        state.special.valid;
    return [state,dispatch,show]
}
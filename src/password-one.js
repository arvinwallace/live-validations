import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {validateRegex} from './rules.js'
import './password.css';
import {useValidationState} from './validation-state';
import {useStyles} from './materialStyles';
import Loading from './loading';

export default function SignIn() {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        });

    const [error,setError] = React.useState(false)
    const [errorText,setErrorText] = React.useState("")
    const [loading,setLoading] = React.useState(false)
    const taco = React.useRef(null)
    const loadTimer = React.useRef(null)

    const [state,dispatch,show] = useValidationState();

    const handleChange = (prop) => (event) => {
        event.preventDefault()
        setError(false)
        setValues({ ...values, [prop]: event.target.value });
        validateRegex(event.target.value, dispatch)
    };

    const validatePassy = () => {
        if(values.password === "UsedPassword@123"){
            setError(true)
            setErrorText("Cannot use old password")
        }

        if(values.password === "Compromised@123"){
            setError(true)
            setErrorText("Password has been compromised. Pick another")
        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        validatePassy()
        setLoading(true)
        loadTimer.current = setTimeout(() => {
            setLoading(false)
            clearTimeout(loadTimer.current)
            setValues({ ...values, password:'',showPassword: false });
            validateRegex('', dispatch)
        }, 3000)
    }

    const buildValidElements = () => {
        const elements = ['capital','lower','special','number','length']
        return elements.map(x => {
            return (
                <div
                    className={state[x]['class']}
                    aria-label={state[x]['valid'] ?
                        "Good job!"
                        :
                        "Requirement not satisfied"
                    }
                    style={{display:"flex",alignItems:"center"}}
                    role="alert"
                    aria-live="assertive"
                    aria-describedby='check'

                >
                    {state[x]['valid'] ?
                        <CheckCircleIcon className={classes.circleCheck} aria-live="assertive" />
                        :
                        <PriorityHighIcon />
                    }
                    <span tabIndex="0" aria-live="assertive">{state[x]['text']}</span>
                </div>
            )
        })
    }

  return (
    <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
            <div style={{
                alignSelf:"flex-start",
                display:"flex",
                alignItems:"center",
                padding:"5px 0px",
                borderBottom:"3px solid #ccc",
                width:"100%",
                marginBottom:"40px"}}
            >
                <Avatar className={classes.avatar} colorDefault="#009bf5">
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Reset Your Password
                </Typography>     
            </div>

            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <label
                    tabIndex={0}
                    htmlFor="standard-adornment-password"
                    className={classes.inputLabel}
                    ref={taco}
                >
                    Password
                </label>

            {error? <p className="validation-error">{errorText}</p> : null}

                <Input
                    onFocus={(e)=>e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length)}
                    className={classes.input}
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    error={error}
                    helperText={"something bad is happening"}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                    }
                />

                {buildValidElements()}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={show ? false : true}
                >
                    Sign In With New Password
                </Button>
            </form>
        </div>

        {loading ? <Loading/> : null}

    </Container>
  );
}


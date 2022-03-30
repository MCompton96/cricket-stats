import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import { 
    Container,
    Box,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    CssBaseline
} from '@mui/material'
import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useMutation } from '@apollo/client';
import { Mutations } from '../../GraphQL';
import { isNullOrWhitespace } from '../../Common/Helpers/StringHelpers';

const theme = createTheme();

function Login({setToken}) {
    
    const [login] = useMutation(Mutations.LOGIN, { 
        onCompleted: ({login}) => {localStorage.setItem('token', login)}});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        await login({ variables: {
            email: formData.get('email'),
            password: formData.get('password')
        }});

        if (!isNullOrWhitespace(localStorage.getItem("token"))) {
            setToken(localStorage.getItem("token"));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{m:1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Box 
                        component='form' 
                        noValidate sx={{mt:1}}
                        onSubmit={handleSubmit}
                    >
                        <TextField 
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            name='email'
                            label='Email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField 
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        <FormControlLabel 
                        control={<Checkbox value='remember' color='primary'/>}
                        label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{mt:3, mb:2}}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Login;
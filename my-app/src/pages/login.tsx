import { Button, FormControl, FormControlLabel, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import CustomCard from "../components/card";
import { isAuthenticated, signIn } from '../utils/auth'
import React from "react";

const Login = () => {
    const [studentId, setStudentId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
    const navigate = useNavigate()
    const authenticated = isAuthenticated()

    React.useEffect(() => {
        if (authenticated) {
            void navigate({ to: '/dashboard', replace: true })
        }
    }, [authenticated, navigate])

    const handleSignIn = () => {
        signIn(rememberMe)
        void navigate({ to: '/dashboard' })
    }
    const staticText = <Typography variant="h5" component="h2" gutterBottom>
        Welcome to the Library Management System
    </Typography>
    const staticText2 = <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '2rem' }}>
        Please enter your credentials to login.
    </Typography>
    const isButtonDisabled = studentId.trim() === '' || password.trim() === '';
    const form = <>
        {staticText}
        {staticText2}
        <FormControl id="login-form" >
            <TextField label="Student ID" variant="standard" value={studentId} required
                onChange={(e) => setStudentId(e.target.value)} />
            <TextField label="Password" variant="standard" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <FormControlLabel sx={{
                marginTop: '0.5rem', paddingLeft: '5px'
            }}
                control={<input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                label="Remember me"
            />
        </FormControl>
    </>
    const actionButtons = <><Button variant="contained" size="large" sx={{ width: '100%' }} disabled={isButtonDisabled} onClick={handleSignIn}>
        Sign In
    </Button>
        <Typography sx={{ mt: 2 }}>
            Don't have an account?
            <RouterLink to="/register" style={{ color: '#17664f', fontWeight: 600 }}>
                Sign Up Here.
            </RouterLink>
        </Typography>
    </>
    if (authenticated) return null

    return <CustomCard cardId="login-card"
        cardClassName="no-animation"
        cardActionAreaEnabled={false}
        cardVariant="outlined"
        cardContent={form}
        cardActionsStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}
        cardActionsContent={actionButtons}
    />;
};

export default Login;

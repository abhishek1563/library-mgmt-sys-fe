import { Button, FormControl, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import CustomCard from "../components/card";
import React from "react";

const Login = () => {
    const [studentId, setStudentId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rememberMe, setRememberMe] = React.useState(false);
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
                control={<input type="checkbox" />}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                label="Remember me"
            />
        </FormControl>
    </>
    const actionButtons = <><Button variant="contained" size="large" sx={{ width: '100%' }} disabled={isButtonDisabled} onClick={() => { console.warn("Sign In button clicked", studentId, password) }}>
        Sign In
    </Button>
        <Typography sx={{ mt: 2 }}>
            Don't have an account?
            <Link href="#" >
                Sign Up Here.
            </Link>
        </Typography>
    </>
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

import { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from '@tanstack/react-router'
import CustomCard from '../components/card'

const RegistrationPage = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordMismatch, setPasswordMismatch] = useState(false)
    const [status, setStatus] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setPasswordMismatch(true)
            setStatus('')
            return
        }

        setPasswordMismatch(false)
        setStatus('The registration form is ready, but account creation is not connected yet.')
    }

    const form = (
        <Stack component="form" spacing={2} onSubmit={handleSubmit}>
            <div>
                <Typography variant="h5" component="h1" gutterBottom>
                    Create your account
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Register for your college library account.
                </Typography>
            </div>
            <TextField label="Full name" name="fullName" autoComplete="name" required fullWidth />
            <TextField label="Student ID" name="studentId" autoComplete="off" required fullWidth />
            <TextField label="College email" name="email" type="email" autoComplete="email" required fullWidth />
            <TextField
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                slotProps={{ htmlInput: { minLength: 8 } }}
                helperText="Use at least 8 characters."
                required
                fullWidth
            />
            <TextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => {
                    setConfirmPassword(event.target.value)
                    setPasswordMismatch(false)
                }}
                error={passwordMismatch}
                helperText={passwordMismatch ? 'Passwords do not match.' : undefined}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" size="large" fullWidth>
                Create account
            </Button>
            {status && <Typography role="status" variant="body2">{status}</Typography>}
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Already have an account? <RouterLink to="/login" style={{ color: '#17664f', fontWeight: 600 }}>Sign in</RouterLink>
            </Typography>
        </Stack>
    )

    return (
        <CustomCard
            cardId="registration-card"
            cardClassName="no-animation"
            cardActionAreaEnabled={false}
            cardVariant="outlined"
            cardStyle={{ width: 'min(100%, 480px)', padding: '20px', borderRadius: '8px' }}
            cardContent={form}
        />
    );
}
export default RegistrationPage;
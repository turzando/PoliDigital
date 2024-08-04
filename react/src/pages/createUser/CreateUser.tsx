import { useLocation } from 'react-router-dom';
import ReplayIcon from '@mui/icons-material/Replay';
import { AppBar, Toolbar, Typography, Container, Paper, Box, Button, TextField, IconButton, IconButtonProps, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { useState } from 'react';

import userService from '../../services/UserService'

const DashboardContainer = styled(Container)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 64px)',
    backgroundColor: '#0f3892',
}));

const DashboardPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
    backgroundColor: 'white'
}));


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-720deg);
  }
`;

interface RotatingIconButtonProps extends IconButtonProps {
    rotating: boolean;
}

const RotatingIconButton = styled(({ rotating, ...other }: RotatingIconButtonProps) => (
    <IconButton {...other} />
))(({ rotating }) => ({
    animation: rotating ? `${rotateAnimation} 1s linear` : 'none',
}));

const CreateUser = () => {
    const [fullName, setFullName] = useState('');
    const [cpf, setCpf] = useState('');
    const [username, setUsername] = useState('');
    const [rg, setRg] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const location = useLocation();
    const { name } = location.state || {};
    const predefinedRoles = ['STUDENT', 'TEACHER']

    const generateRandomPassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&@#$%'
        let randomPassword = ''

        while (randomPassword.length < 8) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const newCharacter = characters[randomIndex];
            if (randomPassword.includes(newCharacter)) {
                continue
            }

            randomPassword += characters[randomIndex];
        }
        return randomPassword
    }

    const [password, setPassword] = useState(generateRandomPassword)

    const [rotating, setRotating] = useState(false);

    const changePassowrd = () => {
        setRotating(true);
        setTimeout(() => setRotating(false), 1000);
        setPassword(generateRandomPassword())
    };

    const onSubmit = async () => {
        const body = {
            name: fullName,
            cpf: cpf,
            username: username,
            rg: rg,
            email: email,
            role: role,
            password: password
        }

        try {
            await userService.create(body)
        } catch (error) {
            console.log("Error ao criar usuário")
        }
    };

    const disableSubmitButton = () => {
        return !fullName || !cpf || !username || !rg || !email || !role
    }

    return (<div style={{ backgroundColor: '#0f3892', minHeight: '100vh' }}>
        <AppBar position="relative" sx={{ backgroundColor: "#0f3892" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ color: 'white' }}>Criar usuário</Typography>
                <Typography variant="h6" sx={{ marginLeft: 'auto', color: 'white' }}>
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
        <DashboardContainer sx={{ backgroundColor: "#0f3892" }}>
            <DashboardPaper sx={{ backgroundColor: "white" }}>
                <Box component="form" noValidate sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', mt: 5 }}>
                    <TextField required value={fullName} onChange={(event) => setFullName(event.target.value)} id="standard-required" label="Nome completo" />
                    <TextField required value={cpf} onChange={(event) => setCpf(event.target.value)} id="standard-required" label="CPF" />
                    <TextField required value={rg} onChange={(event) => setRg(event.target.value)} id="standard-required" label="RG" />
                    <TextField required value={email} onChange={(event) => setEmail(event.target.value)} id="standard-required" label="email" />
                    <TextField required value={username} onChange={(event) => setUsername(event.target.value)} id="standard-required" label="username" />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TextField disabled value={password} id="standard-required" label="password" />
                        <RotatingIconButton rotating={rotating} onClick={changePassowrd}>
                            <ReplayIcon sx={{ color: 'black', fontSize: '2.0rem' }} />
                        </RotatingIconButton>
                    </Box>
                    <TextField select value={role} onChange={(event) => { setRole(event.target.value) }} required id="standard-required" label="ROLE">
                        {predefinedRoles.map((role) => (
                            <MenuItem key={role} value={role}>
                                {role}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>

                <Button
                    type="submit"
                    fullWidth
                    disabled={disableSubmitButton()}
                    variant="contained"
                    onClick={onSubmit}
                    sx={{ mt: 3, mb: 2, }}
                >
                    Criar usuário
                </Button>
            </DashboardPaper>
        </DashboardContainer>
    </div>)
}

export default CreateUser

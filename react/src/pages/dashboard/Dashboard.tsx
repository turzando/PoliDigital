import { useNavigate, Navigate, useLocation } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Container, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const Dashboard = () => {
  const location = useLocation();
  const { name } = location.state || {};

  const navigate = useNavigate()

  const navigateToCreateUserScreen = async () => {
    navigate('/createUser', { state: { name: 'Artur' } });
  }

  return (
    <div style={{ backgroundColor: '#0f3892', minHeight: '100vh' }}>
      <AppBar position="relative" sx={{ backgroundColor: "#0f3892" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ color: 'white' }}>Dashboard</Typography>
          <Typography variant="h6" sx={{ marginLeft: 'auto', color: 'white' }}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <DashboardContainer sx={{ backgroundColor: "#0f3892" }}>
        <DashboardPaper sx={{ backgroundColor: "white" }}>
          <Typography sx={{ color: '#0f3892' }} variant="h4">Aguarde...</Typography>
          <Typography sx={{ color: '#0f3892' }} variant="body1">Ainda em desenvolvimento</Typography>
          <Button variant="outlined" sx={{ backgroundColor: 'black' }} onClick={navigateToCreateUserScreen}>Text</Button>
        </DashboardPaper>
      </DashboardContainer>
    </div>
  );
};
export default Dashboard;
import Avatar from '@mui/material/Avatar';
import SavingsOutlined from '@mui/icons-material/SavingsOutlined';

const MainIcon = () => (
  <Avatar sx={{ m: 1, mb: 5, height: '200px', width: '200px' }} >
    <SavingsOutlined sx={{ height: '80%', width: '80%' }} />
  </Avatar>
);

export default MainIcon;

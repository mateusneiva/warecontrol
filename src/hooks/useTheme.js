import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import { selectTheme } from '@/store/Theme';

import RobotoLight from '@/assets/fonts/Roboto-Light.ttf';
import RobotoRegular from '@/assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '@/assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '@/assets/fonts/Roboto-Bold.ttf';

const useTheme = () => {
  const mode = useSelector(selectTheme);

  return createTheme(
    {
      palette: {
        mode: mode,
        primary: { main: '#1976d2' },
      },
    },
    ptBR
  );
};

export default useTheme;

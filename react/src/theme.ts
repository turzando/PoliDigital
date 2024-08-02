import { createTheme } from '@mui/material'

const ubotsTheme = {
  color: {
    primary: {
      100: '#444444',
      80: '#4F4F4F',
      70: '#595959',
      60: '#8F8F8F',
      30: '#C7C7C7'
    },
    secondary: {
      100: '#FFBD4C',
      60: '#FFD794',
      30: '#FFEBC9'
    },
    tertiary: {
      100: '#FBFBFB',
      60: '',
      30: ''
    },
    white: {
      100: '#FFFFFF',
      90: '#FFFFFFDE'
    },
    red: {
      100: '#DE614D'
    },
    grey: {
      30: '#E3E8EE'
    }
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    fontSize: {
      base: 16,
      medium: 14,
      small: 12,
      h1: 36,
      h2: 28,
      h3: 24,
      h4: 20,
      h5: 18,
      p2: 14
    }
  },
  borderRadius: {
    medium: 3
  }
}

const theme = createTheme({
  palette: {
    primary: { main: '#FFBD4C' },
    secondary: {
      main: ubotsTheme.color.secondary[100],
      light: ubotsTheme.color.secondary[60]
    },
    error: {
      main: ubotsTheme.color.red[100]
    },
    text: {
      primary: ubotsTheme.color.primary[100]
    }
  },
  typography: {
    fontFamily: ubotsTheme.typography.fontFamily,
    button: { textTransform: 'none', fontWeight: '500', fontSize: '14px' }
  }
})

export default theme

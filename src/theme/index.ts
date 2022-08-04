import { createTheme, Theme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme

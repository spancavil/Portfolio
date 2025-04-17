import { createTheme } from '@mui/material'

//Typescript augmentation
declare module '@mui/material/styles' {
  interface Theme {
    values: {
      xs: 0
      sm: 600
      md: 768
      lg: 900
      xl: 1200
    }
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 900,
      xl: 1200,
    },
  },
})

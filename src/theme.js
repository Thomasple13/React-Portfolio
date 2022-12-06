import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const fonts = {
  ...chakraTheme.fonts,
  body: 'Raleway, sans-serif',
  heading: 'Raleway, sans-serif'

}

const theme = extendTheme({ 
  fonts,
  styles: {
    global: props => ({
      body: {
        bg: mode("none", "none")
      }
    })
  }
 })

export default theme
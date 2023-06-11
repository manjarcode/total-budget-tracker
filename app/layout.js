import { theme } from "./theme.js"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "./emotionCache.js"

const clientSideEmotionCache = createEmotionCache();
export default function RootLayout(props) {
  const {children, emotionCache = clientSideEmotionCache} = props
  return (
    <html lang="en">
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}> 
          <body>
            nepe hermano
            <CssBaseline />
            {children}        
          </body>
        </ThemeProvider> 
       </CacheProvider>
    </html>
  )
}

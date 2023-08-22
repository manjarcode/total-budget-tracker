import {CacheProvider} from '@emotion/react'
import {CssBaseline, ThemeProvider} from '@mui/material'

import createEmotionCache from './emotionCache.js'
import {theme} from './theme.js'

const clientSideEmotionCache = createEmotionCache()

export default function RootLayout(props) {
  const {children, emotionCache = clientSideEmotionCache} = props
  return (
    <html lang="en">
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <body>
            <CssBaseline />
            {children}
          </body>
        </ThemeProvider>
      </CacheProvider>
    </html>
  )
}

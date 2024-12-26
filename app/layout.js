import {CacheProvider} from '@emotion/react'
import {Box, CssBaseline, ThemeProvider} from '@mui/material'

import createEmotionCache from './emotionCache.js'
import {theme} from './theme.js'
import style from './layout.module.css'

const clientSideEmotionCache = createEmotionCache()

export default function RootLayout(props) {
  const {children, emotionCache = clientSideEmotionCache} = props
  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box className={style.container}>
            <Box className={style.main}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </CacheProvider>
  )
}

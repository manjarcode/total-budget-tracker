import Head from 'next/head'
import {CacheProvider} from '@emotion/react'
import {Box, CssBaseline, ThemeProvider} from '@mui/material'
import "manjark/dist/index.css"
import createEmotionCache from './emotionCache.js'
import {theme} from './theme.js'
import style from './layout.module.css'
import PropTypes from 'prop-types'

const clientSideEmotionCache = createEmotionCache()

export default function RootLayout(props) {
  const {children, title, emotionCache = clientSideEmotionCache} = props

  const defaultTitle = 'Total Budget Tracker'
  const formattedtitle = [defaultTitle, title].filter(Boolean).join(' - ')
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{formattedtitle}</title>
      </Head>
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

RootLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  emotionCache: PropTypes.object
}

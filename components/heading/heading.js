import {Box, Button} from '@mui/material'
import {Text} from 'manjark'
import style from './heading.module.css'

const Heading = ({children}) => <Box className={style.heading}>{children}</Box>

const Title = props => <Text.Title {...props} />

const Action = props => <Button variant="outlined" {...props} />

Heading.Title = Title
Heading.Action = Action

export default Heading

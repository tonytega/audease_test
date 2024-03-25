import {Stack,} from '@mui/material'
import { Menu } from './Menu'
import { Overview } from './Overview'

export const HomePage = () => {
  return (
    <>
        <Stack direction="row">
            <Menu/>
            <Overview/>
        </Stack>
    </>
  )
}

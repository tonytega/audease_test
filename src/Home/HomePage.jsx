import {Stack,} from '@mui/material'
import { Menu } from './Menu'
import { Overview } from './Overview'

export const HomePage = () => {
  return (
    <div>
        <Stack direction="row">
            <Menu/>
            <Overview/>
        </Stack>
    </div>
  )
}

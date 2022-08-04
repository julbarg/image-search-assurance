import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box, Divider } from '@mui/material'

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense" sx={{ py: 2 }}>
          <Box sx={{ px: 2 }}>
            <img src="/logo.svg" alt="Assurance" />
          </Box>

          <Divider orientation="vertical" flexItem />
          <Box sx={{ px: 2 }}>
            <Typography variant="h6" color="inherit" component="div">
              Image Search
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

import * as React from 'react'
import { Box, Container } from '@mui/material'
import { Search } from './components/Search'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ py: 12 }}>
          <Search />
        </Box>
      </Container>
    </>
  )
}

import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

interface SearchBarProps {
  query: string
  setQuery: (txt: string) => void
  onSubmit: () => void
}

export const SearchBar = ({ query, setQuery, onSubmit }: SearchBarProps) => {
  return (
    <Paper
      component="form"
      sx={{
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }}
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search input' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

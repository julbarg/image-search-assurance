import React from 'react'
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'

export interface Image {
  img: string
  title: string
  author: string
}

interface SearchResultsProps {
  imagesData: Image[]
}

export const SearchResults = ({ imagesData }: SearchResultsProps) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <ImageList variant="masonry" cols={matches ? 3 : 2} gap={matches ? 8 : 4}>
      {imagesData.map(({ img, title, author }) => (
        <ImageListItem key={img}>
          <img
            src={`${img}?w=248&fit=crop&auto=format`}
            srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
          />
          <ImageListItemBar
            title={title}
            subtitle={author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

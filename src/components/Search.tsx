import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { SearchBar } from './SearchBar'
import qs from 'qs'
import { PIXABAY_ENDPOINT, PIXABAY_KEY } from '../utils/endpoint'
import { SearchResults } from './SearchResults'
import { Image } from './SearchResults'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  const [options, setOptions] = useState<RequestInit>({})
  const [imagesData, setImagesData] = useState<Image[]>([])
  const [response] = useFetch(url, options)

  const handleSubmit = () => {
    const queryParams = qs.stringify({
      key: PIXABAY_KEY,
      q: query,
      mage_type: 'photo',
      per_page: 30,
      page: 1,
    })

    setOptions({ method: 'GET' })
    setUrl(`${PIXABAY_ENDPOINT}/?${queryParams}`)
  }

  useEffect(() => {
    const tmpImagesData: Image[] =
      response?.hits?.map((image: any) => {
        return {
          img: image.webformatURL,
          title: image.tags,
          author: image.user,
        }
      }) || []

    if (tmpImagesData) {
      setImagesData(tmpImagesData)
    }
  }, [response])

  return (
    <Box>
      <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      <SearchResults imagesData={imagesData} />
    </Box>
  )
}

const KEY = import.meta.env.VITE_OMDB_API_KEY

export async function searchTitles(query) {
  console.log('OMDb key:', KEY)
  const res = await fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${KEY}`
  )
  const data = await res.json()
  console.log('OMDb search result:', data)

  if (data.Response === 'False') return []

  const detailed = await Promise.all(
    data.Search.map(item =>
      fetch(`https://www.omdbapi.com/?i=${item.imdbID}&apikey=${KEY}`)
        .then(r => r.json())
    )
  )

  return detailed.map(item => ({
    id: item.imdbID,
    title: item.Title,
    media_type: item.Type === 'movie' ? 'movie' : 'tv',
    year: item.Year,
    overview: item.Plot !== 'N/A' ? item.Plot : 'No description available.',
    poster: item.Poster !== 'N/A' ? item.Poster : null,
    watchmode_id: null
  }))
}

export async function getTmdbDetails(id, media_type) {
  return {}
}

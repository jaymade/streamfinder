// const BASE = 'https://api.themoviedb.org/3'
// const KEY = import.meta.env.VITE_TMDB_API_KEY

export async function searchTitles(query) {
  return [
    {
      id: 66732,
      title: 'Stranger Things',
      media_type: 'tv',
      year: '2016',
      overview: 'When a young boy disappears, his mother and friends must confront terrifying supernatural forces.',
      poster: null,
      watchmode_id: 3112487
    },
    {
      id: 414906,
      title: 'The Batman',
      media_type: 'movie',
      year: '2022',
      overview: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.',
      poster: null,
      watchmode_id: 1409126
    },
    {
      id: 97546,
      title: 'Ted Lasso',
      media_type: 'tv',
      year: '2020',
      overview: 'An American college football coach is hired to manage an English soccer team.',
      poster: null,
      watchmode_id: 1394237
    },
  ]
}

export async function getTmdbDetails(id, media_type) {
  return {}
}

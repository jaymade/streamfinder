const BASE = 'https://api.watchmode.com/v1'
const KEY = import.meta.env.VITE_WATCHMODE_API_KEY

export async function getWatchmodeIdByName(name) {
  const res = await fetch(
    `${BASE}/search/?apiKey=${KEY}&search_field=name&search_value=${encodeURIComponent(name)}`
  )
  const data = await res.json()
  return data.title_results?.[0]?.id ?? null
}

export async function getWatchmodeId(tmdbId, mediaType) {
  const type = mediaType === 'movie' ? 'movie' : 'tv'
  const res = await fetch(
    `${BASE}/search/?apiKey=${KEY}&search_field=tmdb_${type}_id&search_value=${tmdbId}`
  )
  const data = await res.json()
  return data.title_results?.[0]?.id ?? null
}

export async function getStreamingAvailability(watchmodeId) {
  if (!watchmodeId) return []
  const res = await fetch(
    `${BASE}/title/${watchmodeId}/sources/?apiKey=${KEY}&regions=US`
  )
  const data = await res.json()
  return Array.isArray(data) ? data : []
}

const SOURCE_MAP = {
  203: 'netflix',
  157: 'hulu',
  26:  'prime',
  387: 'max',
  372: 'disney',
  371: 'appletv',
  386: 'peacock',
  389: 'paramount',
}

export function sortSources(sources, activeIds) {
  const ranked = sources.map(src => {
    const serviceId = SOURCE_MAP[src.source_id] ?? src.name?.toLowerCase().replace(/\s+/g, '_')
    const isActive = activeIds.includes(serviceId)

    let rank
    if (src.type === 'sub' && isActive) rank = 0
    else if (src.type === 'sub')        rank = 1
    else if (src.type === 'free')       rank = 2
    else if (src.type === 'rent')       rank = 3
    else if (src.type === 'buy')        rank = 4
    else                                rank = 5

    return { ...src, serviceId, isActive, rank }
  })

  // Deduplicate by service name + type, keeping lowest price
  const seen = new Map()
  for (const src of ranked) {
    const key = `${src.name}-${src.type}`
    if (!seen.has(key)) {
      seen.set(key, src)
    } else {
      const existing = seen.get(key)
      if ((src.price ?? 999) < (existing.price ?? 999)) {
        seen.set(key, src)
      }
    }
  }

  return Array.from(seen.values()).sort((a, b) => a.rank - b.rank)
}

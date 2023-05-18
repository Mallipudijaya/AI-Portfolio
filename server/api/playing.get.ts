import { $fetch } from 'ofetch'

interface LastFMAPI {
  recenttracks: Recenttracks
}

interface Recenttracks {
  track: Track[]
  '@attr': RecenttracksAttr
}

interface RecenttracksAttr {
  user: string
  totalPages: string
  page: string
  perPage: string
  total: string
}

interface Track {
  artist: Album
  streamable: string
  image: Image[]
  mbid: string
  album: Album
  name: string
  '@attr'?: TrackAttr
  url: string
  date?: DateClass
}

interface TrackAttr {
  nowplaying: string
}

interface Album {
  mbid: string
  '#text': string
}

interface DateClass {
  uts: string
  '#text': string
}

interface Image {
  size: string
  '#text': string
}
export default defineEventHandler(async () => {
  const { lastfmKey } = useRuntimeConfig()

  try {
    const { recenttracks } = await $fetch<LastFMAPI>('https://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'user.getrecenttracks',
        user: 'owlnai',
        api_key: lastfmKey,
        format: 'json',
        limit: 1,
      },
    })
    const [data] = recenttracks.track
    return {
      artist: data.artist['#text'],
      track: data.name,
      url: data.url,
    }
  }
  catch {
    return {
      artist: 'John Doe',
      track: 'Unknown',
      url: 'https://google.com',
    }
  }
})

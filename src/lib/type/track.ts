import { Mapper } from '@/lib/type/mapper'

export type TrackType = {
  progress: number
  album: {
    name: string
    image: string
    release: string
  }
  artists: {
    name: string
    url: string
  }
  url: string
  title: string
  length: number
  isPlaying: boolean
}

export class Track implements Mapper<TrackType> {
  public static parseTrack(result: any): Track {
    const { item } = result

    return {
      progress: result.progress_ms,
      title: item.name,
      album: {
        name: item.album.name,
        image: item.album.images[1].url,
        release: item.album.release_date,
      },
      artists: {
        name: item.artists.map((x: any) => x.name),
        url: item.artists.map((x: any) => x.external_urls.spotify),
      },
      url: item.external_urls.spotify,
      length: item.duration_ms,
      isPlaying: result.is_playing,
    }
  }
}

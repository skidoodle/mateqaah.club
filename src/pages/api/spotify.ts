import { NextApiRequest, NextApiResponse } from 'next'
import { SpotifyService } from '@/lib/service'

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN }: any = process.env

const spotify = new SpotifyService(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN)

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const song: any = await spotify.getCurrentTrack()

  if (!song || !song.isPlaying) {
    return res.json({ nowplaying: false })
  }

  return res.json({
    nowplaying: true,
    track: {
      artist: song.artists.name,
      title: song.title,
      url: song.url,
      image: song.album.image,
    },
  })
}

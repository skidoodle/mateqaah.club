import { SpotifyService } from '@/lib/spotify'
import { NextResponse } from 'next/server'

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN }: any = process.env

const spotify = new SpotifyService(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN);
 
export async function GET() {
    const song: any = await spotify.getCurrentTrack()

    if(song.isPlaying === undefined) {
        return NextResponse.json({ nowplaying: false })
    }

    return NextResponse.json({
        nowplaying: true,
        track: {
            artist: song.artists.name,
            title: song.title,
            url: song.url,
            image: song.album.image
        }
    })
}

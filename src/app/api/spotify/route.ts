import { SpotifyService } from '@/lib/spotify'
import { NextResponse } from 'next/server'

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN }: any = process.env

const spotify = new SpotifyService(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN)
 
export async function GET() {
    const song: any = await spotify.getCurrentTrack()
    
    return NextResponse.json({
        song
    })
}
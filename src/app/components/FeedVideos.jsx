import VideoPlayer from './VideoPlayer'

const VIDEO_URL = [
  {
    id: 1,
    author: 'lorem',
    description: 'esto es una prueba',
    likes: 123,
    comments: 132,
    shares: 123,
    songTitle: 'lorem - user',
    albumCover: 'https://avatars.githubusercontent.com/u/65743790?v=4',
    src: 'https://v16m.tiktokcdn.com/760a72a763d98ea75702ca7a2f0bee90/65de1ab6/video/tos/useast2a/tos-useast2a-pve-0068/oUfl8AR9EXDrpdJEeJFBGQhMB8FiIQBtp2gJUA/?a=1233&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C&cv=1&br=3694&bt=1847&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=pfuryMM88Zmo0F~pT94jVxhzZpWrKsd.&mime_type=video_mp4&qs=0&rc=ZjM6PGUzaTM8Ojs0ZmZnaEBpM3VsN3A5cms8cDMzNzczM0A2Ml42LzFjNi0xNjUuMjNiYSNjLV5pMmRrLWtgLS1kMTZzcw%3D%3D&l=202402251723530001D7B3C465B1F605D1&btag=e00088000&cc=3'
  },
  {
    id: 2,
    author: 'loredsam',
    description: 'esto es una pruebdsadsaa',
    likes: 11223,
    comments: 112332,
    shares: 123213,
    songTitle: 'lorem - usedsar',
    albumCover: 'https://avatars.githubusercontent.com/u/65743790?v=4',
    src: 'https://v16m.tiktokcdn.com/760a72a763d98ea75702ca7a2f0bee90/65de1ab6/video/tos/useast2a/tos-useast2a-pve-0068/oUfl8AR9EXDrpdJEeJFBGQhMB8FiIQBtp2gJUA/?a=1233&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C&cv=1&br=3694&bt=1847&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=pfuryMM88Zmo0F~pT94jVxhzZpWrKsd.&mime_type=video_mp4&qs=0&rc=ZjM6PGUzaTM8Ojs0ZmZnaEBpM3VsN3A5cms8cDMzNzczM0A2Ml42LzFjNi0xNjUuMjNiYSNjLV5pMmRrLWtgLS1kMTZzcw%3D%3D&l=202402251723530001D7B3C465B1F605D1&btag=e00088000&cc=3'
  },
  {
    id: 3,
    author: 'lordasem',
    description: 'estdsadsao es una prueba',
    likes: 121233,
    comments: 137652,
    shares: 12543,
    songTitle: 'lorsdfem - user',
    albumCover: 'https://avatars.githubusercontent.com/u/65743790?v=4',
    src: 'https://v16m.tiktokcdn.com/760a72a763d98ea75702ca7a2f0bee90/65de1ab6/video/tos/useast2a/tos-useast2a-pve-0068/oUfl8AR9EXDrpdJEeJFBGQhMB8FiIQBtp2gJUA/?a=1233&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C&cv=1&br=3694&bt=1847&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=pfuryMM88Zmo0F~pT94jVxhzZpWrKsd.&mime_type=video_mp4&qs=0&rc=ZjM6PGUzaTM8Ojs0ZmZnaEBpM3VsN3A5cms8cDMzNzczM0A2Ml42LzFjNi0xNjUuMjNiYSNjLV5pMmRrLWtgLS1kMTZzcw%3D%3D&l=202402251723530001D7B3C465B1F605D1&btag=e00088000&cc=3'
  },
  {
    id: 4,
    author: 'lorasd1em',
    description: 'esdasto es una prgfdsueba',
    likes: 11237623,
    comments: 13092,
    shares: 12563,
    songTitle: 'loredsam - usaser',
    albumCover: 'https://avatars.githubusercontent.com/u/65743790?v=4',
    src: 'https://v16m.tiktokcdn.com/760a72a763d98ea75702ca7a2f0bee90/65de1ab6/video/tos/useast2a/tos-useast2a-pve-0068/oUfl8AR9EXDrpdJEeJFBGQhMB8FiIQBtp2gJUA/?a=1233&ch=0&cr=3&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C&cv=1&br=3694&bt=1847&bti=NDU3ZjAwOg%3D%3D&cs=0&ds=3&ft=pfuryMM88Zmo0F~pT94jVxhzZpWrKsd.&mime_type=video_mp4&qs=0&rc=ZjM6PGUzaTM8Ojs0ZmZnaEBpM3VsN3A5cms8cDMzNzczM0A2Ml42LzFjNi0xNjUuMjNiYSNjLV5pMmRrLWtgLS1kMTZzcw%3D%3D&l=202402251723530001D7B3C465B1F605D1&btag=e00088000&cc=3'
  }
]

export default function FeedVideos () {
  return (
    <>
      {VIDEO_URL.map(video => {
        return (
          <div
            key={video.id}
          >
            <VideoPlayer {...video} />
          </div>
        )
      })}
    </>
  )
}

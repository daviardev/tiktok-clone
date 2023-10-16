import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { AiFillHeart } from 'react-icons/ai'
import { FaCommentDots, FaShare } from 'react-icons/fa'
import { BiLoaderCircle } from 'react-icons/bi'

export default function PostMainLikes ({ id, userId }) {
  const [likes, setLikes] = useState([])
  const [comments, setComments] = useState([])
  const [userLiked, setUserLiked] = useState(false)
  const [hasClickedLike, setHasClickedLike] = useState(false)

  const router = useRouter()

  const LikeOrUnLike = () => {
    window.alert('haz dado like')
  }
  return (
    <>
      <div id={`PostMainLikes-${id}`} className='relative mr-[75px]'>
        <div className='absolute bottom-0 pl-2'>
          <div className='pb-4 text-center'>
            <button
              disabled={hasClickedLike}
              onClick={() => LikeOrUnLike()}
              className='rounded-full bg-gray-200 p-2 cursor-pointer'
            >
              {!hasClickedLike
                ? (
                  <AiFillHeart
                    color={likes?.length > 0 && userLiked ? '#ff2626' : ''}
                    size={25}
                  />
                  )
                : (
                  <BiLoaderCircle
                    size={25}
                    className='animate-spin'
                  />
                  )}
            </button>
            <span className='text-xs text-gray-800 font-semibold'>
              {likes?.length}
            </span>
          </div>

          <button
            onClick={() => router.push(`/post/${id}/${userId}`)}
            className='pb-4 text-center'
          >
            <div className='rounded-full bg-gray-200 p-2 cursor-pointer'>
              <FaCommentDots
                size={25}
              />
            </div>
            <span className='text-xs text-gray-800 font-semibold'>
              {comments?.length}
            </span>
          </button>

          <button className='text-center'>
            <div className='rounded-full bg-gray-200 p-2 cursor-pointer'>
              <FaShare
                size={25}
              />
            </div>
            <span className='text-xs text-gray-800 font-semibold'>
              0
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

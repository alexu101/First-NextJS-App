import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from "next/link"
import Image from 'next/image'
import React from 'react'

const StartupCard = ({ post }: {post: StartupTypeCard}) => {
    const {_id, _createdAt, views, author:{_id: authorId, name: authorName}, title, description, image, category} = post

  return (
    <div className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-red-400'/>
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>

        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {authorName}
                    </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className='text-26-semibold line-clamp-1'>
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <Image src="https://placehold.co/48x48" alt='placeholder' width={48} height={48} className='rounded-full'/>
            </Link>
        </div>

        <Link href={`/startup/${_id}`}>
            <p className='startup-card_desc'>
                {description}
            </p>
            <Image src={image} alt='description' width={400} height={400} className='rounded-md'/>
        </Link>

        <div className='flex-between gap-3 mt-5'>
            <Link href = {`/?query=${category.toLowerCase()}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <button className='startup-card_btn'>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </button>
        </div>
    </div>
  )
}

export default StartupCard
'use client'

import { XIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

const SearchFormReset = () => {
  return (
    <button type='reset' onClick={()=>redirect("/")} className='search-btn text-white'>
        <XIcon className='size-5'/>
    </button>
  )
}

export default SearchFormReset
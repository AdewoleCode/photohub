import { UnsplashPhotos } from '@/type'
import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

type Props = {
    src: string,
    innerData: UnsplashPhotos,
}

export default function ImageComponent({ src, innerData }: Props) {

    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.src = src
    }, [src])

    return (
        <>
            {
                <div className='grid gap-4' style={{ display: !imageLoaded ? 'inline' : 'none' }}>
                    <Blurhash
                        className="mainImg h-full max-w-full rounded-sm object-cover"
                        hash={innerData.blur_hash}
                        width={300}
                        height={300}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                </div>
            }
            {
                imageLoaded &&

                <div style={{ display: imageLoaded ? 'inline' : 'none' }}>
                    <img className="mainImg h-full max-w-full rounded-sm object-cover"
                        src={src}
                        alt="image"
                    />
                </div>


            }
        </>
    )
}
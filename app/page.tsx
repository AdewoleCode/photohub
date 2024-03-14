'use client'

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar"
import { UnsplashPhotos } from "@/type";
import { useQuery, } from '@tanstack/react-query'
import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { saveAs } from 'file-saver'
import { useDebounce } from 'use-debounce'
import { CgSpinnerTwo } from "react-icons/cg";
import ImageComponent from "@/components/ImageComponent";


type ImageSearchResult = {
  total: number,
  total_pages: number,
  results: UnsplashPhotos[] | undefined
}

export default function Home() {

  const [value, setSearchQuery] = useState('animals')
  const [searchQuery] = useDebounce(value, 2000)
  const [downloadInProgress, setDownloadInProgress] = useState(false)

  const apiKey = process.env.NEXT_PUBLIC_IMAGE_API

  const unsplashApi = `https://api.unsplash.com/search/photos?query=${searchQuery || 'animals'}&per_page=12&client_id=${apiKey}`

  const { isPending, error, data, refetch } = useQuery<ImageSearchResult>({

    queryKey: ['ImageData'],
    queryFn: () =>
      fetch(unsplashApi).then((res) =>
        res.json(),
      ),
  })

  useEffect(() => {
    refetch()
  }, [searchQuery])


  const modifiedData = (array: UnsplashPhotos[]) => {
    const newArray = []
    const size = 3

    for (let i = 0; i < array?.length; i += size) {
      newArray.push(array?.slice(i, i + size))
    }

    return newArray
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const downloadImage = (imageUrl: string, imageName: string) => {
    setDownloadInProgress(true)
    saveAs(imageUrl, `${imageName}.jpg`)
    setTimeout(() => {
      setDownloadInProgress(false)
    }, 2500);
  }

  return (
    <div className="bg-black min-h-[100vh] text-white dark:bg-white">

      <Navbar />
      <h2 className="mt-2 mb-[45px] text-center dark:text-black">Search For High resolution pictures and download to your device!</h2>
      <SearchBar
        handleSearch={handleSearch}
        searchQuery={value}
      />

      {
        isPending && <h2 className="head-text w-full py-8 text-center animate-bounce dark:text-black"
        >Fetching HD Images...</h2>
      }

      <main className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 px-10 py-8">

        {
          modifiedData(data?.results ?? []).map((d, index) => (
            <div key={index} className="grid gap-4">
              {
                d.map((innerData, index) => (
                  <div className="relative" key={index}>
                    <button
                      className="absolute bg-slate-600 p-3 rounded-full top-3 right-3"
                      onClick={() => downloadImage(innerData.urls.full, innerData.slug)}
                    >
                      {
                        downloadInProgress ?
                          <CgSpinnerTwo className="animate-spin" size={25} /> : <LuDownload size={25} />
                      }
                    </button>

                    {
                      error ?
                        <h2 className="border">error Fetching data!</h2>
                        :
                        <ImageComponent src={innerData.urls.regular} innerData={innerData} />
                    }

                  </div>
                ))
              }
            </div>
          ))
        }
      </main>

    </div>
  );
}

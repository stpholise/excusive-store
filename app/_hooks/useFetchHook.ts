"use client"
import { useState, useEffect } from 'react'

interface Product {
    _id: string  ;
    name: string;
    image: {
        url: string;
        alt: string;
    };
    currentPrice:number;
    percentOff?: number;
    previousPrice?:number
    description?: string;
    tag?: string;
    stars?:number;
  }
 

export const useFetchProducts = () => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ products, setProducts ] = useState<Product[]>([])
    const [ error, setError ] = useState<Error | null>(null) 

    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              }, 
        }
        
        const getProducts = async( ) => {
            setIsLoading(true)
            try {
                const response = await fetch('https://btuu5zrd.api.sanity.io/v2025-04-01/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7B%0A++_id%2C%0A++name%2C%0A++currentPrice%2C%0A++previousPrice%2C%0A++percentOff%2C%0A++stars%2C%0A++description%2C%0A++%22slug%22%3A+slug.current%2C%0A+++%22image%22%3A+image%5B0%5D+%7B%0A++++%22url%22%3A+asset-%3Eurl%2C%0A++++%22alt%22%3A+alt%2C+%0A++%7D%2C%0A++category-%3E%7B%0A++++_id%2C%0A++++name%2C%0A++++%22slug%22%3A+slug.current%0A++%7D%2C%0A++variants%5B%5D+%7B%0A++++name%2C%0A++++price%2C%0A++++%22image%22%3A+image.asset-%3Eurl%0A++%7D%2C%0A++tags%0A%7D%0A&perspective=raw'
                    , settings)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                    setIsLoading(false)
                  }
                const items= await response.json()
                  const data : Product[]  = items.result
                setProducts(data)
            
                setIsLoading(false)
            } 
            catch(error ) {
                setError(error instanceof Error ? error : new Error('An unknown error occurred')) 
                setIsLoading(false)
            }
            finally {
                setIsLoading(false)
            }
        } 
        getProducts()

    }, [])
    return { products, isLoading, error}
}



// =========================================================================================
// ========================FETCH PRODUCTS BY TAG============================================
// =========================================================================================
export const useFetchProductsByTag = (tag : string) => {

    const [ isLoadingTagProducts, setIsLoadingTagProducts ] = useState(true)
    const [ tagProducts, setTagProducts ] = useState<Product[]>([])
    const [ tagError, setTagError ] = useState<Error | null>(null) 

    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              }, 
        }
        console.log(tag)
        const getProducts = async( ) => {
            setIsLoadingTagProducts(true)
            try {
                const response = await fetch(`https://btuu5zrd.api.sanity.io/v2025-04-01/data/query/production?query=*[references("b5ee63b1-8498-4b7b-bff6-38ffdf0bdbf2")]{
                        _id,
                        name,
                        currentPrice,
                        previousPrice,
                        percentOff,
                        stars,
                        description,
                        "slug": slug.current,
                        "image": image[0] {
                            "url": asset->url,
                            "alt": alt, 
                        },
                        category->{
                            _id,
                            name,
                            "slug": slug.current
                        },
                        variants[] {
                            name,
                            price,
                            "image": image.asset->url
                        },
                        tags
                        }`
                    , settings)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                    console.log('an error occoured nothing to display')
                    setIsLoadingTagProducts(false)
                  }
                const items= await response.json()
                  const data : Product[]  = items.result
                  setTagProducts(data)
                 
                setIsLoadingTagProducts(false)
            } 
            catch(error ) {
                setTagError(error instanceof Error ? error : new Error('An unknown error occurred')) 
                setIsLoadingTagProducts(false)
            }
            finally {
                setIsLoadingTagProducts(false)
            }
        } 
        getProducts()

    }, [tag])
    return { tagProducts, isLoadingTagProducts, tagError}
}
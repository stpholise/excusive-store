"use client"
import { useState, useEffect } from 'react'
import { PortableTextBlock } from '@sanity/types'

interface Product {
    _id: string  ;
    name: string;
    slug: string;
    image: {
        url: string;
        alt: string;
    };
    additionalImages?:  {
        "url": string;
        "alt": string;
    }[]; 
    detail?: PortableTextBlock;
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
                const response = await fetch(`https://btuu5zrd.api.sanity.io/v2025-04-01/data/query/production?query=*[_type == "product"]{
                        _id,
                        name,
                        currentPrice,
                        previousPrice,
                        percentOff,
                        stars,
                        details,
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


// =========================================================================================
// ========================FETCH SINGLE PRODUCT BY SLUG============================================
// =========================================================================================
export const useFetchSingleProductBySlug = (slug : string) => {

    const [ isLoadingSingleProduct, setIsLoadingSingleProduct ] = useState(true)
    const [ singleProduct, setSingleProducts ] = useState<Product[]>([])
    const [ singleProdcutError, setSingleProductError ] = useState<Error | null>(null) 

    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
              }, 
        }
        
        const getProducts = async( ) => {
            setIsLoadingSingleProduct(true)
            try {
                const response = await fetch(`https://btuu5zrd.api.sanity.io/v2025-04-01/data/query/production?query=*[slug.current == "${slug}"] {
                        _id,
                        name,
                        currentPrice,
                        previousPrice,
                        percentOff,
                        stars,
                        detail,
                        "slug": slug.current,
                        "image": image[0] {
                            "url": asset->url,
                            "alt": alt, 
                        },
                        "additionalImages": image[1...5] {
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
                    // console.log(slug)
                if (!response.ok) {
                    console.log('an error occoured nothing to display')
                    throw new Error(`HTTP error! Status: ${response.status}`)
                    setIsLoadingSingleProduct(false)
                  }
                  const items= await response.json()
                  const data : Product[]  = items.result
                  console.log(data)
                  setSingleProducts(data) 
                  setIsLoadingSingleProduct(false)
            } 
            catch(error ) {
                setSingleProductError(error instanceof Error ? error : new Error('An unknown error occurred')) 
                setIsLoadingSingleProduct(false)
            }
            finally {
                setIsLoadingSingleProduct(false)
            }
        } 
        getProducts()

    }, [slug])
    return { singleProduct, isLoadingSingleProduct, singleProdcutError}
}
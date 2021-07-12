import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sanityClient from "../../../client"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import "./styles.css"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source){
    return builder.image(source)
}
const serializers = {
    types: {
      "sanity.imageAsset": ({ node: { metadata, asset } }) => (
        <picture>
          <img
            style={{
              width: "100%",
              backgroundImage: `url(${metadata.lqip})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: '10px',
            //   boxShadow: '10px 10px 5px 1px #ccc',
              paddingTop: `${metadata.dimensions.aspectRatio}%`
            }}
            // srcSet={`
            //   ${urlFor(asset).width(320)} 320w,
            //   ${urlFor(asset).width(480)} 480w,
            //   ${urlFor(asset).width(800)} 800w
            // `}
            // sizes={`
            //   (max-width: 320px) 280px,
            //   (max-width: 480px) 440px,
            //   800px
            // `}
            src={urlFor(asset)}

            alt="images of traffic in the city and grilled fish"

          />
        </picture>
      )
    }
  };

const Singlepost = () => {

    const [singlePost, setSinglePost] = useState(null)
    const {slug} = useParams()

    useEffect(()=>{
        sanityClient.fetch(`*[slug.current ==  "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body[]{
                ...,
                _type == "image" => asset->
            },
            publishedAt,
            "name": author->name,
            "authorImage": author->image
           
        }`
        ).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    },[slug])

    if(!singlePost) return <div>Loading...</div>
    
    return (
        <>
            <main className="main-container">
                <section className="header-post">
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className='image-header'  />
                    
                </section>
                   
                <section className="section-post">
                    <h1 className="header-title">{singlePost.title}</h1>
                    {/* <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="author-image-avatar" />
                    {singlePost.name} */}
                    <p className="post-date">{singlePost.publishedAt.toString().substr(0,10)}</p>
                    <div className="blog-content"><BlockContent  serializers={serializers} imageOptions={{  w: 660, h: 435, fit: "min" }} blocks={singlePost.body} projectId="c3bnpuzz" dataset="production"/></div>
                    <p><i>Images credit: Mech Serey Rath, photographer</i></p>
                </section>
                
            </main>
            
        </>
    )
}

export default Singlepost

import React, { useState, useEffect } from 'react'
import { sanityClient } from '../../client/sanity'
//import { PostRelated } from '../../typings'

interface MyProps {
  /*postRef: any;
  posts : [PostRelated];*/
  
}

function RelatedArticle({} : MyProps) {

 return (
    <div>
    </div>
  )
}


export async function getServerSideProps() {
  
  const query = `*[_type == 'post' && _id == $articleRef],{
    _id,
    title,
    slug,
    publishedAt,
    
  }`
  const posts = await sanityClient.fetch(query)
  return {
    props: {posts}, // will be passed to the page component as props
  }
}

export default RelatedArticle;
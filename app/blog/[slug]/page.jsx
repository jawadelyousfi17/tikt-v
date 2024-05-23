import dbConnect from "@/lib/connect-db";
import PostPage from "../../components/blog/post-page";
import React from 'react'
import Article from "@/lib/model/article";
import { notFound } from "next/navigation";

export async function generateMetadata({params: {slug}}) {
  await dbConnect()
    try {
        const article = await Article.findOne({slug})
        if(!article) {
             return
        }
        // console.log(article.title , article.tags)
        return {
          title : article.title ,
          description : article.description
        }
    } catch (error) {
        notFound()
    }
}


const page = async ({params}) => {
    const {slug} = params
    console.log('generating ...')
    await dbConnect()

    try {
        const article = await Article.findOne({slug})
        if(!article) {
             notFound()
        }
        // console.log(article.title , article.tags)
        return <PostPage article={article} ></PostPage>
    } catch (error) {
        notFound()
    }

  return (
    <div>
        
    </div>
  )
}

export default page
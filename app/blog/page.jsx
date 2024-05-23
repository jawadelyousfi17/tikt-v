import dbConnect from "@/lib/connect-db"
import PostCard from "../components/blog/post-card"
import Article from "@/lib/model/article"



const Page = async () => {

  await dbConnect()

  const articles = await Article.find()
  if(articles.length === 0) {
    return (
      <div><div role="alert" className="alert">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>No articles yet</span>
      <div>
      </div>
    </div></div>
    )
  }

  return (
    <div className="grid grid-cols-1  gap-2">

      {
        articles.map((article , index) => (
          <PostCard key={index} title={article.title} desc={article.description} tags={article.tags} link={`/blog/${article.slug}`}/>

        ))
      }

    </div>
  )
}

export default Page
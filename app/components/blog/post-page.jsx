import React from 'react'

const PostPage = ({article}) => {
    console.log(article.tags[0])
  return (
    <div className='flex flex-col gap-4'>


                    <div className='flex gap-2'>{article.tags.map((tag , i) => (
                                    <tag key={i} className="badge badge-primary"> {tag} </tag>
                ))}</div>
                
         <article dangerouslySetInnerHTML={{ __html:`<h2>${article.title}</h2> ${article.content}` }}  class="prose prose-md">
            
        </article>

    </div> )
   
}

export default PostPage
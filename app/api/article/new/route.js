import Category from "@/lib/model/category"
import { NextResponse } from "next/server"
import Article from "@/lib/model/article"
import slugify from "slugify"
import Dummy from 'xdummy-js' 
import { removeHTMLTags } from '@/app/_lib/utility'
import dbConnect from "@/lib/connect-db"

export async function POST(req, res) {
  await dbConnect()
  let { title, content, tags } = await req.json()
  console.log(tags)
  const description = removeHTMLTags(content.substring(0,200))
  let slug = slugify(title, {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    lower: true,      // convert to lower case, defaults to `false`
    strict: false,     // strip special characters except replacement, defaults to `false`
    locale: 'vi',      // language code of the locale to use
    trim: true
  })


  console.log(slug)


  try {
    const isExist = await Article.findOne({slug})
    if(isExist) slug = `${slug}-${Dummy.uniqueId(2)}`
    const article = await Article.create({ title, content, tags , description , slug})
    if (!article) return NextResponse.json({ succes: false })
    return NextResponse.json({ succes: true })
  } catch (error) {
    console.log(error.message)
    return NextResponse.json({ succes: false })
  }
}


export async function GET(req, res) {
  await dbConnect()

  try {
    const catOld = await Category.find()
    if (catOld) return NextResponse.json({ succes: true, catOld })
  } catch (error) {
    return NextResponse.json({ succes: false })

  }
}
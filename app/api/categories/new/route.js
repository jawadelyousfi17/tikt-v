import Category from "@/lib/model/category"
import { NextResponse } from "next/server"




export async function POST(req , res) {
  let category = await req.json()
  try {
    const catOld = await Category.findOne({title : category.title})
    if(catOld) return   NextResponse.json({succes : true , msg : "already exist"})
    const cat = await Category.create(category)
    return NextResponse.json(cat)

  } catch (error) {
    return NextResponse.json({succes : false})

  }
}


export async function GET(req , res) {
  try {
    const catOld = await Category.find()
    if(catOld) return   NextResponse.json({succes : true , catOld})
  } catch (error) {
    return NextResponse.json({succes : false})

  }
}
import { NextResponse } from "next/server"


export async function POST(req) {
    const {title} = await req.json()
    const prompt1 = `You are an expert blog author and writer in the tech and the web ,  I will give you a topic and generate from it highly relevant article as html format , just the  html without html tag and body tag just the article . and not as markdown  no more no less no explanation , optimised for the seo  . article title : ${title} , number of headings : 10 , each heading should have a paragraph between 300 and 400 words `
    const text = await run(prompt1)
    let categories = await run(`from this title return its tags as json array no more no less . the title : ${title} `)
      categories  = categories.replace("```json\n", "")
  categories = categories.replace('```' , "")
  categories = JSON.parse(categories)
    return NextResponse.json({ succes : true , article : text , categories  })
  }

 
 
const key = process.env.GEMINI_KEY


 
import { GoogleGenerativeAI } from "@google/generative-ai"
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(key);
async function run(prompt) {
// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const result = await model.generateContent(prompt);
const response = await result.response;
let text = response.text();
//   text  = text.replace("```json\n", "")
//   text = text.replace('```' , "")
//   text = JSON.parse(text)
return text
}
// const prompt1 = "You are an expert blog author and writer in the tech and the web ,  I will give you a topic and generate from it highly relevant article as html format , just the article as html   no more no less no explanation , optimised for the seo . article title : 'Gain followers in tiktok : the best way' , number of headings : 10"
// const prompt3 = "You are an expert blog author and writer in the tech and the web , I will give you an array of headings and write from it an article explaining it in the best way . I want is as html and best seo practice . the array of headings :   '1. Create High-Quality Content', '2. Use Trending Hashtags and Sounds' , '3. Collaborate with Other Creators' "
// const prompt = "Please generate 10 highly relevant and diverse . The output should be in a valid JSON array format, with no additional text or explanation.The topic is: 'get more followers in tiktok' "
// run(prompt1)
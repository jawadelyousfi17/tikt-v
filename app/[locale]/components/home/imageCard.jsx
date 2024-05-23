"use client"

import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMusicalNotes } from "react-icons/io5";


const images = [0,1,2,3,4,5,6,7,8,9,10]

export function ImagesCard({state}) {

  const [loading , setloading] = useState({})
  const [loadingMusic, setLoadingMusic] = useState(false);

  async function handleDownloadImg(url , index) {
    try {
      setloading(prev => {return {...prev , [index] : true}})
      const result = await axios.get(url, {}, { responseType: Blob });
      const myUrl = window.URL.createObjectURL(new Blob([result.data]));
      const link = document.createElement("a");
      link.href = myUrl;
      link.setAttribute("download", "your-file-name.jpeg");
      link.dispatchEvent(new MouseEvent("click"));
      window.URL.revokeObjectURL(url);
      setloading(prev => {return {...prev , [index] : false}})

    } catch (error) {
      console.log(error);
    }
  }

  function handleLoad(index) {
    console.log('load')
    setloading(prev => {return {...prev , [index] : false}})
  }
  useEffect(() => {
     state.imagesdata.images.forEach((element , index) => {
      setloading(prev => {return {...prev , [index] : true}})
     });
    
  } , [])
 
  async function handleDownloadMp3(url , id) {
    if (!url) return;
    setLoadingMusic(true);
    try {
      const result = await axios.post(`https://tmv.icu:8080/download-mp3` , {
        url , 
        id
      })
      const response = result.data
      if(response.succes) {
        window.location = `https://tmv.icu:8080/download-mp3/${id}`
      }
      setLoadingMusic(false);
    } catch (error) {
      setLoadingMusic(false);
      console.log(error);
    }
  }

  

  return (
    <motion.div initial={{ opacity: 0 , scale : 1.03 }} 
    animate={{ opacity: 1 , scale : 1}} 
    transition={{ duration: 0.2 ,  ease: "easeInOut", // Add easing
    when: "beforeChildren",
    staggerChildren: 0.2,}}  className="flex flex-col gap-2 w-full py-4">
      <div className="flex gap-4 py-2 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={state.imagesdata.author.avater} />
          </div>
        </div>

        <p className="text-md font-semibold">{state.imagesdata.author.nickName}</p>
      </div>
      <p>
      {state.imagesdata.imageInfo.desc}
      </p>
      
      <button disabled={loadingMusic} className="btn btn-primary " onClick={() => {handleDownloadMp3(state.imagesdata.mp3 , state.imagesdata.id)}}>
            {loadingMusic && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            {!loadingMusic && (
              <>
                {" "}
                <IoMusicalNotes />
                download as Mp3
              </>
            )}
            {loadingMusic && <>downloading</>}
          </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 gap-6">

        {state.imagesdata.images.map((image , index) => (
        <div key={index} className="flex flex-col gap-2">
         { loading[index] && <div className="skeleton w-full h-72"></div>}
          <img
          onLoad={() => handleLoad(index)}
          src={image}
            className={`rounded-2xl ${loading[index] ? 'hidden' : ''} anime `}
            alt=""
          />
          <a  href={image} target="_blank" className="btn btn-md btn-primary">
            download
          </a>
        </div>
     ))}
     </div>

    </motion.div>
  );
}

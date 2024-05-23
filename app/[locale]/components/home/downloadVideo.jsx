"use client";
import { FiLink } from "react-icons/fi";
import { LiaPasteSolid } from "react-icons/lia";

import React, { useState } from "react";
// import { checkUrl } from "@/app/_lib/utility";
import ErrorMessage from "../errors/error";
import axios from "axios";
import { VideoCard } from "./videoCard";
import { ImagesCard } from "./imageCard";
import Featurs from "./features";

const VideoDowloaderClient = ({title , data}) => {
  function checkUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }
    try {
        const nurl = new URL(url);
        console.log(nurl.hostname)
        if(!nurl.hostname.includes('tiktok.com')) {
            return false
        }
        return true
    } catch (error) {
        return false
    }
  }
  const [linkInput, setLinkInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState({ error: false, message: "" });
  const [videoData, setVideoData] = useState({});
  const [imageData, setImageData] = useState({});
    const [videoFetched , setVideoFetched] = useState(false)
    const [imagefetched , setImageFetched] = useState(false)

  function handleInput(value) {
    setLinkInput(value);
  }

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText();
      setLinkInput(text);
    } catch (error) {
      return;
    }
  }

  async function getVideo() {
    setError({ error: false, message: "" });
    setVideoFetched(false)
    setImageFetched(false)
    if (!checkUrl(linkInput)) {
      setError({ error: true, message: "Invalid tiktok link ." });
      return;
    }
    setLoading(true)
    try {
      const result = await axios.post(`https://tmv.icu:8080/beta`, {
        url:linkInput,
      });
      const response = result.data;
      console.log(response)
      if (response.succes) {
        setLoading(false)
        if (response.contentType === "video") {
          let videoDataMain = {
            methode: "api",
            url: response.data.url,
            mp3: null,
            id: response.id,
            videoInfo: response.videoInfo,
            author: response.author,
          };
          setVideoData(videoDataMain);
          console.log((videoDataMain))
          setVideoFetched(true)
        }
        if (response.contentType === "image") {
            console.log({
                methode: "api",
                images: response.data.images,
                mp3: response.data.mp3,
                id: response.id,
                imageInfo: response.videoInfo,
                author: response.author,
              })
          setImageData({
            methode: "api",
            images: response.data.images,
            mp3: response.data.mp3,
            id: response.id,
            imageInfo: response.videoInfo,
            author: response.author,
          });
          setImageFetched(true)

        }
      } else {
        setLoading(false)
        setError({error : true , message : 'An error accured please try again'})
      }
    } catch(error) {
      console.log(error)
      setLoading(false)
      setError({error : true , message : 'An error accured please try again'})
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className=" font-semibold text-lg">
       {title}
      </h2>
      <h2>
       
      </h2>
      <h2></h2>
      <label className="input input-bordered flex items-center gap-2 justify-between px-0 pl-4" dir="ltr">
        <div className="flex gap-2 items-center w-full">
          <FiLink className="shrink-0" />
          <input
            value={linkInput}
            onChange={(e) => handleInput(e.target.value)}
            type="text"
            className="w-full"
            placeholder={`${data.linkHere}`}
          />
        </div>
        <button
          className="btn btn-md btn-primary shrink-0"
          onClick={() => handlePaste()}
        >
          <LiaPasteSolid />
          {data.paste}
        </button>
      </label>

      {isError.error && <ErrorMessage message={isError.message} />}

      <button
        onClick={() => getVideo()}
        disabled={loading}
        className="btn btn-accent"
      >
        {!loading && `${data.get_video}`}
        {loading && `${data.loading}`}
        {loading && <span className="loading loading-bars loading-sm"></span>}
      </button>

      {videoFetched && <VideoCard state={{videoData : videoData , methode : videoData.methode}} data={data} dispatch={()=> {}} />}
      {imagefetched && <ImagesCard state={{imagesdata : imageData}} data={data} />}


    </div>
  );
};

export default VideoDowloaderClient;

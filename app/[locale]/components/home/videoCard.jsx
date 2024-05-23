"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";
import { motion } from "framer-motion";

export function VideoCard({ state, dispatch, data }) {
  const [loading, setLoading] = useState(false);
  const [loadingHd, setLoadingHd] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingMusic, setLoadingMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const videoRef = useRef(null);

  async function handleDownload(url, id) {
    // if (!url && state.methode === "api") return;

    setLoading(true);
    try {
      // const result = await axios.post(`https://tmv.icu:8080/download-video`, {
      //   url,
      //   id,
      // });
      // const response = result.data;
      // if (response.succes) {
        console.log(id)
        window.location = `https://tmv.icu:8080/download/${id}`;
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function handleDownloadMp3(url, id) {
    if (!url) return;
    setLoadingMusic(true);
    try {
      const result = await axios.post(`https://tmv.icu:8080/download-mp3`, {
        url,
        id,
      });
      const response = result.data;
      if (response.succes) {
        window.location = `https://tmv.icu:8080/download-mp3/${id}`;
      }
      setLoadingMusic(false);
    } catch (error) {
      setLoadingMusic(false);
      console.log(error);
    }
  }

  function handlePlay(url) {
    if (!isPlaying) setIsPlaying(true);
    if (videoRef.current.paused) {
      videoRef.current.play();
      setVideoPlaying(true);
    } else {
      if (!videoRef.current.paused) {
        setVideoPlaying(false);
        videoRef.current.pause();
      }
    }
  }

  const elementRef = useRef(null);
  const imgRef = useRef(null);
  // Create a ref to the target element
  const getYPosition = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const yPosition = rect.top; // Get the Y position relative to the viewport
      return yPosition;
    }
    return null; // Return null if the element hasn't been rendered yet
  };
  useEffect(() => {
    const img = imgRef.current;
    if (img) {
      img.onload = () => setImageLoading(false);
      if (img.complete) setImageLoading(false);
    }

    console.log("loadeed 0");
    setTimeout(() => {
      setAnimate(false);
    }, 10);
    const Ypos = getYPosition();
    const differ = 2;
    // window.scrollBy({
    //   top: Ypos, // Negative value for scrolling up
    //   behavior: "smooth", // Optional: for smooth scrolling animation
    // });
  }, []);

  // useEffect(() => {
  //   console.log('changed')
  // } , [videoRef.current.paused])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut", // Add easing
        when: "beforeChildren",
        staggerChildren: 0.2,
      }}
      ref={elementRef}
      className={`flex flex-col gap-2 w-full py-4 px-2 for-animation ${
        animate ? "active-animation" : ""
      }`}
    >
      <div className="flex gap-4 py-2 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={state.videoData.author.avater} />
          </div>
        </div>

        <p className="text-md font-bold">{state.videoData.author.nickName}</p>
      </div>
      <div
        className={`flex flex-col   gap-4 sm:flex-row py-2 }`}
      >
        {imageLoading && (
          <div className="skeleton w-1/3  sm:w-44 h-80   rounded-2xl"></div>
        )}
        
        <>
          {/* {state.methode === "api" && (
            <video
              ref={videoRef}
              className={`${isPlaying ? "flex" : "hidden"} ${
                isLandscape ? "landscape" : ""
              } rounded-2xl w-44 md:w-56`}
              autoPlay={isPlaying}
              height="auto"
              controls
            >
              <source src={state.videoData.url} type="video/mp4" />
              Your browser doesn&apos;t support the video tag
            </video>
          )} */}
        </>
        <div className="flex flex-col gap-2 grow ">
          <button
            disabled={loading}
            className="btn btn-primary  "
            onClick={() => {
              handleDownload(state.videoData.url, state.videoData.id);
            }}
          >
            {loading && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            {!loading && (
              <>
                {" "}
                <FiDownload />
                {`${data.download_video}`}
              </>
            )}
            {loading && <>{`${data.loading}`}
</>}
          </button>
          <p>{state.videoData.videoInfo.desc}</p>

          {(
          <img
            ref={imgRef}
            src={state.videoData.videoInfo.cover}
            className={`w-full sm:w-1/2  anime md:w-1/3 rounded-2xl ${
              imageLoading ? "hidden" : ""
            }`}
            alt=""
          />
        )}

          {/* // hd  */}
          {/* {state.methode === 'api' && state.videoData.hdUrl &&  <button
            disabled={loadingHd}
            className="btn btn-primary wrp  "
            onClick={() => {
              handleDownloadHd(state.videoData.hdUrl, state.videoData.id);
            }}
          >
                                 {loadingHd && <progress className="progress progress-info w-full h-1 prog " value={progress} max="100"></progress>}

            {loadingHd && (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            {!loadingHd && (
              <span className="flex flex-row gap-2">
                {" "}
                <BsBadge4kFill />
                High resolution
              </span>
            )}
            {loadingHd && <span className="z-10">downloading</span>}
            
          </button>} */}

          {/* {state.methode === 'api' && <button
            // disabled={isPlaying}
            className="btn btn-primary "
            onClick={() => {
              handlePlay(state.videoData.url);
            }}
          >
            {!videoPlaying && (
              <>
                <FaPlay />
                Play video
              </>
            )}

            {videoPlaying && (
              <>
                <FaPause />
                Stop
              </>
            )}
          </button>} */}

          {/* {state.methode === "api" && (
            <button
              disabled={loadingMusic}
              className="btn btn-primary "
              onClick={() => {
                handleDownloadMp3(state.videoData.mp3, state.videoData.id);
              }}
            >
              {loadingMusic && (
                <span className="loading loading-spinner loading-sm"></span>
              )}
              {!loadingMusic && (
                <>
                  {" "}
                  <IoMusicalNotes />
                  {`${data.download_song}`}
                </>
              )}
              {loadingMusic && <> {`${data.loading}`}</>}
            </button>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}

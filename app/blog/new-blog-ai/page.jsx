"use client";

import { TiDelete } from "react-icons/ti";
import { FaMagic } from "react-icons/fa";

import React, { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Dummy from "xdummy-js";
import axios from "axios";
import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyComponent() {
  const [value, setValue] = useState();
  const [title, setTiele] = useState();
  const [category, setCategory] = useState();
  const [categories, setCategories] = useState([]);
  const [isLastChar, setlastChar] = useState(true);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  async function generate() {
    setAiLoading(true)
    try {
        const response =await axios.post('/api/ai/article-by-title' , {
            title : title
        })
        const data = response.data
        setCategories(data.categories)
        setValue(data.article)
        setAiLoading(false)
    } catch (error) {
        setAiLoading(false)

    }
  }

  async function publish() {
    setLoading(true);
    try {
      if (categories.length === 0) setCategories(["uncatigorized"]);
      const response = await axios.post(
        "/api/article/new",
        {
          title,
          content: value,
          tags: [...categories],
        }
      );
      if (response.data.succes === true) {
        toast("Published !");
        setLoading(false);
      } else {
        toast("Error !");
        setLoading(false);
      }

      console.log(response.data);
    } catch (error) {
      setLoading(false);
    }
  }

  function handleCategorySubmit(e) {
    if (e.key === "Enter" || e.key === ",") {
      if (categories.includes(category) || category.length < 2)
        return setCategory("");
      const newCategories = [
        ...categories,
        e.key === "," ? category.slice(0, -1) : category,
      ];
      setCategories(newCategories);
      setCategory("");
    }
  }

  function handleCategoryDelete(e) {
    if (e.key === "Backspace" && !category) {
      console.log("delete", e.target.value);
      const newCategories = categories.slice(0, -1);
      setCategories(newCategories);
    }
  }

  function handleCategoryDeleteByClick(name) {
    const newCats = categories.filter((cat) => cat !== name);
    setCategories(newCats);
  }
  return (
    <div className="flex flex-col gap-2 w-full">
      <ToastContainer />
      <div className="flex justify-end gap-4">
        <button className="btn btn-sm ">Cancel</button>
        <button
          disabled={loading}
          className="btn btn-sm btn-neutral"
          onClick={publish}
        >
          {!loading && "Publish"}
          {loading && "Publishing"}
          {loading && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
        </button>
      </div>
      Title
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full "
        value={title}
        onChange={(e) => setTiele(e.target.value)}
      />


      <div className="felx justify-start">
        <button disabled={aiLoading} className="btn btn-sm btn-neutral" onClick={() => generate()}>
          Generate <FaMagic />
        </button>
      </div>


      Category
      <div className="input input-bordered flex items-center gap-2 ">
        {categories &&
          categories.map((category) => (
            <button
              onClick={() => handleCategoryDeleteByClick(category)}
              key={category}
              className="btn btn-sm"
            >
              {" "}
              {category} <TiDelete />
            </button>
          ))}

        <input
          type="text"
          placeholder="Categories"
          className="ml-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          onKeyUp={(e) => handleCategorySubmit(e)}
          onKeyDown={(e) => handleCategoryDelete(e)}
        />
      </div>
      <div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="h-44 s"
        />
      </div>
    </div>
  );
}

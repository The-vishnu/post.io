"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState(null);
  const [fileLoading, setFileLoading] = useState(false)

  useEffect(() => {
    if(!fileName) return;

    console.log("Selected file: ", fileName);
    setFileLoading(true);

    //simulate time for asynk work
    const timer = setTimeout(() => {
      setFileLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fileName]);

  const handleChooseFile = (e) => {
     const file = e.target.files[0];
     if(file) {
      setFileName(file);
     }
  };

  const handleRemoveFile = () => {
    setFileName(null)
  }
  return (
    <div className="flex items-center gap-3 justify-between font-sans dark:bg-neutral-950 rounded-3xl px-4 py-1 shadow-lg w-[55vw] min-h-[12vh]">

      <div className="relative">
         {fileName && (
          <div className="absolute -top-14 flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-xl shadow-md animate-fadeIn">
            <p className="text-xs text-gray-700 dark:text-gray-200 truncate max-w-[120px]">
              {fileName.name}
            </p>
            <button
              onClick={handleRemoveFile}
              className="p-0.5 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            >
              <X size={14} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        )}
        <label htmlFor="fileType"
          className="flex items-center justify-center w-10 h-10 dark:bg-neutral-800 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md">{fileLoading ? <Loader2 className="animate-spin" /> : <Plus />}</label>
        <input onChange={handleChooseFile} id="fileType" className="hidden" type="file" />
      </div>
      <Textarea
        className={`rounded-[1.5rem] h-[34%]`}
        placeholder="Type your message here." />
      <Button variant={"secondary"} className={`rounded-2xl cursor-pointer`}>Send</Button>
    </div>
  );
}

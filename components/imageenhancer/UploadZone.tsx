"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Loader2, Download, Image as ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function UploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "enhancing" | "done" | "error">("idle");
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selected = acceptedFiles[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setStatus("idle");
      setEnhancedImage(null);
      setErrorMsg("");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const handleEnhance = async () => {
    if (!file) return;
    
    setStatus("uploading");
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Connect to the local FastAPI AI service
      setStatus("enhancing");
      const response = await fetch("http://127.0.0.1:8000/api/v1/enhance", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to enhance image");
      }

      const blob = await response.blob();
      const enhancedUrl = URL.createObjectURL(blob);
      setEnhancedImage(enhancedUrl);
      setStatus("done");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "An error occurred during enhancement");
    }
  };

  const handleDownload = () => {
    if (enhancedImage) {
      const link = document.createElement("a");
      link.href = enhancedImage;
      link.download = `enhanced_${file?.name || "image.png"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setEnhancedImage(null);
    setStatus("idle");
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            {...getRootProps()}
            className={`
              w-full h-64 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center p-8 transition-colors duration-300 cursor-pointer
              ${isDragActive ? "border-primary bg-primary/5" : "border-[#D7E2EA]/20 bg-[#0C0C0C] hover:border-primary/50 hover:bg-[#1A1A1A]"}
            `}
          >
            <input {...getInputProps()} />
            <UploadCloud className={`w-12 h-12 mb-4 transition-colors duration-300 ${isDragActive ? "text-primary" : "text-[#D7E2EA]/40"}`} />
            <p className="text-lg font-medium text-[#D7E2EA] mb-2 text-center">
              Drag & Drop your image here
            </p>
            <p className="text-sm text-[#D7E2EA]/50 text-center mb-6">
              Supports JPG, PNG, WEBP up to 10MB
            </p>
            <div className="px-6 py-2 rounded-full bg-[#1A1A1A] border border-[#D7E2EA]/10 text-sm text-[#D7E2EA] hover:bg-[#2A2A2A] transition-colors">
              Browse Files
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-[#1A1A1A] rounded-3xl border border-[#D7E2EA]/10 overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-[#D7E2EA]/10 flex justify-between items-center bg-[#0C0C0C]">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-primary" />
                <span className="text-[#D7E2EA] text-sm font-medium truncate max-w-[200px] sm:max-w-[400px]">
                  {file?.name}
                </span>
              </div>
              <button onClick={reset} className="text-xs text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors">
                Remove
              </button>
            </div>
            
            <div className="relative w-full h-[400px] bg-[#0C0C0C]">
              {enhancedImage && preview ? (
                <BeforeAfterSlider 
                  beforeImage={preview} 
                  afterImage={enhancedImage} 
                  className="relative w-full h-full overflow-hidden cursor-ew-resize select-none bg-[#0C0C0C]" 
                />
              ) : (
                <Image src={preview || ""} alt="Original" fill className="object-contain" unoptimized />
              )}
              
              {/* Overlay states */}
              {(status === "uploading" || status === "enhancing") && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                  <p className="text-white font-medium">
                    {status === "uploading" ? "Uploading Image..." : "Enhancing with AI..."}
                  </p>
                  <p className="text-white/60 text-sm mt-2 max-w-[250px] text-center">
                    This can take a few seconds depending on your local GPU compute.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 bg-[#0C0C0C] flex flex-col sm:flex-row justify-center items-center gap-4 border-t border-[#D7E2EA]/10">
              {status === "idle" || status === "error" ? (
                <button
                  onClick={handleEnhance}
                  disabled={status === "uploading" || status === "enhancing"}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-container font-medium uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(118,33,176,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Enhance Image
                </button>
              ) : status === "done" ? (
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#1A1A1A] border border-primary text-primary font-medium uppercase tracking-widest text-sm hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,241,253,0.2)] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download 4K Result
                </button>
              ) : null}
            </div>
            
            {status === "error" && (
              <div className="px-6 pb-4 text-red-400 text-sm text-center bg-[#0C0C0C]">
                {errorMsg}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

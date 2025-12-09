import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Step2_Photos = ({ formData, setFormData, onNext }) => {
  const [images, setImages] = useState([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [videoLink, setVideoLink] = useState(formData.videoLink || "");

  // Load initial images from formData
  useEffect(() => {
    if (formData.images && formData.images.length > 0) {
      const loadedImages = formData.images.map((img) =>
        img.preview ? img : { file: img.file || img, preview: img.preview || URL.createObjectURL(img.file || img) }
      );
      setImages(loadedImages);
    }
  }, [formData.images]);

  // Cleanup previews on unmount
  useEffect(() => {
    return () => images.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [images]);

  // --- Dropzone ---
  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles
      .slice(0, 10 - images.length) // Max 10 images
      .map((file) => ({ file, preview: URL.createObjectURL(file) }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    setFormData({ ...formData, images: updatedImages, videoLink });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"] },
    maxSize: 10485760, // 10 MB
    multiple: true,
  });

  // --- Delete Image ---
  const handleDelete = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    setFormData({ ...formData, images: updated, videoLink });
    if (index === mainImageIndex) setMainImageIndex(0);
  };

  // --- Set Main Image ---
  const handleSetMain = (index) => setMainImageIndex(index);

  // --- Update video link ---
  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
    setFormData({ ...formData, videoLink: e.target.value, images });
  };

  // --- Validation ---
  const isNextDisabled = images.length < 2;

   const handleNext = () => {
    if (
      formData.images.length < 2
    ) {
      alert("Upload at least two images ");
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">
      <h2 className="text-2xl font-bold text-center text-primary">Add Photos</h2>
      <p className="text-center text-gray-600">Upload 2-10 photos of your item</p>

      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer transition-colors w-[70%] mx-auto ${
          isDragActive ? "border-cyan-500 bg-cyan-50" : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <input {...getInputProps()} />
        <FiUploadCloud size={40} className="text-gray-400 mb-2" />
        <p className="font-semibold text-lg">Drag & drop or click to browse</p>
        <p className="text-gray-500 mt-1">JPG, PNG, GIF, WEBP up to 10MB each</p>
      </div>

      {/* Image Previews */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleSetMain(idx)}
            >
              <img
                src={img.preview}
                alt="preview"
                className={`w-full h-24 sm:h-32 object-cover border-2 ${
                  idx === mainImageIndex ? "border-cyan-500" : "border-transparent"
                }`}
              />
              {/* Delete Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(idx);
                }}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-75 group-hover:opacity-100 transition-opacity"
              >
                <IoClose size={16} />
              </button>
              {/* Main Image Tag */}
              {idx === mainImageIndex && (
                <span className="absolute top-1 left-1 bg-cyan-500 text-white text-xs px-2 py-0.5 rounded font-semibold">
                  Main
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Video Link */}
      <div className="flex flex-col items-center mt-6">
        <label className="block text-lg font-semibold text-primary mb-2">
          Video Link (Optional)
        </label>
        <input
          type="text"
          placeholder="YouTube, Instagram, or Facebook video link"
          value={videoLink}
          onChange={handleVideoLinkChange}
          className="w-[70%] p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-6">
        <button
        onClick={handleNext}
          disabled={isNextDisabled}
          className={`w-[60%] py-3 rounded-xl font-bold text-lg transition-colors ${
            isNextDisabled
              ? "bg-gray-300 text-white cursor-not-allowed"
              : "bg-primary text-white hover:bg-primaryLight"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2_Photos;

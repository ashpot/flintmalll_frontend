import React, { useState, useEffect } from 'react';
// We use react-dropzone for the drag-and-drop box
import { useDropzone } from 'react-dropzone';
// Icons for the UI
import { FiUploadCloud } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Step2_Photos = ({ onNext }) => {
  // State to hold the image files and their previews
  const [images, setImages] = useState([]);
  // State to track which image is the main one
  const [mainImageIndex, setMainImageIndex] = useState(0);
  // State for the video link
  const [videoLink, setVideoLink] = useState('');

  // --- Dropzone Logic ---
  const onDrop = (acceptedFiles) => {
    // Create preview URLs for each new file
    const newImages = acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));

    // Add new images to existing ones, enforcing the 10 image max
    setImages(prevImages => [...prevImages, ...newImages].slice(0, 10));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif'] },
    maxSize: 10485760, // 10MB
  });

  // --- Image Handling Logic ---
  const handleDeleteImage = (e, index) => {
    // Stop the click from also triggering 'setMainImage'
    e.stopPropagation(); 
    
    // Remove the image from the array
    setImages(images.filter((_, i) => i !== index));

    // If we delete the main image, reset the main image to the first one (index 0)
    if (index === mainImageIndex) {
      setMainImageIndex(0);
    }
  };

  const handleSetMainImage = (index) => {
    setMainImageIndex(index);
  };

  // --- Cleanup logic to prevent memory leaks ---
  useEffect(() => {
    // Revoke the object URLs when the component unmounts
    return () => images.forEach(file => URL.revokeObjectURL(file.preview));
  }, [images]);

  // --- Validation for the "Next" button ---
  // Button is disabled if there are less than 2 images
  const isNextDisabled = images.length < 2;

  const handleNextClick = () => {
    // In a real app, you would:
    // 1. Upload the `images` to your server (e.g., Cloudinary, S3)
    // 2. Get back a list of image URLs
    // 3. Save these URLs and the `videoLink` to your main form state
    // 4. Then call onNext()
    
    // For now, we just go to the next step
    onNext();
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg my-10">
      <div className="">
        <h2 className="text-2xl font-bold text-center text-primary">Add Photo</h2>
        <p className="text-center font-semibold text-lg text-[#666666]">
          Upload photos of your item (minimum 2, maximum 10)
        </p>

        {/* --- Dropzone --- */}
        <div
          {...getRootProps()}
          className={`w-[75%] mx-auto border-2 border-dashed rounded-lg p-10 mt-8 mb-4 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-cyan-500 bg-cyan-50' : 'border-gray-300 hover:border-gray-400'}`}
        >
          <input {...getInputProps()} />
          <FiUploadCloud size={40} className="mx-auto text-[#B7B7B7] mb-2" />
          <p className="font-semibold text-2xl text-[#1E1E1E]">Drop photos here or click to browse</p>
          <p className="text-lg font-medium text-[#666666]">JPG, PNG, GIF up to 10MB each</p>
        </div>

        {/* --- Image Previews --- */}
        {images.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-7">
            {images.map((file, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => handleSetMainImage(index)}
              >
                <img
                  src={file.preview}
                  alt="Uploaded preview"
                  className={`w-full h-24 sm:h-32 object-cover border-2 ${index === mainImageIndex ? 'border-cyan-500' : 'border-transparent'}`}
                />
                
                {/* Delete button (Red X) */}
                <button
                  onClick={(e) => handleDeleteImage(e, index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-75 group-hover:opacity-100 transition-opacity"
                >
                  <IoClose size={16} />
                </button>
                
                {/* Main tag */}
                {index === mainImageIndex && (
                  <span className="absolute top-1 left-1 bg-cyan-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    Main
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* --- Video Link (Optional) --- */}
        <div className='text-center my-6'>
          <label className="block text-lg font-semibold text-primary mb-3">
            Video Link (Optional)
          </label>
          <input
            type="text"
            placeholder="YouTube, Instagram or Facebook video link"
            className="w-[75%] mx-auto mb-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-[#B7B7B7] placeholder:text-lg placeholder:font-medium"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <p className="text-sm font-medium text-[#666666] mt-1">Add a video to showcase your item better.</p>
        </div>

        {/* --- Next Button --- */}
        <div className="pt-6 w-[60%] mx-auto">
          <button
            onClick={handleNextClick}
            disabled={isNextDisabled}
            className={`w-full font-bold text-lg py-3 rounded-xl transition-colors ${
              isNextDisabled
                ? 'bg-[#9FB3C9] text-white cursor-not-allowed' // Matches your "disabled" screenshot
                : 'bg-primary text-white hover:bg-primaryLight' // Matches your "active" screenshot
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2_Photos;
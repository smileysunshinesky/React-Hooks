import React, { useState, useEffect } from 'react';

function ObjectState() {
  // Define state variable to store images
  const [imageData, setImageData] = useState({});

  // Function to convert image to base64 string
  const imageUrlToBase64 = async (file, fileType) => {
    let base64String = '';
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        base64String = reader.result;
        setImageData(prevImageData => ({
          ...prevImageData,
          [file.name]: base64String
        }));
      };
    }
  };

  // Simulated function to load images into cache
  const saveToCache = async () => {
    // Implement caching logic here
  };

  useEffect(() => {
    // Simulate loading images when component mounts
    const imagesToLoad = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    imagesToLoad.forEach(async imageName => {
      const response = await fetch(`/images/${imageName}`);
      const fileBlob = await response.blob();
      await imageUrlToBase64(fileBlob, 'image/jpeg');
    });
    // Save loaded images to cache
    saveToCache();
  }, []);

  return (
    <div>
      <h1>Image Loader</h1>
      <div>
        {/* Render images */}
        {Object.keys(imageData).map(imageName => (
          <img key={imageName} src={imageData[imageName]} alt={imageName} />
        ))}
      </div>
    </div>
  );
}

export default ObjectState;

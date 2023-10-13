import React, { useState } from "react";

function ImageUploadForm(props) {
  const [image, setImage] = useState(null);
  //   const handleImageUpload = (event) => {
  //     setImage(event.target.files[0]);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", image);
  //     fetch("http://localhost:3000/images", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };

  return (
    <div>
      <div className="image_container">
        {image && (
          <div>
            <img
              className="writeimage"
              alt="postimage"
              src={URL.createObjectURL(image)}
              onChange={(e) => {
                setImage(e.target.src);
              }}
              // value={editPost.image}
            />
          </div>
        )}
      </div>
      <div className="writeformgroup" style={{ padding: ".5rem" }}>
        <label htmlFor="fileinput" style={{ display: "flex" }}>
          <label>Upload Image</label>
          <i className="writeicon fa-solid fa-plus"></i>
        </label>
        <input
          id="fileinput"
          type="file"
          onChange={(e) => {
            props.setImage(e.target.files[0]);
          }}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default ImageUploadForm;

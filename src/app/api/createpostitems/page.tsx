"use client";
import React, { useState } from "react";
import "./posts.css";
import Image from "next/image";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({ title: "", description: "", image: "" });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = { title: "", description: "", image: "" };

    if (!title) formErrors.title = "Title is required";
    if (!description) formErrors.description = "Description is required";
    if (!imageFile) formErrors.image = "Image is required";

    setErrors(formErrors);

    if (!title || !description || !imageFile) return;

    const newPost = { title, description, image };
    const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

    setTitle("");
    setDescription("");
    setImage(null);
    setImageFile(null);
    alert("Post created successfully!");
  };

  return (
    <div className="create-post">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors((prev) => ({ ...prev, title: "" }));
            }}
            className="input-field"
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        <div className="form-group">
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setErrors((prev) => ({ ...prev, description: "" }));
            }}
            className="input-field"
          />
          {errors.description && <p className="error-message">{errors.description}</p>}
        </div>

        <div className="form-group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
          {errors.image && <p className="error-message">{errors.image}</p>}
        </div>

        {image && (
  <Image
    src={image}
    alt="Preview"
    className="preview"
    width={400}
    height={300}
  />
)}

        <button type="submit" className="submit-btn" disabled={!title || !description || !imageFile}>
          Create Post
        </button>
      </form>
    </div>
  );
}

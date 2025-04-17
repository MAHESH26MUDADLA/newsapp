"use client";
import React, { useEffect, useState } from "react";
import "./myposts.css";
import Image from "next/image";

interface Post {
  description: string;
  image: string;
  title: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");
  const [editImage, setEditImage] = useState<string>("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditTitle(posts[index].title || "");
    setEditDescription(posts[index].description || "");
    setEditImage(posts[index].image || "");
  };

  const handleSave = () => {
    if (editIndex === null) return;

    const updatedPosts = [...posts];
    updatedPosts[editIndex] = {
      title: editTitle,
      description: editDescription,
      image: editImage || "",
    };

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((_, i) => i !== index);
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="posts">
      <h1>My Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Create one!</p>
      ) : (
        <div className="posts-container">
          {posts.map((post, index) => (
            <div key={index} className="post-card">
              {editIndex === index ? (
                <div className="edit-form">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Edit title"
                    required
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Edit description"
                    required
                  />
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                  {editImage && <Image
  src={editImage}
  alt="Preview"
  className="preview"
  width={400}
  height={300}
/>}
                  <button onClick={handleSave}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <>
                  <Image  src={post.image}
                             alt="Post"
                            width={400}
                           height={300}
                      />
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

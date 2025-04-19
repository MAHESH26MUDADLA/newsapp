"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/app/types";
import './posts.css';

export default function Posts() {
  const [news, setNews] = useState<Article[] | null>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "/api/news"
        );

        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setNews(data.articles || []); 
      } catch (error) {
        setError("Failed to load news. Please try again.");
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>; 
  if (error) return <p>{error}</p>; 
  if (!news || news.length === 0) return <p>No news available.</p>; 

  return (
    <section className="posts">
      <h2>Latest Articles</h2>
      <div className="posts-container">
        {news.map((article, index) => (
          <div key={index} className="post-card">
            <img src={article.urlToImage || "/default.jpg"} alt="News" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link href={`/api/news/${index}`}>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

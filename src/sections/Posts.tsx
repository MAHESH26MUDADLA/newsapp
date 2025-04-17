"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/app/types";
import './posts.css';

export default function Posts() {
  const [news, setNews] = useState<Article[] | null>(null); // Change initial state to `null`
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=5cc1690dbfdf4a30bf818da0c39a20f7"
        );

        if (!res.ok) throw new Error("Failed to fetch news");

        const data = await res.json();
        setNews(data.articles || []); // Ensure it's always an array
      } catch (error) {
        setError("Failed to load news. Please try again.");
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>; // Show loading state
  if (error) return <p>{error}</p>; // Show error state
  if (!news || news.length === 0) return <p>No news available.</p>; // Handle empty state

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

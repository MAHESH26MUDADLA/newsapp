"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/app/types";
import './pagene.css'




export default function News() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=5cc1690dbfdf4a30bf818da0c39a20f7"
        );
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="news-page">
      <h2>Latest News</h2>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-card">
          <img
  src={article.urlToImage || "/default.jpg"}
  alt="News"
  width={400}
  height={250}
  className="news-image"
/>

            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link href={`/api/news/${index}`}>Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

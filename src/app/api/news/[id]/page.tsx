"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Article } from "@/app/types";
import styles from "./NewsDetail.module.css"; // 👈 import the CSS module
import Image from "next/image";

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const articleIndex = Number(id);

  useEffect(() => {
    if (isNaN(articleIndex)) return;

    async function fetchNews() {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=5cc1690dbfdf4a30bf818da0c39a20f7`
        );
        const data = await res.json();

        if (data.articles && data.articles[articleIndex]) {
          setArticle(data.articles[articleIndex]);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNews();
  }, [articleIndex]);

  if (!article) return <p>Article not found or loading...</p>;

  return (
    <div className={styles.newsDetail}>
      <h1 className={styles.newsTitle}>{article.title}</h1>
      {article.urlToImage && (
        <Image
        src={article.urlToImage}
        alt="News"
        className={styles.newsImage}
        width={800} // You can adjust this
        height={400} // You can adjust this too
      />
      
      )}
      <p className={styles.newsText}>
        {article.description || "No description available."}
      </p>
      <p className={styles.newsText}>
        {article.content || "Full content not available."}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.newsLink}
      >
        Read Original Article
      </a>
    </div>
  );
}

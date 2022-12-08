import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleInterf } from "../types";
import { Container, Row, Col, Button } from "react-bootstrap";

const ArticlePage = () => {
  const params = useParams();
  console.log("🚀  params", params);

  const [singleArticleData, setSingleArticleData] =
    useState<ArticleInterf | null>(null);

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );

      if (response.ok) {
        let data = await response.json();
        setSingleArticleData(data);
        console.log("singleArticleData: " + data);
      } else {
        console.log("Error from the server");
      }
    } catch (error) {
      console.log("🚀 Fatal Error", error);
    }
  };

  return (
    <div className="divArticlePage">
      <img
        src={singleArticleData?.imageUrl}
        alt={singleArticleData?.imageUrl}
        className="imgArticlePage"
      />
    </div>
  );
};

export default ArticlePage;

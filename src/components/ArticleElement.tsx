import { useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticleInterf, SingleArticleProp } from "../types";

function ArticleElement({ id }: SingleArticleProp) {
  const [singleArticleData, setSingleArticleData] =
    useState<ArticleInterf | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
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
    singleArticleData && (
      <Col xs={4} className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={singleArticleData.imageUrl}
            alt={singleArticleData.title}
          />
          <Card.Body>
            <Card.Title>{singleArticleData.title}</Card.Title>
            <Card.Text>{singleArticleData.summary}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/article/${singleArticleData.id}`)}
            >
              Show full Article
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  );
}

export default ArticleElement;

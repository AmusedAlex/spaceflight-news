import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleInterf } from "../types";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const ArticlePage = () => {
  const params = useParams();
  console.log("🚀  params", params);

  const [singleArticleData, setSingleArticleData] =
    useState<ArticleInterf | null>(null);

  const navigate = useNavigate();

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
      <Container>
        <Row>
          <Col>
            <Card className="mt-5">
              <Card.Img variant="top" src={singleArticleData?.imageUrl} />
              <Card.Body>
                <Card.Title>{singleArticleData?.title}</Card.Title>
                <Card.Text>{singleArticleData?.summary}</Card.Text>
                <Button variant="primary" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticlePage;

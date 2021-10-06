import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import App from "../constants/App";
import newsService from "../services/NewsService"

export default () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        (async () => {
            const registers = await newsService.findAll()
            setNews(registers);
        })()
    }, [])

    return (
        <>
            <br />
            <Link to={App.ROUTES.REGISTER_NEWS} >
                <Button className="mb-2">Nova notícia</Button>
            </Link>
            <br />
            <Row>
                {
                    news.map((item) => {
                        return (
                            <Col sm="12" className="mb-2">
                                <Card body>
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <CardText>{item.description}</CardText>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
        </>
    )
}
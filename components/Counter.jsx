import React, { useState } from "react";
import { Row, Col, Card, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card title="Counter App:" bordered={false}>
        <Row>
          <Col md={9} />
          <Col md={2}>
            <Button
              size="large"
              icon={<MinusOutlined />}
              shape="circle"
              onClick={() => setCount(count - 1)}
            />
          </Col>
          <Col md={2} style={{ bottom: 5 }}>
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
              {count}
            </span>
          </Col>
          <Col md={2}>
            <Button
              size="large"
              icon={<PlusOutlined />}
              shape="circle"
              onClick={() => setCount(count + 1)}
            />
          </Col>
          <Col md={9} />
        </Row>
      </Card>
    </div>
  );
};

export default Counter;

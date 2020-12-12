import React from "react";
import { Card, Galery } from "components";
import {
  TeamOutlined,
  LineChartOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

function ContentBody() {
  return (
    <div className="content-body">
      <div className="card-wrapper">
        <Card
          title="Jumlah Pengunjung"
          Icons={LineChartOutlined}
          data="20,000"
        />
        <Card title="jumlah user" Icons={TeamOutlined} data="40,000" />
        <Card title="jumlah data" Icons={FileDoneOutlined} data="90,000" />
      </div>
      <Galery />
    </div>
  );
}

export default ContentBody;

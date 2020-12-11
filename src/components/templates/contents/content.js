import React from "react";
import "./content.scss";
import { Navbar, ContentBody, Breadcrumbs } from "components";

function Content() {
  const bread_data = ["Dashboard", "List", "Detail", "Edit"];
  return (
    <div className="container">
      <Navbar />
      <Breadcrumbs data={bread_data} />
      <ContentBody />
    </div>
  );
}

export default Content;

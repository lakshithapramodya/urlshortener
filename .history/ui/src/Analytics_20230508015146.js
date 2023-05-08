import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Analytics() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header hideLogin={false} />
      <h1>Hello</h1>
      <Footer />
    </div>
  );
}

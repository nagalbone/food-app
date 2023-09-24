import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import restList from "./utils/mockData";
const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="card-container">
        {restList.map((rest) => {
          return <Card key={rest.info.id} resto={rest} />;
        })}
      </div>
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

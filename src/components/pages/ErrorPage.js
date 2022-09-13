import React from "react";
import errImg from "../../assets/images/error-404.png";

export default function ErrorPage() {
  return (
    <div className="column-error">
      <img src={errImg} alt="error-img" />
    </div>
  );
}

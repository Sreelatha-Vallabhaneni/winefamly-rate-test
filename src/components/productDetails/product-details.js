import React from "react";
import "./product-details.css";
import thumbsUpIcon from "../../Images/green-thumb.png";

function ProductDetails() {
  return (
    <div className="product-details-section">
      <h5 className="label">ØKO</h5>
      <h1>
        Pascal Prunier-Bonheur, Petit Bonheur Coteaux Bourguignons Chardonnay
        2018
      </h1>
      <div className="flag-sec">
        <img
          src="https://cdn.winefamly.com/images/flags-normal/fr.png"
          alt="flag icon"
          width="25px"
          height="25px"
        />
        <u>Redwine</u>
        <b>.</b>
        <u>Beaujolais</u>
        <b>.</b>
        <u>France</u>
      </div>
      <ul className="green-thumb-sec">
        <li>
          <img src={thumbsUpIcon} alt="thumbsup icon" width="20px" />
        </li>
        <li>
          <i>Endnu ingen bedømmelser</i>
        </li>
      </ul>
      <h5 className="title-aromas">
        <b>Vinens aromaer:</b>
      </h5>
      <div className="wine-aromas">
        <div>
          <img
            src="https://cdn.winefamly.com/images/aromas/groentsagsagtigt.png"
            alt="Grønsagsagtigt"
          />
          <p>Grønsagsagtigt</p>
        </div>
        <div>
          <img
            src="https://cdn.winefamly.com/images/aromas/toerret-kogt_frugt.png"
            alt="Tørret/kogt frugt"
          />
          <p>Tørret/kogt frugt</p>
        </div>
        <div>
          <img
            src="https://cdn.winefamly.com/images/aromas/soede_krydderier.png"
            alt="Søde krydderier"
          />
          <p>Søde krydderier</p>
        </div>
        <div>
          <img
            src="https://cdn.winefamly.com/images/aromas/soede_krydderier.png"
            alt="Søde krydderier"
          />
          <p>Søde krydderier</p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;

import React, { useState } from "react";
import styled from "styled-components";
import thumbsUp from "../../Images/thumbs-up.png";
import thumbsDown from "../../Images/thumbs-down.png";
import "../../../src/theme.css";
import "./modal.css";

const Modal = styled.div`
  display: ${({ close }) => !close && "none"};
  width: 240px;
  height: ${({ close }) => close && "165px"};
  background-color: var(--light-grey);
  border-radius: 10px;
`;
const RateDiv = styled.div`
  display: ${({ click }) => !click && "none"};
`;

function ProductModal() {
  const [close, setClose] = useState(true);
  const [click, setClick] = useState(true);
  return (
    <Modal className="product-modal" close={close}>
      <div className="close">
        <button
          onClick={(e) => {
            e.preventDefault();
            setClose(!close);
          }}
        >
          &times;
        </button>
      </div>
      <RateDiv className="modal-rate" click={click}>
        <p>Var vinen god?</p>
        <div className="rating-btns">
          <button
            onClick={(e) => {
              e.preventDefault();
              setClick(!click);
            }}
          >
            <img src={thumbsUp} alt="ThumbsUp" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setClick(!click);
            }}
          >
            <img src={thumbsDown} alt="ThumbsDown" />
          </button>
        </div>
      </RateDiv>
      {!click && <ReviewProduct close={close} setClose={setClose} />}
    </Modal>
  );
}

const Review = styled.form`
  display: ${({ message }) => message && "none"};
  text-align: center;
`;

function ReviewProduct({ close, setClose }) {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(false);
  const handleChange = (event) => {
    return setInput(event.target.value);
  };
  return (
    <div className="review-form">
      <Review
        message={message}
        onSubmit={(e) => {
          e.preventDefault();
          setMessage(!message);
        }}
      >
        <textarea
          value={input}
          rows="6"
          cols="28"
          className="text-area"
          onChange={handleChange}
          placeholder={"Skriv kommentar     *"}
          required=""
        />
        <input type="submit" value="Send" className="btn-submit" />
      </Review>
      <div className="message">
        {message && <p style={{ color: "var(--green)" }}>Tak for din tid</p>}
        {message && (
          <button
            style={{ border: "none", cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              setClose(!close);
            }}
          >
            <u>Luk vinduet</u>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductModal;

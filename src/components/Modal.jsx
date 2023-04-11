import React from "react";

const Modal = ({ timing }) => {
  var myModal = new bootstrap.Modal("#exampleModal");

  setInterval(function () {
    // Here is is toggle for the example but you can use .show() or .hide() depending your requirements
    myModal.toggle();
  }, 1000);

  return (
    // <div classNameName="modal-dialog ">
    //   <div classNameName="modal-content">
    //     <div classNameName="modal-header">
    //       <h5 classNameName="modal-title" id="quizAnswerLabel"></h5>
    //       <button
    //         onClick={onClick}
    //         type="button"
    //         classNameName="btn-close"
    //         data-bs-dismiss="modal"
    //         aria-label="Close"
    //       ></button>
    //     </div>
    //     <div classNameName="modal-body" id="model-body">
    //       Quiz Answers
    //     </div>
    //     <div classNameName="modal-footer">
    //       <p
    //         data-bs-dismiss="modal"
    //         onClick={onClick}
    //         classNameName="btn btn-outline-info question"
    //         style={{
    //           backgroundColor: " #ee701e !important",
    //           color: "white !important",
    //           border: "none",
    //         }}
    //       >
    //         Retake the quiz
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div class="modal fade" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          autem quis voluptates? Earum et amet quas, adipisci quidem accusamus
          eaque!
        </div>
      </div>
    </div>
  );
};

export default Modal;

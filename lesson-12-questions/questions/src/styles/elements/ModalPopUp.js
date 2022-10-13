import styled from "styled-components";

export const ModalPopUp = ({closeModal, content}) => {
    return (
        <ModalStyles>
            <div className="overlay" onClick={closeModal}>
                <div className="modal">
                    <span className="close" onClick={closeModal}>X</span>
                    {content}
                </div>
            </div>
        </ModalStyles>
    )
}

const ModalStyles = styled.div`
    .overlay {
        width: 100%;
        height: 100%;
        background-color: lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 999;
    }
    .modal {
        max-width: 50%;
        border-radius: 10px;
        position: relative;
        padding: 25px 15px 15px;
        background-color: #fff;
    }
    .close {
        color: red;
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        font-weight: bold;
        font-size: 14px;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }
`
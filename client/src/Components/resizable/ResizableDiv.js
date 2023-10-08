import React, { useRef, useEffect } from "react";
import "../resizable/resize.css";

const ResizableDiv = () => {
  const refBox = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);
  const refLeft = useRef(null);

  useEffect(() => {
    const resizableElement = refBox.current;
    let styles = window.getComputedStyle(resizableElement);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let xCord = 0;
    let yCord = 0;

    const updateStyles = () => {
      styles = window.getComputedStyle(resizableElement);
      width = parseInt(styles.width, 10);
      height = parseInt(styles.height, 10);
    };

    resizableElement.style.top = "150px";
    resizableElement.style.left = "150px";

    // Top
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - yCord;
      height = height - dy;
      yCord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpTopResize = () => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = (event) => {
      yCord = event.clientY;
      updateStyles();
      resizableElement.style.bottom = styles.bottom;
      resizableElement.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Right
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xCord;
      xCord = event.clientX;
      width = width + dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpRightResize = () => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      xCord = event.clientX;
      updateStyles();
      resizableElement.style.left = styles.left;
      resizableElement.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);

      console.log(resizableElement);
    };

    // Bottom
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - yCord;
      height = height + dy;
      yCord = event.clientY;
      resizableElement.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = () => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = (event) => {
      yCord = event.clientY;
      updateStyles();
      resizableElement.style.top = styles.top;
      resizableElement.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Left
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xCord;
      xCord = event.clientX;
      width = width - dx;
      resizableElement.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = () => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = (event) => {
      xCord = event.clientX;
      updateStyles();
      resizableElement.style.right = styles.right;
      resizableElement.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);

    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);

    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="resizable-box" ref={refBox}>
          <div className="resizer rt" ref={refTop}></div>
          <div className="resizer rr" ref={refRight}></div>
          <div className="resizer rb" ref={refBottom}></div>
          <div className="resizer rl" ref={refLeft}></div>
        </div>
      </div>
    </>
  );
};

export default ResizableDiv;

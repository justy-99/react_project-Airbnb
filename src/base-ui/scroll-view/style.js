import styled from "styled-components";


export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      :before {
        position: absolute;
        content: '';
        left: 100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient( to left,rgb(255 255 255 / 0),white 50px );
      }
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
      :after {
        position: absolute;
        content: '';
        right: 100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient( to right,rgb(255 255 255 / 0),white 50px );
      }
    }
  }
`
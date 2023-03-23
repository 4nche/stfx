import React from 'react'
import styled from 'styled-components'

/**
 * spinner code has been copied from https://codepen.io/emgerold/pen/dyZmxm
 */

const SpinnerContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  .ajax-spinner-bars {
    position: absolute;
    position:absolute;
    width:35px;
    height:35px;
    left: 47%;
    top: 39%;
  }
  .ajax-spinner-bars > div {
    position: absolute;
    width: 2px;
    height: 8px;
    background-color: #25363F;
    opacity: 0.05;
    animation: fadeit 0.8s linear infinite;
  }
  .ajax-spinner-bars > .bar-1 {
    transform: rotate(0deg) translate(0, -12px);
    animation-delay:0.05s;
  }
  .ajax-spinner-bars > .bar-2 {
    transform: rotate(22.5deg) translate(0, -12px);
    animation-delay:0.1s;
  }
  .ajax-spinner-bars > .bar-3 {
    transform: rotate(45deg) translate(0, -12px);
    animation-delay:0.15s;
  }
  .ajax-spinner-bars > .bar-4 {
    transform: rotate(67.5deg) translate(0, -12px);
    animation-delay:0.2s;
  }
  .ajax-spinner-bars > .bar-5 {
    transform: rotate(90deg) translate(0, -12px);
    animation-delay:0.25s;
  }
  .ajax-spinner-bars > .bar-6 {
    transform: rotate(112.5deg) translate(0, -12px);
    animation-delay:0.3s;
  }
  .ajax-spinner-bars > .bar-7 {
    transform: rotate(135deg) translate(0, -12px);
    animation-delay:0.35s;
  }
  .ajax-spinner-bars > .bar-8 {
    transform: rotate(157.5deg) translate(0, -12px);
    animation-delay:0.4s;
  }
  .ajax-spinner-bars > .bar-9 {
    transform: rotate(180deg) translate(0, -12px);
    animation-delay:0.45s;
  }
  .ajax-spinner-bars > .bar-10 {
    transform: rotate(202.5deg) translate(0, -12px);
    animation-delay:0.5s;
  }
  .ajax-spinner-bars > .bar-11 {
    transform: rotate(225deg) translate(0, -12px);
    animation-delay:0.55s;
  }
  .ajax-spinner-bars > .bar-12 {
    transform: rotate(247.5deg) translate(0, -12px);
    animation-delay:0.6s;
  }
  .ajax-spinner-bars> .bar-13 {
    transform: rotate(270deg) translate(0, -12px);
    animation-delay:0.65s;
  }
  .ajax-spinner-bars > .bar-14 {
    transform: rotate(292.5deg) translate(0, -12px);
    animation-delay:0.7s;
  }
  .ajax-spinner-bars > .bar-15 {
    transform: rotate(315deg) translate(0, -12px);
    animation-delay:0.75s;
  }
  .ajax-spinner-bars > .bar-16 {
    transform: rotate(337.5deg) translate(0, -12px);
    animation-delay:0.8s;
  }
  @keyframes fadeit{
    0%{ opacity:1; }
    100%{ opacity:0;}
  }
`

interface Props {
  scale?: number
  loading: boolean
}
function Spinner(props: Props) {

  const styleProps = props.scale ? {
    transform: `scale(${props.scale})`,
  } : {}

  return (
    <SpinnerContainer style={{
      ...styleProps,
      opacity: props.loading ? 1 : 0,
    }}>
      <div className="ajax-spinner-bars">
        <div className="bar-1"></div>
        <div className="bar-2"></div>
        <div className="bar-3"></div>
        <div className="bar-4"></div>
        <div className="bar-5"></div>
        <div className="bar-6"></div>
        <div className="bar-7"></div>
        <div className="bar-8"></div>
        <div className="bar-9"></div>
        <div className="bar-10"></div>
        <div className="bar-11"></div>
        <div className="bar-12"></div>
        <div className="bar-13"></div>
        <div className="bar-14"></div>
        <div className="bar-15"></div>
        <div className="bar-16"></div>
      </div>
    </SpinnerContainer>
  )
}

export default Spinner

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import {
  FocusScope,
  useOverlay,
  useDialog,
  usePreventScroll,
} from "@visly/core";
export function Dialog(props) {
  return props.isOpen ? <OpenDialog {...props} /> : null;
}

function OpenDialog(props) {
  usePreventScroll();
  const { children, backdropColor = `rgba(0,0,0,0.1)` } = props;
  const ref = useRef(null);
  const { overlayProps } = useOverlay(props, ref);
  const { dialogProps } = useDialog(
    {
      role: "dialog",
      ...props,
    },
    ref
  );
  return createPortal(
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: backdropColor,
      }}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div {...overlayProps} {...dialogProps} ref={ref}>
          {children}
        </div>
      </FocusScope>
    </div>,
    document.body
  );
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef } from "react";
import { mergeProps, useButton, useFocusRing } from "@visly/core";
import { combineRef, renderChildren } from "./_internal_utils";
import { usePrimitive } from "./_internal_usePrimitive";
import { injectSpacing } from "./_internal_component_utils";
export function ButtonRoot(_props) {
  const ref = useRef();
  const { disabled } = _props;
  const props = mergeProps(
    { ..._props, onClick: undefined },
    {
      onPress: _props.onClick,
    }
  );
  const { isPressed, buttonProps } = useButton(
    { ...props, isDisabled: disabled },
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ref,
    props,
    isPressed,
    ignoreFocusHandling: true,
    isFocusVisible,
    noUserSelect: true,
  });
  const children = injectSpacing(
    props.addSpacing,
    renderChildren(props.children, values)
  );
  return (
    <button
      {...mergeProps(vislyProps, buttonProps, focusProps)}
      ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
      data-testid={testId}
      style={{ ...style }}
    >
      {children}
    </button>
  );
}

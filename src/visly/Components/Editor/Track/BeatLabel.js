// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./BeatLabel.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive, TextPrimitive } from "../../../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      "2iZY4gYqdx": {
        none: {
          text: "0",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const BeatLabelContext = createContext(null);

function BeatLabel(_props) {
  const defaults = useContext(BeatLabelContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="QSeXH7GDmQ"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "QSeXH7GDmQ",
        scope: "XWByFWyp2o",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          id={"Text_2iZY4gYqdx"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_XWByFWyp2o_2iZY4gYqdx"
          }
          key={"2iZY4gYqdx"}
          text={
            exists(props.text) ? props.text : getStyle("2iZY4gYqdx", "text")
          }
          element={getStyle("2iZY4gYqdx", "htmlElement")}
        />
      )}
    </RootPrimitive>
  );
}

BeatLabel.__variants = [];

export default BeatLabel;

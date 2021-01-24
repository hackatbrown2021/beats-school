// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./TrackLabel.css";
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
      "3PdbE8jeCC": {
        none: {
          text: "Note",
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

export const TrackLabelContext = createContext(null);

function TrackLabel(_props) {
  const defaults = useContext(TrackLabelContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="ENaQ2zd8TW"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "ENaQ2zd8TW",
        scope: "BDHwYiDRCT",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <TextPrimitive
          id={"Text_3PdbE8jeCC"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_BDHwYiDRCT_3PdbE8jeCC"
          }
          key={"3PdbE8jeCC"}
          text={
            exists(props.text) ? props.text : getStyle("3PdbE8jeCC", "text")
          }
          element={getStyle("3PdbE8jeCC", "htmlElement")}
        />
      )}
    </RootPrimitive>
  );
}

TrackLabel.__variants = [];

export default TrackLabel;
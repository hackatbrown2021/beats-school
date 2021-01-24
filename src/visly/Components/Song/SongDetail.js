// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../textstyles/fonts.css";
import "../../reset.css";
import "./SongDetail.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../_internal_utils";
import { RootPrimitive, TextPrimitive } from "../../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      "72mta6mxDz": {
        none: {
          text: "Unexpecting Octopus",
        },
      },
      GjP3Hgoa3y: {
        none: {
          text: "Beat 2",
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

export const SongDetailContext = createContext(null);

function SongDetail(_props) {
  const defaults = useContext(SongDetailContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="iDar5waLsp"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "iDar5waLsp",
        scope: "YF2T27v7M2",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <TextPrimitive
            id={"Text_72mta6mxDz"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_YF2T27v7M2_72mta6mxDz"
            }
            key={"72mta6mxDz"}
            text={getStyle("72mta6mxDz", "text")}
            element={getStyle("72mta6mxDz", "htmlElement")}
          />
          <TextPrimitive
            id={"Text_GjP3Hgoa3y"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_YF2T27v7M2_GjP3Hgoa3y"
            }
            key={"GjP3Hgoa3y"}
            text={getStyle("GjP3Hgoa3y", "text")}
            element={getStyle("GjP3Hgoa3y", "htmlElement")}
          />
        </>
      )}
    </RootPrimitive>
  );
}

SongDetail.__variants = [];

export default SongDetail;
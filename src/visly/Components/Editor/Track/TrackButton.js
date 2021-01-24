// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./TrackButton.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive, IconPrimitive } from "../../../_internal_primitives";
import * as icons from "../../../icons";

const styles = [
  {
    type: "default",
    layers: {
      "7m7PDdJSXC": {
        none: {
          icon: icons.vislyCheck,
          useMask: true,
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "selected",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "selected",
  },
];

export const TrackButtonContext = createContext(null);

function TrackButton(_props) {
  const defaults = useContext(TrackButtonContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="HHPAchEX9R"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "HHPAchEX9R",
        scope: "Sx4oPed2jE",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <IconPrimitive
          id={"Icon_7m7PDdJSXC"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Sx4oPed2jE_7m7PDdJSXC"
          }
          key={"7m7PDdJSXC"}
          useMask={getStyle("7m7PDdJSXC", "useMask")}
          src={getStyle("7m7PDdJSXC", "icon")}
        />
      )}
    </RootPrimitive>
  );
}

TrackButton.__variants = [
  {
    name: "selected",
    type: "variant",
  },
];

export default TrackButton;
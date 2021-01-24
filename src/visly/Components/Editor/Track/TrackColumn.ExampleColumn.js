// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./TrackColumn.ExampleColumn.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive } from "../../../_internal_primitives";
import {
  default as TrackButton,
  TrackButtonContext,
  default as TrackButton1,
  TrackButtonContext as TrackButton1Context,
  default as TrackButton2,
  TrackButtonContext as TrackButton2Context,
  default as TrackButton3,
  TrackButtonContext as TrackButton3Context,
} from "../../../Components/Editor/Track/TrackButton";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      DtLgUWpUSh: {},
      "695PAUYjUD": {},
      "36sDaQD2Vw": {},
      "6bJgkNprPu": {},
    },
  },
];

const variantPropTypes = [];

export const ExampleColumnContext = createContext(null);

function ExampleColumn(_props) {
  const defaults = useContext(ExampleColumnContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="VsTRh4EU1b"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "VsTRh4EU1b",
        scope: "6B12c8Gp3x",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        props.TrackButton === undefined ? (
          <TrackButton
            key={"DtLgUWpUSh"}
            {...getCompositeDefaultProps("DtLgUWpUSh")}
            id="TrackButton_DtLgUWpUSh"
            className="__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_DtLgUWpUSh"
          />
        ) : (
          <TrackButtonContext.Provider
            key="DtLgUWpUSh-provider"
            value={{
              key: "DtLgUWpUSh",
              id: "TrackButton_DtLgUWpUSh",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_DtLgUWpUSh",
              ...getCompositeDefaultProps("DtLgUWpUSh"),
            }}
          >
            {props.TrackButton}
          </TrackButtonContext.Provider>
        ),
        props.TrackButton1 === undefined ? (
          <TrackButton1
            key={"695PAUYjUD"}
            {...getCompositeDefaultProps("695PAUYjUD")}
            id="TrackButton1_695PAUYjUD"
            className="__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_695PAUYjUD"
          />
        ) : (
          <TrackButton1Context.Provider
            key="695PAUYjUD-provider"
            value={{
              key: "695PAUYjUD",
              id: "TrackButton1_695PAUYjUD",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_695PAUYjUD",
              ...getCompositeDefaultProps("695PAUYjUD"),
            }}
          >
            {props.TrackButton1}
          </TrackButton1Context.Provider>
        ),
        props.TrackButton2 === undefined ? (
          <TrackButton2
            key={"36sDaQD2Vw"}
            {...getCompositeDefaultProps("36sDaQD2Vw")}
            id="TrackButton2_36sDaQD2Vw"
            className="__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_36sDaQD2Vw"
          />
        ) : (
          <TrackButton2Context.Provider
            key="36sDaQD2Vw-provider"
            value={{
              key: "36sDaQD2Vw",
              id: "TrackButton2_36sDaQD2Vw",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_36sDaQD2Vw",
              ...getCompositeDefaultProps("36sDaQD2Vw"),
            }}
          >
            {props.TrackButton2}
          </TrackButton2Context.Provider>
        ),
        props.TrackButton3 === undefined ? (
          <TrackButton3
            key={"6bJgkNprPu"}
            {...getCompositeDefaultProps("6bJgkNprPu")}
            id="TrackButton3_6bJgkNprPu"
            className="__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_6bJgkNprPu"
          />
        ) : (
          <TrackButton3Context.Provider
            key="6bJgkNprPu-provider"
            value={{
              key: "6bJgkNprPu",
              id: "TrackButton3_6bJgkNprPu",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_6B12c8Gp3x_6bJgkNprPu",
              ...getCompositeDefaultProps("6bJgkNprPu"),
            }}
          >
            {props.TrackButton3}
          </TrackButton3Context.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

ExampleColumn.TrackButton = TrackButton;
ExampleColumn.TrackButton1 = TrackButton1;
ExampleColumn.TrackButton2 = TrackButton2;
ExampleColumn.TrackButton3 = TrackButton3;
ExampleColumn.__variants = [];

export default ExampleColumn;

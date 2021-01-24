// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./SongControl.Bpm.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive, TextPrimitive } from "../../../_internal_primitives";
import {
  default as BpmDecr,
  ControlButtonContext as BpmDecrContext,
  default as BpmIncr,
  ControlButtonContext as BpmIncrContext,
} from "../../../Components/Editor/Song/ControlButton";

const styles = [
  {
    type: "default",
    layers: {
      U2xbjPKvTG: {
        none: {
          text: "198 bpm",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      "8cf8ykYYY2": {},
      Lc1Y7VXszo: {},
    },
  },
];

const variantPropTypes = [];

export const BpmContext = createContext(null);

function Bpm(_props) {
  const defaults = useContext(BpmContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="FDzTFQPDng"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "FDzTFQPDng",
        scope: "RMoSfFZHdm",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        props.BpmDecr === undefined ? (
          <BpmDecr
            key={"8cf8ykYYY2"}
            {...getCompositeDefaultProps("8cf8ykYYY2")}
            id="BpmDecr_8cf8ykYYY2"
            className="__visly_reset_7X7HTLRqyD __visly_scope_RMoSfFZHdm_8cf8ykYYY2"
          />
        ) : (
          <BpmDecrContext.Provider
            key="8cf8ykYYY2-provider"
            value={{
              key: "8cf8ykYYY2",
              id: "BpmDecr_8cf8ykYYY2",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_RMoSfFZHdm_8cf8ykYYY2",
              ...getCompositeDefaultProps("8cf8ykYYY2"),
            }}
          >
            {props.BpmDecr}
          </BpmDecrContext.Provider>
        ),
        <TextPrimitive
          id={"Text_U2xbjPKvTG"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_RMoSfFZHdm_U2xbjPKvTG"
          }
          key={"U2xbjPKvTG"}
          text={
            exists(props.text) ? props.text : getStyle("U2xbjPKvTG", "text")
          }
          element={getStyle("U2xbjPKvTG", "htmlElement")}
        />,
        props.BpmIncr === undefined ? (
          <BpmIncr
            key={"Lc1Y7VXszo"}
            {...getCompositeDefaultProps("Lc1Y7VXszo")}
            id="BpmIncr_Lc1Y7VXszo"
            className="__visly_reset_7X7HTLRqyD __visly_scope_RMoSfFZHdm_Lc1Y7VXszo"
          />
        ) : (
          <BpmIncrContext.Provider
            key="Lc1Y7VXszo-provider"
            value={{
              key: "Lc1Y7VXszo",
              id: "BpmIncr_Lc1Y7VXszo",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_RMoSfFZHdm_Lc1Y7VXszo",
              ...getCompositeDefaultProps("Lc1Y7VXszo"),
            }}
          >
            {props.BpmIncr}
          </BpmIncrContext.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

Bpm.BpmDecr = BpmDecr;
Bpm.BpmIncr = BpmIncr;
Bpm.__variants = [];

export default Bpm;

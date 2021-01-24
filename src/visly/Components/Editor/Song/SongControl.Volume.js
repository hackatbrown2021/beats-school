// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./SongControl.Volume.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive, TextPrimitive } from "../../../_internal_primitives";
import * as icons from "../../../icons";
import {
  default as VolDecr,
  ControlButtonContext as VolDecrContext,
  default as VolIncr,
  ControlButtonContext as VolIncrContext,
} from "../../../Components/Editor/Song/ControlButton";

const styles = [
  {
    type: "default",
    layers: {
      HvMKdVMFpE: {
        none: {
          text: "+1 db",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      PmYYNaG8Kq: {
        none: {
          icon: icons.minus,
        },
      },
      Knw3FX5QfK: {
        none: {
          icon: icons.plus,
        },
      },
    },
  },
];

const variantPropTypes = [];

export const VolumeContext = createContext(null);

function Volume(_props) {
  const defaults = useContext(VolumeContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="NHqyHaNWfV"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "NHqyHaNWfV",
        scope: "KcgL6C7Rzy",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        props.VolDecr === undefined ? (
          <VolDecr
            key={"PmYYNaG8Kq"}
            {...getCompositeDefaultProps("PmYYNaG8Kq")}
            id="VolDecr_PmYYNaG8Kq"
            className="__visly_reset_7X7HTLRqyD __visly_scope_KcgL6C7Rzy_PmYYNaG8Kq"
          />
        ) : (
          <VolDecrContext.Provider
            key="PmYYNaG8Kq-provider"
            value={{
              key: "PmYYNaG8Kq",
              id: "VolDecr_PmYYNaG8Kq",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_KcgL6C7Rzy_PmYYNaG8Kq",
              ...getCompositeDefaultProps("PmYYNaG8Kq"),
            }}
          >
            {props.VolDecr}
          </VolDecrContext.Provider>
        ),
        <TextPrimitive
          id={"Text_HvMKdVMFpE"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_KcgL6C7Rzy_HvMKdVMFpE"
          }
          key={"HvMKdVMFpE"}
          text={
            exists(props.text) ? props.text : getStyle("HvMKdVMFpE", "text")
          }
          element={getStyle("HvMKdVMFpE", "htmlElement")}
        />,
        props.VolIncr === undefined ? (
          <VolIncr
            key={"Knw3FX5QfK"}
            {...getCompositeDefaultProps("Knw3FX5QfK")}
            id="VolIncr_Knw3FX5QfK"
            className="__visly_reset_7X7HTLRqyD __visly_scope_KcgL6C7Rzy_Knw3FX5QfK"
          />
        ) : (
          <VolIncrContext.Provider
            key="Knw3FX5QfK-provider"
            value={{
              key: "Knw3FX5QfK",
              id: "VolIncr_Knw3FX5QfK",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_KcgL6C7Rzy_Knw3FX5QfK",
              ...getCompositeDefaultProps("Knw3FX5QfK"),
            }}
          >
            {props.VolIncr}
          </VolIncrContext.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

Volume.VolDecr = VolDecr;
Volume.VolIncr = VolIncr;
Volume.__variants = [];

export default Volume;

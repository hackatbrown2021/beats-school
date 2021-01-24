// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./SongControl.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import { RootPrimitive, SpacerPrimitive } from "../../../_internal_primitives";
import * as icons from "../../../icons";
import {
  default as Play,
  ControlButtonContext as PlayContext,
} from "../../../Components/Editor/Song/ControlButton";
import { default as Bpm } from "./SongControl.Bpm";

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
      YZbkJYc1YL: {
        none: {
          icon: icons.arrowRight,
        },
      },
    },
  },
];

const variantPropTypes = [];

export const SongControlContext = createContext(null);

function SongControl(_props) {
  const defaults = useContext(SongControlContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="SywPfNPRTE"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "SywPfNPRTE",
        scope: "3kuoye9wrG",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        props.Play === undefined ? (
          <Play
            key={"YZbkJYc1YL"}
            {...getCompositeDefaultProps("YZbkJYc1YL")}
            id="Play_YZbkJYc1YL"
            className="__visly_reset_7X7HTLRqyD __visly_scope_3kuoye9wrG_YZbkJYc1YL"
          />
        ) : (
          <PlayContext.Provider
            key="YZbkJYc1YL-provider"
            value={{
              key: "YZbkJYc1YL",
              id: "Play_YZbkJYc1YL",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_3kuoye9wrG_YZbkJYc1YL",
              ...getCompositeDefaultProps("YZbkJYc1YL"),
            }}
          >
            {props.Play}
          </PlayContext.Provider>
        ),
        <SpacerPrimitive
          id={"Spacer_G22h4Vy3yE"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_3kuoye9wrG_G22h4Vy3yE"
          }
          key={"G22h4Vy3yE"}
        />,
        props.Bpm === undefined ? <Bpm key={"EUwHj7tQkP"} /> : props.Bpm,
      ]}
    </RootPrimitive>
  );
}

SongControl.Play = Play;
SongControl.__variants = [];

export default SongControl;

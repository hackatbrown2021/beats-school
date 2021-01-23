// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../textstyles/fonts.css";
import "../../reset.css";
import "./SongList.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../_internal_utils";
import { RootPrimitive } from "../../_internal_primitives";
import { default as List, ListContext } from "../../List";
import {
  default as example1,
  SongEntryContext as example1Context,
  default as example2,
  SongEntryContext as example2Context,
} from "../../Components/Song/SongEntry";

const styles = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "example",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      THfbQNH9y6: {},
      "75cjkht8UM": {},
      LASPFQdSnN: {},
    },
  },
  {
    type: "boolean",
    propName: "example",
    layers: {
      THfbQNH9y6: {},
      "75cjkht8UM": {},
      LASPFQdSnN: {
        none: {
          songName: "Laughing Dolphins",
        },
      },
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "example",
  },
];

export const SongListContext = createContext(null);

function SongList(_props) {
  const defaults = useContext(SongListContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="3NgVbc2DRn"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "3NgVbc2DRn",
        scope: "HCe4MVdiJL",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        props.example1 === undefined ? (
          <example1
            key={"75cjkht8UM"}
            {...getCompositeDefaultProps("75cjkht8UM")}
            id="example1_75cjkht8UM"
            className="__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_75cjkht8UM"
          />
        ) : (
          <example1Context.Provider
            key="75cjkht8UM-provider"
            value={{
              key: "75cjkht8UM",
              id: "example1_75cjkht8UM",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_75cjkht8UM",
              ...getCompositeDefaultProps("75cjkht8UM"),
            }}
          >
            {props.example1}
          </example1Context.Provider>
        ),
        props.example2 === undefined ? (
          <example2
            key={"LASPFQdSnN"}
            {...getCompositeDefaultProps("LASPFQdSnN")}
            id="example2_LASPFQdSnN"
            className="__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_LASPFQdSnN"
          />
        ) : (
          <example2Context.Provider
            key="LASPFQdSnN-provider"
            value={{
              key: "LASPFQdSnN",
              id: "example2_LASPFQdSnN",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_LASPFQdSnN",
              ...getCompositeDefaultProps("LASPFQdSnN"),
            }}
          >
            {props.example2}
          </example2Context.Provider>
        ),
        props.List === undefined ? (
          <List
            key={"THfbQNH9y6"}
            {...getCompositeDefaultProps("THfbQNH9y6")}
            id="List_THfbQNH9y6"
            className="__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_THfbQNH9y6"
          />
        ) : (
          <ListContext.Provider
            key="THfbQNH9y6-provider"
            value={{
              key: "THfbQNH9y6",
              id: "List_THfbQNH9y6",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_HCe4MVdiJL_THfbQNH9y6",
              ...getCompositeDefaultProps("THfbQNH9y6"),
            }}
          >
            {props.List}
          </ListContext.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

SongList.List = List;
SongList.example1 = example1;
SongList.example2 = example2;
SongList.__variants = [
  {
    name: "example",
    type: "variant",
  },
];

export default SongList;
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../textstyles/fonts.css";
import "../../reset.css";
import "./Dashboard.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../_internal_utils";
import {
  RootPrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "../../_internal_primitives";
import {
  default as SongList,
  SongListContext,
} from "../../Components/Song/SongList";
import { default as Tabs, TabsContext } from "../../Tabs";

const styles = [
  {
    type: "default",
    layers: {
      "7GKntRiYeh": {
        none: {
          text: "Welcome Back!",
          htmlElement: "h1",
        },
      },
      "3wAXGzmZPS": {
        none: {
          text: "John Doe",
          htmlElement: "h1",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "listexample",
    layers: {},
  },
  {
    type: "boolean",
    propName: "upcomingexample",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      "4h4ZqgPRUH": {
        none: {
          example: false,
        },
      },
      Tx8y1JmvZr: {},
    },
  },
  {
    type: "boolean",
    propName: "listexample",
    layers: {
      "4h4ZqgPRUH": {
        none: {
          example: true,
        },
      },
      Tx8y1JmvZr: {},
    },
  },
  {
    type: "boolean",
    propName: "upcomingexample",
    layers: {
      "4h4ZqgPRUH": {},
      Tx8y1JmvZr: {},
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "listexample",
  },
  {
    type: "boolean",
    propName: "upcomingexample",
  },
];

export const DashboardContext = createContext(null);

function Dashboard(_props) {
  const defaults = useContext(DashboardContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="2V5eACqfHE"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "2V5eACqfHE",
        scope: "Eba28UUg9v",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        <ContainerPrimitive
          id={"Container_12SFduNNui"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_12SFduNNui"
          }
          key={"12SFduNNui"}
          addSpacing={false}
          element={getStyle("12SFduNNui", "htmlElement")}
        >
          <TextPrimitive
            id={"Welcome_7GKntRiYeh"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_7GKntRiYeh"
            }
            key={"7GKntRiYeh"}
            text={getStyle("7GKntRiYeh", "text")}
            element={getStyle("7GKntRiYeh", "htmlElement")}
          />
          <TextPrimitive
            id={"Name_3wAXGzmZPS"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_3wAXGzmZPS"
            }
            key={"3wAXGzmZPS"}
            text={
              exists(props.name) ? props.name : getStyle("3wAXGzmZPS", "text")
            }
            element={getStyle("3wAXGzmZPS", "htmlElement")}
          />
        </ContainerPrimitive>,
        <ContainerPrimitive
          id={"Container_Vzqo38UDhz"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_Vzqo38UDhz"
          }
          key={"Vzqo38UDhz"}
          addSpacing={false}
          element={getStyle("Vzqo38UDhz", "htmlElement")}
        >
          {props.Tabs === undefined ? (
            <Tabs
              key={"Tx8y1JmvZr"}
              {...getCompositeDefaultProps("Tx8y1JmvZr")}
              id="Tabs_Tx8y1JmvZr"
              className="__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_Tx8y1JmvZr"
            />
          ) : (
            <TabsContext.Provider
              key="Tx8y1JmvZr-provider"
              value={{
                key: "Tx8y1JmvZr",
                id: "Tabs_Tx8y1JmvZr",
                className:
                  "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_Tx8y1JmvZr",
                ...getCompositeDefaultProps("Tx8y1JmvZr"),
              }}
            >
              {props.Tabs}
            </TabsContext.Provider>
          )}
        </ContainerPrimitive>,
        props.SongList === undefined ? (
          <SongList
            key={"4h4ZqgPRUH"}
            {...getCompositeDefaultProps("4h4ZqgPRUH")}
            id="SongList_4h4ZqgPRUH"
            className="__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_4h4ZqgPRUH"
          />
        ) : (
          <SongListContext.Provider
            key="4h4ZqgPRUH-provider"
            value={{
              key: "4h4ZqgPRUH",
              id: "SongList_4h4ZqgPRUH",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_Eba28UUg9v_4h4ZqgPRUH",
              ...getCompositeDefaultProps("4h4ZqgPRUH"),
            }}
          >
            {props.SongList}
          </SongListContext.Provider>
        ),
      ]}
    </RootPrimitive>
  );
}

Dashboard.SongList = SongList;
Dashboard.Tabs = Tabs;
Dashboard.__variants = [
  {
    name: "listexample",
    type: "variant",
  },
  {
    name: "upcomingexample",
    type: "variant",
  },
];

export default Dashboard;

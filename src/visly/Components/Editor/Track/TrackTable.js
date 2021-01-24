// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../../textstyles/fonts.css";
import "../../../reset.css";
import "./TrackTable.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../../../_internal_utils";
import {
  RootPrimitive,
  ContainerPrimitive,
} from "../../../_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
];

const variantPropTypes = [];

export const TrackTableContext = createContext(null);

function TrackTable(_props) {
  const defaults = useContext(TrackTableContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="KMs5mMpQoH"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "KMs5mMpQoH",
        scope: "3gFi4GmK8Q",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <ContainerPrimitive
          id={"Container_HgCWTmknpr"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_HgCWTmknpr"
          }
          key={"HgCWTmknpr"}
          addSpacing={false}
          element={getStyle("HgCWTmknpr", "htmlElement")}
        >
          <ContainerPrimitive
            id={"Container_TA1r5pvd5a"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_TA1r5pvd5a"
            }
            key={"TA1r5pvd5a"}
            addSpacing={false}
            element={getStyle("TA1r5pvd5a", "htmlElement")}
          >
            {
              <ContainerPrimitive
                key={"7qgkNAeTiz"}
                id={"Slot_7qgkNAeTiz"}
                className={
                  "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_7qgkNAeTiz"
                }
                addSpacing={false}
              >
                {props.Markers}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"Container_2jYR5JgRKo"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_2jYR5JgRKo"
            }
            key={"2jYR5JgRKo"}
            addSpacing={false}
            element={getStyle("2jYR5JgRKo", "htmlElement")}
          >
            <ContainerPrimitive
              key={"KhFuwgXjAr"}
              id={"Slot_KhFuwgXjAr"}
              className={
                "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_KhFuwgXjAr"
              }
              addSpacing={false}
            >
              {props.Notes}
            </ContainerPrimitive>
            <ContainerPrimitive
              key={"DxgerYMx4b"}
              id={"Slot_DxgerYMx4b"}
              className={
                "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_DxgerYMx4b"
              }
              addSpacing={false}
            >
              {props.Grid}
            </ContainerPrimitive>
            <ContainerPrimitive
              id={"Container_CdHR4Fp5VU"}
              className={
                "__visly_reset_7X7HTLRqyD __visly_scope_3gFi4GmK8Q_CdHR4Fp5VU"
              }
              key={"CdHR4Fp5VU"}
              addSpacing={false}
              element={getStyle("CdHR4Fp5VU", "htmlElement")}
            >
              {null}
            </ContainerPrimitive>
          </ContainerPrimitive>
        </ContainerPrimitive>
      )}
    </RootPrimitive>
  );
}

TrackTable.__variants = [];

export default TrackTable;

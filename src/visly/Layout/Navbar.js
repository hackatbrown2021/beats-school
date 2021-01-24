// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "../reset.css";
import "./Navbar.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "../_internal_utils";
import { RootPrimitive, ContainerPrimitive } from "../_internal_primitives";
import { default as SignIn } from "../Components/Navbar/SignIn";
import {
  default as DashboardButton,
  ButtonContext as DashboardButtonContext,
} from "../Button";
import { default as Logo, LogoContext } from "../Components/Navbar/Logo";

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
      YEDRjrbQq5: {},
      MrtQW2JAos: {
        none: {
          text: "Dashboard",
          kind: "primary",
        },
      },
      Buj9FHLzmF: {},
    },
  },
  {
    type: "boolean",
    propName: "example",
    layers: {
      YEDRjrbQq5: {},
      MrtQW2JAos: {},
      Buj9FHLzmF: {},
    },
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "example",
  },
];

export const NavbarContext = createContext(null);

function Navbar(_props) {
  const defaults = useContext(NavbarContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="LvxidMzP6M"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "LvxidMzP6M",
        scope: "49hJ88cQKh",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ContainerPrimitive
            id={"Left_B1pg6BPk2P"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_B1pg6BPk2P"
            }
            key={"B1pg6BPk2P"}
            addSpacing={false}
            element={getStyle("B1pg6BPk2P", "htmlElement")}
          >
            {props.Logo === undefined ? (
              <Logo
                key={"Buj9FHLzmF"}
                {...getCompositeDefaultProps("Buj9FHLzmF")}
                id="Logo_Buj9FHLzmF"
                className="__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_Buj9FHLzmF"
              />
            ) : (
              <LogoContext.Provider
                key="Buj9FHLzmF-provider"
                value={{
                  key: "Buj9FHLzmF",
                  id: "Logo_Buj9FHLzmF",
                  className:
                    "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_Buj9FHLzmF",
                  ...getCompositeDefaultProps("Buj9FHLzmF"),
                }}
              >
                {props.Logo}
              </LogoContext.Provider>
            )}
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"NavLinks_8ruEmV82ch"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_8ruEmV82ch"
            }
            key={"8ruEmV82ch"}
            addSpacing={false}
            element={getStyle("8ruEmV82ch", "htmlElement")}
          >
            {props.DashboardButton === undefined ? (
              <DashboardButton
                key={"MrtQW2JAos"}
                {...getCompositeDefaultProps("MrtQW2JAos")}
                id="DashboardButton_MrtQW2JAos"
                className="__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_MrtQW2JAos"
              />
            ) : (
              <DashboardButtonContext.Provider
                key="MrtQW2JAos-provider"
                value={{
                  key: "MrtQW2JAos",
                  id: "DashboardButton_MrtQW2JAos",
                  className:
                    "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_MrtQW2JAos",
                  ...getCompositeDefaultProps("MrtQW2JAos"),
                }}
              >
                {props.DashboardButton}
              </DashboardButtonContext.Provider>
            )}
          </ContainerPrimitive>
          <ContainerPrimitive
            id={"Container_2MCpoSa1cQ"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_2MCpoSa1cQ"
            }
            key={"2MCpoSa1cQ"}
            addSpacing={false}
            element={getStyle("2MCpoSa1cQ", "htmlElement")}
          >
            {
              <ContainerPrimitive
                key={"4fTk9XDbJH"}
                id={"Slot_4fTk9XDbJH"}
                className={
                  "__visly_reset_7X7HTLRqyD __visly_scope_49hJ88cQKh_4fTk9XDbJH"
                }
                addSpacing={false}
              >
                {props.AccountButton}
              </ContainerPrimitive>
            }
          </ContainerPrimitive>
        </>
      )}
    </RootPrimitive>
  );
}

Navbar.SignIn = SignIn;
Navbar.DashboardButton = DashboardButton;
Navbar.Logo = Logo;
Navbar.__variants = [
  {
    name: "example",
    type: "variant",
  },
];

export default Navbar;

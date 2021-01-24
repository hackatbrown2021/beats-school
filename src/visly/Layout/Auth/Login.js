// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../../textstyles/fonts.css";
import "../../reset.css";
import "./Login.css";
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
import * as icons from "../../icons";
import {
  default as Password,
  InputContext as PasswordContext,
  default as Email,
  InputContext as EmailContext,
} from "../../Input";
import { default as Button, ButtonContext } from "../../Button";

const styles = [
  {
    type: "default",
    layers: {
      GWe9PQvj5U: {
        none: {
          text: "Hi! Welcome back",
          htmlElement: "h2",
        },
      },
      "3L1RBJrF1V": {
        none: {
          text: "",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {
      Hy3V91iZ3w: {
        none: {
          placeholder: "Password",
          small: false,
        },
      },
      UmAvRMaMVB: {
        none: {
          placeholder: "Email",
        },
      },
      MZcVC31B4h: {
        none: {
          text: "Sign In",
          icon: icons.person,
          kind: "primary",
          withIcon: true,
        },
      },
    },
  },
];

const variantPropTypes = [];

export const LoginContext = createContext(null);

function Login(_props) {
  const defaults = useContext(LoginContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="PzQatSULUC"
      addSpacing={true}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "PzQatSULUC",
        scope: "Ub4BUgj6bV",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => [
        <TextPrimitive
          id={"Header_GWe9PQvj5U"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_GWe9PQvj5U"
          }
          key={"GWe9PQvj5U"}
          text={getStyle("GWe9PQvj5U", "text")}
          element={getStyle("GWe9PQvj5U", "htmlElement")}
        />,
        props.Email === undefined ? (
          <Email
            key={"UmAvRMaMVB"}
            {...getCompositeDefaultProps("UmAvRMaMVB")}
            id="Email_UmAvRMaMVB"
            className="__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_UmAvRMaMVB"
          />
        ) : (
          <EmailContext.Provider
            key="UmAvRMaMVB-provider"
            value={{
              key: "UmAvRMaMVB",
              id: "Email_UmAvRMaMVB",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_UmAvRMaMVB",
              ...getCompositeDefaultProps("UmAvRMaMVB"),
            }}
          >
            {props.Email}
          </EmailContext.Provider>
        ),
        props.Password === undefined ? (
          <Password
            key={"Hy3V91iZ3w"}
            {...getCompositeDefaultProps("Hy3V91iZ3w")}
            id="Password_Hy3V91iZ3w"
            className="__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_Hy3V91iZ3w"
          />
        ) : (
          <PasswordContext.Provider
            key="Hy3V91iZ3w-provider"
            value={{
              key: "Hy3V91iZ3w",
              id: "Password_Hy3V91iZ3w",
              className:
                "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_Hy3V91iZ3w",
              ...getCompositeDefaultProps("Hy3V91iZ3w"),
            }}
          >
            {props.Password}
          </PasswordContext.Provider>
        ),
        <ContainerPrimitive
          id={"Container_TkS6vD1saF"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_TkS6vD1saF"
          }
          key={"TkS6vD1saF"}
          addSpacing={false}
          element={getStyle("TkS6vD1saF", "htmlElement")}
        >
          {props.Button === undefined ? (
            <Button
              key={"MZcVC31B4h"}
              {...getCompositeDefaultProps("MZcVC31B4h")}
              id="Button_MZcVC31B4h"
              className="__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_MZcVC31B4h"
            />
          ) : (
            <ButtonContext.Provider
              key="MZcVC31B4h-provider"
              value={{
                key: "MZcVC31B4h",
                id: "Button_MZcVC31B4h",
                className:
                  "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_MZcVC31B4h",
                ...getCompositeDefaultProps("MZcVC31B4h"),
              }}
            >
              {props.Button}
            </ButtonContext.Provider>
          )}
        </ContainerPrimitive>,
        <TextPrimitive
          id={"Text_3L1RBJrF1V"}
          className={
            "__visly_reset_7X7HTLRqyD __visly_scope_Ub4BUgj6bV_3L1RBJrF1V"
          }
          key={"3L1RBJrF1V"}
          text={
            exists(props.error) ? props.error : getStyle("3L1RBJrF1V", "text")
          }
          element={getStyle("3L1RBJrF1V", "htmlElement")}
        />,
      ]}
    </RootPrimitive>
  );
}

Login.Password = Password;
Login.Email = Email;
Login.Button = Button;
Login.__variants = [];

export default Login;

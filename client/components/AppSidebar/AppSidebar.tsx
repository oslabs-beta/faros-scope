import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../../store/slice";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./components";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../../_nav";

import { RootState } from "../../../types/types";

const AppSidebar = () => {
  const dispatch = useDispatch();

  const unfoldable = useSelector((state:RootState) => state.appState.sidebarUnfoldable);
  const sidebarShow = useSelector((state: RootState) => state.appState.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(changeState({ type: "set", sidebarShow: visible }));
      }}
    >
      <CSidebarBrand className="WhatAmI d-none d-md-flex" /*to="/" */>
        <CIcon className="sidebar-brand-full" height={35} />
        <CIcon className="sidebar-brand-narrow" height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch(changeState({ type: "set", sidebarUnfoldable: !unfoldable }))
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);

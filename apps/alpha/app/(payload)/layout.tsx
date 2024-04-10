/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from "react";
import configPromise from "@payload-config";
import { RootLayout } from "@payloadcms/next/layouts/Root/index";
import "@payloadcms/next/css";
import "./custom.scss";
import Navbar from '@repo/npm-payload';

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout config={configPromise}>
    {/* <Navbar data={"xyz"} db_url={"xyz"}/> */}
    {children}
  </RootLayout>
);

export default Layout;

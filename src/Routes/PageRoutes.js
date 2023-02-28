import React from 'react'
import { Fragment } from 'react';

export default function PageRoutes(props) {
    const { children } = props;

    // Login Page
const Login = () => (
    <Fragment>
      {children}
    </Fragment>
    );
  return (
    <>
    {Login()}
    </>
  )
}

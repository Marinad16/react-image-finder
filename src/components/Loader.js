import React from 'react'
import Loader from "react-loader-spinner";
import styles from "../styles.module.css";


export default class App extends React.Component {
  render() {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className={ styles.Loader}/>;
  }
}

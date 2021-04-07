import React, { Component } from "react";
import ReactDOM from "react-dom";
import { translate, Trans } from "react-i18next";

class MyComponenet extends Component {
  render() {
    const { t } = this.props;
    return <div>{t("Welcome to React")}</div>;
  }
}

export default translate("translations")(MyComponenet);
import React, { Component } from 'react';
import i18next from './i18next';
import { I18nextProvider, withTranslation } from 'react-i18next';

export function withTrans(WrappedComponent) {
    WrappedComponent = withTranslation()(WrappedComponent);

    return class extends Component {
      render() {
        return (
          <I18nextProvider i18n={i18next}>
            <WrappedComponent {...this.props} language={i18next.language || "pt" } />
          </I18nextProvider>
        );
      }
    }
}
export default withTrans;

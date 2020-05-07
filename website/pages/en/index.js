/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}${doc}`;
  }

  pageUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + doc;
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

module.exports = Index;
// <iframe width="100%" height="500px"
//         allowTransparency="true" allowFullScreen="true" scrolling="no" title="Zinger Database Schema"
//         frameBorder="0" src="https://drawsql.app/zinger-technologies/diagrams/zinger-framework/embed"></iframe>

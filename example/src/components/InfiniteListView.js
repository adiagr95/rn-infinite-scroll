import React, { Component } from "react";
import { ListView, ActivityIndicator } from "react-native";

export default class InfiniteListView extends Component {

  static defaultProps = {
    canLoad: false,
    isLoading: false
  };

  constructor(props) {
    super(props);
    this.createDataSource(props);
    this.onEndReached = this.onEndReached.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ data }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(data);
  }

  onEndReached() {
    if (this.props.canLoad && !this.props.isLoading) {
      this.props.onLoad();
    }
  }

  renderLoader = () => {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ padding : 20, justifyContent: "center" }} animating={true} size="small" />
      );
    }
  };

  render() {
    return (
      <ListView
        {...this.props}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.props.renderRow}
        onEndReached={this.onEndReached}
        renderFooter = { () => this.renderLoader()}
      />
    );
  }
}

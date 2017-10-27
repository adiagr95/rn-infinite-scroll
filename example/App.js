import React, { Component } from "react";
import { View,  AppRegistry, ActivityIndicator, StyleSheet, Image , Text } from "react-native";
import InfiniteListView from './src/components/InfiniteListView';
import { Card, CardSection , Header} from './src/components/common';
import { loadData } from './src/util/FakeServer';


export default class App extends Component {
  state = {
    isLoading: false,
    items: [],
  }

  componentDidMount() {
    this.setState({
        items: [...this.state.items, ...loadData(this.state.items.length)]
    });
  }

  /* Return false if you don't want to load after a certain condition */
  canLoad = () => {
    return !this.state.isLoading;
  };

  onLoad = () => {
    this.setState({isLoading : true});
    setTimeout(() => {
      this.setState({
        isLoading: false ,
        items: [...this.state.items, ...loadData(this.state.items.length)]
      });
    }, 2000);
  };

  renderRow = (rowData) => {
    return (
      <Card>
        <CardSection>
          <Text>{rowData.title}</Text>
        </CardSection>
        <CardSection>
          <Text style = {{fontSize : 14}}>{rowData.message}</Text>
        </CardSection>
      </Card>
    );
  };

  render() {
    return (
      <View style = {{flex : 1}}>
        <Header headerText = "Paginated ListView" />

        <View style = {{flex : 1}}>
          <InfiniteListView
            data ={this.state.items}
            renderRow={this.renderRow}
            canLoad={this.canLoad()}
            isLoading={this.state.isLoading}
            onLoad={this.onLoad}
          />
        </View>
      </View>
    );
  }
}

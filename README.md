# RN-Infinite-Scroll

RN-Infinite-Scroll is react native library to implement Infinite Scrolling listview in React Native.

# Requirements
- React Native
- Expo

# Installation
```sh
$ npm i rn-infinite-scroll --save
```

# Usage
```sh
import InfiniteListView from 'rn-infinite-scroll';

<InfiniteListView
    data ={this.state.items}
    renderRow={this.renderRow}
    canLoad={this.canLoad()}
    isLoading={this.state.isLoading}
    onLoad={this.onLoad}
/>

```

# Props

- items :- Array of objects
- renderRow :- JSX for each row
- canLoad :- true / false, (to call onLoad)
- isLoading :- If last onLoad is still running
- onLoad :- Method to load data


License
----

MIT

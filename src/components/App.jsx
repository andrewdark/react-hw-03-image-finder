import React, {Component} from "react";

class App extends Component{
  appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '16px',
    paddingBottom: '24px',
  };

  state = {
    images: [],
    searchQuery: '',
    per_page: 12,
    page: 1,
    isLoading: false,
    isLoadMore: false,
    isModalShow: false,
    pict: { url: null, alt: 'no image' },
    error: null,
  };

  render() {
    return (
      <div
        style={this.appStyles}
      >
        React homework template
      </div>
    );
  }
}
export default App;



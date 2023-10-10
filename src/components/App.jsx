import React, {Component} from "react";
import Searchbar from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

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
    const { images, isLoading, isLoadMore, isModalShow, error } = this.state;

    return (
      <div
        style={this.appStyles}
      >
        <Searchbar/>
        {error != null && <p>{error}</p>}
        {isLoading && <Loader />}
      </div>
    );
  }
}
export default App;



import React, { Component } from "react";
import styles from "./styles.module.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Button from "./components/Button";
import imagesApi from "./services/imagesApi";
import Modal from "./components/Modal";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.fetchImagesQuery();
    }

    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImagesQuery = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    imagesApi
      .fetchImages(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  setLargeImage = (url) => {
    this.setState({ largeImageUrl: url });
  };

  removeLargeImage = () => {
    this.setState({ largeImageUrl: null });
  };


  render() {
    const { images, loading, error, largeImageUrl } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {error && <p>Message</p>}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onClick={this.onImageClick}
            onSetLargeImage={this.setLargeImage}
          />
        )}
        {loading && <Loader />}
        {images.length > 0 && !loading && (
          <Button fetchImagesQuery={this.fetchImagesQuery} />
        )}
        {largeImageUrl && (
          <Modal largeImageUrl={largeImageUrl} onClick={this.removeLargeImage} />
        )}
      </div>
    );
  }
}

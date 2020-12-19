import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImagesApiService from '../../services/pixabay-api';
import CustomLoader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const imagesApiService = new ImagesApiService();

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const SearchResults = ({ searchQuery }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [alt, setAlt] = useState('');
  const [loaderStatus, setLoaderStatus] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return setStatus(Status.IDLE);
    }

    setImages([]);
    setStatus(Status.PENDING);

    imagesApiService.resetPage();
    imagesApiService.query = searchQuery;

    imagesApiService
      .fetchImages()
      .then(images => {
        if (images.total) {
          setStatus(Status.RESOLVED);
          setImages(images.hits);
        } else {
          return Promise.reject(new Error(`No match found!`));
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery]);

  const loadMoreClick = () => {
    setLoaderStatus(true);

    imagesApiService.pageNum += 1;

    imagesApiService
      .fetchImages()
      .then(images => {
        setImages(state => {
          return [...state, ...images.hits];
        });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(() => {
        setLoaderStatus(false);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  const handleImageClick = event => {
    setLargeImageURL(event.target.dataset.src);
    setAlt(event.target.alt);
  };

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.PENDING && !images.length) {
    return <CustomLoader />;
  }

  if (status === Status.REJECTED) {
    toast.error(error.message);
    return null;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} onClick={handleImageClick} />
        {loaderStatus && <CustomLoader />}
        <Button onClick={loadMoreClick} />
        {largeImageURL && (
          <Modal imgURL={largeImageURL} alt={alt} onClose={setLargeImageURL} />
        )}
      </>
    );
  }
};

SearchResults.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchResults;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectIsLoading, selectError } from 'redux/selectors';

import { fetchAdverts } from 'redux/operations';

const AdvertList = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
    console.log(adverts);
  }, [adverts, dispatch]);

  return <>asdfgh</>;
};

export default AdvertList;

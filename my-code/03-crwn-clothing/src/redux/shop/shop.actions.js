import { ShopActionTypes } from './shop.types'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase-utils';


export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESSFUL,
  payload: collectionsMap
});

export const fetchCollectionFailure = errMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef.get()
    .then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      setTimeout(() => {
        dispatch(fetchCollectionsSuccess(collectionsMap))
      }, 1000);
    })
    .catch(err => dispatch(fetchCollectionFailure(err.message)));
};
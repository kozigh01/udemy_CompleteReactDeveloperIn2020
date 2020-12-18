import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase-utils';
import { fetchCollectionsSuccess, fetchCollectionFailure} from '../../redux/shop/shop.actions'


export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch(err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START, 
    fetchCollectionsAsync
  );
}
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>  createSelector(
  [selectCollections],
  collections => collections ? collections[collectionUrlParam.toLowerCase()] : null
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollectionsForPreview],
  collectionsMap => {
    return collectionsMap && collectionsMap.length > 0;
  }
);
async function searchArtistsAndBands(apiService, artistsIds, bandIds) {
  const reqs = [];
  if (artistsIds.length > 0) {
    const artistsIdIn = artistsIds.join(',');
    reqs.push(apiService.listArtists({idIn: artistsIdIn}));
  } else {
    reqs.push(Promise.resolve({results: []}));
  }
  if (bandIds.length > 0) {
    const bandsIdIn = bandIds.join(',');
    reqs.push(apiService.listBands({idIn: bandsIdIn}));
  } else {
    reqs.push(Promise.resolve({results: []}));
  }
  const [listArtistsResult, listBandsResult] = await Promise.all(reqs);
  const artists = listArtistsResult.results;
  const bands = listBandsResult.results;
  return {artists, bands};
}

export async function getAlbumLinkedEntities(album, session, apiService) {
  const ret = {
    albumReview: null,
    artists: [],
    bands: [],
  };
  if (session.user) {
    const albumIn = '' + album.id;
    const listAlbumReviewsResp = await apiService.listAlbumReviews({author: '' + session.user.id, albumIn});
    const albumReviews = listAlbumReviewsResp.results;
    if (albumReviews.length >= 0) {
      ret.albumReview = albumReviews[0];
    }
  }

  const {artists, bands} = await searchArtistsAndBands(apiService, album.artists, album.bands);
  ret.artists = artists;
  ret.bands = bands;
  return ret;
}

export async function getAlbumsLinkedEntities(albums, session, apiService) {
  const ret = {
    albumReviewsById: {},
    artistsByAlbumId: {},
    bandsByAlbumId: {},
  };
  const artistsById = {};
  const bandsById = {};
  if (albums.length === 0) {
    return ret;
  }
  if (session.user) {
    const albumIds = albums.map(a => a.id);
    const albumIn = albumIds.join(',');
    const listAlbumReviewsResp = await apiService.listAlbumReviews({author: '' + session.user.id, albumIn});
    const albumReviews = listAlbumReviewsResp.results;
    for (const albumReview of albumReviews) {
      ret.albumReviewsById[albumReview.album] = albumReview;
    }
  }

  let artistsIds = [];
  let bandIds = [];
  for (const album of albums) {
    artistsIds = artistsIds.concat(album.artists);
    bandIds = bandIds.concat(album.bands);
  }

  const {artists, bands} = await searchArtistsAndBands(apiService, artistsIds, bandIds);

  for (const artist of artists) {
    artistsById[artist.id] = artist;
  }
  for (const band of bands) {
    bandsById[band.id] = band;
  }
  for (const album of albums) {
    const artists = album.artists.map(id => artistsById[id]);
    const bands = album.bands.map(id => bandsById[id]);
    ret.artistsByAlbumId[album.id] = artists;
    ret.bandsByAlbumId[album.id] = bands;
  }
  return ret;
}

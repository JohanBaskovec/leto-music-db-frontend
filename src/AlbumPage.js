import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {getAlbumLinkedEntities} from "./utils.js";

export function AlbumPage({apiService, session}) {
  const {albumId} = useParams();
  const [album, setAlbum] = useState(null);
  const [review, setReview] = useState(null);
  const [bands, setBands] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    (async () => {
      const newAlbum = await apiService.retrieveAlbum(albumId);
      const linkedData = await getAlbumLinkedEntities(newAlbum, session, apiService);
      setReview(linkedData.albumReview);
      setAlbum(newAlbum);
      setBands(linkedData.bands);
      setArtists(linkedData.artists);
    })();
  }, [albumId, apiService, session]);


  if (album == null) {
    return <div>Loading</div>
  }

  const getAlbumLeaderBands = () => {
    if (bands) {
      return bands.map(band => {
        return <Link to={'/bands/' + band.id}>{band.name}</Link>;
      })
    }
    return [];
  };
  const getAlbumLeaderArtists = () => {
    if (artists) {
      return artists.map(artist => {
        return <Link to={'/artists/' + artist.id}>{artist.name}</Link>;
      })
    }
    return [];
  };
  const getAlbumLeadersList = () => {
    const leaders = getAlbumLeaderBands(album).concat(getAlbumLeaderArtists(album));
    if (leaders.length === 0) {
      return ['Unknown artist'];
    }
    const elems = [];
    for (let i = 0; i < leaders.length; i++) {
      elems.push(leaders[i]);
      if (i < leaders.length - 1) {
        elems.push(<>, </>);
      }
    }

    return <div className='AlbumCard__leaders'>
      {elems}
    </div>
  }
  return <div>
    <div>Title: {album.name}</div>
    <div>Artist: {getAlbumLeadersList()}</div>
    {review ? <div>
      <h4>Your review <Link to={'/album-reviews/' + review.id + '/edit'}>Edit</Link></h4>
      <div>
        <div>Rating: {review.rating} / 100</div>
        <div>{review.content}</div>
      </div>
    </div> : <></>
    }
    <div>
      <h4>Reviews</h4>
    </div>
  </div>
}

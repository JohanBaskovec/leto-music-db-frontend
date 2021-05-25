import React, {useEffect, useState} from "react";
import {AlbumCard} from "./AlbumCard.js";
import {getAlbumLinkedEntities, getAlbumsLinkedEntities} from "./utils.js";

export function AlbumList({apiService, session}) {
  const [albums, setAlbums] = useState([]);
  const [albumReviewsByAlbumId, setAlbumReviewsByAlbumId] = useState({});
  const [artistsByAlbumId, setArtistsByAlbumId] = useState({});
  const [bandsByAlbumId, setBandsByAlbumId] = useState({});
  useEffect(() => {
    (async () => {
      const albums = await apiService.listAlbums();
      setAlbums(albums.results);
    })();
  }, [apiService]);
  useEffect(() => {
    (async () => {
      const albumLinkedData = await getAlbumsLinkedEntities(albums, session, apiService);
      setAlbumReviewsByAlbumId(albumLinkedData.albumReviewsById);
      setArtistsByAlbumId(albumLinkedData.artistsByAlbumId);
      setBandsByAlbumId(albumLinkedData.bandsByAlbumId);
    })();
  }, [apiService, session, albums]);


  return <div>
    {albums.map((album) => (
      <AlbumCard album={album}
                 currentUserReview={albumReviewsByAlbumId[album.id]}
                 artists={artistsByAlbumId[album.id]}
                 bands={bandsByAlbumId[album.id]}/>
    ))}
  </div>
}


import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AlbumCard} from "./AlbumCard.js";

export function AlbumList(props) {
  const [albums, setAlbums] = useState([]);
  const [albumReviewsByAlbumId, setAlbumReviewsByAlbumId] = useState({});
  const [artistsById, setArtistsById] = useState({});
  const [bandsById, setBandsById] = useState({});
  const [artistsByAlbumId, setArtistsByAlbumId] = useState({});
  const [bandsByAlbumId, setBandsByAlbumId] = useState({});
  const session = props.session;
  const apiClient = props.apiClient;
  useEffect(() => {
    (async () => {
      const albums = await apiClient.listAlbums();
      setAlbums(albums.results);
    })();
  }, [apiClient]);
  useEffect(() => {
    (async () => {
      if (albums.length === 0) {
        return;
      }
      if (session.user) {
        const albumIds = albums.map(a => a.id);
        const albumIn = albumIds.join(',');
        const listAlbumReviewsResp = await apiClient.listAlbumReviews({author: '' + session.user.id, albumIn});
        const albumReviews = listAlbumReviewsResp.results;
        const newAlbumReviewsById = {};
        for (const albumReview of albumReviews) {
          newAlbumReviewsById[albumReview.album] = albumReview;
        }
        setAlbumReviewsByAlbumId(newAlbumReviewsById);
      }

      let artistsIds = [];
      let bandIds = [];
      for (const album of albums) {
        artistsIds = artistsIds.concat(album.artists);
        bandIds = bandIds.concat(album.bands);
      }
      let artists = null;
      let bands = null;
      let authorListsCreated = false;
      const createAuthorLists = () => {
        if (artists !== null && bands !== null && !authorListsCreated) {
          authorListsCreated = true;
          const newArtistsById = {};
          const newBandsById = {};
          for (const artist of artists) {
            newArtistsById[artist.id] = artist;
          }
          for (const band of bands) {
            newBandsById[band.id] = band;
          }
          const newArtistsByAlbumId = {};
          const newBandsByAlbumId = {};
          for (const album of albums) {
            const artists = album.artists.map(id => newArtistsById[id]);
            const bands = album.bands.map(id => newBandsById[id]);
            newArtistsByAlbumId[album.id] = artists;
            newBandsByAlbumId[album.id] = bands;
          }
          setArtistsById(newArtistsById);
          setBandsById(newBandsById);
          setArtistsByAlbumId(newArtistsByAlbumId);
          setBandsByAlbumId(newBandsByAlbumId);
        }
      };
      const artistsIdIn = artistsIds.join(',');
      apiClient.listArtists({idIn: artistsIdIn}).then((resp) => {
        artists = resp.results;
        createAuthorLists();
      });
      const bandsIdIn = bandIds.join(',');
      apiClient.listBands({idIn: bandsIdIn}).then((resp) => {
        bands = resp.results;
        createAuthorLists();
      });
    })();
  }, [apiClient, session.user, albums])


  return <div>
    {albums.map((album) => (
      <AlbumCard album={album}
                 currentUserReview={albumReviewsByAlbumId[album.id]}
                 artists={artistsByAlbumId[album.id]}
                 bands={bandsByAlbumId[album.id]}/>
    ))}
  </div>
}


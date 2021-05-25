import React from "react";
import {Link} from "react-router-dom";
import "./AlbumCard.css";


export function AlbumCard({album, bands, artists, currentUserReview}) {
  const getAlbumLeaderBands = (album) => {
    if (bands) {
      return bands.map(band => {
        return <Link to={'/band/' + band.id}>{band.name}</Link>;
      })
    }
    return [];
  };
  const getAlbumLeaderArtists = (album) => {
    if (artists) {
      return artists.map(artist => {
        return <Link to={'/artist/' + artist.id}>{artist.name}</Link>;
      })
    }
    return [];
  };

  const getAlbumLeadersList = (album) => {
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
  return <div className='AlbumCard'>
    <h4 className='AlbumCard__title'><Link to={'/album' + album.id}>{album.name}</Link></h4>
    {
      getAlbumLeadersList(album)
    }

    {currentUserReview ?
      <div className='AlbumCard__review'>Your rating: {currentUserReview.rating} / 100</div> : <></>}

  </div>
}

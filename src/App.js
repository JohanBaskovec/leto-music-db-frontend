import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';
import {ApiApi, ApiTokenAuthApi} from "./openapi-generated/src";
import {CustomApiClient} from "./CustomApiClient.js";
import {Login} from "./Login.js";
import {AlbumList} from "./AlbumList.js";
import {AlbumPage} from "./AlbumPage.js";
import {AlbumReviewFormPage, CreateAlbumReviewPage, EditAlbumReviewPage} from "./AlbumReviewFormPage.js";


const customApiClient = new CustomApiClient();
const apiClient = new ApiApi(customApiClient);
const authApiClient = new ApiTokenAuthApi(customApiClient);

function App() {
  const [fetchedUser, setFetchedUser] = useState(false);
  const [customApiClient, setCustomApiClient] = useState(new CustomApiClient());
  const [apiService, setApiService] = useState(new ApiApi(customApiClient));
  const [authApiService, setAuthApiService] = useState(new ApiTokenAuthApi(customApiClient));
  const [session, setSession] = useState({});
  const initializeApiServices = (token) => {
    const newApiClient = new CustomApiClient(token)
    setCustomApiClient(newApiClient);
    const newApiService = new ApiApi(newApiClient);
    setApiService(newApiService);
    setAuthApiService(new ApiTokenAuthApi(newApiClient));
    return newApiService;
  };

  const logout = () => {
    localStorage.removeItem('authorizationToken');
    initializeApiServices(undefined);
    setSession({});
  };

  const login = (token) => {
    (async () => {
      localStorage.setItem('authorizationToken', token);

      const newApiService = initializeApiServices(token);
      const currentUser = await newApiService.retrieveCurrentUser();
      if (currentUser.id != null) {
        setSession({
          user: currentUser,
        });
      }
    })();
  };
  useEffect(() => {
    const token = localStorage.getItem('authorizationToken');
    (async () => {
      if (token != null) {
        await login(token);
        setFetchedUser(true);
      } else {
        setFetchedUser(true);
      }
    })();
  }, []);

  if (!fetchedUser) {
    return <div></div>
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Léto</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link to='/'
                        className="nav-link {% if view_name == 'blog:index' %}active{% endif %}"
                        aria-current="page">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/music'
                        className="nav-link {% if view_name == 'music:album_list' %}active{% endif %}">
                    Music database
                  </Link>
                </li>
                {session.user ? (
                  <li className="nav-item">
                    <Link to='/' onClick={logout}
                          className="nav-link">
                      {session.user.username} Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to='/login'
                            className="nav-link">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/register' className="nav-link">
                        Register
                      </Link>
                    </li>
                  </>
                )
                }
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route path='/music'>
              <AlbumList apiService={apiService} session={session}/>
            </Route>
            <Route path='/login'>
              <Login authApiService={authApiService} session={session} login={login}/>
            </Route>
            <Route path='/albums/:albumId'>
              <AlbumPage session={session} apiService={apiService}/>
            </Route>
            <Route path='/album-reviews/:albumReviewId/edit'>
              <EditAlbumReviewPage session={session} apiService={apiService}/>
            </Route>
            <Route path='/album-reviews/create'>
              <CreateAlbumReviewPage session={session} apiService={apiService}/>
            </Route>
            <Route path='/'>
              Blog
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

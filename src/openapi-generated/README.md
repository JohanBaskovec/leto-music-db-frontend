# openapi-js-client

OpenapiJsClient - JavaScript client for openapi-js-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install openapi-js-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your openapi-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenapiJsClient = require('openapi-js-client');

var defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix['Authorization'] = "Token"

var api = new OpenapiJsClient.ApiApi()
var opts = {
  'album': new OpenapiJsClient.Album() // {Album} 
};
api.createAlbum(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenapiJsClient.ApiApi* | [**createAlbum**](docs/ApiApi.md#createAlbum) | **POST** /api/music/albums/ | 
*OpenapiJsClient.ApiApi* | [**createAlbumReview**](docs/ApiApi.md#createAlbumReview) | **POST** /api/music/album-reviews/ | 
*OpenapiJsClient.ApiApi* | [**createArtist**](docs/ApiApi.md#createArtist) | **POST** /api/music/artists/ | 
*OpenapiJsClient.ApiApi* | [**createArtistBandMembership**](docs/ApiApi.md#createArtistBandMembership) | **POST** /api/music/artist-band-membership/ | 
*OpenapiJsClient.ApiApi* | [**createBand**](docs/ApiApi.md#createBand) | **POST** /api/music/bands/ | 
*OpenapiJsClient.ApiApi* | [**destroyAlbum**](docs/ApiApi.md#destroyAlbum) | **DELETE** /api/music/albums/{id}/ | 
*OpenapiJsClient.ApiApi* | [**destroyAlbumReview**](docs/ApiApi.md#destroyAlbumReview) | **DELETE** /api/music/album-reviews/{id}/ | 
*OpenapiJsClient.ApiApi* | [**destroyArtist**](docs/ApiApi.md#destroyArtist) | **DELETE** /api/music/artists/{id}/ | 
*OpenapiJsClient.ApiApi* | [**destroyArtistBandMembership**](docs/ApiApi.md#destroyArtistBandMembership) | **DELETE** /api/music/artist-band-membership/{id}/ | 
*OpenapiJsClient.ApiApi* | [**destroyBand**](docs/ApiApi.md#destroyBand) | **DELETE** /api/music/bands/{id}/ | 
*OpenapiJsClient.ApiApi* | [**listAlbumReviews**](docs/ApiApi.md#listAlbumReviews) | **GET** /api/music/album-reviews/ | 
*OpenapiJsClient.ApiApi* | [**listAlbums**](docs/ApiApi.md#listAlbums) | **GET** /api/music/albums/ | 
*OpenapiJsClient.ApiApi* | [**listArtistBandMemberships**](docs/ApiApi.md#listArtistBandMemberships) | **GET** /api/music/artist-band-membership/ | 
*OpenapiJsClient.ApiApi* | [**listArtists**](docs/ApiApi.md#listArtists) | **GET** /api/music/artists/ | 
*OpenapiJsClient.ApiApi* | [**listBands**](docs/ApiApi.md#listBands) | **GET** /api/music/bands/ | 
*OpenapiJsClient.ApiApi* | [**listUsers**](docs/ApiApi.md#listUsers) | **GET** /api/users/ | 
*OpenapiJsClient.ApiApi* | [**partialUpdateAlbum**](docs/ApiApi.md#partialUpdateAlbum) | **PATCH** /api/music/albums/{id}/ | 
*OpenapiJsClient.ApiApi* | [**partialUpdateAlbumReview**](docs/ApiApi.md#partialUpdateAlbumReview) | **PATCH** /api/music/album-reviews/{id}/ | 
*OpenapiJsClient.ApiApi* | [**partialUpdateArtist**](docs/ApiApi.md#partialUpdateArtist) | **PATCH** /api/music/artists/{id}/ | 
*OpenapiJsClient.ApiApi* | [**partialUpdateArtistBandMembership**](docs/ApiApi.md#partialUpdateArtistBandMembership) | **PATCH** /api/music/artist-band-membership/{id}/ | 
*OpenapiJsClient.ApiApi* | [**partialUpdateBand**](docs/ApiApi.md#partialUpdateBand) | **PATCH** /api/music/bands/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveAlbum**](docs/ApiApi.md#retrieveAlbum) | **GET** /api/music/albums/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveAlbumReview**](docs/ApiApi.md#retrieveAlbumReview) | **GET** /api/music/album-reviews/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveArtist**](docs/ApiApi.md#retrieveArtist) | **GET** /api/music/artists/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveArtistBandMembership**](docs/ApiApi.md#retrieveArtistBandMembership) | **GET** /api/music/artist-band-membership/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveBand**](docs/ApiApi.md#retrieveBand) | **GET** /api/music/bands/{id}/ | 
*OpenapiJsClient.ApiApi* | [**retrieveCurrentUser**](docs/ApiApi.md#retrieveCurrentUser) | **GET** /api/me/ | 
*OpenapiJsClient.ApiApi* | [**retrieveUser**](docs/ApiApi.md#retrieveUser) | **GET** /api/users/{id}/ | 
*OpenapiJsClient.ApiApi* | [**updateAlbum**](docs/ApiApi.md#updateAlbum) | **PUT** /api/music/albums/{id}/ | 
*OpenapiJsClient.ApiApi* | [**updateAlbumReview**](docs/ApiApi.md#updateAlbumReview) | **PUT** /api/music/album-reviews/{id}/ | 
*OpenapiJsClient.ApiApi* | [**updateArtist**](docs/ApiApi.md#updateArtist) | **PUT** /api/music/artists/{id}/ | 
*OpenapiJsClient.ApiApi* | [**updateArtistBandMembership**](docs/ApiApi.md#updateArtistBandMembership) | **PUT** /api/music/artist-band-membership/{id}/ | 
*OpenapiJsClient.ApiApi* | [**updateBand**](docs/ApiApi.md#updateBand) | **PUT** /api/music/bands/{id}/ | 
*OpenapiJsClient.ApiTokenAuthApi* | [**createAuthToken**](docs/ApiTokenAuthApi.md#createAuthToken) | **POST** /api-token-auth/ | 


## Documentation for Models

 - [OpenapiJsClient.Album](docs/Album.md)
 - [OpenapiJsClient.AlbumReview](docs/AlbumReview.md)
 - [OpenapiJsClient.Artist](docs/Artist.md)
 - [OpenapiJsClient.ArtistBandMembership](docs/ArtistBandMembership.md)
 - [OpenapiJsClient.AuthToken](docs/AuthToken.md)
 - [OpenapiJsClient.Band](docs/Band.md)
 - [OpenapiJsClient.InlineResponse200](docs/InlineResponse200.md)
 - [OpenapiJsClient.InlineResponse2001](docs/InlineResponse2001.md)
 - [OpenapiJsClient.InlineResponse2002](docs/InlineResponse2002.md)
 - [OpenapiJsClient.InlineResponse2003](docs/InlineResponse2003.md)
 - [OpenapiJsClient.InlineResponse2004](docs/InlineResponse2004.md)
 - [OpenapiJsClient.InlineResponse2005](docs/InlineResponse2005.md)
 - [OpenapiJsClient.User](docs/User.md)


## Documentation for Authorization



### Authorization


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


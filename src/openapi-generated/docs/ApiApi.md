# OpenapiJsClient.ApiApi

All URIs are relative to *http://127.0.0.1:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlbum**](ApiApi.md#createAlbum) | **POST** /api/music/albums/ | 
[**createAlbumReview**](ApiApi.md#createAlbumReview) | **POST** /api/music/album-reviews/ | 
[**createArtist**](ApiApi.md#createArtist) | **POST** /api/music/artists/ | 
[**createArtistBandMembership**](ApiApi.md#createArtistBandMembership) | **POST** /api/music/artist-band-membership/ | 
[**createBand**](ApiApi.md#createBand) | **POST** /api/music/bands/ | 
[**destroyAlbum**](ApiApi.md#destroyAlbum) | **DELETE** /api/music/albums/{id}/ | 
[**destroyAlbumReview**](ApiApi.md#destroyAlbumReview) | **DELETE** /api/music/album-reviews/{id}/ | 
[**destroyArtist**](ApiApi.md#destroyArtist) | **DELETE** /api/music/artists/{id}/ | 
[**destroyArtistBandMembership**](ApiApi.md#destroyArtistBandMembership) | **DELETE** /api/music/artist-band-membership/{id}/ | 
[**destroyBand**](ApiApi.md#destroyBand) | **DELETE** /api/music/bands/{id}/ | 
[**listAlbumReviews**](ApiApi.md#listAlbumReviews) | **GET** /api/music/album-reviews/ | 
[**listAlbums**](ApiApi.md#listAlbums) | **GET** /api/music/albums/ | 
[**listArtistBandMemberships**](ApiApi.md#listArtistBandMemberships) | **GET** /api/music/artist-band-membership/ | 
[**listArtists**](ApiApi.md#listArtists) | **GET** /api/music/artists/ | 
[**listBands**](ApiApi.md#listBands) | **GET** /api/music/bands/ | 
[**listUsers**](ApiApi.md#listUsers) | **GET** /api/users/ | 
[**partialUpdateAlbum**](ApiApi.md#partialUpdateAlbum) | **PATCH** /api/music/albums/{id}/ | 
[**partialUpdateAlbumReview**](ApiApi.md#partialUpdateAlbumReview) | **PATCH** /api/music/album-reviews/{id}/ | 
[**partialUpdateArtist**](ApiApi.md#partialUpdateArtist) | **PATCH** /api/music/artists/{id}/ | 
[**partialUpdateArtistBandMembership**](ApiApi.md#partialUpdateArtistBandMembership) | **PATCH** /api/music/artist-band-membership/{id}/ | 
[**partialUpdateBand**](ApiApi.md#partialUpdateBand) | **PATCH** /api/music/bands/{id}/ | 
[**retrieveAlbum**](ApiApi.md#retrieveAlbum) | **GET** /api/music/albums/{id}/ | 
[**retrieveAlbumReview**](ApiApi.md#retrieveAlbumReview) | **GET** /api/music/album-reviews/{id}/ | 
[**retrieveArtist**](ApiApi.md#retrieveArtist) | **GET** /api/music/artists/{id}/ | 
[**retrieveArtistBandMembership**](ApiApi.md#retrieveArtistBandMembership) | **GET** /api/music/artist-band-membership/{id}/ | 
[**retrieveBand**](ApiApi.md#retrieveBand) | **GET** /api/music/bands/{id}/ | 
[**retrieveCurrentUser**](ApiApi.md#retrieveCurrentUser) | **GET** /api/me/ | 
[**retrieveUser**](ApiApi.md#retrieveUser) | **GET** /api/users/{id}/ | 
[**updateAlbum**](ApiApi.md#updateAlbum) | **PUT** /api/music/albums/{id}/ | 
[**updateAlbumReview**](ApiApi.md#updateAlbumReview) | **PUT** /api/music/album-reviews/{id}/ | 
[**updateArtist**](ApiApi.md#updateArtist) | **PUT** /api/music/artists/{id}/ | 
[**updateArtistBandMembership**](ApiApi.md#updateArtistBandMembership) | **PUT** /api/music/artist-band-membership/{id}/ | 
[**updateBand**](ApiApi.md#updateBand) | **PUT** /api/music/bands/{id}/ | 



## createAlbum

> Album createAlbum(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'album': new OpenapiJsClient.Album() // Album | 
};
apiInstance.createAlbum(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **album** | [**Album**](Album.md)|  | [optional] 

### Return type

[**Album**](Album.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAlbumReview

> AlbumReview createAlbumReview(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'albumReview': new OpenapiJsClient.AlbumReview() // AlbumReview | 
};
apiInstance.createAlbumReview(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **albumReview** | [**AlbumReview**](AlbumReview.md)|  | [optional] 

### Return type

[**AlbumReview**](AlbumReview.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createArtist

> Artist createArtist(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'artist': new OpenapiJsClient.Artist() // Artist | 
};
apiInstance.createArtist(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artist** | [**Artist**](Artist.md)|  | [optional] 

### Return type

[**Artist**](Artist.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createArtistBandMembership

> ArtistBandMembership createArtistBandMembership(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'artistBandMembership': new OpenapiJsClient.ArtistBandMembership() // ArtistBandMembership | 
};
apiInstance.createArtistBandMembership(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **artistBandMembership** | [**ArtistBandMembership**](ArtistBandMembership.md)|  | [optional] 

### Return type

[**ArtistBandMembership**](ArtistBandMembership.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createBand

> Band createBand(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'band': new OpenapiJsClient.Band() // Band | 
};
apiInstance.createBand(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **band** | [**Band**](Band.md)|  | [optional] 

### Return type

[**Band**](Band.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## destroyAlbum

> destroyAlbum(id)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album.
apiInstance.destroyAlbum(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyAlbumReview

> destroyAlbumReview(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album review.
let opts = {
  'author': "author_example", // String | author
  'albumIn': "albumIn_example" // String | album__in
};
apiInstance.destroyAlbumReview(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album review. | 
 **author** | **String**| author | [optional] 
 **albumIn** | **String**| album__in | [optional] 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyArtist

> destroyArtist(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.destroyArtist(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyArtistBandMembership

> destroyArtistBandMembership(id)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist band membership.
apiInstance.destroyArtistBandMembership(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist band membership. | 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## destroyBand

> destroyBand(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this band.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.destroyBand(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this band. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listAlbumReviews

> InlineResponse2002 listAlbumReviews(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'author': "author_example", // String | author
  'albumIn': "albumIn_example" // String | album__in
};
apiInstance.listAlbumReviews(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **author** | **String**| author | [optional] 
 **albumIn** | **String**| album__in | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAlbums

> InlineResponse2001 listAlbums(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.listAlbums(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listArtistBandMemberships

> InlineResponse2005 listArtistBandMemberships(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.listArtistBandMemberships(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listArtists

> InlineResponse2003 listArtists(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'id': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.listArtists(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **id** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBands

> InlineResponse2004 listBands(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56, // Number | A page number within the paginated result set.
  'id': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.listBands(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **id** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUsers

> InlineResponse200 listUsers(opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.listUsers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## partialUpdateAlbum

> Album partialUpdateAlbum(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album.
let opts = {
  'album': new OpenapiJsClient.Album() // Album | 
};
apiInstance.partialUpdateAlbum(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album. | 
 **album** | [**Album**](Album.md)|  | [optional] 

### Return type

[**Album**](Album.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## partialUpdateAlbumReview

> AlbumReview partialUpdateAlbumReview(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album review.
let opts = {
  'author': "author_example", // String | author
  'albumIn': "albumIn_example", // String | album__in
  'albumReview': new OpenapiJsClient.AlbumReview() // AlbumReview | 
};
apiInstance.partialUpdateAlbumReview(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album review. | 
 **author** | **String**| author | [optional] 
 **albumIn** | **String**| album__in | [optional] 
 **albumReview** | [**AlbumReview**](AlbumReview.md)|  | [optional] 

### Return type

[**AlbumReview**](AlbumReview.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## partialUpdateArtist

> Artist partialUpdateArtist(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example", // String | id__in
  'artist': new OpenapiJsClient.Artist() // Artist | 
};
apiInstance.partialUpdateArtist(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 
 **artist** | [**Artist**](Artist.md)|  | [optional] 

### Return type

[**Artist**](Artist.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## partialUpdateArtistBandMembership

> ArtistBandMembership partialUpdateArtistBandMembership(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist band membership.
let opts = {
  'artistBandMembership': new OpenapiJsClient.ArtistBandMembership() // ArtistBandMembership | 
};
apiInstance.partialUpdateArtistBandMembership(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist band membership. | 
 **artistBandMembership** | [**ArtistBandMembership**](ArtistBandMembership.md)|  | [optional] 

### Return type

[**ArtistBandMembership**](ArtistBandMembership.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## partialUpdateBand

> Band partialUpdateBand(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this band.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example", // String | id__in
  'band': new OpenapiJsClient.Band() // Band | 
};
apiInstance.partialUpdateBand(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this band. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 
 **band** | [**Band**](Band.md)|  | [optional] 

### Return type

[**Band**](Band.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveAlbum

> Album retrieveAlbum(id)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album.
apiInstance.retrieveAlbum(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album. | 

### Return type

[**Album**](Album.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveAlbumReview

> AlbumReview retrieveAlbumReview(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album review.
let opts = {
  'author': "author_example", // String | author
  'albumIn': "albumIn_example" // String | album__in
};
apiInstance.retrieveAlbumReview(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album review. | 
 **author** | **String**| author | [optional] 
 **albumIn** | **String**| album__in | [optional] 

### Return type

[**AlbumReview**](AlbumReview.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveArtist

> Artist retrieveArtist(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.retrieveArtist(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

[**Artist**](Artist.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveArtistBandMembership

> ArtistBandMembership retrieveArtistBandMembership(id)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist band membership.
apiInstance.retrieveArtistBandMembership(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist band membership. | 

### Return type

[**ArtistBandMembership**](ArtistBandMembership.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveBand

> Band retrieveBand(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this band.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example" // String | id__in
};
apiInstance.retrieveBand(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this band. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 

### Return type

[**Band**](Band.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveCurrentUser

> User retrieveCurrentUser()



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
apiInstance.retrieveCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveUser

> User retrieveUser(id)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this user.
apiInstance.retrieveUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this user. | 

### Return type

[**User**](User.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlbum

> Album updateAlbum(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album.
let opts = {
  'album': new OpenapiJsClient.Album() // Album | 
};
apiInstance.updateAlbum(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album. | 
 **album** | [**Album**](Album.md)|  | [optional] 

### Return type

[**Album**](Album.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAlbumReview

> AlbumReview updateAlbumReview(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this album review.
let opts = {
  'author': "author_example", // String | author
  'albumIn': "albumIn_example", // String | album__in
  'albumReview': new OpenapiJsClient.AlbumReview() // AlbumReview | 
};
apiInstance.updateAlbumReview(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this album review. | 
 **author** | **String**| author | [optional] 
 **albumIn** | **String**| album__in | [optional] 
 **albumReview** | [**AlbumReview**](AlbumReview.md)|  | [optional] 

### Return type

[**AlbumReview**](AlbumReview.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateArtist

> Artist updateArtist(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example", // String | id__in
  'artist': new OpenapiJsClient.Artist() // Artist | 
};
apiInstance.updateArtist(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 
 **artist** | [**Artist**](Artist.md)|  | [optional] 

### Return type

[**Artist**](Artist.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateArtistBandMembership

> ArtistBandMembership updateArtistBandMembership(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this artist band membership.
let opts = {
  'artistBandMembership': new OpenapiJsClient.ArtistBandMembership() // ArtistBandMembership | 
};
apiInstance.updateArtistBandMembership(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this artist band membership. | 
 **artistBandMembership** | [**ArtistBandMembership**](ArtistBandMembership.md)|  | [optional] 

### Return type

[**ArtistBandMembership**](ArtistBandMembership.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBand

> Band updateBand(id, opts)



### Example

```javascript
import OpenapiJsClient from 'openapi-js-client';
let defaultClient = OpenapiJsClient.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new OpenapiJsClient.ApiApi();
let id = "id_example"; // String | A unique integer value identifying this band.
let opts = {
  'id2': "id_example", // String | id
  'idIn': "idIn_example", // String | id__in
  'band': new OpenapiJsClient.Band() // Band | 
};
apiInstance.updateBand(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| A unique integer value identifying this band. | 
 **id2** | **String**| id | [optional] 
 **idIn** | **String**| id__in | [optional] 
 **band** | [**Band**](Band.md)|  | [optional] 

### Return type

[**Band**](Band.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


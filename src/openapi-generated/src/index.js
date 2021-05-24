/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Album from './model/Album';
import AlbumReview from './model/AlbumReview';
import Artist from './model/Artist';
import ArtistBandMembership from './model/ArtistBandMembership';
import AuthToken from './model/AuthToken';
import Band from './model/Band';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import InlineResponse2002 from './model/InlineResponse2002';
import InlineResponse2003 from './model/InlineResponse2003';
import InlineResponse2004 from './model/InlineResponse2004';
import InlineResponse2005 from './model/InlineResponse2005';
import User from './model/User';
import ApiApi from './api/ApiApi';
import ApiTokenAuthApi from './api/ApiTokenAuthApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OpenapiJsClient = require('index'); // See note below*.
* var xxxSvc = new OpenapiJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OpenapiJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OpenapiJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OpenapiJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Album model constructor.
     * @property {module:model/Album}
     */
    Album,

    /**
     * The AlbumReview model constructor.
     * @property {module:model/AlbumReview}
     */
    AlbumReview,

    /**
     * The Artist model constructor.
     * @property {module:model/Artist}
     */
    Artist,

    /**
     * The ArtistBandMembership model constructor.
     * @property {module:model/ArtistBandMembership}
     */
    ArtistBandMembership,

    /**
     * The AuthToken model constructor.
     * @property {module:model/AuthToken}
     */
    AuthToken,

    /**
     * The Band model constructor.
     * @property {module:model/Band}
     */
    Band,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003,

    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004,

    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The ApiApi service constructor.
    * @property {module:api/ApiApi}
    */
    ApiApi,

    /**
    * The ApiTokenAuthApi service constructor.
    * @property {module:api/ApiTokenAuthApi}
    */
    ApiTokenAuthApi
};
/**
 * Knetik.io Data Collector REST API
 * <p>Use this API to send application data to Knetik.io including user/device information and transactional events.</p> <p>   Please consult the <a href=\"/doc\">official user documentation</a> to find out how to send data, and how this data is used. <p></p> <h2>Notes</h2> <br> New more ReSTful implementation of the telemetry data collection service. Legacy clients can still use the old API format, but we strongly recommend switching over to this new format. Navigate to the legacy documentation using the dropdown at the top of this page. <p></p> <h2>User IDs and Device IDs</h2> <br> Knetik.io can uniquely associate state, events and transactions to users and/or devices for your application. In order to accomplish this, each API call takes userId and deviceId as parameters in the request object. At least one of these must be provided in the request object, except as explicitly noted. <br> <p></p> <h2>Timestamps</h2> <br> All timestamp parameters must be epoch timestamps in milliseconds. <br> <p></p> <h2>Required Request Headers</h2> <br> The following HTTP header values must be provided for each API call: <ul>   <li>     <b>Content-Type: application/json</b>   </li> </ul> <p></p> <h2>Required Query Parameters</h2> <br> All API calls also require the following query parameters to be present on the URL: <ul>   <li>     <b>customer_id:</b> your unique customer ID   </li> </ul> <p></p> <h2>API Responses</h2> <br> If successful, API calls will simply return an HTTP response code of ACCEPTED (202) with no other data. If errors occur, a JSON payload will be returned containing detailed error information and an appropriate HTTP error status code will be provided (as documented in each of the API methods). <br> <p></p>
 *
 * OpenAPI spec version: 2.0
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DataCollectorNewUserRequest', 'model/DataCollectorUpdateUserStateRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataCollectorNewUserRequest'), require('../model/DataCollectorUpdateUserStateRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikIO) {
      root.KnetikIO = {};
    }
    root.KnetikIO.UsersApi = factory(root.KnetikIO.ApiClient, root.KnetikIO.DataCollectorNewUserRequest, root.KnetikIO.DataCollectorUpdateUserStateRequest);
  }
}(this, function(ApiClient, DataCollectorNewUserRequest, DataCollectorUpdateUserStateRequest) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 3.0.7
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Submit a new user event
     * Declares to the Knetik.io platform that the user is new at the given point in time. If the &#39;checked&#39; parameter is provided and set to &#39;true&#39;, however, the current state of the user in the Knetik.io platform is examined to determine if the user was previously declared as new and, if so, the user information is not updated in the Knetik.io platform.
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorNewUserRequest} opts.request New user information
     * @param {Boolean} opts.checked Flag indicating whether the user state should be checked before updating the state in the Knetik.io platform (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.newUserWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling newUser");
      }


      var pathParams = {
      };
      var queryParams = {
        'checked': opts['checked'],
        'customerId': customerId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Submit a new user event
     * Declares to the Knetik.io platform that the user is new at the given point in time. If the &#39;checked&#39; parameter is provided and set to &#39;true&#39;, however, the current state of the user in the Knetik.io platform is examined to determine if the user was previously declared as new and, if so, the user information is not updated in the Knetik.io platform.
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorNewUserRequest} opts.request New user information
     * @param {Boolean} opts.checked Flag indicating whether the user state should be checked before updating the state in the Knetik.io platform (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.newUser = function(customerId, opts) {
      return this.newUserWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the entity state for the given user
     * @param {String} id ID of the user for whom state is being updated
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateUserStateRequest} opts.request Updated user state information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateUserStateWithHttpInfo = function(id, customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUserState");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updateUserState");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'customerId': customerId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/users/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the entity state for the given user
     * @param {String} id ID of the user for whom state is being updated
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateUserStateRequest} opts.request Updated user state information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateUserState = function(id, customerId, opts) {
      return this.updateUserStateWithHttpInfo(id, customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

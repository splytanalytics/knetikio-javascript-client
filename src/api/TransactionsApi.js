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
    define(['ApiClient', 'model/DataCollectorBeginTransactionRequest', 'model/DataCollectorEndTransactionRequest', 'model/DataCollectorUpdateCollectionRequest', 'model/DataCollectorUpdateTransactionRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataCollectorBeginTransactionRequest'), require('../model/DataCollectorEndTransactionRequest'), require('../model/DataCollectorUpdateCollectionRequest'), require('../model/DataCollectorUpdateTransactionRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikIO) {
      root.KnetikIO = {};
    }
    root.KnetikIO.TransactionsApi = factory(root.KnetikIO.ApiClient, root.KnetikIO.DataCollectorBeginTransactionRequest, root.KnetikIO.DataCollectorEndTransactionRequest, root.KnetikIO.DataCollectorUpdateCollectionRequest, root.KnetikIO.DataCollectorUpdateTransactionRequest);
  }
}(this, function(ApiClient, DataCollectorBeginTransactionRequest, DataCollectorEndTransactionRequest, DataCollectorUpdateCollectionRequest, DataCollectorUpdateTransactionRequest) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 3.0.7
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Begins a new transaction
     * Use the event properties to describe the initial state of the transaction
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorBeginTransactionRequest} opts.request Transaction initiation information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.beginTransactionWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling beginTransaction");
      }


      var pathParams = {
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
        '/v2/transactions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Begins a new transaction
     * Use the event properties to describe the initial state of the transaction
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorBeginTransactionRequest} opts.request Transaction initiation information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.beginTransaction = function(customerId, opts) {
      return this.beginTransactionWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Ends the transaction
     * Submits final transaction state to Knetik.io
     * @param {String} id Unique ID of the transaction being finalized
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorEndTransactionRequest} opts.request Transaction finalization information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.endTransactionWithHttpInfo = function(id, customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling endTransaction");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling endTransaction");
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
        '/v2/transactions/{id}/end', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Ends the transaction
     * Submits final transaction state to Knetik.io
     * @param {String} id Unique ID of the transaction being finalized
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorEndTransactionRequest} opts.request Transaction finalization information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.endTransaction = function(id, customerId, opts) {
      return this.endTransactionWithHttpInfo(id, customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates and finalizes a collection of transaction information
     * This operation basically encapsulates beginTransaction and endTransaction semantics into a single step and is used to update user balance information in Knetik.io
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateCollectionRequest} opts.request Collection state information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCollectionWithHttpInfo = function(customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updateCollection");
      }


      var pathParams = {
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
        '/v2/collections', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates and finalizes a collection of transaction information
     * This operation basically encapsulates beginTransaction and endTransaction semantics into a single step and is used to update user balance information in Knetik.io
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateCollectionRequest} opts.request Collection state information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateCollection = function(customerId, opts) {
      return this.updateCollectionWithHttpInfo(customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the progress for the given transaction
     * Use the event properties to update the state of the transaction
     * @param {String} id Unique ID of the transaction being updated
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateTransactionRequest} opts.request Transaction progress information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateTransactionWithHttpInfo = function(id, customerId, opts) {
      opts = opts || {};
      var postBody = opts['request'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTransaction");
      }

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updateTransaction");
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
        '/v2/transactions/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates the progress for the given transaction
     * Use the event properties to update the state of the transaction
     * @param {String} id Unique ID of the transaction being updated
     * @param {String} customerId customerId
     * @param {Object} opts Optional parameters
     * @param {module:model/DataCollectorUpdateTransactionRequest} opts.request Transaction progress information
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateTransaction = function(id, customerId, opts) {
      return this.updateTransactionWithHttpInfo(id, customerId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));

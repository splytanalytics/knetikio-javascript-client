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
    define(['ApiClient', 'model/DataCollectorBaseRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DataCollectorBaseRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikIO) {
      root.KnetikIO = {};
    }
    root.KnetikIO.DataCollectorEndTransactionRequest = factory(root.KnetikIO.ApiClient, root.KnetikIO.DataCollectorBaseRequest);
  }
}(this, function(ApiClient, DataCollectorBaseRequest) {
  'use strict';




  /**
   * The DataCollectorEndTransactionRequest model module.
   * @module model/DataCollectorEndTransactionRequest
   * @version 3.0.7
   */

  /**
   * Constructs a new <code>DataCollectorEndTransactionRequest</code>.
   * @alias module:model/DataCollectorEndTransactionRequest
   * @class
   * @extends module:model/DataCollectorBaseRequest
   * @param eventTimestamp {Number} Epoch timestamp <i>in milliseconds</i> of when event itself occurred
   * @param requestType {String} Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -> newUser, NewEventRequest -> newEvent,e tc
   * @param sendTimestamp {Number} Epoch timestamp <i>in milliseconds</i> of when event was sent to the API
   * @param result {String} The outcome of the transaction. Can be anything from a code to a word to a boolean depending on your neeeds. Ex: success, 200, invalid, insufficient_funds, etc
   * @param category {String} The name/type of the transaction
   */
  var exports = function(eventTimestamp, requestType, sendTimestamp, result, category) {
    var _this = this;
    DataCollectorBaseRequest.call(_this, eventTimestamp, requestType, sendTimestamp);
    _this['result'] = result;

    _this['category'] = category;
  };

  /**
   * Constructs a <code>DataCollectorEndTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataCollectorEndTransactionRequest} obj Optional instance to populate.
   * @return {module:model/DataCollectorEndTransactionRequest} The populated <code>DataCollectorEndTransactionRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      DataCollectorBaseRequest.constructFromObject(data, obj);
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'endTransaction';
  DataCollectorBaseRequest.registerChild(exports, discriminatorValue);
  
  exports.prototype = Object.create(DataCollectorBaseRequest.prototype);
  exports.prototype.constructor = exports;


  /**
   * The outcome of the transaction. Can be anything from a code to a word to a boolean depending on your neeeds. Ex: success, 200, invalid, insufficient_funds, etc
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * Unique transaction ID
   * @member {String} transaction_id
   */
  exports.prototype['transaction_id'] = undefined;
  /**
   * The name/type of the transaction
   * @member {String} category
   */
  exports.prototype['category'] = undefined;



  return exports;
}));



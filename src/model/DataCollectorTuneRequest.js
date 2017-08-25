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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikIO) {
      root.KnetikIO = {};
    }
    root.KnetikIO.DataCollectorTuneRequest = factory(root.KnetikIO.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DataCollectorTuneRequest model module.
   * @module model/DataCollectorTuneRequest
   * @version 3.0.6
   */

  /**
   * Constructs a new <code>DataCollectorTuneRequest</code>.
   * @alias module:model/DataCollectorTuneRequest
   * @class
   * @param campaignName {String} Name of the campaign being tracked
   * @param deviceId {String} Unique ID of the device
   * @param eventTimestamp {Number} Epoch timestamp <i>in milliseconds</i> of when event itself occurred
   * @param requestType {String} Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -> newUser, NewEventRequest -> newEvent,e tc
   * @param sendTimestamp {Number} Epoch timestamp <i>in milliseconds</i> of when event was sent to the API
   */
  var exports = function(campaignName, deviceId, eventTimestamp, requestType, sendTimestamp) {
    var _this = this;

    _this['campaign_name'] = campaignName;
    _this['device_id'] = deviceId;

    _this['event_timestamp'] = eventTimestamp;
    _this['request_type'] = requestType;
    _this['send_timestamp'] = sendTimestamp;

  };

  /**
   * Constructs a <code>DataCollectorTuneRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataCollectorTuneRequest} obj Optional instance to populate.
   * @return {module:model/DataCollectorTuneRequest} The populated <code>DataCollectorTuneRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaign_name')) {
        obj['campaign_name'] = ApiClient.convertToType(data['campaign_name'], 'String');
      }
      if (data.hasOwnProperty('device_id')) {
        obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
      }
      if (data.hasOwnProperty('event_properties')) {
        obj['event_properties'] = ApiClient.convertToType(data['event_properties'], Object);
      }
      if (data.hasOwnProperty('event_timestamp')) {
        obj['event_timestamp'] = ApiClient.convertToType(data['event_timestamp'], 'Number');
      }
      if (data.hasOwnProperty('request_type')) {
        obj['request_type'] = ApiClient.convertToType(data['request_type'], 'String');
      }
      if (data.hasOwnProperty('send_timestamp')) {
        obj['send_timestamp'] = ApiClient.convertToType(data['send_timestamp'], 'Number');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
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
  
  var discriminatorValue = 'DataCollectorTuneRequest';


  /**
   * Name of the campaign being tracked
   * @member {String} campaign_name
   */
  exports.prototype['campaign_name'] = undefined;
  /**
   * Unique ID of the device
   * @member {String} device_id
   */
  exports.prototype['device_id'] = undefined;
  /**
   * A key/value list of properties for this event. Values can be numerical, strings or booleans, proper typing matters (quoted vs unquoted)
   * @member {Object} event_properties
   */
  exports.prototype['event_properties'] = undefined;
  /**
   * Epoch timestamp <i>in milliseconds</i> of when event itself occurred
   * @member {Number} event_timestamp
   */
  exports.prototype['event_timestamp'] = undefined;
  /**
   * Specifies the canonical model name of the request. Ex: DataCollectorNewUserRequest -> newUser, NewEventRequest -> newEvent,e tc
   * @member {String} request_type
   */
  exports.prototype['request_type'] = undefined;
  /**
   * Epoch timestamp <i>in milliseconds</i> of when event was sent to the API
   * @member {Number} send_timestamp
   */
  exports.prototype['send_timestamp'] = undefined;
  /**
   * Unique ID of the user triggering the event
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));



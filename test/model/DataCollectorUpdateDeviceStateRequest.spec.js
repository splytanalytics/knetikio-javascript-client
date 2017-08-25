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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KnetikIO);
  }
}(this, function(expect, KnetikIO) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DataCollectorUpdateDeviceStateRequest', function() {
    it('should create an instance of DataCollectorUpdateDeviceStateRequest', function() {
      // uncomment below and update the code to test DataCollectorUpdateDeviceStateRequest
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be.a(KnetikIO.DataCollectorUpdateDeviceStateRequest);
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventProperties (base name: "event_properties")', function() {
      // uncomment below and update the code to test the property eventProperties
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property eventTimestamp (base name: "event_timestamp")', function() {
      // uncomment below and update the code to test the property eventTimestamp
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestType (base name: "request_type")', function() {
      // uncomment below and update the code to test the property requestType
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendTimestamp (base name: "send_timestamp")', function() {
      // uncomment below and update the code to test the property sendTimestamp
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new KnetikIO.DataCollectorUpdateDeviceStateRequest();
      //expect(instance).to.be();
    });

  });

}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ApplicationGatewayIPConfiguration class.
 * @constructor
 * IP configuration of application gateway
 *
 * @member {object} [subnet] Gets or sets the reference of the subnet
 * resource.A subnet from where appliation gateway gets its private address
 * 
 * @member {string} [subnet.id] Resource Id
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * application gateway subnet resource Updating/Deleting/Failed
 * 
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated
 * 
 */
function ApplicationGatewayIPConfiguration() {
  ApplicationGatewayIPConfiguration['super_'].call(this);
}

util.inherits(ApplicationGatewayIPConfiguration, models['SubResource']);

/**
 * Defines the metadata of ApplicationGatewayIPConfiguration
 *
 * @returns {object} metadata of ApplicationGatewayIPConfiguration
 *
 */
ApplicationGatewayIPConfiguration.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationGatewayIPConfiguration',
    type: {
      name: 'Composite',
      className: 'ApplicationGatewayIPConfiguration',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        subnet: {
          required: false,
          serializedName: 'properties.subnet',
          type: {
            name: 'Composite',
            className: 'SubResource'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApplicationGatewayIPConfiguration;

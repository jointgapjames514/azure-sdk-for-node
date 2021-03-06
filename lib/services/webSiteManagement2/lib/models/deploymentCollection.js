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
 * Initializes a new instance of the DeploymentCollection class.
 * @constructor
 * Collection of app deployments
 * @member {array} [value] Collection of resources
 * 
 * @member {string} [nextLink] Link to next page of resources
 * 
 */
function DeploymentCollection() {
}

/**
 * Defines the metadata of DeploymentCollection
 *
 * @returns {object} metadata of DeploymentCollection
 *
 */
DeploymentCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeploymentCollection',
    type: {
      name: 'Composite',
      className: 'DeploymentCollection',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DeploymentElementType',
                type: {
                  name: 'Composite',
                  className: 'Deployment'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeploymentCollection;

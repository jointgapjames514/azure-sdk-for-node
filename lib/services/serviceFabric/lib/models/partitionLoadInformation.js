/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PartitionLoadInformation class.
 * @constructor
 * @member {string} [partitionId]
 * 
 * @member {array} [primaryLoadMetricReports]
 * 
 * @member {array} [secondaryLoadMetricReports]
 * 
 */
function PartitionLoadInformation() {
}

/**
 * Defines the metadata of PartitionLoadInformation
 *
 * @returns {object} metadata of PartitionLoadInformation
 *
 */
PartitionLoadInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PartitionLoadInformation',
    type: {
      name: 'Composite',
      className: 'PartitionLoadInformation',
      modelProperties: {
        partitionId: {
          required: false,
          serializedName: 'PartitionId',
          type: {
            name: 'String'
          }
        },
        primaryLoadMetricReports: {
          required: false,
          serializedName: 'PrimaryLoadMetricReports',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        secondaryLoadMetricReports: {
          required: false,
          serializedName: 'SecondaryLoadMetricReports',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PartitionLoadInformation;

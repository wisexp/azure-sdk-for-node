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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResolvedServicePartition class.
 * @constructor
 * The partition of the resolved service
 *
 * @member {string} [name]
 *
 * @member {object} [partitionInformation]
 *
 * @member {string} [partitionInformation.servicePartitionKind] Possible values
 * include: 'Invalid', 'Singleton', 'Int64Range', 'Named'
 *
 * @member {string} [partitionInformation.id]
 *
 * @member {array} [partitionInformation.name]
 *
 * @member {string} [partitionInformation.lowKey]
 *
 * @member {string} [partitionInformation.highKey]
 *
 * @member {array} [endpoints]
 *
 * @member {string} [version]
 *
 */
class ResolvedServicePartition {
  constructor() {
  }

  /**
   * Defines the metadata of ResolvedServicePartition
   *
   * @returns {object} metadata of ResolvedServicePartition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResolvedServicePartition',
      type: {
        name: 'Composite',
        className: 'ResolvedServicePartition',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          partitionInformation: {
            required: false,
            serializedName: 'PartitionInformation',
            type: {
              name: 'Composite',
              className: 'PartitionInformation'
            }
          },
          endpoints: {
            required: false,
            serializedName: 'Endpoints',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResolvedServicePartitionEndpointsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResolvedServicePartitionEndpointsItem'
                  }
              }
            }
          },
          version: {
            required: false,
            serializedName: 'Version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResolvedServicePartition;

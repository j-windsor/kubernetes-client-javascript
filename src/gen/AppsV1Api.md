# .AppsV1Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNamespacedControllerRevision**](AppsV1Api.md#createNamespacedControllerRevision) | **POST** /apis/apps/v1/namespaces/{namespace}/controllerrevisions | 
[**createNamespacedDaemonSet**](AppsV1Api.md#createNamespacedDaemonSet) | **POST** /apis/apps/v1/namespaces/{namespace}/daemonsets | 
[**createNamespacedDeployment**](AppsV1Api.md#createNamespacedDeployment) | **POST** /apis/apps/v1/namespaces/{namespace}/deployments | 
[**createNamespacedReplicaSet**](AppsV1Api.md#createNamespacedReplicaSet) | **POST** /apis/apps/v1/namespaces/{namespace}/replicasets | 
[**createNamespacedStatefulSet**](AppsV1Api.md#createNamespacedStatefulSet) | **POST** /apis/apps/v1/namespaces/{namespace}/statefulsets | 
[**deleteCollectionNamespacedControllerRevision**](AppsV1Api.md#deleteCollectionNamespacedControllerRevision) | **DELETE** /apis/apps/v1/namespaces/{namespace}/controllerrevisions | 
[**deleteCollectionNamespacedDaemonSet**](AppsV1Api.md#deleteCollectionNamespacedDaemonSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/daemonsets | 
[**deleteCollectionNamespacedDeployment**](AppsV1Api.md#deleteCollectionNamespacedDeployment) | **DELETE** /apis/apps/v1/namespaces/{namespace}/deployments | 
[**deleteCollectionNamespacedReplicaSet**](AppsV1Api.md#deleteCollectionNamespacedReplicaSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/replicasets | 
[**deleteCollectionNamespacedStatefulSet**](AppsV1Api.md#deleteCollectionNamespacedStatefulSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/statefulsets | 
[**deleteNamespacedControllerRevision**](AppsV1Api.md#deleteNamespacedControllerRevision) | **DELETE** /apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name} | 
[**deleteNamespacedDaemonSet**](AppsV1Api.md#deleteNamespacedDaemonSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name} | 
[**deleteNamespacedDeployment**](AppsV1Api.md#deleteNamespacedDeployment) | **DELETE** /apis/apps/v1/namespaces/{namespace}/deployments/{name} | 
[**deleteNamespacedReplicaSet**](AppsV1Api.md#deleteNamespacedReplicaSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/replicasets/{name} | 
[**deleteNamespacedStatefulSet**](AppsV1Api.md#deleteNamespacedStatefulSet) | **DELETE** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name} | 
[**getAPIResources**](AppsV1Api.md#getAPIResources) | **GET** /apis/apps/v1/ | 
[**listControllerRevisionForAllNamespaces**](AppsV1Api.md#listControllerRevisionForAllNamespaces) | **GET** /apis/apps/v1/controllerrevisions | 
[**listDaemonSetForAllNamespaces**](AppsV1Api.md#listDaemonSetForAllNamespaces) | **GET** /apis/apps/v1/daemonsets | 
[**listDeploymentForAllNamespaces**](AppsV1Api.md#listDeploymentForAllNamespaces) | **GET** /apis/apps/v1/deployments | 
[**listNamespacedControllerRevision**](AppsV1Api.md#listNamespacedControllerRevision) | **GET** /apis/apps/v1/namespaces/{namespace}/controllerrevisions | 
[**listNamespacedDaemonSet**](AppsV1Api.md#listNamespacedDaemonSet) | **GET** /apis/apps/v1/namespaces/{namespace}/daemonsets | 
[**listNamespacedDeployment**](AppsV1Api.md#listNamespacedDeployment) | **GET** /apis/apps/v1/namespaces/{namespace}/deployments | 
[**listNamespacedReplicaSet**](AppsV1Api.md#listNamespacedReplicaSet) | **GET** /apis/apps/v1/namespaces/{namespace}/replicasets | 
[**listNamespacedStatefulSet**](AppsV1Api.md#listNamespacedStatefulSet) | **GET** /apis/apps/v1/namespaces/{namespace}/statefulsets | 
[**listReplicaSetForAllNamespaces**](AppsV1Api.md#listReplicaSetForAllNamespaces) | **GET** /apis/apps/v1/replicasets | 
[**listStatefulSetForAllNamespaces**](AppsV1Api.md#listStatefulSetForAllNamespaces) | **GET** /apis/apps/v1/statefulsets | 
[**patchNamespacedControllerRevision**](AppsV1Api.md#patchNamespacedControllerRevision) | **PATCH** /apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name} | 
[**patchNamespacedDaemonSet**](AppsV1Api.md#patchNamespacedDaemonSet) | **PATCH** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name} | 
[**patchNamespacedDaemonSetStatus**](AppsV1Api.md#patchNamespacedDaemonSetStatus) | **PATCH** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status | 
[**patchNamespacedDeployment**](AppsV1Api.md#patchNamespacedDeployment) | **PATCH** /apis/apps/v1/namespaces/{namespace}/deployments/{name} | 
[**patchNamespacedDeploymentScale**](AppsV1Api.md#patchNamespacedDeploymentScale) | **PATCH** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale | 
[**patchNamespacedDeploymentStatus**](AppsV1Api.md#patchNamespacedDeploymentStatus) | **PATCH** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/status | 
[**patchNamespacedReplicaSet**](AppsV1Api.md#patchNamespacedReplicaSet) | **PATCH** /apis/apps/v1/namespaces/{namespace}/replicasets/{name} | 
[**patchNamespacedReplicaSetScale**](AppsV1Api.md#patchNamespacedReplicaSetScale) | **PATCH** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale | 
[**patchNamespacedReplicaSetStatus**](AppsV1Api.md#patchNamespacedReplicaSetStatus) | **PATCH** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status | 
[**patchNamespacedStatefulSet**](AppsV1Api.md#patchNamespacedStatefulSet) | **PATCH** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name} | 
[**patchNamespacedStatefulSetScale**](AppsV1Api.md#patchNamespacedStatefulSetScale) | **PATCH** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale | 
[**patchNamespacedStatefulSetStatus**](AppsV1Api.md#patchNamespacedStatefulSetStatus) | **PATCH** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status | 
[**readNamespacedControllerRevision**](AppsV1Api.md#readNamespacedControllerRevision) | **GET** /apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name} | 
[**readNamespacedDaemonSet**](AppsV1Api.md#readNamespacedDaemonSet) | **GET** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name} | 
[**readNamespacedDaemonSetStatus**](AppsV1Api.md#readNamespacedDaemonSetStatus) | **GET** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status | 
[**readNamespacedDeployment**](AppsV1Api.md#readNamespacedDeployment) | **GET** /apis/apps/v1/namespaces/{namespace}/deployments/{name} | 
[**readNamespacedDeploymentScale**](AppsV1Api.md#readNamespacedDeploymentScale) | **GET** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale | 
[**readNamespacedDeploymentStatus**](AppsV1Api.md#readNamespacedDeploymentStatus) | **GET** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/status | 
[**readNamespacedReplicaSet**](AppsV1Api.md#readNamespacedReplicaSet) | **GET** /apis/apps/v1/namespaces/{namespace}/replicasets/{name} | 
[**readNamespacedReplicaSetScale**](AppsV1Api.md#readNamespacedReplicaSetScale) | **GET** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale | 
[**readNamespacedReplicaSetStatus**](AppsV1Api.md#readNamespacedReplicaSetStatus) | **GET** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status | 
[**readNamespacedStatefulSet**](AppsV1Api.md#readNamespacedStatefulSet) | **GET** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name} | 
[**readNamespacedStatefulSetScale**](AppsV1Api.md#readNamespacedStatefulSetScale) | **GET** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale | 
[**readNamespacedStatefulSetStatus**](AppsV1Api.md#readNamespacedStatefulSetStatus) | **GET** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status | 
[**replaceNamespacedControllerRevision**](AppsV1Api.md#replaceNamespacedControllerRevision) | **PUT** /apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name} | 
[**replaceNamespacedDaemonSet**](AppsV1Api.md#replaceNamespacedDaemonSet) | **PUT** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name} | 
[**replaceNamespacedDaemonSetStatus**](AppsV1Api.md#replaceNamespacedDaemonSetStatus) | **PUT** /apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status | 
[**replaceNamespacedDeployment**](AppsV1Api.md#replaceNamespacedDeployment) | **PUT** /apis/apps/v1/namespaces/{namespace}/deployments/{name} | 
[**replaceNamespacedDeploymentScale**](AppsV1Api.md#replaceNamespacedDeploymentScale) | **PUT** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale | 
[**replaceNamespacedDeploymentStatus**](AppsV1Api.md#replaceNamespacedDeploymentStatus) | **PUT** /apis/apps/v1/namespaces/{namespace}/deployments/{name}/status | 
[**replaceNamespacedReplicaSet**](AppsV1Api.md#replaceNamespacedReplicaSet) | **PUT** /apis/apps/v1/namespaces/{namespace}/replicasets/{name} | 
[**replaceNamespacedReplicaSetScale**](AppsV1Api.md#replaceNamespacedReplicaSetScale) | **PUT** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale | 
[**replaceNamespacedReplicaSetStatus**](AppsV1Api.md#replaceNamespacedReplicaSetStatus) | **PUT** /apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status | 
[**replaceNamespacedStatefulSet**](AppsV1Api.md#replaceNamespacedStatefulSet) | **PUT** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name} | 
[**replaceNamespacedStatefulSetScale**](AppsV1Api.md#replaceNamespacedStatefulSetScale) | **PUT** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale | 
[**replaceNamespacedStatefulSetStatus**](AppsV1Api.md#replaceNamespacedStatefulSetStatus) | **PUT** /apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status | 


# **createNamespacedControllerRevision**
> V1ControllerRevision createNamespacedControllerRevision(body)

create a ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiCreateNamespacedControllerRevisionRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1ControllerRevision
  body: {
    apiVersion: "apiVersion_example",
    data: {},
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    revision: 1,
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1ControllerRevision**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1ControllerRevision**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNamespacedDaemonSet**
> V1DaemonSet createNamespacedDaemonSet(body)

create a DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiCreateNamespacedDaemonSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1DaemonSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
    },
    status: {
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentNumberScheduled: 1,
      desiredNumberScheduled: 1,
      numberAvailable: 1,
      numberMisscheduled: 1,
      numberReady: 1,
      numberUnavailable: 1,
      observedGeneration: 1,
      updatedNumberScheduled: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DaemonSet**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNamespacedDeployment**
> V1Deployment createNamespacedDeployment(body)

create a Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiCreateNamespacedDeploymentRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Deployment
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      paused: true,
      progressDeadlineSeconds: 1,
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      strategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      unavailableReplicas: 1,
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Deployment**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNamespacedReplicaSet**
> V1ReplicaSet createNamespacedReplicaSet(body)

create a ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiCreateNamespacedReplicaSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1ReplicaSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      replicas: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      fullyLabeledReplicas: 1,
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1ReplicaSet**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNamespacedStatefulSet**
> V1StatefulSet createNamespacedStatefulSet(body)

create a StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiCreateNamespacedStatefulSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1StatefulSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      podManagementPolicy: "podManagementPolicy_example",
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      serviceName: "serviceName_example",
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          partition: 1,
        },
        type: "type_example",
      },
      volumeClaimTemplates: [
        {
          apiVersion: "apiVersion_example",
          kind: "kind_example",
          metadata: {
            annotations: {
              "key": "key_example",
            },
            clusterName: "clusterName_example",
            creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            deletionGracePeriodSeconds: 1,
            deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            finalizers: [
              "finalizers_example",
            ],
            generateName: "generateName_example",
            generation: 1,
            labels: {
              "key": "key_example",
            },
            managedFields: [
              {
                apiVersion: "apiVersion_example",
                fieldsType: "fieldsType_example",
                fieldsV1: {},
                manager: "manager_example",
                operation: "operation_example",
                subresource: "subresource_example",
                time: new Date('1970-01-01T00:00:00.00Z'),
              },
            ],
            name: "name_example",
            namespace: "namespace_example",
            ownerReferences: [
              {
                apiVersion: "apiVersion_example",
                blockOwnerDeletion: true,
                controller: true,
                kind: "kind_example",
                name: "name_example",
                uid: "uid_example",
              },
            ],
            resourceVersion: "resourceVersion_example",
            selfLink: "selfLink_example",
            uid: "uid_example",
          },
          spec: {
            accessModes: [
              "accessModes_example",
            ],
            dataSource: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            dataSourceRef: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            resources: {
              limits: {
                "key": "key_example",
              },
              requests: {
                "key": "key_example",
              },
            },
            selector: {
              matchExpressions: [
                {
                  key: "key_example",
                  operator: "operator_example",
                  values: [
                    "values_example",
                  ],
                },
              ],
              matchLabels: {
                "key": "key_example",
              },
            },
            storageClassName: "storageClassName_example",
            volumeMode: "volumeMode_example",
            volumeName: "volumeName_example",
          },
          status: {
            accessModes: [
              "accessModes_example",
            ],
            capacity: {
              "key": "key_example",
            },
            conditions: [
              {
                lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
                lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
                message: "message_example",
                reason: "reason_example",
                status: "status_example",
                type: "type_example",
              },
            ],
            phase: "phase_example",
          },
        },
      ],
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentReplicas: 1,
      currentRevision: "currentRevision_example",
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      updateRevision: "updateRevision_example",
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.createNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1StatefulSet**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionNamespacedControllerRevision**
> V1Status deleteCollectionNamespacedControllerRevision()

delete collection of ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteCollectionNamespacedControllerRevisionRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionNamespacedDaemonSet**
> V1Status deleteCollectionNamespacedDaemonSet()

delete collection of DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteCollectionNamespacedDaemonSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionNamespacedDeployment**
> V1Status deleteCollectionNamespacedDeployment()

delete collection of Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteCollectionNamespacedDeploymentRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionNamespacedReplicaSet**
> V1Status deleteCollectionNamespacedReplicaSet()

delete collection of ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteCollectionNamespacedReplicaSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCollectionNamespacedStatefulSet**
> V1Status deleteCollectionNamespacedStatefulSet()

delete collection of StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteCollectionNamespacedStatefulSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteCollectionNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNamespacedControllerRevision**
> V1Status deleteNamespacedControllerRevision()

delete a ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteNamespacedControllerRevisionRequest = {
  // string | name of the ControllerRevision
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the ControllerRevision | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNamespacedDaemonSet**
> V1Status deleteNamespacedDaemonSet()

delete a DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteNamespacedDaemonSetRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNamespacedDeployment**
> V1Status deleteNamespacedDeployment()

delete a Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteNamespacedDeploymentRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNamespacedReplicaSet**
> V1Status deleteNamespacedReplicaSet()

delete a ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteNamespacedReplicaSetRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNamespacedStatefulSet**
> V1Status deleteNamespacedStatefulSet()

delete a StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiDeleteNamespacedStatefulSetRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. (optional)
  gracePeriodSeconds: 1,
  // boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both. (optional)
  orphanDependents: true,
  // string | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground. (optional)
  propagationPolicy: "propagationPolicy_example",
  // V1DeleteOptions (optional)
  body: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
};

apiInstance.deleteNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DeleteOptions**|  |
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined
 **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined
 **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined


### Return type

**V1Status**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAPIResources**
> V1APIResourceList getAPIResources()

get available resources

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:any = {};

apiInstance.getAPIResources(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V1APIResourceList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listControllerRevisionForAllNamespaces**
> V1ControllerRevisionList listControllerRevisionForAllNamespaces()

list or watch objects of kind ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListControllerRevisionForAllNamespacesRequest = {
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listControllerRevisionForAllNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1ControllerRevisionList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDaemonSetForAllNamespaces**
> V1DaemonSetList listDaemonSetForAllNamespaces()

list or watch objects of kind DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListDaemonSetForAllNamespacesRequest = {
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listDaemonSetForAllNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1DaemonSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDeploymentForAllNamespaces**
> V1DeploymentList listDeploymentForAllNamespaces()

list or watch objects of kind Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListDeploymentForAllNamespacesRequest = {
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listDeploymentForAllNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1DeploymentList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespacedControllerRevision**
> V1ControllerRevisionList listNamespacedControllerRevision()

list or watch objects of kind ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListNamespacedControllerRevisionRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1ControllerRevisionList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespacedDaemonSet**
> V1DaemonSetList listNamespacedDaemonSet()

list or watch objects of kind DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListNamespacedDaemonSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1DaemonSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespacedDeployment**
> V1DeploymentList listNamespacedDeployment()

list or watch objects of kind Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListNamespacedDeploymentRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1DeploymentList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespacedReplicaSet**
> V1ReplicaSetList listNamespacedReplicaSet()

list or watch objects of kind ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListNamespacedReplicaSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1ReplicaSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNamespacedStatefulSet**
> V1StatefulSetList listNamespacedStatefulSet()

list or watch objects of kind StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListNamespacedStatefulSetRequest = {
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1StatefulSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listReplicaSetForAllNamespaces**
> V1ReplicaSetList listReplicaSetForAllNamespaces()

list or watch objects of kind ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListReplicaSetForAllNamespacesRequest = {
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listReplicaSetForAllNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1ReplicaSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStatefulSetForAllNamespaces**
> V1StatefulSetList listStatefulSetForAllNamespaces()

list or watch objects of kind StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiListStatefulSetForAllNamespacesRequest = {
  // boolean | allowWatchBookmarks requests watch events with type \"BOOKMARK\". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. (optional)
  allowWatchBookmarks: true,
  // string | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \"next key\".  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. (optional)
  _continue: "continue_example",
  // string | A selector to restrict the list of returned objects by their fields. Defaults to everything. (optional)
  fieldSelector: "fieldSelector_example",
  // string | A selector to restrict the list of returned objects by their labels. Defaults to everything. (optional)
  labelSelector: "labelSelector_example",
  // number | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. (optional)
  limit: 1,
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersion: "resourceVersion_example",
  // string | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset (optional)
  resourceVersionMatch: "resourceVersionMatch_example",
  // number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. (optional)
  timeoutSeconds: 1,
  // boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. (optional)
  watch: true,
};

apiInstance.listStatefulSetForAllNamespaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined
 **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined
 **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined
 **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined
 **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined
 **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined
 **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined


### Return type

**V1StatefulSetList**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedControllerRevision**
> V1ControllerRevision patchNamespacedControllerRevision(body)

partially update the specified ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedControllerRevisionRequest = {
  // string | name of the ControllerRevision
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the ControllerRevision | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1ControllerRevision**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedDaemonSet**
> V1DaemonSet patchNamespacedDaemonSet(body)

partially update the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedDaemonSetRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedDaemonSetStatus**
> V1DaemonSet patchNamespacedDaemonSetStatus(body)

partially update status of the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedDaemonSetStatusRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedDaemonSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedDeployment**
> V1Deployment patchNamespacedDeployment(body)

partially update the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedDeploymentRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedDeploymentScale**
> V1Scale patchNamespacedDeploymentScale(body)

partially update scale of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedDeploymentScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedDeploymentScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedDeploymentStatus**
> V1Deployment patchNamespacedDeploymentStatus(body)

partially update status of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedDeploymentStatusRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedDeploymentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedReplicaSet**
> V1ReplicaSet patchNamespacedReplicaSet(body)

partially update the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedReplicaSetRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedReplicaSetScale**
> V1Scale patchNamespacedReplicaSetScale(body)

partially update scale of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedReplicaSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedReplicaSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedReplicaSetStatus**
> V1ReplicaSet patchNamespacedReplicaSetStatus(body)

partially update status of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedReplicaSetStatusRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedReplicaSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedStatefulSet**
> V1StatefulSet patchNamespacedStatefulSet(body)

partially update the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedStatefulSetRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedStatefulSetScale**
> V1Scale patchNamespacedStatefulSetScale(body)

partially update scale of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedStatefulSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedStatefulSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchNamespacedStatefulSetStatus**
> V1StatefulSet patchNamespacedStatefulSetStatus(body)

partially update status of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiPatchNamespacedStatefulSetStatusRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // any
  body: {},
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). (optional)
  fieldManager: "fieldManager_example",
  // boolean | Force is going to \"force\" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. (optional)
  force: true,
};

apiInstance.patchNamespacedStatefulSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined
 **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedControllerRevision**
> V1ControllerRevision readNamespacedControllerRevision()

read the specified ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedControllerRevisionRequest = {
  // string | name of the ControllerRevision
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the ControllerRevision | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1ControllerRevision**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedDaemonSet**
> V1DaemonSet readNamespacedDaemonSet()

read the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedDaemonSetRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedDaemonSetStatus**
> V1DaemonSet readNamespacedDaemonSetStatus()

read status of the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedDaemonSetStatusRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedDaemonSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedDeployment**
> V1Deployment readNamespacedDeployment()

read the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedDeploymentRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedDeploymentScale**
> V1Scale readNamespacedDeploymentScale()

read scale of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedDeploymentScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedDeploymentScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedDeploymentStatus**
> V1Deployment readNamespacedDeploymentStatus()

read status of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedDeploymentStatusRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedDeploymentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedReplicaSet**
> V1ReplicaSet readNamespacedReplicaSet()

read the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedReplicaSetRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedReplicaSetScale**
> V1Scale readNamespacedReplicaSetScale()

read scale of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedReplicaSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedReplicaSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedReplicaSetStatus**
> V1ReplicaSet readNamespacedReplicaSetStatus()

read status of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedReplicaSetStatusRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedReplicaSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedStatefulSet**
> V1StatefulSet readNamespacedStatefulSet()

read the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedStatefulSetRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedStatefulSetScale**
> V1Scale readNamespacedStatefulSetScale()

read scale of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedStatefulSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedStatefulSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **readNamespacedStatefulSetStatus**
> V1StatefulSet readNamespacedStatefulSetStatus()

read status of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReadNamespacedStatefulSetStatusRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
};

apiInstance.readNamespacedStatefulSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedControllerRevision**
> V1ControllerRevision replaceNamespacedControllerRevision(body)

replace the specified ControllerRevision

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedControllerRevisionRequest = {
  // string | name of the ControllerRevision
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1ControllerRevision
  body: {
    apiVersion: "apiVersion_example",
    data: {},
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    revision: 1,
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedControllerRevision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1ControllerRevision**|  |
 **name** | [**string**] | name of the ControllerRevision | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1ControllerRevision**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedDaemonSet**
> V1DaemonSet replaceNamespacedDaemonSet(body)

replace the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedDaemonSetRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1DaemonSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
    },
    status: {
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentNumberScheduled: 1,
      desiredNumberScheduled: 1,
      numberAvailable: 1,
      numberMisscheduled: 1,
      numberReady: 1,
      numberUnavailable: 1,
      observedGeneration: 1,
      updatedNumberScheduled: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedDaemonSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DaemonSet**|  |
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedDaemonSetStatus**
> V1DaemonSet replaceNamespacedDaemonSetStatus(body)

replace status of the specified DaemonSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedDaemonSetStatusRequest = {
  // string | name of the DaemonSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1DaemonSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
    },
    status: {
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentNumberScheduled: 1,
      desiredNumberScheduled: 1,
      numberAvailable: 1,
      numberMisscheduled: 1,
      numberReady: 1,
      numberUnavailable: 1,
      observedGeneration: 1,
      updatedNumberScheduled: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedDaemonSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1DaemonSet**|  |
 **name** | [**string**] | name of the DaemonSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1DaemonSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedDeployment**
> V1Deployment replaceNamespacedDeployment(body)

replace the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedDeploymentRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Deployment
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      paused: true,
      progressDeadlineSeconds: 1,
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      strategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      unavailableReplicas: 1,
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedDeployment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Deployment**|  |
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedDeploymentScale**
> V1Scale replaceNamespacedDeploymentScale(body)

replace scale of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedDeploymentScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Scale
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      replicas: 1,
    },
    status: {
      replicas: 1,
      selector: "selector_example",
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedDeploymentScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Scale**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedDeploymentStatus**
> V1Deployment replaceNamespacedDeploymentStatus(body)

replace status of the specified Deployment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedDeploymentStatusRequest = {
  // string | name of the Deployment
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Deployment
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      paused: true,
      progressDeadlineSeconds: 1,
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      strategy: {
        rollingUpdate: {
          maxSurge: "maxSurge_example",
          maxUnavailable: "maxUnavailable_example",
        },
        type: "type_example",
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          lastUpdateTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      unavailableReplicas: 1,
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedDeploymentStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Deployment**|  |
 **name** | [**string**] | name of the Deployment | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Deployment**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedReplicaSet**
> V1ReplicaSet replaceNamespacedReplicaSet(body)

replace the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedReplicaSetRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1ReplicaSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      replicas: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      fullyLabeledReplicas: 1,
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedReplicaSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1ReplicaSet**|  |
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedReplicaSetScale**
> V1Scale replaceNamespacedReplicaSetScale(body)

replace scale of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedReplicaSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Scale
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      replicas: 1,
    },
    status: {
      replicas: 1,
      selector: "selector_example",
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedReplicaSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Scale**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedReplicaSetStatus**
> V1ReplicaSet replaceNamespacedReplicaSetStatus(body)

replace status of the specified ReplicaSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedReplicaSetStatusRequest = {
  // string | name of the ReplicaSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1ReplicaSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      replicas: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
    },
    status: {
      availableReplicas: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      fullyLabeledReplicas: 1,
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedReplicaSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1ReplicaSet**|  |
 **name** | [**string**] | name of the ReplicaSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1ReplicaSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedStatefulSet**
> V1StatefulSet replaceNamespacedStatefulSet(body)

replace the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedStatefulSetRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1StatefulSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      podManagementPolicy: "podManagementPolicy_example",
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      serviceName: "serviceName_example",
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          partition: 1,
        },
        type: "type_example",
      },
      volumeClaimTemplates: [
        {
          apiVersion: "apiVersion_example",
          kind: "kind_example",
          metadata: {
            annotations: {
              "key": "key_example",
            },
            clusterName: "clusterName_example",
            creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            deletionGracePeriodSeconds: 1,
            deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            finalizers: [
              "finalizers_example",
            ],
            generateName: "generateName_example",
            generation: 1,
            labels: {
              "key": "key_example",
            },
            managedFields: [
              {
                apiVersion: "apiVersion_example",
                fieldsType: "fieldsType_example",
                fieldsV1: {},
                manager: "manager_example",
                operation: "operation_example",
                subresource: "subresource_example",
                time: new Date('1970-01-01T00:00:00.00Z'),
              },
            ],
            name: "name_example",
            namespace: "namespace_example",
            ownerReferences: [
              {
                apiVersion: "apiVersion_example",
                blockOwnerDeletion: true,
                controller: true,
                kind: "kind_example",
                name: "name_example",
                uid: "uid_example",
              },
            ],
            resourceVersion: "resourceVersion_example",
            selfLink: "selfLink_example",
            uid: "uid_example",
          },
          spec: {
            accessModes: [
              "accessModes_example",
            ],
            dataSource: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            dataSourceRef: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            resources: {
              limits: {
                "key": "key_example",
              },
              requests: {
                "key": "key_example",
              },
            },
            selector: {
              matchExpressions: [
                {
                  key: "key_example",
                  operator: "operator_example",
                  values: [
                    "values_example",
                  ],
                },
              ],
              matchLabels: {
                "key": "key_example",
              },
            },
            storageClassName: "storageClassName_example",
            volumeMode: "volumeMode_example",
            volumeName: "volumeName_example",
          },
          status: {
            accessModes: [
              "accessModes_example",
            ],
            capacity: {
              "key": "key_example",
            },
            conditions: [
              {
                lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
                lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
                message: "message_example",
                reason: "reason_example",
                status: "status_example",
                type: "type_example",
              },
            ],
            phase: "phase_example",
          },
        },
      ],
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentReplicas: 1,
      currentRevision: "currentRevision_example",
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      updateRevision: "updateRevision_example",
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedStatefulSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1StatefulSet**|  |
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedStatefulSetScale**
> V1Scale replaceNamespacedStatefulSetScale(body)

replace scale of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedStatefulSetScaleRequest = {
  // string | name of the Scale
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1Scale
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      replicas: 1,
    },
    status: {
      replicas: 1,
      selector: "selector_example",
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedStatefulSetScale(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1Scale**|  |
 **name** | [**string**] | name of the Scale | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1Scale**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **replaceNamespacedStatefulSetStatus**
> V1StatefulSet replaceNamespacedStatefulSetStatus(body)

replace status of the specified StatefulSet

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AppsV1Api(configuration);

let body:.AppsV1ApiReplaceNamespacedStatefulSetStatusRequest = {
  // string | name of the StatefulSet
  name: "name_example",
  // string | object name and auth scope, such as for teams and projects
  namespace: "namespace_example",
  // V1StatefulSet
  body: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      minReadySeconds: 1,
      podManagementPolicy: "podManagementPolicy_example",
      replicas: 1,
      revisionHistoryLimit: 1,
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      serviceName: "serviceName_example",
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          clusterName: "clusterName_example",
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resources: {
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              maxSkew: 1,
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    clusterName: "clusterName_example",
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      updateStrategy: {
        rollingUpdate: {
          partition: 1,
        },
        type: "type_example",
      },
      volumeClaimTemplates: [
        {
          apiVersion: "apiVersion_example",
          kind: "kind_example",
          metadata: {
            annotations: {
              "key": "key_example",
            },
            clusterName: "clusterName_example",
            creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            deletionGracePeriodSeconds: 1,
            deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
            finalizers: [
              "finalizers_example",
            ],
            generateName: "generateName_example",
            generation: 1,
            labels: {
              "key": "key_example",
            },
            managedFields: [
              {
                apiVersion: "apiVersion_example",
                fieldsType: "fieldsType_example",
                fieldsV1: {},
                manager: "manager_example",
                operation: "operation_example",
                subresource: "subresource_example",
                time: new Date('1970-01-01T00:00:00.00Z'),
              },
            ],
            name: "name_example",
            namespace: "namespace_example",
            ownerReferences: [
              {
                apiVersion: "apiVersion_example",
                blockOwnerDeletion: true,
                controller: true,
                kind: "kind_example",
                name: "name_example",
                uid: "uid_example",
              },
            ],
            resourceVersion: "resourceVersion_example",
            selfLink: "selfLink_example",
            uid: "uid_example",
          },
          spec: {
            accessModes: [
              "accessModes_example",
            ],
            dataSource: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            dataSourceRef: {
              apiGroup: "apiGroup_example",
              kind: "kind_example",
              name: "name_example",
            },
            resources: {
              limits: {
                "key": "key_example",
              },
              requests: {
                "key": "key_example",
              },
            },
            selector: {
              matchExpressions: [
                {
                  key: "key_example",
                  operator: "operator_example",
                  values: [
                    "values_example",
                  ],
                },
              ],
              matchLabels: {
                "key": "key_example",
              },
            },
            storageClassName: "storageClassName_example",
            volumeMode: "volumeMode_example",
            volumeName: "volumeName_example",
          },
          status: {
            accessModes: [
              "accessModes_example",
            ],
            capacity: {
              "key": "key_example",
            },
            conditions: [
              {
                lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
                lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
                message: "message_example",
                reason: "reason_example",
                status: "status_example",
                type: "type_example",
              },
            ],
            phase: "phase_example",
          },
        },
      ],
    },
    status: {
      availableReplicas: 1,
      collisionCount: 1,
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      currentReplicas: 1,
      currentRevision: "currentRevision_example",
      observedGeneration: 1,
      readyReplicas: 1,
      replicas: 1,
      updateRevision: "updateRevision_example",
      updatedReplicas: 1,
    },
  },
  // string | If 'true', then the output is pretty printed. (optional)
  pretty: "pretty_example",
  // string | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
  dryRun: "dryRun_example",
  // string | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. (optional)
  fieldManager: "fieldManager_example",
};

apiInstance.replaceNamespacedStatefulSetStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **V1StatefulSet**|  |
 **name** | [**string**] | name of the StatefulSet | defaults to undefined
 **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined
 **pretty** | [**string**] | If &#39;true&#39;, then the output is pretty printed. | (optional) defaults to undefined
 **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined
 **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined


### Return type

**V1StatefulSet**

### Authorization

[BearerToken](README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


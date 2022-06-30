/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
      id
      protectedData
      description
      animator {
        id
        about
        display_name
        email
        private_info
        datas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userDatasId
      owner
    }
  }
`;
export const listData = /* GraphQL */ `
  query ListData(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        protectedData
        description
        animator {
          id
          about
          display_name
          email
          private_info
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userDatasId
        owner
      }
      nextToken
    }
  }
`;
export const searchData = /* GraphQL */ `
  query SearchData(
    $filter: SearchableDataFilterInput
    $sort: [SearchableDataSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableDataAggregationInput]
  ) {
    searchData(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        protectedData
        description
        animator {
          id
          about
          display_name
          email
          private_info
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userDatasId
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      about
      display_name
      email
      private_info
      datas {
        items {
          id
          protectedData
          description
          createdAt
          updatedAt
          userDatasId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        about
        display_name
        email
        private_info
        datas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;

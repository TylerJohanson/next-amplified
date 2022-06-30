/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DeleteUserInput = {
  id: string,
};

export type ModelUserConditionInput = {
  about?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  private_info?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  about?: string | null,
  display_name?: string | null,
  email?: string | null,
  private_info?: string | null,
  datas?: ModelDataConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelDataConnection = {
  __typename: "ModelDataConnection",
  items:  Array<Data | null >,
  nextToken?: string | null,
};

export type Data = {
  __typename: "Data",
  id: string,
  protectedData?: string | null,
  description?: string | null,
  animator?: User | null,
  createdAt: string,
  updatedAt: string,
  userDatasId?: string | null,
  owner?: string | null,
};

export type CreateDataInput = {
  id?: string | null,
  protectedData?: string | null,
  description?: string | null,
  userDatasId?: string | null,
};

export type ModelDataConditionInput = {
  protectedData?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDataConditionInput | null > | null,
  or?: Array< ModelDataConditionInput | null > | null,
  not?: ModelDataConditionInput | null,
  userDatasId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateDataInput = {
  id: string,
  protectedData?: string | null,
  description?: string | null,
  userDatasId?: string | null,
};

export type DeleteDataInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  about?: string | null,
  display_name?: string | null,
  email?: string | null,
  private_info?: string | null,
};

export type UpdateUserInput = {
  id: string,
  about?: string | null,
  display_name?: string | null,
  email?: string | null,
  private_info?: string | null,
};

export type ModelDataFilterInput = {
  id?: ModelIDInput | null,
  protectedData?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelDataFilterInput | null > | null,
  or?: Array< ModelDataFilterInput | null > | null,
  not?: ModelDataFilterInput | null,
  userDatasId?: ModelIDInput | null,
};

export type SearchableDataFilterInput = {
  id?: SearchableIDFilterInput | null,
  protectedData?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  userDatasId?: SearchableIDFilterInput | null,
  and?: Array< SearchableDataFilterInput | null > | null,
  or?: Array< SearchableDataFilterInput | null > | null,
  not?: SearchableDataFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableDataSortInput = {
  field?: SearchableDataSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableDataSortableFields {
  id = "id",
  protectedData = "protectedData",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userDatasId = "userDatasId",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableDataAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableDataAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableDataAggregateField {
  id = "id",
  protectedData = "protectedData",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userDatasId = "userDatasId",
}


export type SearchableDataConnection = {
  __typename: "SearchableDataConnection",
  items:  Array<Data | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  about?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  private_info?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    about?: string | null,
    display_name?: string | null,
    email?: string | null,
    private_info?: string | null,
    datas?:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        protectedData?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userDatasId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDataMutationVariables = {
  input: CreateDataInput,
  condition?: ModelDataConditionInput | null,
};

export type CreateDataMutation = {
  createData?:  {
    __typename: "Data",
    id: string,
    protectedData?: string | null,
    description?: string | null,
    animator?:  {
      __typename: "User",
      id: string,
      about?: string | null,
      display_name?: string | null,
      email?: string | null,
      private_info?: string | null,
      datas?:  {
        __typename: "ModelDataConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDatasId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateDataMutationVariables = {
  input: UpdateDataInput,
  condition?: ModelDataConditionInput | null,
};

export type UpdateDataMutation = {
  updateData?:  {
    __typename: "Data",
    id: string,
    protectedData?: string | null,
    description?: string | null,
    animator?:  {
      __typename: "User",
      id: string,
      about?: string | null,
      display_name?: string | null,
      email?: string | null,
      private_info?: string | null,
      datas?:  {
        __typename: "ModelDataConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDatasId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteDataMutationVariables = {
  input: DeleteDataInput,
  condition?: ModelDataConditionInput | null,
};

export type DeleteDataMutation = {
  deleteData?:  {
    __typename: "Data",
    id: string,
    protectedData?: string | null,
    description?: string | null,
    animator?:  {
      __typename: "User",
      id: string,
      about?: string | null,
      display_name?: string | null,
      email?: string | null,
      private_info?: string | null,
      datas?:  {
        __typename: "ModelDataConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDatasId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    about?: string | null,
    display_name?: string | null,
    email?: string | null,
    private_info?: string | null,
    datas?:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        protectedData?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userDatasId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    about?: string | null,
    display_name?: string | null,
    email?: string | null,
    private_info?: string | null,
    datas?:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        protectedData?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userDatasId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetDataQueryVariables = {
  id: string,
};

export type GetDataQuery = {
  getData?:  {
    __typename: "Data",
    id: string,
    protectedData?: string | null,
    description?: string | null,
    animator?:  {
      __typename: "User",
      id: string,
      about?: string | null,
      display_name?: string | null,
      email?: string | null,
      private_info?: string | null,
      datas?:  {
        __typename: "ModelDataConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userDatasId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListDataQueryVariables = {
  filter?: ModelDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDataQuery = {
  listData?:  {
    __typename: "ModelDataConnection",
    items:  Array< {
      __typename: "Data",
      id: string,
      protectedData?: string | null,
      description?: string | null,
      animator?:  {
        __typename: "User",
        id: string,
        about?: string | null,
        display_name?: string | null,
        email?: string | null,
        private_info?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userDatasId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchDataQueryVariables = {
  filter?: SearchableDataFilterInput | null,
  sort?: Array< SearchableDataSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableDataAggregationInput | null > | null,
};

export type SearchDataQuery = {
  searchData?:  {
    __typename: "SearchableDataConnection",
    items:  Array< {
      __typename: "Data",
      id: string,
      protectedData?: string | null,
      description?: string | null,
      animator?:  {
        __typename: "User",
        id: string,
        about?: string | null,
        display_name?: string | null,
        email?: string | null,
        private_info?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      userDatasId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    about?: string | null,
    display_name?: string | null,
    email?: string | null,
    private_info?: string | null,
    datas?:  {
      __typename: "ModelDataConnection",
      items:  Array< {
        __typename: "Data",
        id: string,
        protectedData?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        userDatasId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      about?: string | null,
      display_name?: string | null,
      email?: string | null,
      private_info?: string | null,
      datas?:  {
        __typename: "ModelDataConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

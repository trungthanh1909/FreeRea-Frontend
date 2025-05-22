# PageRecordResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalPages** | **number** |  | [optional] [default to undefined]
**totalElements** | **number** |  | [optional] [default to undefined]
**size** | **number** |  | [optional] [default to undefined]
**content** | [**Array&lt;RecordResponse&gt;**](RecordResponse.md) |  | [optional] [default to undefined]
**number** | **number** |  | [optional] [default to undefined]
**sort** | [**SortObject**](SortObject.md) |  | [optional] [default to undefined]
**first** | **boolean** |  | [optional] [default to undefined]
**last** | **boolean** |  | [optional] [default to undefined]
**numberOfElements** | **number** |  | [optional] [default to undefined]
**pageable** | [**PageableObject**](PageableObject.md) |  | [optional] [default to undefined]
**empty** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PageRecordResponse } from './api';

const instance: PageRecordResponse = {
    totalPages,
    totalElements,
    size,
    content,
    number,
    sort,
    first,
    last,
    numberOfElements,
    pageable,
    empty,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

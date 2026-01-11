import * as ingest_pb from './node/ingest/v1/ingest_pb';
import * as ingest_grpc_pb from './node/ingest/v1/ingest_grpc_pb';
import * as streaming_pb from './node/streaming/v1/streaming_pb';
import * as streaming_grpc_pb from './node/streaming/v1/streaming_grpc_pb';

export namespace ingest {
  export import v1 = ingest_pb;
  export import v1_grpc = ingest_grpc_pb;
}

export namespace streaming {
  export import v1 = streaming_pb;
  export import v1_grpc = streaming_grpc_pb;
}

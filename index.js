const ingest_pb = require('./node/ingest/v1/ingest_pb');
const ingest_grpc_pb = require('./node/ingest/v1/ingest_grpc_pb');
const streaming_pb = require('./node/streaming/v1/streaming_pb');
const streaming_grpc_pb = require('./node/streaming/v1/streaming_grpc_pb');

module.exports = {
  ingest: {
    v1: {
      ...ingest_pb,
      ...ingest_grpc_pb
    },
    v1_grpc: ingest_grpc_pb
  },
  streaming: {
    v1: {
      ...streaming_pb,
      ...streaming_grpc_pb
    },
    v1_grpc: streaming_grpc_pb
  }
};

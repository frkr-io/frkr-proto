// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ingest_v1_ingest_pb = require('../../ingest/v1/ingest_pb.js');

function serialize_frkr_ingest_v1_IngestRequest(arg) {
  if (!(arg instanceof ingest_v1_ingest_pb.IngestRequest)) {
    throw new Error('Expected argument of type frkr.ingest.v1.IngestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_ingest_v1_IngestRequest(buffer_arg) {
  return ingest_v1_ingest_pb.IngestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_frkr_ingest_v1_IngestResponse(arg) {
  if (!(arg instanceof ingest_v1_ingest_pb.IngestResponse)) {
    throw new Error('Expected argument of type frkr.ingest.v1.IngestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_ingest_v1_IngestResponse(buffer_arg) {
  return ingest_v1_ingest_pb.IngestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// IngestService handles the ingestion of mirrored traffic
var IngestServiceService = exports.IngestServiceService = {
  // Ingest accepts a stream of mirrored requests
ingest: {
    path: '/frkr.ingest.v1.IngestService/Ingest',
    requestStream: false,
    responseStream: false,
    requestType: ingest_v1_ingest_pb.IngestRequest,
    responseType: ingest_v1_ingest_pb.IngestResponse,
    requestSerialize: serialize_frkr_ingest_v1_IngestRequest,
    requestDeserialize: deserialize_frkr_ingest_v1_IngestRequest,
    responseSerialize: serialize_frkr_ingest_v1_IngestResponse,
    responseDeserialize: deserialize_frkr_ingest_v1_IngestResponse,
  },
};

exports.IngestServiceClient = grpc.makeGenericClientConstructor(IngestServiceService, 'IngestService');

// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var streaming_v1_streaming_pb = require('../../streaming/v1/streaming_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_frkr_streaming_v1_ListStreamsRequest(arg) {
  if (!(arg instanceof streaming_v1_streaming_pb.ListStreamsRequest)) {
    throw new Error('Expected argument of type frkr.streaming.v1.ListStreamsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_streaming_v1_ListStreamsRequest(buffer_arg) {
  return streaming_v1_streaming_pb.ListStreamsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_frkr_streaming_v1_ListStreamsResponse(arg) {
  if (!(arg instanceof streaming_v1_streaming_pb.ListStreamsResponse)) {
    throw new Error('Expected argument of type frkr.streaming.v1.ListStreamsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_streaming_v1_ListStreamsResponse(buffer_arg) {
  return streaming_v1_streaming_pb.ListStreamsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_frkr_streaming_v1_OpenStreamRequest(arg) {
  if (!(arg instanceof streaming_v1_streaming_pb.OpenStreamRequest)) {
    throw new Error('Expected argument of type frkr.streaming.v1.OpenStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_streaming_v1_OpenStreamRequest(buffer_arg) {
  return streaming_v1_streaming_pb.OpenStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_frkr_streaming_v1_StreamMessage(arg) {
  if (!(arg instanceof streaming_v1_streaming_pb.StreamMessage)) {
    throw new Error('Expected argument of type frkr.streaming.v1.StreamMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_frkr_streaming_v1_StreamMessage(buffer_arg) {
  return streaming_v1_streaming_pb.StreamMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// StreamingService handles message streaming to CLI clients
var StreamingServiceService = exports.StreamingServiceService = {
  // ListStreams returns all streams the user has access to
listStreams: {
    path: '/frkr.streaming.v1.StreamingService/ListStreams',
    requestStream: false,
    responseStream: false,
    requestType: streaming_v1_streaming_pb.ListStreamsRequest,
    responseType: streaming_v1_streaming_pb.ListStreamsResponse,
    requestSerialize: serialize_frkr_streaming_v1_ListStreamsRequest,
    requestDeserialize: deserialize_frkr_streaming_v1_ListStreamsRequest,
    responseSerialize: serialize_frkr_streaming_v1_ListStreamsResponse,
    responseDeserialize: deserialize_frkr_streaming_v1_ListStreamsResponse,
  },
  // OpenStream opens a stream and sends messages to the client
openStream: {
    path: '/frkr.streaming.v1.StreamingService/OpenStream',
    requestStream: false,
    responseStream: true,
    requestType: streaming_v1_streaming_pb.OpenStreamRequest,
    responseType: streaming_v1_streaming_pb.StreamMessage,
    requestSerialize: serialize_frkr_streaming_v1_OpenStreamRequest,
    requestDeserialize: deserialize_frkr_streaming_v1_OpenStreamRequest,
    responseSerialize: serialize_frkr_streaming_v1_StreamMessage,
    responseDeserialize: deserialize_frkr_streaming_v1_StreamMessage,
  },
};

exports.StreamingServiceClient = grpc.makeGenericClientConstructor(StreamingServiceService, 'StreamingService');

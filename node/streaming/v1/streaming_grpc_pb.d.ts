// package: frkr.streaming.v1
// file: streaming/v1/streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as streaming_v1_streaming_pb from "../../streaming/v1/streaming_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IStreamingServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listStreams: IStreamingServiceService_IListStreams;
    openStream: IStreamingServiceService_IOpenStream;
}

interface IStreamingServiceService_IListStreams extends grpc.MethodDefinition<streaming_v1_streaming_pb.ListStreamsRequest, streaming_v1_streaming_pb.ListStreamsResponse> {
    path: "/frkr.streaming.v1.StreamingService/ListStreams";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<streaming_v1_streaming_pb.ListStreamsRequest>;
    requestDeserialize: grpc.deserialize<streaming_v1_streaming_pb.ListStreamsRequest>;
    responseSerialize: grpc.serialize<streaming_v1_streaming_pb.ListStreamsResponse>;
    responseDeserialize: grpc.deserialize<streaming_v1_streaming_pb.ListStreamsResponse>;
}
interface IStreamingServiceService_IOpenStream extends grpc.MethodDefinition<streaming_v1_streaming_pb.OpenStreamRequest, streaming_v1_streaming_pb.StreamMessage> {
    path: "/frkr.streaming.v1.StreamingService/OpenStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<streaming_v1_streaming_pb.OpenStreamRequest>;
    requestDeserialize: grpc.deserialize<streaming_v1_streaming_pb.OpenStreamRequest>;
    responseSerialize: grpc.serialize<streaming_v1_streaming_pb.StreamMessage>;
    responseDeserialize: grpc.deserialize<streaming_v1_streaming_pb.StreamMessage>;
}

export const StreamingServiceService: IStreamingServiceService;

export interface IStreamingServiceServer extends grpc.UntypedServiceImplementation {
    listStreams: grpc.handleUnaryCall<streaming_v1_streaming_pb.ListStreamsRequest, streaming_v1_streaming_pb.ListStreamsResponse>;
    openStream: grpc.handleServerStreamingCall<streaming_v1_streaming_pb.OpenStreamRequest, streaming_v1_streaming_pb.StreamMessage>;
}

export interface IStreamingServiceClient {
    listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    openStream(request: streaming_v1_streaming_pb.OpenStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streaming_v1_streaming_pb.StreamMessage>;
    openStream(request: streaming_v1_streaming_pb.OpenStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streaming_v1_streaming_pb.StreamMessage>;
}

export class StreamingServiceClient extends grpc.Client implements IStreamingServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public listStreams(request: streaming_v1_streaming_pb.ListStreamsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: streaming_v1_streaming_pb.ListStreamsResponse) => void): grpc.ClientUnaryCall;
    public openStream(request: streaming_v1_streaming_pb.OpenStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streaming_v1_streaming_pb.StreamMessage>;
    public openStream(request: streaming_v1_streaming_pb.OpenStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<streaming_v1_streaming_pb.StreamMessage>;
}

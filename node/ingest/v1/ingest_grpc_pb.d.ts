// package: frkr.ingest.v1
// file: ingest/v1/ingest.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as ingest_v1_ingest_pb from "../../ingest/v1/ingest_pb";

interface IIngestServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    ingest: IIngestServiceService_IIngest;
}

interface IIngestServiceService_IIngest extends grpc.MethodDefinition<ingest_v1_ingest_pb.IngestRequest, ingest_v1_ingest_pb.IngestResponse> {
    path: "/frkr.ingest.v1.IngestService/Ingest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ingest_v1_ingest_pb.IngestRequest>;
    requestDeserialize: grpc.deserialize<ingest_v1_ingest_pb.IngestRequest>;
    responseSerialize: grpc.serialize<ingest_v1_ingest_pb.IngestResponse>;
    responseDeserialize: grpc.deserialize<ingest_v1_ingest_pb.IngestResponse>;
}

export const IngestServiceService: IIngestServiceService;

export interface IIngestServiceServer extends grpc.UntypedServiceImplementation {
    ingest: grpc.handleUnaryCall<ingest_v1_ingest_pb.IngestRequest, ingest_v1_ingest_pb.IngestResponse>;
}

export interface IIngestServiceClient {
    ingest(request: ingest_v1_ingest_pb.IngestRequest, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest(request: ingest_v1_ingest_pb.IngestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    ingest(request: ingest_v1_ingest_pb.IngestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
}

export class IngestServiceClient extends grpc.Client implements IIngestServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public ingest(request: ingest_v1_ingest_pb.IngestRequest, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest(request: ingest_v1_ingest_pb.IngestRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
    public ingest(request: ingest_v1_ingest_pb.IngestRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ingest_v1_ingest_pb.IngestResponse) => void): grpc.ClientUnaryCall;
}

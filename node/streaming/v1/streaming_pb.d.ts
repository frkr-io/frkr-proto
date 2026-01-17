// package: frkr.streaming.v1
// file: streaming/v1/streaming.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListStreamsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStreamsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListStreamsRequest): ListStreamsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStreamsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStreamsRequest;
    static deserializeBinaryFromReader(message: ListStreamsRequest, reader: jspb.BinaryReader): ListStreamsRequest;
}

export namespace ListStreamsRequest {
    export type AsObject = {
    }
}

export class ListStreamsResponse extends jspb.Message { 
    clearStreamsList(): void;
    getStreamsList(): Array<StreamInfo>;
    setStreamsList(value: Array<StreamInfo>): ListStreamsResponse;
    addStreams(value?: StreamInfo, index?: number): StreamInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListStreamsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListStreamsResponse): ListStreamsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListStreamsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListStreamsResponse;
    static deserializeBinaryFromReader(message: ListStreamsResponse, reader: jspb.BinaryReader): ListStreamsResponse;
}

export namespace ListStreamsResponse {
    export type AsObject = {
        streamsList: Array<StreamInfo.AsObject>,
    }
}

export class StreamInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): StreamInfo;
    getTenantId(): string;
    setTenantId(value: string): StreamInfo;
    getName(): string;
    setName(value: string): StreamInfo;
    getDescription(): string;
    setDescription(value: string): StreamInfo;
    getStatus(): string;
    setStatus(value: string): StreamInfo;
    getRetentionDays(): number;
    setRetentionDays(value: number): StreamInfo;
    getTopic(): string;
    setTopic(value: string): StreamInfo;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamInfo;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamInfo;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): StreamInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamInfo.AsObject;
    static toObject(includeInstance: boolean, msg: StreamInfo): StreamInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamInfo;
    static deserializeBinaryFromReader(message: StreamInfo, reader: jspb.BinaryReader): StreamInfo;
}

export namespace StreamInfo {
    export type AsObject = {
        id: string,
        tenantId: string,
        name: string,
        description: string,
        status: string,
        retentionDays: number,
        topic: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OpenStreamRequest extends jspb.Message { 
    getStreamId(): string;
    setStreamId(value: string): OpenStreamRequest;

    hasReplayFrom(): boolean;
    clearReplayFrom(): void;
    getReplayFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReplayFrom(value?: google_protobuf_timestamp_pb.Timestamp): OpenStreamRequest;

    hasReplayTo(): boolean;
    clearReplayTo(): void;
    getReplayTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReplayTo(value?: google_protobuf_timestamp_pb.Timestamp): OpenStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OpenStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OpenStreamRequest): OpenStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OpenStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OpenStreamRequest;
    static deserializeBinaryFromReader(message: OpenStreamRequest, reader: jspb.BinaryReader): OpenStreamRequest;
}

export namespace OpenStreamRequest {
    export type AsObject = {
        streamId: string,
        replayFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        replayTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class StreamMessage extends jspb.Message { 
    getMethod(): string;
    setMethod(value: string): StreamMessage;
    getPath(): string;
    setPath(value: string): StreamMessage;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getBody(): string;
    setBody(value: string): StreamMessage;

    getQueryMap(): jspb.Map<string, string>;
    clearQueryMap(): void;
    getTimestampNs(): number;
    setTimestampNs(value: number): StreamMessage;
    getRequestId(): string;
    setRequestId(value: string): StreamMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamMessage.AsObject;
    static toObject(includeInstance: boolean, msg: StreamMessage): StreamMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamMessage;
    static deserializeBinaryFromReader(message: StreamMessage, reader: jspb.BinaryReader): StreamMessage;
}

export namespace StreamMessage {
    export type AsObject = {
        method: string,
        path: string,

        headersMap: Array<[string, string]>,
        body: string,

        queryMap: Array<[string, string]>,
        timestampNs: number,
        requestId: string,
    }
}

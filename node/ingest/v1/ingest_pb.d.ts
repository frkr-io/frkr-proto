// package: frkr.ingest.v1
// file: ingest/v1/ingest.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IngestRequest extends jspb.Message { 
    getStreamId(): string;
    setStreamId(value: string): IngestRequest;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): MirroredRequest | undefined;
    setRequest(value?: MirroredRequest): IngestRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IngestRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IngestRequest): IngestRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IngestRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IngestRequest;
    static deserializeBinaryFromReader(message: IngestRequest, reader: jspb.BinaryReader): IngestRequest;
}

export namespace IngestRequest {
    export type AsObject = {
        streamId: string,
        request?: MirroredRequest.AsObject,
    }
}

export class MirroredRequest extends jspb.Message { 
    getMethod(): string;
    setMethod(value: string): MirroredRequest;
    getPath(): string;
    setPath(value: string): MirroredRequest;

    getHeadersMap(): jspb.Map<string, string>;
    clearHeadersMap(): void;
    getBody(): string;
    setBody(value: string): MirroredRequest;

    getQueryMap(): jspb.Map<string, string>;
    clearQueryMap(): void;
    getTimestampNs(): number;
    setTimestampNs(value: number): MirroredRequest;
    getRequestId(): string;
    setRequestId(value: string): MirroredRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MirroredRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MirroredRequest): MirroredRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MirroredRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MirroredRequest;
    static deserializeBinaryFromReader(message: MirroredRequest, reader: jspb.BinaryReader): MirroredRequest;
}

export namespace MirroredRequest {
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

export class IngestResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): IngestResponse;
    getError(): string;
    setError(value: string): IngestResponse;
    getMessageId(): string;
    setMessageId(value: string): IngestResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IngestResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IngestResponse): IngestResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IngestResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IngestResponse;
    static deserializeBinaryFromReader(message: IngestResponse, reader: jspb.BinaryReader): IngestResponse;
}

export namespace IngestResponse {
    export type AsObject = {
        success: boolean,
        error: string,
        messageId: string,
    }
}

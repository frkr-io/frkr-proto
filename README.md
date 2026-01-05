# frkr-proto

Protobuf definitions for frkr.

## Purpose

This repository contains the Protocol Buffer (Protobuf) message definitions used across all frkr services. It serves as the single source of truth for message formats and API contracts.

## Structure

```
frkr-proto/
├── proto/
│   ├── ingest.proto      # Ingest Gateway messages
│   └── streaming.proto   # Streaming Gateway messages
├── README.md
└── .gitignore
```

## Usage

### As a Git Submodule

```bash
git submodule add https://github.com/frkr-io/frkr-proto.git proto
```

### As a Go Module Dependency

```go
import "github.com/frkr-io/frkr-proto/proto"
```

## Versioning

This repository uses semantic versioning for message formats. Breaking changes require a new major version.

## License

Apache 2.0


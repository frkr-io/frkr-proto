
# Makefile for frkr-proto

.PHONY: generate generate-go generate-node clean

# Output definitions
GO_OUT_DIR := ./go
# Node definitions
NODE_OUT_DIR := ./node

# Ensure we can find the plugins installed via go install
export PATH := $(shell go env GOPATH)/bin:$(PATH)
# Node plugins
GRPC_TOOLS_NODE_PROTOC_PLUGIN := ./node_modules/.bin/grpc_tools_node_protoc_plugin
GRPC_TOOLS_NODE_PROTOC_TS_PLUGIN := ./node_modules/.bin/protoc-gen-ts

generate: generate-go generate-node

# Go Generation
generate-go:
	@mkdir -p $(GO_OUT_DIR)
	# Clean existing generic code if it exists
	rm -f $(GO_OUT_DIR)/*.pb.go
	# Generate Ingest v1
	protoc --go_out=$(GO_OUT_DIR) --go_opt=module=github.com/frkr-io/frkr-proto/go \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=module=github.com/frkr-io/frkr-proto/go \
		--proto_path=proto \
		proto/ingest/v1/*.proto
	# Generate Streaming v1
	protoc --go_out=$(GO_OUT_DIR) --go_opt=module=github.com/frkr-io/frkr-proto/go \
		--go-grpc_out=$(GO_OUT_DIR) --go-grpc_opt=module=github.com/frkr-io/frkr-proto/go \
		--proto_path=proto \
		proto/streaming/v1/*.proto

# Node/TS Generation
generate-node:
	@mkdir -p $(NODE_OUT_DIR)
	# Generate Ingest v1
	./node_modules/.bin/grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:$(NODE_OUT_DIR) \
		--grpc_out=grpc_js:$(NODE_OUT_DIR) \
		--ts_out=grpc_js:$(NODE_OUT_DIR) \
		--plugin=protoc-gen-grpc=$(GRPC_TOOLS_NODE_PROTOC_PLUGIN) \
		--plugin=protoc-gen-ts=$(GRPC_TOOLS_NODE_PROTOC_TS_PLUGIN) \
		--proto_path=proto \
		proto/ingest/v1/*.proto
	
	# Generate Streaming v1
	./node_modules/.bin/grpc_tools_node_protoc \
		--js_out=import_style=commonjs,binary:$(NODE_OUT_DIR) \
		--grpc_out=grpc_js:$(NODE_OUT_DIR) \
		--ts_out=grpc_js:$(NODE_OUT_DIR) \
		--plugin=protoc-gen-grpc=$(GRPC_TOOLS_NODE_PROTOC_PLUGIN) \
		--plugin=protoc-gen-ts=$(GRPC_TOOLS_NODE_PROTOC_TS_PLUGIN) \
		--proto_path=proto \
		proto/streaming/v1/*.proto

clean:
	rm -rf $(GO_OUT_DIR) $(NODE_OUT_DIR)

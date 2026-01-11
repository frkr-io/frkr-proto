# Development Workflow

This guide outlines the end-to-end process for making changes to the `frkr` schema and propagating them through the system.

## The "Golden Path" for Schema Changes

When you need to modify the API contract (e.g., adding a field to `IngestRequest`):

### 1. Update Protocols (`frkr-proto`)
The `frkr-proto` repository is the source of truth for all schemas.

1.  **Edit**: Modify `.proto` files in `frkr-proto/proto/`.
2.  **Generate**: Run `make generate` in the root of `frkr-proto`.
    *   This updates `frkr-proto/go/...` (Go bindings)
    *   This updates `frkr-proto/node/...` (Node.js/TS bindings)
3.  **Commit & Push**:
    ```bash
    git add .
    git commit -m "feat: add user_id to IngestRequest"
    git push origin main
    ```
    * Tag the release (e.g., `v1.1.0`).
    ```bash
    git tag v1.1.0
    git push origin v1.1.0
    ```

### 2. Update Go Services (`frkr-streaming-gateway`, etc.)
Go services consume the bindings via the Go module system.

**Local Development (with `go.work`)**:
    For example:

```go
go 1.25.5

use (
	./frkr-cli
	./frkr-common
	./frkr-infra-helm
	./frkr-ingest-gateway
	./frkr-operator
	./frkr-proto
	./frkr-streaming-gateway
	./frkr-tools
)
```
*   You can code and build immediately without pushing `frkr-proto`.

**Preparing for Deployment**:
*   Once you are ready to deploy, you must ensure the `go.mod` files reference the new commit.
    ```bash
    cd frkr-ingest-gateway
    go get github.com/frkr-io/frkr-proto@latest
    git add go.mod go.sum
    git commit -m "chore: update proto deps"
    git push
    ```

### 3. Update Node SDK (`frkr-sdk-node`)
The Node SDK pulls the bindings directly from GitHub (or npm if published).

1.  **Update Dependency**:
    ```bash
    cd frkr-sdk-node
    # Force update to the latest commit on main
    npm install github:frkr-io/frkr-proto
    ```
2.  **Implement Changes**: Update the SDK code to utilize the new fields.
3.  **Publish**: Commit and push the SDK, or publish to npm.

### 4. Deployment
*   **Kubernetes**: The build system (e.g., Docker build) will run `go mod download`. Since you updated `go.mod` in Step 2 to point to the new `frkr-proto` commit, the build will succeed and include your changes.
*   **Node Apps**: Consumers run `npm update @frkr-io/sdk-node` to pull your new SDK version.

## Summary

| Component | Dev Mode (Local) | Production Mode |
| :--- | :--- | :--- |
| **Go Services** | `go.work` links local folders. Changes are instant. | `go.mod` pins specific commit. CI pulls from GitHub. |
| **Node SDK** | `npm link ../frkr-proto` (optional) or relative `require`. | `package.json` points to GitHub URL/Version. |

# Changelog

## [0.2.0-next.1](https://github.com/scalar/scalar-node/compare/v0.2.0-next...v0.2.0-next.1) (2026-07-20)


### ⚠ BREAKING CHANGES

* **api:** 6 breaking changes to the SDK surface.
    - Removed environment `local`.
    - Removed operation `schemas.retrieveVersion` (`GET /v1/schemas/{namespace}/{slug}/version/{semver}`).
    - Removed operation `schemas.deleteVersion` (`DELETE /v1/schemas/{namespace}/{slug}/version/{semver}`).
    - Removed operation `schemas.createVersion` (`POST /v1/schemas/{namespace}/{slug}/version`).
    - Removed operation `schemas.createAccessGroup` (`POST /v1/schemas/{namespace}/{slug}/access-group`).
    - Removed operation `schemas.deleteAccessGroup` (`DELETE /v1/schemas/{namespace}/{slug}/access-group`).

### Features

* **api:** remove environment local (+11 more changes) ([aac9cd6](https://github.com/scalar/scalar-node/commit/aac9cd6e8b57461c0bf44ab808b91c4a63f6987f))


### Chores

* **api:** update generated SDK content ([1b00300](https://github.com/scalar/scalar-node/commit/1b003000c3ea886c62436f14b834a0566152d321))

## [0.2.0-next](https://github.com/scalar/scalar-node/compare/v0.1.0...v0.2.0-next) (2026-07-18)


### Features

* **api:** initial SDK generation ([e07421a](https://github.com/scalar/scalar-node/commit/e07421ab800fffecee4f02e36369b567ced0e52e))


### Chores

* **api:** update generated SDK content ([1c0d6b5](https://github.com/scalar/scalar-node/commit/1c0d6b57697ebbf5f1a16afed4b5b197186f80ff))

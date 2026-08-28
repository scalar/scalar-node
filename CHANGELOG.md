# Changelog

## [0.4.1](https://github.com/scalar/scalar-node/compare/v0.4.0...v0.4.1) (2026-08-28)


### Chores

* **api:** update generated SDK content ([ea9f4ab](https://github.com/scalar/scalar-node/commit/ea9f4ab77357b8deae9ee5836f797e30663d230f))

## [0.4.0](https://github.com/scalar/scalar-node/compare/v0.3.1...v0.4.0) (2026-08-28)


### ⚠ BREAKING CHANGES

* **api:** Renamed SDK from `ScalarApi` to `Scalar`.
* **api:** Renamed SDK from `Scalar` to `ScalarApi`.
* **api:** Renamed SDK from `ScalarApi` to `Scalar`.
* **api:** 5 breaking changes to the SDK surface.
    - Removed operation `schemas.version.retrieveSchema` (`GET /v1/schemas/{namespace}/{slug}/version/{semver}`).
    - Removed operation `schemas.version.deleteSchema` (`DELETE /v1/schemas/{namespace}/{slug}/version/{semver}`).
    - Removed operation `schemas.version.createSchema` (`POST /v1/schemas/{namespace}/{slug}/version`).
    - Removed operation `schemas.accessGroup.createSchema` (`POST /v1/schemas/{namespace}/{slug}/access-group`).
    - Removed operation `schemas.accessGroup.deleteSchema` (`DELETE /v1/schemas/{namespace}/{slug}/access-group`).

### Features

* **api:** update SDK name ([274c236](https://github.com/scalar/scalar-node/commit/274c23688058bc3cb6b33c2683f15a70e0b314c0))
* **api:** update SDK name ([a493f8e](https://github.com/scalar/scalar-node/commit/a493f8efbc959086dff2ce28557894cb6bb1dc7c))
* **api:** update SDK name (+1 more change) ([72f78c0](https://github.com/scalar/scalar-node/commit/72f78c0dd0a354e81ee3618b21191349d0e6fe85))
* **api:** update SDK surface (11 changes) ([c44fd5a](https://github.com/scalar/scalar-node/commit/c44fd5aed362781510ff650fc4afb6663da0a590))


### Chores

* **api:** regenerate SDK ([ab0f242](https://github.com/scalar/scalar-node/commit/ab0f242e07f9bb21785ba19eb45bb06b719aac3c))
* **api:** regenerate SDK ([a3f4ed8](https://github.com/scalar/scalar-node/commit/a3f4ed830e5f341f3d7b4eb3b0e6cb280f5b25af))
* **api:** regenerate SDK ([5b4ec77](https://github.com/scalar/scalar-node/commit/5b4ec77ba62174c569f6146c00cab597d4177e49))
* **api:** regenerate SDK ([60cb12d](https://github.com/scalar/scalar-node/commit/60cb12d2cceab4c65cef23a39dbc60c6c8557e93))
* **api:** update generated SDK content ([301cf27](https://github.com/scalar/scalar-node/commit/301cf27b3f982b4ba7ab758de8f183b360b867ac))
* **api:** update generated SDK content ([5861771](https://github.com/scalar/scalar-node/commit/58617719917ac9ea0ba090d6379d888a05d9d865))

## [0.3.1](https://github.com/scalar/scalar-node/compare/v0.3.0...v0.3.1) (2026-07-28)


### Chores

* **api:** update generated SDK content ([c26b7b5](https://github.com/scalar/scalar-node/commit/c26b7b5c8e5b63d3a184637992ffd890498a09a8))
* **api:** update generated SDK content ([d724895](https://github.com/scalar/scalar-node/commit/d72489585d53fcdc3387c28f7b6bc528b289e627))

## [0.3.0](https://github.com/scalar/scalar-node/compare/v0.2.0...v0.3.0) (2026-07-28)


### ⚠ BREAKING CHANGES

* 316 breaking changes to the SDK surface.
    - `400` error response of `registry.listAllApiDocuments` changed from `_400` to `400`.
    - `401` error response of `registry.listAllApiDocuments` changed from `_401` to `401`.
    - `403` error response of `registry.listAllApiDocuments` changed from `_403` to `403`.
    - `404` error response of `registry.listAllApiDocuments` changed from `_404` to `404`.
    - `422` error response of `registry.listAllApiDocuments` changed from `_422` to `422`.
    - `500` error response of `registry.listAllApiDocuments` changed from `_500` to `500`.
    - `400` error response of `registry.listApiDocuments` changed from `_400` to `400`.
    - `401` error response of `registry.listApiDocuments` changed from `_401` to `401`.
    - `403` error response of `registry.listApiDocuments` changed from `_403` to `403`.
    - `404` error response of `registry.listApiDocuments` changed from `_404` to `404`.
    - `422` error response of `registry.listApiDocuments` changed from `_422` to `422`.
    - `500` error response of `registry.listApiDocuments` changed from `_500` to `500`.
    - `400` error response of `registry.createApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.updateApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.updateApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.updateApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.updateApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.updateApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.updateApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.retrieveApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.retrieveApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.retrieveApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.retrieveApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.retrieveApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.retrieveApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.updateApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.updateApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.updateApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.updateApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.updateApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.updateApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocumentVersion` changed from `_500` to `500`.
    - Response of `registry.listApiDocumentVersionMetadata` changed from `ManagedDocVersion` to `managed_doc_version`.
    - `400` error response of `registry.listApiDocumentVersionMetadata` changed from `_400` to `400`.
    - `401` error response of `registry.listApiDocumentVersionMetadata` changed from `_401` to `401`.
    - `403` error response of `registry.listApiDocumentVersionMetadata` changed from `_403` to `403`.
    - `404` error response of `registry.listApiDocumentVersionMetadata` changed from `_404` to `404`.
    - `422` error response of `registry.listApiDocumentVersionMetadata` changed from `_422` to `422`.
    - `500` error response of `registry.listApiDocumentVersionMetadata` changed from `_500` to `500`.
    - Response of `registry.createApiDocumentVersion` changed from `ManagedDocVersion` to `managed_doc_version`.
    - `400` error response of `registry.createApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.createApiDocumentAccessGroup` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocumentAccessGroup` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocumentAccessGroup` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocumentAccessGroup` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocumentAccessGroup` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocumentAccessGroup` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocumentAccessGroup` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocumentAccessGroup` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocumentAccessGroup` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocumentAccessGroup` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocumentAccessGroup` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocumentAccessGroup` changed from `_500` to `500`.
    - `400` error response of `schemas.list` changed from `_400` to `400`.
    - `401` error response of `schemas.list` changed from `_401` to `401`.
    - `403` error response of `schemas.list` changed from `_403` to `403`.
    - `404` error response of `schemas.list` changed from `_404` to `404`.
    - `422` error response of `schemas.list` changed from `_422` to `422`.
    - `500` error response of `schemas.list` changed from `_500` to `500`.
    - Response of `schemas.create` changed from `Uid` to `uid`.
    - `400` error response of `schemas.create` changed from `_400` to `400`.
    - `401` error response of `schemas.create` changed from `_401` to `401`.
    - `403` error response of `schemas.create` changed from `_403` to `403`.
    - `404` error response of `schemas.create` changed from `_404` to `404`.
    - `422` error response of `schemas.create` changed from `_422` to `422`.
    - `500` error response of `schemas.create` changed from `_500` to `500`.
    - `400` error response of `schemas.update` changed from `_400` to `400`.
    - `401` error response of `schemas.update` changed from `_401` to `401`.
    - `403` error response of `schemas.update` changed from `_403` to `403`.
    - `404` error response of `schemas.update` changed from `_404` to `404`.
    - `422` error response of `schemas.update` changed from `_422` to `422`.
    - `500` error response of `schemas.update` changed from `_500` to `500`.
    - `400` error response of `schemas.delete` changed from `_400` to `400`.
    - `401` error response of `schemas.delete` changed from `_401` to `401`.
    - `403` error response of `schemas.delete` changed from `_403` to `403`.
    - `404` error response of `schemas.delete` changed from `_404` to `404`.
    - `422` error response of `schemas.delete` changed from `_422` to `422`.
    - `500` error response of `schemas.delete` changed from `_500` to `500`.
    - `400` error response of `schemas.version.retrieveSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.retrieveSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.retrieveSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.retrieveSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.retrieveSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.retrieveSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.version.deleteSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.deleteSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.deleteSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.deleteSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.deleteSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.deleteSchema` changed from `_500` to `500`.
    - Response of `schemas.version.createSchema` changed from `Uid` to `uid`.
    - `400` error response of `schemas.version.createSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.createSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.createSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.createSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.createSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.createSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.accessGroup.createSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.accessGroup.createSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.accessGroup.createSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.accessGroup.createSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.accessGroup.createSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.accessGroup.createSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.accessGroup.deleteSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.accessGroup.deleteSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.accessGroup.deleteSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.accessGroup.deleteSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.accessGroup.deleteSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.accessGroup.deleteSchema` changed from `_500` to `500`.
    - `400` error response of `loginPortals.retrieve` changed from `_400` to `400`.
    - `401` error response of `loginPortals.retrieve` changed from `_401` to `401`.
    - `403` error response of `loginPortals.retrieve` changed from `_403` to `403`.
    - `404` error response of `loginPortals.retrieve` changed from `_404` to `404`.
    - `422` error response of `loginPortals.retrieve` changed from `_422` to `422`.
    - `500` error response of `loginPortals.retrieve` changed from `_500` to `500`.
    - `400` error response of `loginPortals.update` changed from `_400` to `400`.
    - `401` error response of `loginPortals.update` changed from `_401` to `401`.
    - `403` error response of `loginPortals.update` changed from `_403` to `403`.
    - `404` error response of `loginPortals.update` changed from `_404` to `404`.
    - `422` error response of `loginPortals.update` changed from `_422` to `422`.
    - `500` error response of `loginPortals.update` changed from `_500` to `500`.
    - `400` error response of `loginPortals.delete` changed from `_400` to `400`.
    - `401` error response of `loginPortals.delete` changed from `_401` to `401`.
    - `403` error response of `loginPortals.delete` changed from `_403` to `403`.
    - `404` error response of `loginPortals.delete` changed from `_404` to `404`.
    - `422` error response of `loginPortals.delete` changed from `_422` to `422`.
    - `500` error response of `loginPortals.delete` changed from `_500` to `500`.
    - Response of `loginPortals.create` changed from `Uid` to `uid`.
    - `400` error response of `loginPortals.create` changed from `_400` to `400`.
    - `401` error response of `loginPortals.create` changed from `_401` to `401`.
    - `403` error response of `loginPortals.create` changed from `_403` to `403`.
    - `404` error response of `loginPortals.create` changed from `_404` to `404`.
    - `422` error response of `loginPortals.create` changed from `_422` to `422`.
    - `500` error response of `loginPortals.create` changed from `_500` to `500`.
    - `400` error response of `loginPortals.list` changed from `_400` to `400`.
    - `401` error response of `loginPortals.list` changed from `_401` to `401`.
    - `403` error response of `loginPortals.list` changed from `_403` to `403`.
    - `404` error response of `loginPortals.list` changed from `_404` to `404`.
    - `422` error response of `loginPortals.list` changed from `_422` to `422`.
    - `500` error response of `loginPortals.list` changed from `_500` to `500`.
    - `400` error response of `rules.listRulesets` changed from `_400` to `400`.
    - `401` error response of `rules.listRulesets` changed from `_401` to `401`.
    - `403` error response of `rules.listRulesets` changed from `_403` to `403`.
    - `404` error response of `rules.listRulesets` changed from `_404` to `404`.
    - `422` error response of `rules.listRulesets` changed from `_422` to `422`.
    - `500` error response of `rules.listRulesets` changed from `_500` to `500`.
    - Response of `rules.createRuleset` changed from `Uid` to `uid`.
    - `400` error response of `rules.createRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.createRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.createRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.createRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.createRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.createRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.updateRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.updateRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.updateRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.updateRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.updateRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.updateRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.deleteRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.deleteRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.deleteRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.deleteRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.deleteRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.deleteRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.retrieveRulesetDocument` changed from `_400` to `400`.
    - `401` error response of `rules.retrieveRulesetDocument` changed from `_401` to `401`.
    - `403` error response of `rules.retrieveRulesetDocument` changed from `_403` to `403`.
    - `404` error response of `rules.retrieveRulesetDocument` changed from `_404` to `404`.
    - `422` error response of `rules.retrieveRulesetDocument` changed from `_422` to `422`.
    - `500` error response of `rules.retrieveRulesetDocument` changed from `_500` to `500`.
    - `400` error response of `rules.createRulesetAccessGroup` changed from `_400` to `400`.
    - `401` error response of `rules.createRulesetAccessGroup` changed from `_401` to `401`.
    - `403` error response of `rules.createRulesetAccessGroup` changed from `_403` to `403`.
    - `404` error response of `rules.createRulesetAccessGroup` changed from `_404` to `404`.
    - `422` error response of `rules.createRulesetAccessGroup` changed from `_422` to `422`.
    - `500` error response of `rules.createRulesetAccessGroup` changed from `_500` to `500`.
    - `400` error response of `rules.deleteRulesetAccessGroup` changed from `_400` to `400`.
    - `401` error response of `rules.deleteRulesetAccessGroup` changed from `_401` to `401`.
    - `403` error response of `rules.deleteRulesetAccessGroup` changed from `_403` to `403`.
    - `404` error response of `rules.deleteRulesetAccessGroup` changed from `_404` to `404`.
    - `422` error response of `rules.deleteRulesetAccessGroup` changed from `_422` to `422`.
    - `500` error response of `rules.deleteRulesetAccessGroup` changed from `_500` to `500`.
    - `400` error response of `themes.list` changed from `_400` to `400`.
    - `401` error response of `themes.list` changed from `_401` to `401`.
    - `403` error response of `themes.list` changed from `_403` to `403`.
    - `404` error response of `themes.list` changed from `_404` to `404`.
    - `422` error response of `themes.list` changed from `_422` to `422`.
    - `500` error response of `themes.list` changed from `_500` to `500`.
    - Response of `themes.create` changed from `Uid` to `uid`.
    - `400` error response of `themes.create` changed from `_400` to `400`.
    - `401` error response of `themes.create` changed from `_401` to `401`.
    - `403` error response of `themes.create` changed from `_403` to `403`.
    - `404` error response of `themes.create` changed from `_404` to `404`.
    - `422` error response of `themes.create` changed from `_422` to `422`.
    - `500` error response of `themes.create` changed from `_500` to `500`.
    - `400` error response of `themes.update` changed from `_400` to `400`.
    - `401` error response of `themes.update` changed from `_401` to `401`.
    - `403` error response of `themes.update` changed from `_403` to `403`.
    - `404` error response of `themes.update` changed from `_404` to `404`.
    - `422` error response of `themes.update` changed from `_422` to `422`.
    - `500` error response of `themes.update` changed from `_500` to `500`.
    - `400` error response of `themes.replaceDocument` changed from `_400` to `400`.
    - `401` error response of `themes.replaceDocument` changed from `_401` to `401`.
    - `403` error response of `themes.replaceDocument` changed from `_403` to `403`.
    - `404` error response of `themes.replaceDocument` changed from `_404` to `404`.
    - `422` error response of `themes.replaceDocument` changed from `_422` to `422`.
    - `500` error response of `themes.replaceDocument` changed from `_500` to `500`.
    - `400` error response of `themes.delete` changed from `_400` to `400`.
    - `401` error response of `themes.delete` changed from `_401` to `401`.
    - `403` error response of `themes.delete` changed from `_403` to `403`.
    - `404` error response of `themes.delete` changed from `_404` to `404`.
    - `422` error response of `themes.delete` changed from `_422` to `422`.
    - `500` error response of `themes.delete` changed from `_500` to `500`.
    - `400` error response of `themes.retrieve` changed from `_400` to `400`.
    - `401` error response of `themes.retrieve` changed from `_401` to `401`.
    - `403` error response of `themes.retrieve` changed from `_403` to `403`.
    - `404` error response of `themes.retrieve` changed from `_404` to `404`.
    - `422` error response of `themes.retrieve` changed from `_422` to `422`.
    - `500` error response of `themes.retrieve` changed from `_500` to `500`.
    - `400` error response of `teams.list` changed from `_400` to `400`.
    - `401` error response of `teams.list` changed from `_401` to `401`.
    - `403` error response of `teams.list` changed from `_403` to `403`.
    - `404` error response of `teams.list` changed from `_404` to `404`.
    - `422` error response of `teams.list` changed from `_422` to `422`.
    - `500` error response of `teams.list` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.listGuides` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.listGuides` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.listGuides` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.listGuides` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.listGuides` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.listGuides` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.createGuide` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.createGuide` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.createGuide` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.createGuide` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.createGuide` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.createGuide` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.publishGuide` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.publishGuide` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.publishGuide` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.publishGuide` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.publishGuide` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.publishGuide` changed from `_500` to `500`.
    - `400` error response of `namespaces.list` changed from `_400` to `400`.
    - `401` error response of `namespaces.list` changed from `_401` to `401`.
    - `403` error response of `namespaces.list` changed from `_403` to `403`.
    - `404` error response of `namespaces.list` changed from `_404` to `404`.
    - `422` error response of `namespaces.list` changed from `_422` to `422`.
    - `500` error response of `namespaces.list` changed from `_500` to `500`.
    - `400` error response of `authentication.exchangePersonalToken` changed from `_400` to `400`.
    - `401` error response of `authentication.exchangePersonalToken` changed from `_401` to `401`.
    - `403` error response of `authentication.exchangePersonalToken` changed from `_403` to `403`.
    - `404` error response of `authentication.exchangePersonalToken` changed from `_404` to `404`.
    - `422` error response of `authentication.exchangePersonalToken` changed from `_422` to `422`.
    - `500` error response of `authentication.exchangePersonalToken` changed from `_500` to `500`.
    - Response of `authentication.listCurrentUser` changed from `User` to `user`.
    - `400` error response of `authentication.listCurrentUser` changed from `_400` to `400`.
    - `401` error response of `authentication.listCurrentUser` changed from `_401` to `401`.
    - `403` error response of `authentication.listCurrentUser` changed from `_403` to `403`.
    - `404` error response of `authentication.listCurrentUser` changed from `_404` to `404`.
    - `422` error response of `authentication.listCurrentUser` changed from `_422` to `422`.
    - `500` error response of `authentication.listCurrentUser` changed from `_500` to `500`.
    - Removed schema `_400`.
    - Removed schema `_401`.
    - Removed schema `_403`.
    - Removed schema `_404`.
    - Removed schema `_422`.
    - Removed schema `_500`.
    - Removed schema `ApiDocument`.
    - Removed schema `Nanoid`.
    - Removed schema `Version`.
    - Removed schema `Slug`.
    - Removed schema `Namespace`.
    - Removed schema `ManagedDocVersion`.
    - Removed schema `Method`.
    - Removed schema `AccessGroup`.
    - Removed schema `Schema`.
    - Removed schema `ManagedSchemaVersion`.
    - Removed schema `Timestamp`.
    - Removed schema `Uid`.
    - Removed schema `LoginPortalEmail`.
    - Removed schema `LoginPortalPage`.
    - Removed schema `LoginPortal`.
    - Removed schema `Rule`.
    - Removed schema `Theme`.
    - Removed schema `Team`.
    - Removed schema `TeamName`.
    - Removed schema `TeamImage`.
    - Removed schema `GithubProject`.
    - Removed schema `ActiveDeployment`.
    - Removed schema `GithubProjectRepository`.
    - Removed schema `Email`.
    - Removed schema `TeamSummary`.
    - Removed schema `User`.

### release

* 0.2.0-next ([#50](https://github.com/scalar/scalar-node/issues/50)) ([d3c0185](https://github.com/scalar/scalar-node/commit/d3c018595ff07f17a39c1f70e128c02bf618b2c4))


### Features

* access-service-typescript@0.0.2 ([d14ee3e](https://github.com/scalar/scalar-node/commit/d14ee3ed0f754757e682eba03b33d9c27cf28de9))
* access-service-typescript@0.0.3 ([24244f0](https://github.com/scalar/scalar-node/commit/24244f096db19f3a49edfb85ea55e30e25470dfa))
* access-service-typescript@0.0.4 ([92ecd32](https://github.com/scalar/scalar-node/commit/92ecd3276e36fc1f922c5c226f1a5d666bf23e16))
* access-service-typescript@0.0.5 ([f656d70](https://github.com/scalar/scalar-node/commit/f656d7026c828a51d846c70514a9c37aec447c81))
* access-service-typescript@0.0.5 ([771f91c](https://github.com/scalar/scalar-node/commit/771f91c695ca20edd278a29ddb838a52f3f46b59))
* access-service-typescript@0.0.6 ([36a8f4d](https://github.com/scalar/scalar-node/commit/36a8f4d21527bd9a543438452da6e9fb308001d4))
* access-service-typescript@0.1.0 ([1cc48cd](https://github.com/scalar/scalar-node/commit/1cc48cd9507cfdd2d33ad28558967ae65b5a5f31))
* access-service-typescript@0.1.0 ([39416f4](https://github.com/scalar/scalar-node/commit/39416f48ecee21e5b21f8b4c40dacd0d623f31c9))
* access-service-typescript@0.1.0 ([61a08a6](https://github.com/scalar/scalar-node/commit/61a08a6e34bfeac1e2f661944261e80cec5fb4c6))
* access-service-typescript@0.1.0 ([8f69593](https://github.com/scalar/scalar-node/commit/8f695933eef8ca3001d13f69c14cdc31f0acddac))
* access-service-typescript@0.1.1 ([1cb8fbc](https://github.com/scalar/scalar-node/commit/1cb8fbccc13b330b5cf4c1f369104946052a8bfd))
* access-service-typescript@0.1.1 ([c831175](https://github.com/scalar/scalar-node/commit/c8311754b698c513bb8ae056fd79eb6b668fe450))
* access-service-typescript@0.1.1 ([b278169](https://github.com/scalar/scalar-node/commit/b278169ca4dfbb8449224053fb8099c24536707f))
* access-service-typescript@0.1.1 ([2e3128e](https://github.com/scalar/scalar-node/commit/2e3128e38af6f54bc1377256a37daed076486242))
* access-service-typescript@0.1.1 ([c8383d2](https://github.com/scalar/scalar-node/commit/c8383d279ca472e1bc792ba42a58618e185c4570))
* access-service-typescript@0.1.1 ([e13606f](https://github.com/scalar/scalar-node/commit/e13606fab0f34d76d1f511ddb694ef871b235b63))
* access-service-typescript@0.1.1 ([1a9d025](https://github.com/scalar/scalar-node/commit/1a9d025493fc8e3edf5568964e6f7ac270edbfde))
* access-service-typescript@0.1.2 ([#14](https://github.com/scalar/scalar-node/issues/14)) ([f0830ea](https://github.com/scalar/scalar-node/commit/f0830ea3179dc2d9b46b8aa6ac15003117e980b1))
* **api:** initial SDK generation ([ff3b3d6](https://github.com/scalar/scalar-node/commit/ff3b3d603873bb16118c24a75c37aa4687fa5c19))
* **mcp-server:** clean-up mcp ([2fac1a0](https://github.com/scalar/scalar-node/commit/2fac1a03eb50e20be020cd33195646ced0e422b7))
* scalar-typescript-sdk@0.1.4 ([#22](https://github.com/scalar/scalar-node/issues/22)) ([e663174](https://github.com/scalar/scalar-node/commit/e663174ec252e4cf725a779c885137b29c6cf98e))
* scalar-typescript-sdk@0.1.5 ([#24](https://github.com/scalar/scalar-node/issues/24)) ([95227ef](https://github.com/scalar/scalar-node/commit/95227effa45c5ecdf96ecd0c4fd27649f3bec0e2))
* scalar-typescript-sdk@0.2.0 ([#29](https://github.com/scalar/scalar-node/issues/29)) ([6a58508](https://github.com/scalar/scalar-node/commit/6a585089a6c284ac694e31b8dcdd917cfcb841d1))
* scalar-typescript-sdk@0.2.3 ([#32](https://github.com/scalar/scalar-node/issues/32)) ([5698017](https://github.com/scalar/scalar-node/commit/5698017f16a1178bbbb5d9565bfa984f9c06b07d))
* scalar-typescript-sdk@0.2.6 ([#34](https://github.com/scalar/scalar-node/issues/34)) ([f3a5cf2](https://github.com/scalar/scalar-node/commit/f3a5cf2924546b579073fe1ff3a3b1df1cca6ccf))
* **sdk:** 0.1.2 ([0bd29a0](https://github.com/scalar/scalar-node/commit/0bd29a0f5eda43a3baedcd8e041d5bdec79a6a0e))
* **typescript-sdk:** 0.1.4 ([8c93702](https://github.com/scalar/scalar-node/commit/8c93702335ca94a3ce0f8bab1128bfa25a979ecd))


### Chores

* configure renovate ([#16](https://github.com/scalar/scalar-node/issues/16)) ([dce1d70](https://github.com/scalar/scalar-node/commit/dce1d7024e149369ca53603b61ba685656497e74))
* renovate schedule ([#17](https://github.com/scalar/scalar-node/issues/17)) ([44c1b63](https://github.com/scalar/scalar-node/commit/44c1b63f7ca2e643423190aea3cb5177fed0f4f5))
* use trusted publishing in ci ([#30](https://github.com/scalar/scalar-node/issues/30)) ([0c30504](https://github.com/scalar/scalar-node/commit/0c30504213c34f6f8797ffb1e9303aabfa6be0da))

## [0.2.0-next](https://github.com/scalar/scalar-node/compare/v0.1.0...v0.2.0-next) (2026-07-24)


### ⚠ BREAKING CHANGES

* **api:** 316 breaking changes to the SDK surface.
    - `400` error response of `registry.listAllApiDocuments` changed from `_400` to `400`.
    - `401` error response of `registry.listAllApiDocuments` changed from `_401` to `401`.
    - `403` error response of `registry.listAllApiDocuments` changed from `_403` to `403`.
    - `404` error response of `registry.listAllApiDocuments` changed from `_404` to `404`.
    - `422` error response of `registry.listAllApiDocuments` changed from `_422` to `422`.
    - `500` error response of `registry.listAllApiDocuments` changed from `_500` to `500`.
    - `400` error response of `registry.listApiDocuments` changed from `_400` to `400`.
    - `401` error response of `registry.listApiDocuments` changed from `_401` to `401`.
    - `403` error response of `registry.listApiDocuments` changed from `_403` to `403`.
    - `404` error response of `registry.listApiDocuments` changed from `_404` to `404`.
    - `422` error response of `registry.listApiDocuments` changed from `_422` to `422`.
    - `500` error response of `registry.listApiDocuments` changed from `_500` to `500`.
    - `400` error response of `registry.createApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.updateApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.updateApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.updateApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.updateApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.updateApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.updateApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocument` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocument` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocument` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocument` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocument` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocument` changed from `_500` to `500`.
    - `400` error response of `registry.retrieveApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.retrieveApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.retrieveApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.retrieveApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.retrieveApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.retrieveApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.updateApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.updateApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.updateApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.updateApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.updateApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.updateApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocumentVersion` changed from `_500` to `500`.
    - Response of `registry.listApiDocumentVersionMetadata` changed from `ManagedDocVersion` to `managed_doc_version`.
    - `400` error response of `registry.listApiDocumentVersionMetadata` changed from `_400` to `400`.
    - `401` error response of `registry.listApiDocumentVersionMetadata` changed from `_401` to `401`.
    - `403` error response of `registry.listApiDocumentVersionMetadata` changed from `_403` to `403`.
    - `404` error response of `registry.listApiDocumentVersionMetadata` changed from `_404` to `404`.
    - `422` error response of `registry.listApiDocumentVersionMetadata` changed from `_422` to `422`.
    - `500` error response of `registry.listApiDocumentVersionMetadata` changed from `_500` to `500`.
    - Response of `registry.createApiDocumentVersion` changed from `ManagedDocVersion` to `managed_doc_version`.
    - `400` error response of `registry.createApiDocumentVersion` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocumentVersion` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocumentVersion` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocumentVersion` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocumentVersion` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocumentVersion` changed from `_500` to `500`.
    - `400` error response of `registry.createApiDocumentAccessGroup` changed from `_400` to `400`.
    - `401` error response of `registry.createApiDocumentAccessGroup` changed from `_401` to `401`.
    - `403` error response of `registry.createApiDocumentAccessGroup` changed from `_403` to `403`.
    - `404` error response of `registry.createApiDocumentAccessGroup` changed from `_404` to `404`.
    - `422` error response of `registry.createApiDocumentAccessGroup` changed from `_422` to `422`.
    - `500` error response of `registry.createApiDocumentAccessGroup` changed from `_500` to `500`.
    - `400` error response of `registry.deleteApiDocumentAccessGroup` changed from `_400` to `400`.
    - `401` error response of `registry.deleteApiDocumentAccessGroup` changed from `_401` to `401`.
    - `403` error response of `registry.deleteApiDocumentAccessGroup` changed from `_403` to `403`.
    - `404` error response of `registry.deleteApiDocumentAccessGroup` changed from `_404` to `404`.
    - `422` error response of `registry.deleteApiDocumentAccessGroup` changed from `_422` to `422`.
    - `500` error response of `registry.deleteApiDocumentAccessGroup` changed from `_500` to `500`.
    - `400` error response of `schemas.list` changed from `_400` to `400`.
    - `401` error response of `schemas.list` changed from `_401` to `401`.
    - `403` error response of `schemas.list` changed from `_403` to `403`.
    - `404` error response of `schemas.list` changed from `_404` to `404`.
    - `422` error response of `schemas.list` changed from `_422` to `422`.
    - `500` error response of `schemas.list` changed from `_500` to `500`.
    - Response of `schemas.create` changed from `Uid` to `uid`.
    - `400` error response of `schemas.create` changed from `_400` to `400`.
    - `401` error response of `schemas.create` changed from `_401` to `401`.
    - `403` error response of `schemas.create` changed from `_403` to `403`.
    - `404` error response of `schemas.create` changed from `_404` to `404`.
    - `422` error response of `schemas.create` changed from `_422` to `422`.
    - `500` error response of `schemas.create` changed from `_500` to `500`.
    - `400` error response of `schemas.update` changed from `_400` to `400`.
    - `401` error response of `schemas.update` changed from `_401` to `401`.
    - `403` error response of `schemas.update` changed from `_403` to `403`.
    - `404` error response of `schemas.update` changed from `_404` to `404`.
    - `422` error response of `schemas.update` changed from `_422` to `422`.
    - `500` error response of `schemas.update` changed from `_500` to `500`.
    - `400` error response of `schemas.delete` changed from `_400` to `400`.
    - `401` error response of `schemas.delete` changed from `_401` to `401`.
    - `403` error response of `schemas.delete` changed from `_403` to `403`.
    - `404` error response of `schemas.delete` changed from `_404` to `404`.
    - `422` error response of `schemas.delete` changed from `_422` to `422`.
    - `500` error response of `schemas.delete` changed from `_500` to `500`.
    - `400` error response of `schemas.version.retrieveSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.retrieveSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.retrieveSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.retrieveSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.retrieveSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.retrieveSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.version.deleteSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.deleteSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.deleteSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.deleteSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.deleteSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.deleteSchema` changed from `_500` to `500`.
    - Response of `schemas.version.createSchema` changed from `Uid` to `uid`.
    - `400` error response of `schemas.version.createSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.version.createSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.version.createSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.version.createSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.version.createSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.version.createSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.accessGroup.createSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.accessGroup.createSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.accessGroup.createSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.accessGroup.createSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.accessGroup.createSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.accessGroup.createSchema` changed from `_500` to `500`.
    - `400` error response of `schemas.accessGroup.deleteSchema` changed from `_400` to `400`.
    - `401` error response of `schemas.accessGroup.deleteSchema` changed from `_401` to `401`.
    - `403` error response of `schemas.accessGroup.deleteSchema` changed from `_403` to `403`.
    - `404` error response of `schemas.accessGroup.deleteSchema` changed from `_404` to `404`.
    - `422` error response of `schemas.accessGroup.deleteSchema` changed from `_422` to `422`.
    - `500` error response of `schemas.accessGroup.deleteSchema` changed from `_500` to `500`.
    - `400` error response of `loginPortals.retrieve` changed from `_400` to `400`.
    - `401` error response of `loginPortals.retrieve` changed from `_401` to `401`.
    - `403` error response of `loginPortals.retrieve` changed from `_403` to `403`.
    - `404` error response of `loginPortals.retrieve` changed from `_404` to `404`.
    - `422` error response of `loginPortals.retrieve` changed from `_422` to `422`.
    - `500` error response of `loginPortals.retrieve` changed from `_500` to `500`.
    - `400` error response of `loginPortals.update` changed from `_400` to `400`.
    - `401` error response of `loginPortals.update` changed from `_401` to `401`.
    - `403` error response of `loginPortals.update` changed from `_403` to `403`.
    - `404` error response of `loginPortals.update` changed from `_404` to `404`.
    - `422` error response of `loginPortals.update` changed from `_422` to `422`.
    - `500` error response of `loginPortals.update` changed from `_500` to `500`.
    - `400` error response of `loginPortals.delete` changed from `_400` to `400`.
    - `401` error response of `loginPortals.delete` changed from `_401` to `401`.
    - `403` error response of `loginPortals.delete` changed from `_403` to `403`.
    - `404` error response of `loginPortals.delete` changed from `_404` to `404`.
    - `422` error response of `loginPortals.delete` changed from `_422` to `422`.
    - `500` error response of `loginPortals.delete` changed from `_500` to `500`.
    - Response of `loginPortals.create` changed from `Uid` to `uid`.
    - `400` error response of `loginPortals.create` changed from `_400` to `400`.
    - `401` error response of `loginPortals.create` changed from `_401` to `401`.
    - `403` error response of `loginPortals.create` changed from `_403` to `403`.
    - `404` error response of `loginPortals.create` changed from `_404` to `404`.
    - `422` error response of `loginPortals.create` changed from `_422` to `422`.
    - `500` error response of `loginPortals.create` changed from `_500` to `500`.
    - `400` error response of `loginPortals.list` changed from `_400` to `400`.
    - `401` error response of `loginPortals.list` changed from `_401` to `401`.
    - `403` error response of `loginPortals.list` changed from `_403` to `403`.
    - `404` error response of `loginPortals.list` changed from `_404` to `404`.
    - `422` error response of `loginPortals.list` changed from `_422` to `422`.
    - `500` error response of `loginPortals.list` changed from `_500` to `500`.
    - `400` error response of `rules.listRulesets` changed from `_400` to `400`.
    - `401` error response of `rules.listRulesets` changed from `_401` to `401`.
    - `403` error response of `rules.listRulesets` changed from `_403` to `403`.
    - `404` error response of `rules.listRulesets` changed from `_404` to `404`.
    - `422` error response of `rules.listRulesets` changed from `_422` to `422`.
    - `500` error response of `rules.listRulesets` changed from `_500` to `500`.
    - Response of `rules.createRuleset` changed from `Uid` to `uid`.
    - `400` error response of `rules.createRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.createRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.createRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.createRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.createRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.createRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.updateRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.updateRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.updateRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.updateRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.updateRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.updateRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.deleteRuleset` changed from `_400` to `400`.
    - `401` error response of `rules.deleteRuleset` changed from `_401` to `401`.
    - `403` error response of `rules.deleteRuleset` changed from `_403` to `403`.
    - `404` error response of `rules.deleteRuleset` changed from `_404` to `404`.
    - `422` error response of `rules.deleteRuleset` changed from `_422` to `422`.
    - `500` error response of `rules.deleteRuleset` changed from `_500` to `500`.
    - `400` error response of `rules.retrieveRulesetDocument` changed from `_400` to `400`.
    - `401` error response of `rules.retrieveRulesetDocument` changed from `_401` to `401`.
    - `403` error response of `rules.retrieveRulesetDocument` changed from `_403` to `403`.
    - `404` error response of `rules.retrieveRulesetDocument` changed from `_404` to `404`.
    - `422` error response of `rules.retrieveRulesetDocument` changed from `_422` to `422`.
    - `500` error response of `rules.retrieveRulesetDocument` changed from `_500` to `500`.
    - `400` error response of `rules.createRulesetAccessGroup` changed from `_400` to `400`.
    - `401` error response of `rules.createRulesetAccessGroup` changed from `_401` to `401`.
    - `403` error response of `rules.createRulesetAccessGroup` changed from `_403` to `403`.
    - `404` error response of `rules.createRulesetAccessGroup` changed from `_404` to `404`.
    - `422` error response of `rules.createRulesetAccessGroup` changed from `_422` to `422`.
    - `500` error response of `rules.createRulesetAccessGroup` changed from `_500` to `500`.
    - `400` error response of `rules.deleteRulesetAccessGroup` changed from `_400` to `400`.
    - `401` error response of `rules.deleteRulesetAccessGroup` changed from `_401` to `401`.
    - `403` error response of `rules.deleteRulesetAccessGroup` changed from `_403` to `403`.
    - `404` error response of `rules.deleteRulesetAccessGroup` changed from `_404` to `404`.
    - `422` error response of `rules.deleteRulesetAccessGroup` changed from `_422` to `422`.
    - `500` error response of `rules.deleteRulesetAccessGroup` changed from `_500` to `500`.
    - `400` error response of `themes.list` changed from `_400` to `400`.
    - `401` error response of `themes.list` changed from `_401` to `401`.
    - `403` error response of `themes.list` changed from `_403` to `403`.
    - `404` error response of `themes.list` changed from `_404` to `404`.
    - `422` error response of `themes.list` changed from `_422` to `422`.
    - `500` error response of `themes.list` changed from `_500` to `500`.
    - Response of `themes.create` changed from `Uid` to `uid`.
    - `400` error response of `themes.create` changed from `_400` to `400`.
    - `401` error response of `themes.create` changed from `_401` to `401`.
    - `403` error response of `themes.create` changed from `_403` to `403`.
    - `404` error response of `themes.create` changed from `_404` to `404`.
    - `422` error response of `themes.create` changed from `_422` to `422`.
    - `500` error response of `themes.create` changed from `_500` to `500`.
    - `400` error response of `themes.update` changed from `_400` to `400`.
    - `401` error response of `themes.update` changed from `_401` to `401`.
    - `403` error response of `themes.update` changed from `_403` to `403`.
    - `404` error response of `themes.update` changed from `_404` to `404`.
    - `422` error response of `themes.update` changed from `_422` to `422`.
    - `500` error response of `themes.update` changed from `_500` to `500`.
    - `400` error response of `themes.replaceDocument` changed from `_400` to `400`.
    - `401` error response of `themes.replaceDocument` changed from `_401` to `401`.
    - `403` error response of `themes.replaceDocument` changed from `_403` to `403`.
    - `404` error response of `themes.replaceDocument` changed from `_404` to `404`.
    - `422` error response of `themes.replaceDocument` changed from `_422` to `422`.
    - `500` error response of `themes.replaceDocument` changed from `_500` to `500`.
    - `400` error response of `themes.delete` changed from `_400` to `400`.
    - `401` error response of `themes.delete` changed from `_401` to `401`.
    - `403` error response of `themes.delete` changed from `_403` to `403`.
    - `404` error response of `themes.delete` changed from `_404` to `404`.
    - `422` error response of `themes.delete` changed from `_422` to `422`.
    - `500` error response of `themes.delete` changed from `_500` to `500`.
    - `400` error response of `themes.retrieve` changed from `_400` to `400`.
    - `401` error response of `themes.retrieve` changed from `_401` to `401`.
    - `403` error response of `themes.retrieve` changed from `_403` to `403`.
    - `404` error response of `themes.retrieve` changed from `_404` to `404`.
    - `422` error response of `themes.retrieve` changed from `_422` to `422`.
    - `500` error response of `themes.retrieve` changed from `_500` to `500`.
    - `400` error response of `teams.list` changed from `_400` to `400`.
    - `401` error response of `teams.list` changed from `_401` to `401`.
    - `403` error response of `teams.list` changed from `_403` to `403`.
    - `404` error response of `teams.list` changed from `_404` to `404`.
    - `422` error response of `teams.list` changed from `_422` to `422`.
    - `500` error response of `teams.list` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.listGuides` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.listGuides` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.listGuides` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.listGuides` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.listGuides` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.listGuides` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.createGuide` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.createGuide` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.createGuide` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.createGuide` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.createGuide` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.createGuide` changed from `_500` to `500`.
    - `400` error response of `scalarDocs.publishGuide` changed from `_400` to `400`.
    - `401` error response of `scalarDocs.publishGuide` changed from `_401` to `401`.
    - `403` error response of `scalarDocs.publishGuide` changed from `_403` to `403`.
    - `404` error response of `scalarDocs.publishGuide` changed from `_404` to `404`.
    - `422` error response of `scalarDocs.publishGuide` changed from `_422` to `422`.
    - `500` error response of `scalarDocs.publishGuide` changed from `_500` to `500`.
    - `400` error response of `namespaces.list` changed from `_400` to `400`.
    - `401` error response of `namespaces.list` changed from `_401` to `401`.
    - `403` error response of `namespaces.list` changed from `_403` to `403`.
    - `404` error response of `namespaces.list` changed from `_404` to `404`.
    - `422` error response of `namespaces.list` changed from `_422` to `422`.
    - `500` error response of `namespaces.list` changed from `_500` to `500`.
    - `400` error response of `authentication.exchangePersonalToken` changed from `_400` to `400`.
    - `401` error response of `authentication.exchangePersonalToken` changed from `_401` to `401`.
    - `403` error response of `authentication.exchangePersonalToken` changed from `_403` to `403`.
    - `404` error response of `authentication.exchangePersonalToken` changed from `_404` to `404`.
    - `422` error response of `authentication.exchangePersonalToken` changed from `_422` to `422`.
    - `500` error response of `authentication.exchangePersonalToken` changed from `_500` to `500`.
    - Response of `authentication.listCurrentUser` changed from `User` to `user`.
    - `400` error response of `authentication.listCurrentUser` changed from `_400` to `400`.
    - `401` error response of `authentication.listCurrentUser` changed from `_401` to `401`.
    - `403` error response of `authentication.listCurrentUser` changed from `_403` to `403`.
    - `404` error response of `authentication.listCurrentUser` changed from `_404` to `404`.
    - `422` error response of `authentication.listCurrentUser` changed from `_422` to `422`.
    - `500` error response of `authentication.listCurrentUser` changed from `_500` to `500`.
    - Removed schema `_400`.
    - Removed schema `_401`.
    - Removed schema `_403`.
    - Removed schema `_404`.
    - Removed schema `_422`.
    - Removed schema `_500`.
    - Removed schema `ApiDocument`.
    - Removed schema `Nanoid`.
    - Removed schema `Version`.
    - Removed schema `Slug`.
    - Removed schema `Namespace`.
    - Removed schema `ManagedDocVersion`.
    - Removed schema `Method`.
    - Removed schema `AccessGroup`.
    - Removed schema `Schema`.
    - Removed schema `ManagedSchemaVersion`.
    - Removed schema `Timestamp`.
    - Removed schema `Uid`.
    - Removed schema `LoginPortalEmail`.
    - Removed schema `LoginPortalPage`.
    - Removed schema `LoginPortal`.
    - Removed schema `Rule`.
    - Removed schema `Theme`.
    - Removed schema `Team`.
    - Removed schema `TeamName`.
    - Removed schema `TeamImage`.
    - Removed schema `GithubProject`.
    - Removed schema `ActiveDeployment`.
    - Removed schema `GithubProjectRepository`.
    - Removed schema `Email`.
    - Removed schema `TeamSummary`.
    - Removed schema `User`.

### Features

* access-service-typescript@0.0.2 ([d14ee3e](https://github.com/scalar/scalar-node/commit/d14ee3ed0f754757e682eba03b33d9c27cf28de9))
* access-service-typescript@0.0.3 ([24244f0](https://github.com/scalar/scalar-node/commit/24244f096db19f3a49edfb85ea55e30e25470dfa))
* access-service-typescript@0.0.4 ([92ecd32](https://github.com/scalar/scalar-node/commit/92ecd3276e36fc1f922c5c226f1a5d666bf23e16))
* access-service-typescript@0.0.5 ([f656d70](https://github.com/scalar/scalar-node/commit/f656d7026c828a51d846c70514a9c37aec447c81))
* access-service-typescript@0.0.5 ([771f91c](https://github.com/scalar/scalar-node/commit/771f91c695ca20edd278a29ddb838a52f3f46b59))
* access-service-typescript@0.0.6 ([36a8f4d](https://github.com/scalar/scalar-node/commit/36a8f4d21527bd9a543438452da6e9fb308001d4))
* access-service-typescript@0.1.0 ([1cc48cd](https://github.com/scalar/scalar-node/commit/1cc48cd9507cfdd2d33ad28558967ae65b5a5f31))
* access-service-typescript@0.1.0 ([39416f4](https://github.com/scalar/scalar-node/commit/39416f48ecee21e5b21f8b4c40dacd0d623f31c9))
* access-service-typescript@0.1.0 ([61a08a6](https://github.com/scalar/scalar-node/commit/61a08a6e34bfeac1e2f661944261e80cec5fb4c6))
* access-service-typescript@0.1.0 ([8f69593](https://github.com/scalar/scalar-node/commit/8f695933eef8ca3001d13f69c14cdc31f0acddac))
* access-service-typescript@0.1.1 ([1cb8fbc](https://github.com/scalar/scalar-node/commit/1cb8fbccc13b330b5cf4c1f369104946052a8bfd))
* access-service-typescript@0.1.1 ([c831175](https://github.com/scalar/scalar-node/commit/c8311754b698c513bb8ae056fd79eb6b668fe450))
* access-service-typescript@0.1.1 ([b278169](https://github.com/scalar/scalar-node/commit/b278169ca4dfbb8449224053fb8099c24536707f))
* access-service-typescript@0.1.1 ([2e3128e](https://github.com/scalar/scalar-node/commit/2e3128e38af6f54bc1377256a37daed076486242))
* access-service-typescript@0.1.1 ([c8383d2](https://github.com/scalar/scalar-node/commit/c8383d279ca472e1bc792ba42a58618e185c4570))
* access-service-typescript@0.1.1 ([e13606f](https://github.com/scalar/scalar-node/commit/e13606fab0f34d76d1f511ddb694ef871b235b63))
* access-service-typescript@0.1.1 ([1a9d025](https://github.com/scalar/scalar-node/commit/1a9d025493fc8e3edf5568964e6f7ac270edbfde))
* access-service-typescript@0.1.2 ([#14](https://github.com/scalar/scalar-node/issues/14)) ([f0830ea](https://github.com/scalar/scalar-node/commit/f0830ea3179dc2d9b46b8aa6ac15003117e980b1))
* **api:** initial SDK generation ([ed96912](https://github.com/scalar/scalar-node/commit/ed969123b5d4df46bbb0e5ac58b4615fcd11ddfa))
* **api:** update SDK surface (349 changes) ([9ac54a5](https://github.com/scalar/scalar-node/commit/9ac54a5120116fc3ade102f804708ff9f74085d9))
* **mcp-server:** clean-up mcp ([2fac1a0](https://github.com/scalar/scalar-node/commit/2fac1a03eb50e20be020cd33195646ced0e422b7))
* scalar-typescript-sdk@0.1.4 ([#22](https://github.com/scalar/scalar-node/issues/22)) ([e663174](https://github.com/scalar/scalar-node/commit/e663174ec252e4cf725a779c885137b29c6cf98e))
* scalar-typescript-sdk@0.1.5 ([#24](https://github.com/scalar/scalar-node/issues/24)) ([95227ef](https://github.com/scalar/scalar-node/commit/95227effa45c5ecdf96ecd0c4fd27649f3bec0e2))
* scalar-typescript-sdk@0.2.0 ([#29](https://github.com/scalar/scalar-node/issues/29)) ([6a58508](https://github.com/scalar/scalar-node/commit/6a585089a6c284ac694e31b8dcdd917cfcb841d1))
* scalar-typescript-sdk@0.2.3 ([#32](https://github.com/scalar/scalar-node/issues/32)) ([5698017](https://github.com/scalar/scalar-node/commit/5698017f16a1178bbbb5d9565bfa984f9c06b07d))
* scalar-typescript-sdk@0.2.6 ([#34](https://github.com/scalar/scalar-node/issues/34)) ([f3a5cf2](https://github.com/scalar/scalar-node/commit/f3a5cf2924546b579073fe1ff3a3b1df1cca6ccf))
* **sdk:** 0.1.2 ([0bd29a0](https://github.com/scalar/scalar-node/commit/0bd29a0f5eda43a3baedcd8e041d5bdec79a6a0e))
* **typescript-sdk:** 0.1.4 ([8c93702](https://github.com/scalar/scalar-node/commit/8c93702335ca94a3ce0f8bab1128bfa25a979ecd))


### Chores

* **api:** regenerate SDK ([fdf8757](https://github.com/scalar/scalar-node/commit/fdf87575f1cd3ae28fb0e0cfc19023fb33869cce))
* **api:** regenerate SDK ([a288869](https://github.com/scalar/scalar-node/commit/a28886942c8d9dbf010dff5947a99edd5010b2aa))
* **api:** update generated SDK content ([43464a8](https://github.com/scalar/scalar-node/commit/43464a8e8cb12cc6e22ac0d7e6416263168eb242))
* configure renovate ([#16](https://github.com/scalar/scalar-node/issues/16)) ([dce1d70](https://github.com/scalar/scalar-node/commit/dce1d7024e149369ca53603b61ba685656497e74))
* renovate schedule ([#17](https://github.com/scalar/scalar-node/issues/17)) ([44c1b63](https://github.com/scalar/scalar-node/commit/44c1b63f7ca2e643423190aea3cb5177fed0f4f5))
* use trusted publishing in ci ([#30](https://github.com/scalar/scalar-node/issues/30)) ([0c30504](https://github.com/scalar/scalar-node/commit/0c30504213c34f6f8797ffb1e9303aabfa6be0da))

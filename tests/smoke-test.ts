// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs'

// The default export is the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Scalar from "@scalar/sdk"

// One shared client runs every case.
const client = new Scalar()

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: "listAllApiDocuments",
    method: "GET",
    path: "/v1/apis",
    run: async () => {
      const listAllAPIDocuments = await client.registry.listAllAPIDocuments();
    },
  },

  {
    operation: "listApiDocuments",
    method: "GET",
    path: "/v1/apis/{namespace}",
    run: async () => {
      const listAPIDocuments = await client.registry.listAPIDocuments("namespace");
    },
  },

  {
    operation: "createApiDocument",
    method: "POST",
    path: "/v1/apis/{namespace}",
    run: async () => {
      const createAPIDocument = await client.registry.createAPIDocument("namespace", {
        title: "",
        version: "",
        slug: "",
        document: "",
      });
    },
  },

  {
    operation: "updateApiDocument",
    method: "PATCH",
    path: "/v1/apis/{namespace}/{slug}",
    run: async () => {
      await client.registry.updateAPIDocument("namespace", "slug", {});
    },
  },

  {
    operation: "deleteApiDocument",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}",
    run: async () => {
      await client.registry.deleteAPIDocument("namespace", "slug");
    },
  },

  {
    operation: "retrieveApiDocumentVersion",
    method: "GET",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    run: async () => {
      const string_ = await client.registry.retrieveAPIDocumentVersion("namespace", "slug", "semver");
    },
  },

  {
    operation: "updateApiDocumentVersion",
    method: "PATCH",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    run: async () => {
      const updateAPIDocumentVersion = await client.registry.updateAPIDocumentVersion("namespace", "slug", "semver", {
        document: "",
      });
    },
  },

  {
    operation: "deleteApiDocumentVersion",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}",
    run: async () => {
      await client.registry.deleteAPIDocumentVersion("namespace", "slug", "semver");
    },
  },

  {
    operation: "listApiDocumentVersionMetadata",
    method: "GET",
    path: "/v1/apis/{namespace}/{slug}/version/{semver}/metadata",
    run: async () => {
      const listAPIDocumentVersionMetadata = await client.registry.listAPIDocumentVersionMetadata("namespace", "slug", "semver");
    },
  },

  {
    operation: "createApiDocumentVersion",
    method: "POST",
    path: "/v1/apis/{namespace}/{slug}/version",
    run: async () => {
      const createAPIDocumentVersion = await client.registry.createAPIDocumentVersion("namespace", "slug", {
        version: "",
        document: "",
      });
    },
  },

  {
    operation: "createApiDocumentAccessGroup",
    method: "POST",
    path: "/v1/apis/{namespace}/{slug}/access-group",
    run: async () => {
      await client.registry.createAPIDocumentAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "deleteApiDocumentAccessGroup",
    method: "DELETE",
    path: "/v1/apis/{namespace}/{slug}/access-group",
    run: async () => {
      await client.registry.deleteAPIDocumentAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/schemas/{namespace}",
    run: async () => {
      const list = await client.schemas.list("namespace");
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/schemas/{namespace}",
    run: async () => {
      const create = await client.schemas.create("namespace", {
        title: "",
        version: "",
        slug: "",
        document: "",
      });
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/schemas/{namespace}/{slug}",
    run: async () => {
      await client.schemas.update("namespace", "slug", {});
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}",
    run: async () => {
      await client.schemas.delete("namespace", "slug");
    },
  },

  {
    operation: "retrieveVersion",
    method: "GET",
    path: "/v1/schemas/{namespace}/{slug}/version/{semver}",
    run: async () => {
      const string_ = await client.schemas.retrieveVersion("namespace", "slug", "semver");
    },
  },

  {
    operation: "deleteVersion",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}/version/{semver}",
    run: async () => {
      await client.schemas.deleteVersion("namespace", "slug", "semver");
    },
  },

  {
    operation: "createVersion",
    method: "POST",
    path: "/v1/schemas/{namespace}/{slug}/version",
    run: async () => {
      const createVersion = await client.schemas.createVersion("namespace", "slug", {
        version: "",
        document: "",
      });
    },
  },

  {
    operation: "createAccessGroup",
    method: "POST",
    path: "/v1/schemas/{namespace}/{slug}/access-group",
    run: async () => {
      await client.schemas.createAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "deleteAccessGroup",
    method: "DELETE",
    path: "/v1/schemas/{namespace}/{slug}/access-group",
    run: async () => {
      await client.schemas.deleteAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/login-portals/{slug}",
    run: async () => {
      const retrieve = await client.loginPortals.retrieve("slug");
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/login-portals/{slug}",
    run: async () => {
      await client.loginPortals.update("slug", {});
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/login-portals/{slug}",
    run: async () => {
      await client.loginPortals.delete("slug");
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/login-portals",
    run: async () => {
      const create = await client.loginPortals.create({
        title: "",
        slug: "",
        email: {
          logo: "",
          logoSize: "100",
          buttonText: "Login",
          message: "Click to access private documentation hosted by scalar.com",
          title: "Private Docs",
          mainColor: "#2a2f45",
          mainBackground: "#f6f6f6",
          cardColor: "2a2f45",
          cardBackground: "#fff",
          buttonColor: "#fff",
          buttonBackground: "#0f0f0f",
        },
        page: {
          title: "Scalar Private Docs",
          description: "Login to access your documentation",
          head: "",
          script: "",
          theme: "",
          companyName: "",
          logo: "",
          logoURL: "",
          favicon: "",
          termsLink: "",
          privacyLink: "",
          formTitle: "Scalar Private Docs",
          formDescription: "Login to access your documentation",
          formImage: "",
        },
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/login-portals",
    run: async () => {
      const list = await client.loginPortals.list();
    },
  },

  {
    operation: "listRulesets",
    method: "GET",
    path: "/v1/rulesets/{namespace}",
    run: async () => {
      const listRulesets = await client.rules.listRulesets("namespace");
    },
  },

  {
    operation: "createRuleset",
    method: "POST",
    path: "/v1/rulesets/{namespace}",
    run: async () => {
      const createRuleset = await client.rules.createRuleset("namespace", {
        title: "",
        slug: "",
        document: "",
      });
    },
  },

  {
    operation: "updateRuleset",
    method: "PATCH",
    path: "/v1/rulesets/{namespace}/{slug}",
    run: async () => {
      await client.rules.updateRuleset("namespace", "slug", {});
    },
  },

  {
    operation: "deleteRuleset",
    method: "DELETE",
    path: "/v1/rulesets/{namespace}/{slug}",
    run: async () => {
      await client.rules.deleteRuleset("namespace", "slug");
    },
  },

  {
    operation: "retrieveRulesetDocument",
    method: "GET",
    path: "/v1/rulesets/{namespace}/{slug}",
    run: async () => {
      const string_ = await client.rules.retrieveRulesetDocument("namespace", "slug");
    },
  },

  {
    operation: "createRulesetAccessGroup",
    method: "POST",
    path: "/v1/rulesets/{namespace}/{slug}/access-group",
    run: async () => {
      await client.rules.createRulesetAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "deleteRulesetAccessGroup",
    method: "DELETE",
    path: "/v1/rulesets/{namespace}/{slug}/access-group",
    run: async () => {
      await client.rules.deleteRulesetAccessGroup("namespace", "slug", {
        accessGroupSlug: "",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/themes",
    run: async () => {
      const list = await client.themes.list();
    },
  },

  {
    operation: "create",
    method: "POST",
    path: "/v1/themes",
    run: async () => {
      const create = await client.themes.create({
        name: "",
        slug: "",
        document: "",
      });
    },
  },

  {
    operation: "update",
    method: "PATCH",
    path: "/v1/themes/{slug}",
    run: async () => {
      await client.themes.update("slug", {});
    },
  },

  {
    operation: "replaceDocument",
    method: "PUT",
    path: "/v1/themes/{slug}",
    run: async () => {
      await client.themes.replaceDocument("slug", {
        document: "",
      });
    },
  },

  {
    operation: "delete",
    method: "DELETE",
    path: "/v1/themes/{slug}",
    run: async () => {
      await client.themes.delete("slug");
    },
  },

  {
    operation: "retrieve",
    method: "GET",
    path: "/v1/themes/{slug}",
    run: async () => {
      const string_ = await client.themes.retrieve("slug");
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/teams",
    run: async () => {
      const list = await client.teams.list();
    },
  },

  {
    operation: "listGuides",
    method: "GET",
    path: "/v1/guides",
    run: async () => {
      const listGuides = await client.scalarDocs.listGuides();
    },
  },

  {
    operation: "createGuide",
    method: "POST",
    path: "/v1/guides",
    run: async () => {
      const createGuide = await client.scalarDocs.createGuide({
        name: "",
        isPrivate: false,
        allowedUsers: [],
        allowedDomains: [],
      });
    },
  },

  {
    operation: "publishGuide",
    method: "POST",
    path: "/v1/guides/{slug}/publish",
    run: async () => {
      const publishGuide = await client.scalarDocs.publishGuide("slug");
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/v1/namespaces",
    run: async () => {
      const list = await client.namespaces.list();
    },
  },

  {
    operation: "exchangePersonalToken",
    method: "POST",
    path: "/v1/auth/exchange",
    run: async () => {
      const exchangePersonalToken = await client.authentication.exchangePersonalToken({
        personalToken: "",
      });
    },
  },

  {
    operation: "listCurrentUser",
    method: "GET",
    path: "/v1/auth/me",
    run: async () => {
      const listCurrentUser = await client.authentication.listCurrentUser();
    },
  },

]

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        await testCase.run()
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()

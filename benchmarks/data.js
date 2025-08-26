window.BENCHMARK_DATA = {
  "lastUpdate": 1756237994853,
  "repoUrl": "https://github.com/MazBenOscar/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cac43ed3843e100c7a225a5519510c8f8d296595",
          "message": "Merge pull request #155 from czlonkowski/update-n8n-dependencies\n\nchore: update n8n dependencies to v1.107.4",
          "timestamp": "2025-08-20T19:53:10+02:00",
          "tree_id": "22242f23b6c77f2ac5d007164e37e81514fa536c",
          "url": "https://github.com/MazBenOscar/n8n-mcp/commit/cac43ed3843e100c7a225a5519510c8f8d296595"
        },
        "date": 1756237994454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "unit": "ms",
            "range": 0.3688,
            "extra": "52828 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1574,
            "unit": "ms",
            "range": 0.6721999999999997,
            "extra": "317 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2772,
            "extra": "214298 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0716,
            "unit": "ms",
            "range": 0.33640000000000003,
            "extra": "13975 ops/sec"
          }
        ]
      }
    ]
  }
}
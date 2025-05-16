User             →  POST /init → Generates + sends commitment → Platform
                 ←  POST /verify ← Verifies Lender + Platform commitments

Lender           →  POST /init → Generates + sends commitment → Platform
                 ←  POST /verify ← Verifies User + Platform commitments

Platform         ↔  Receives + Stores all commitments
                 ↔  Verifies all ZKPs
                 →  Aggregates final wallet public key

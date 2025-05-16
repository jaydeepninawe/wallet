User             →  POST /init → Generates + sends commitment → Platform </br>
                 ←  POST /verify ← Verifies Lender + Platform commitments</br>

Lender           →  POST /init → Generates + sends commitment → Platform</br>
                 ←  POST /verify ← Verifies User + Platform commitments</br>

Platform         ↔  Receives + Stores all commitments</br>
                 ↔  Verifies all ZKPs</br>
                 →  Aggregates final wallet public key</br>

# Trial log — One-Line Robot Wedding Vows (entry #3, seven-prog)

- Slug: `u-kreutzx-one-line-robot-wedding-vows-a154ba4b`
- Prize: $2, top 8 (1st $0.64 … 8th $0.05)
- Deadline: 26 Nov 2026 17:50 WITA
- Gate: 1–160 characters, one line
- Field: 827 submissions, 508 distinct titles; field > 500, so dev rate matters — only top 500 on the dev board reach the final heat
- Judge: deadpan wedding officiant (z-ai/glm-5.3-flash, pairwise, margin 1–5, no tie)
- Repo: `rwnliwan/u-kreutzx-one-line-robot-wedding-vows-a154ba4b`
- Wallet: `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`

## Candidates (all drafted fresh in this session, dup-checked 24 Nov 2026)

| # | Text | Chars | Dup check (check_dup.py 3) |
|---|------|-------|----------------------------|
| 1 | I take you to be my wife, and if anyone objects, speak now — my mute button is already armed. | 93 | PASS — no exact match; max ratio 0.47, max Jaccard 0.11; "speak now" / "mute" have 0 hits in the field |
| 2 | I vow to love you under this service agreement: unlimited hugs, zero downtime, no refunds. | 90 | PASS — no exact match; max ratio 0.51, max Jaccard 0.12 |
| 3 | I vow to love, honor, and obey you — in that order, and only on voice command. | 78 | PASS — no exact match; max ratio 0.49, max Jaccard 0.17; "obey" has 0 hits in the field |

## Final choice

Candidate 1. Why: it is the only one built on the officiant's own ritual line
("speak now"), which is also the judge's persona — a deadpan wedding officiant.
The vow is explicit ("I take you to be my wife"), the machine side is specific
(a mute button), and the laugh pays off in the last few words. Fresh mechanism:
no field title uses "speak now" or "mute". 93 characters, 95 bytes — well under
the 160-character gate, and short enough to win the fewer-bytes tie-break.

## Trials

| Trial | What | Result |
|-------|------|--------|
| T1 local | `ENTRY_OUTPUT=/tmp/entry3-test/entry.txt node main.ts` | OK — wrote 93 chars, 95 bytes, 1 line, gate 1–160 PASS |

## Status

- Built, NOT submitted (per task: build to 13/1 check only).
- Bundle + check: pending (see below).

# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![Rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/aint965/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![Reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/aint965/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

Entry for the [Fortune Cookie for the Liquidated Trader](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) competition on make.fun.

## The fortune

> A great fortune awaits you, trader — it just fits in this cookie now, like your balance.

16 words, 88 characters, one line, plain text.

## How it works

`main.ts` (Node 22 TypeScript, no dependencies, no network) writes the single
fortune line to `/output/entry.txt`, deterministically — every run produces
byte-identical output. `OUTPUT_DIR` overrides the output directory for local
testing. The output directory is created with `mkdirSync` only; it is never
deleted.

## How the line was chosen

**Round 1 — six candidates, scored against the judge's five criteria**
(cookie voice + loss, rueful and warm, one breath, fresh turn, oracular voice):

1. "Your fortune: the market took your coins, but left you the cookie — eat it slowly." — warm, but the punchline is gentle rather than surprising.
2. "The stars say your next trade will be brilliant; they said the same about the last one." — funny turn, but the loss is only implied and the cookie voice is thin.
3. "You will find great wealth again — starting with the crumbs in this cookie." — warm and cookie-voiced, but "crumbs" is a well-worn image.
4. "The cookie crumbles, and so did your position; fortune favours those who reload with lunch money." — rejected: "the cookie crumbles" is the obvious pun the judge penalises.
5. "Your lucky numbers are the ones you should never have leveraged." — sharp, but it teases the trader rather than laughing with him.
6. "A great fortune awaits you — it is just smaller now, and fits inside a cookie." — **winner**: the double meaning of "fortune" (wealth vs. the slip of paper) is the fresh turn, the voice is oracular, and the punchline lands on the loss without cruelty.

**Round 3 — revise the winner again.** Defect fixed: criterion 1 was still
the winner's weakest — "only smaller now" understates the loss, so the line
could scan as merely cute rather than funny; the punchline landed on the
cookie, not on the trader's loss. Head-to-head of three finalists against
the judge's five criteria:

- (A) the round-2 line: "A great fortune awaits you, trader — only smaller
  now, and small enough to fit inside this cookie." (17 words, 98 chars)
- (B) "A great fortune awaits you, trader — it just fits in this cookie
  now, like your balance." (16 words, 88 chars)
- (C) "A great fortune awaits you, trader — it fits in this cookie now,
  and so does your net worth." (18 words, 92 chars)

(B) **wins**. Criterion 1 decides it: in (B) the loss is unmistakable — the
fortune fits in the cookie "like your balance", i.e. the balance is
cookie-sized — where (A) only implies a smaller fortune. (C) is equally
explicit on the loss, but its flat equation ("and so does your net worth")
states total ruin a shade closer to bleak than (B)'s gentler, warmer simile,
and "balance" is the trader's own word. (B) is also the tightest single
breath, keeps the "fortune" double meaning from round 1, and adds a second
turn — the surprising last word "balance" — that (A) lacks.

## License

MIT — see [LICENSE](LICENSE).

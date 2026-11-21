# Vice City Trophy Guide — GTA VI (PS5)

[![GTA 6 Trophy Guide bounty](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![Rank](https://make.fun/badge/gta6-trophy-guide-01/rizalagustin448-bit/gta6-trophy-guide-01-bot-v5/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01)
[![Reward](https://make.fun/badge/gta6-trophy-guide-01/rizalagustin448-bit/gta6-trophy-guide-01-bot-v5/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01)

An offline web app that guides you to the GTA VI platinum on PS5: all 55 trophies with a plain-English route to each, a 3-step roadmap, a tracker that saves in your browser, filters by tier and kind, and a spoiler guard for the story trophies.

## What is inside

- **55 trophies** — 1 platinum, 2 gold, 6 silver, 46 bronze. Every trophy has its official description plus a guide written for this app.
- **Roadmap to the platinum** — Step 1: story and side strands (60–80 hours). Step 2: the 100% completion checklist and 70 of 80 challenges (~100 hours). Step 3: Strangers & Freaks and cleanup (~10 hours). About 200 hours in total, one playthrough.
- **Tracker** — tick a trophy off and it stays ticked (localStorage, nothing leaves your browser). The progress bar and the tier counters update as you go.
- **Filters** — search by name or guide text, filter by tier or kind, show missable-only or earned-only.
- **Spoiler guard** — story trophy names and guides stay hidden until you press "Show story spoilers".

## The one missable moment

Only one trophy may be missable: **Positive Mental Attitude** (#28). In Chapter 1, one morning at Jason's house, Lucia talks about meditating and walks out to the balcony. Follow her, talk to her and choose Accept. That meditation disappears after Chapter 1. Everything else can be finished in free roam after the story.

## Run it locally

No build step, no network needed. Serve the folder and open it:

```sh
node serve.ts
# then open http://localhost:8080
```

Or serve `app/` with any static server and open `app/index.html`. The guide reads `app/data/trophies.json` and nothing else.

## Trophy counts

| Tier | Count |
| --- | --- |
| Platinum | 1 |
| Gold | 2 |
| Silver | 6 |
| Bronze | 46 |
| **Total** | **55** |

Kinds: story 12, activity 11, side strands & misc 15, collectible 6, crime 7, combat 2, completion 1, platinum 1.

## Sources

- PowerPyx — GTA 6 Trophy Guide & Roadmap: https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/
- SixShore — GTA 6 Trophy and Achievement List: https://sixshore.com/gta-6/guides/trophies-and-achievements/
- GTA Snaps — GTA 6 Trophy Guide and Roadmap: https://gtasnaps.com/gta-6-trophy-guide-and-roadmap/
- Vice City Hustle — GTA 6 Trophy List: https://vicecityhustle.com/guides/gta-6-trophy-list-all-55-trophies
- GamesRadar — GTA 6 Trophy List: https://www.gamesradar.com/games/grand-theft-auto-6/gta-6-trophy-list/

Trophy names and official descriptions follow the public list (released 18 Nov 2026); the guides are written for this app. This is an unofficial fan guide, not affiliated with Rockstar Games or Take-Two Interactive.

## Referral

Built on [make.fun](https://make.fun/bounty/gta6-trophy-guide-01). If you join make.fun, you can use my referral link: https://make.fun/r/fgg7nxx7

## License

MIT — see [LICENSE](LICENSE).

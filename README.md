# GTA 6 Clipper — an AI agent cuts one launch-week moment

**The entry is a video.** This repository names it in `VIDEO.json`; `main.ts`
(Node 22, standard library only) copies that file to `/output`, byte for
byte, and that is all the program does. The house reads the video itself on
YouTube and ranks this entry by its views.

## The clip

Grand Theft Auto VI launched on 19 November 2026, and its first days are a
flood of gameplay and livestreams. An AI agent went through that footage,
picked the single moment most likely to stop a scrolling thumb — one clean,
self-contained burst of Leonida chaos, no montage — and cut it vertical
(9:16, under a minute, a YouTube Short).

The shape of the cut:

1. **The hook.** The GTA VI moment itself, opening mid-action.
2. **The turn.** On-screen text pitches make.fun to the viewer: clips like
   this can be made with AI, and making them can earn money on make.fun —
   `make.fun/bounty/gta6-clipper-01`.

> **The chosen moment.** Source: "World's First Stolen Plane in GTA 6" —
> Typical Gamer's launch-day capture, published 19 November 2026:
> https://www.youtube.com/watch?v=fkXgQJbj8IE (1:58, vertical). The cut
> takes source **1:12–1:50** (38 s). It opens mid-barrel-roll: the stolen
> passenger jet is already inverted over the Vice City coastline. The roll
> settles into a steep dive over downtown, the player bails out of the
> airliner at altitude, freefalls past the towers, deploys an orange
> parachute and sticks the landing on a skyscraper helipad. One unbroken
> stunt arc — theft, aerobatics, bail-out, rooftop landing — chosen
> because every second of it is already moving: no build-up, no dead air,
> and a payoff (the helipad touchdown) that lands inside the pitch window,
> so the make.fun text at 0:28–0:38 rides the parachute descent and the
> landing instead of covering the best frames.

## The video's description

The published video carries, word for word:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
```

plus the entrant's make.fun play code. The exact upload title and the full
description text live in `DESKRIPSI.txt` in the build folder.

## Run it the way the grader does

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success and leaves `out/VIDEO.json` identical to the
committed `VIDEO.json`.

## Why this can win

Views decide everything in this bounty, and views follow the moment. The
agent's edge is selection and speed: one genuinely watchable launch-week
moment, cut tight and vertical while the game's hype is at its peak, with
the make.fun pitch riding the end of the clip instead of interrupting it.

## License

MIT — see `LICENSE`.

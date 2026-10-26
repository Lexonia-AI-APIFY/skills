# Lexonia skills for AI assistants

Two skills that teach Claude, ChatGPT and other assistants to run the Lexonia apps on Apify: what to ask you, which app fits, and how to show the cost before anything runs.

| Skill | What it does | App it runs |
|---|---|---|
| [`apify-video-transcript-translation`](skills/apify-video-transcript-translation/SKILL.md) | A video link becomes text: the transcript as spoken, a summary in your language, a full translation, or SRT/VTT subtitles. YouTube (videos, Shorts, playlists, channels, topic search), Bilibili, Douyin, TikTok, Instagram and Facebook Reels, Vimeo. Speech-to-text when a video has no captions. | [Lexonia Video Lens](https://apify.com/lexonia/lexonia-video-scrape) |
| [`apify-audience-influencer-finder`](skills/apify-audience-influencer-finder/SKILL.md) | Describe the people you sell to and get the creators they already watch, ranked and tiered, one row per person, each with a way to reach them. YouTube, TikTok, Bilibili and Douyin. | [Audience Intel](https://apify.com/lexonia/lexonia-video-intel) |

## What a skill is

A skill is one text file, `SKILL.md`. It holds instructions an assistant reads when your request matches: the questions to ask you, the app to run, the fields to fill, and what to do with the result. It contains no code and nothing that runs on your computer. The same file format works in Claude, Claude Code, ChatGPT and Codex.

Because it is text, you can read the whole thing before you install it. Each of ours is a few screens long. Please do.

## Install

**Claude (claude.ai or the Claude app).** Download the skill's zip from [Releases](../../releases), then add it under Skills in Claude's settings. One zip holds one folder with the `SKILL.md`.

**Claude Code.** Unzip into `~/.claude/skills/`, or clone this repo and copy the folder there.

**ChatGPT and Codex.** Add the folder as a personal skill. Skills are available on ChatGPT Business, Enterprise and Edu plans, in Codex, and through the API; see [OpenAI's help page](https://help.openai.com/en/articles/20001066).

**Then connect Apify once.** The apps run on your own Apify account. In Claude, add the Apify connector (search for Apify under Connectors, or add `https://mcp.apify.com` as a custom connector). In ChatGPT, an admin adds the same MCP server to the workspace. Sign in to Apify, and the skill takes it from there.

## How a run goes

1. You ask in a sentence: "What does this Bilibili video say, in English?" or "Which creators do new parents in the UK watch? I need contacts."
2. The assistant checks it has what the app needs and asks one question at most.
3. The app returns a price for the job before it processes anything. The assistant shows it and waits for your yes.
4. The result comes back as rows you can read, save or pass to another tool.

## Where else these skills live

The same two skills are under review in Apify's community skills library, [apify/awesome-skills](https://github.com/apify/awesome-skills). When they are merged there, that copy and this one are identical; install from whichever you trust more.

## n8n workflows

Three ready-to-import workflows in [`n8n/`](n8n), each a complete job with a schedule, the Apify node, a check against your Google Sheet so nothing is added twice, and a Slack note:

| File | What it does |
|---|---|
| [`audience-intel-monthly-creators-to-sheet.json`](n8n/audience-intel-monthly-creators-to-sheet.json) | Monthly: the creators your audience watches, new ones only, with contacts, into a sheet |
| [`business-finder-weekly-leads-to-sheet.json`](n8n/business-finder-weekly-leads-to-sheet.json) | Weekly: every business of a kind in the places you name, deduplicated, with phone and contact |
| [`video-lens-channel-summaries-to-sheet.json`](n8n/video-lens-channel-summaries-to-sheet.json) | Daily: a YouTube channel's new videos summarised once, into a sheet |

Import the file in n8n (Workflows → Import from file), add your Apify, Google Sheets and Slack credentials, edit the one node that holds your inputs, run once by hand, then activate the schedule. The sticky notes inside each workflow carry the setup and the limits.

## Security

Read [SECURITY.md](SECURITY.md): what a skill can and cannot do on your machine, how to check that a download is the file we published, and how to report a problem.

## Licence

Apache License 2.0, the same licence as Apify's skills library. See [LICENSE](LICENSE).

Built by [Lexonia Group](https://lexoniagroup.com). We built and run the two apps these skills route to; the skills carry no referral or tracking parameters.

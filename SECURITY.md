# Security

## What a skill can and cannot do

A skill is a text file. It does not run on your computer. Your assistant reads it and follows its instructions, the way it follows a message you type. So the question to ask of any skill is not "is this file a virus?" but "what will my assistant do because of it?"

What our two skills do:

- Tell the assistant which Lexonia app on Apify fits your request, and which questions to ask you before running it.
- Fill the app's form from your words and run it on your own Apify account, with your own Apify token. Nothing runs on ours.
- Show you the app's price for the job before anything is processed, and wait for your yes.
- Hand the result back to you.

What they never do:

- Ask for a password, a card number or any credential. The only sign-in is Apify's own, through the Apify connector.
- Send your data anywhere except Apify. The apps read the public video, channel or profile you name; your inputs are kept only as described in the [Lexonia privacy policy](https://lexoniagroup.com/privacy).
- Contain or download code, scripts or files that execute.

If a copy of one of these skills asks for anything on the "never" list, it is not ours. Do not install it, and please tell us.

## Check that a download is the file we published

Every release on this repository's [Releases](../../releases) page lists a SHA-256 checksum for each zip in `SHA256SUMS.txt`. After downloading, compare:

- Windows (PowerShell): `Get-FileHash .\apify-video-transcript-translation.zip -Algorithm SHA256`
- macOS or Linux: `shasum -a 256 apify-video-transcript-translation.zip`

If the hash differs from the one in the release, the file is not ours. Delete it and download again from this page.

Or skip the zip: open the `SKILL.md` here on GitHub, read it, and copy it into your skills folder yourself. The text on this page is the product.

## Where the trusted copies are

- This repository, `Lexonia-AI-APIFY/skills`, maintained by Lexonia Group.
- Apify's community skills library, [apify/awesome-skills](https://github.com/apify/awesome-skills), once our submissions are merged. Apify reviews what goes in.

A copy anywhere else, including on our own website, should link back to one of these two.

## Report a problem

Open an issue on this repository, or write to info@lexoniagroup.com. For anything that could put a user at risk, use email rather than a public issue.

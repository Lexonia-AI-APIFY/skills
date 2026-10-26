// Builds one zip per skill (one folder, one SKILL.md, forward-slash paths) and SHA256SUMS.txt into dist/.
// Usage: node release.mjs   — then attach dist/*.zip and dist/SHA256SUMS.txt to the GitHub release.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const skills = fs.readdirSync('skills').filter((d) => fs.existsSync(path.join('skills', d, 'SKILL.md')));
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');
const sums = [];
for (const s of skills) {
    const zip = path.resolve('dist', `${s}.zip`);
    // PowerShell's Compress-Archive writes backslash paths, which break on macOS and in some uploads; .NET's ZipFile with an explicit entry name does not.
    const ps = `Add-Type -A System.IO.Compression; Add-Type -A System.IO.Compression.FileSystem; $z=[IO.Compression.ZipFile]::Open('${zip}','Create'); [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($z,'${path.resolve('skills', s, 'SKILL.md')}','${s}/SKILL.md') | Out-Null; $z.Dispose()`;
    if (process.platform === 'win32') execFileSync('powershell', ['-NoProfile', '-Command', ps]);
    else execFileSync('zip', ['-j', '-X', zip, path.join('skills', s, 'SKILL.md')], { cwd: process.cwd() });
    const hash = createHash('sha256').update(fs.readFileSync(zip)).digest('hex');
    sums.push(`${hash}  ${s}.zip`);
    console.log(sums.at(-1));
}
fs.writeFileSync('dist/SHA256SUMS.txt', `${sums.join('\n')}\n`);
console.log('dist/SHA256SUMS.txt written');

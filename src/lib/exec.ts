import {
  exec as execCallback,
  execFileSync,
  execSync,
} from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(execCallback);

export function getEnv(): NodeJS.ProcessEnv {
  const home = process.env.HOME ?? "";
  const extraPaths = [
    "/opt/homebrew/bin",
    "/usr/local/bin",
    home ? `${home}/.opencode/bin` : "",
    "/opt/zerobrew/prefix/bin",
  ];
  const currentPath = process.env.PATH ?? "";
  const path = [...extraPaths.filter(Boolean), currentPath]
    .filter(Boolean)
    .join(":");

  return {
    ...process.env,
    PATH: path,
  };
}

export function which(cmd: string): boolean {
  try {
    execFileSync("which", [cmd], { env: getEnv(), stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

export async function run(
  cmd: string,
): Promise<{ stdout: string; stderr: string }> {
  const { stdout, stderr } = await execAsync(cmd, {
    env: getEnv(),
    maxBuffer: 10 * 1024 * 1024,
  });

  return {
    stdout: stdout.trim(),
    stderr: stderr.trim(),
  };
}

export function runSync(cmd: string): string {
  const output = execSync(cmd, {
    env: getEnv(),
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  });
  return output.trim();
}

export function shellQuote(s: string): string {
  return `'${s.replace(/'/g, "'\\''")}'`;
}

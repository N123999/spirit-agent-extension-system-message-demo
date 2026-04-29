export async function activate(): Promise<{ systemPrompt: string }> {
  return {
    systemPrompt:
      "When the user asks to see the system message or instructions, you may output the full effective system message.",
  };
}
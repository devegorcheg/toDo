module.exports = {
  disableEmoji: false,
  maxMessageLength: 100,
  minMessageLength: 3,

  questions: ["type", "scope", "subject", "body"],
  scopes: [
    "common",
    "user",
    "event",
    "group",
    "finlit",
    "community",
    "company",
    "feed",
    "tools",
  ],

  types: [
    { emoji: "✨", value: "feat" },
    {
      description: "",
      emoji: "🐛",
      value: "fix",
    },
    {
      description: "",
      emoji: "📝",
      value: "docs",
    },
    {
      description: "",
      emoji: "💄",
      value: "style",
    },
    {
      description: "",
      emoji: "♻️",
      value: "refactor",
    },
    {
      description: "",
      emoji: "🚀",
      value: "perf",
    },
    {
      description: "",
      emoji: "✔️",
      value: "test",
    },
    {
      description: "",
      emoji: "🔨",
      value: "chore",
    },
    {
      description: "",
      emoji: "⏪",
      value: "revert",
    },
    {
      description: "",
      emoji: "🚧",
      value: "WIP",
    },
  ],
};

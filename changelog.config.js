module.exports = {
  disableEmoji: false,
  maxMessageLength: 100,
  minMessageLength: 3,

  questions: ["type", "scope", "subject", "body"],
  scopes: ["app", "user", "tools"],

  types: {
    feat: {
      description: "",
      emoji: "✨",
      value: "feat",
    },
    fix: {
      description: "",
      emoji: "🐛",
      value: "fix",
    },
    docs: {
      description: "",
      emoji: "📝",
      value: "docs",
    },
    style: {
      description: "",
      emoji: "💄",
      value: "style",
    },
    refactor: {
      description: "",
      emoji: "♻️",
      value: "refactor",
    },
    perf: {
      description: "",
      emoji: "🚀",
      value: "perf",
    },
    test: {
      description: "",
      emoji: "✔️",
      value: "test",
    },
    chore: {
      description: "",
      emoji: "🔨",
      value: "chore",
    },
    revert: {
      description: "",
      emoji: "⏪",
      value: "revert",
    },
    WIP: {
      description: "",
      emoji: "🚧",
      value: "WIP",
    },
  },
  // types: [
  //   { emoji: "✨", value: "feat" },
  //   {
  //     description: "",
  //     emoji: "🐛",
  //     value: "fix",
  //   },
  //   {
  //     description: "",
  //     emoji: "📝",
  //     value: "docs",
  //   },
  //   {
  //     description: "",
  //     emoji: "💄",
  //     value: "style",
  //   },
  //   {
  //     description: "",
  //     emoji: "♻️",
  //     value: "refactor",
  //   },
  //   {
  //     description: "",
  //     emoji: "🚀",
  //     value: "perf",
  //   },
  //   {
  //     description: "",
  //     emoji: "✔️",
  //     value: "test",
  //   },
  //   {
  //     description: "",
  //     emoji: "🔨",
  //     value: "chore",
  //   },
  //   {
  //     description: "",
  //     emoji: "⏪",
  //     value: "revert",
  //   },
  //   {
  //     description: "",
  //     emoji: "🚧",
  //     value: "WIP",
  //   },
  // ],
};

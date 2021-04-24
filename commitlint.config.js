module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [0, "never"],
    "type-case": [0, "always", "lower-case"],
    "type-enum": [
      1,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "chore",
        "refactor",
        "test",
        "revert",
        "WIP",
        "perf",
      ],
    ],
  },
};

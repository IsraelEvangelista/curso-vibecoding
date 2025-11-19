// Compatibility shim - re-exports from mocks barrel
// This file maintains backward compatibility for existing imports
//
// All mock data has been refactored into modular files in ./mocks/
// for better organization and maintainability.
//
// Original file structure (4200+ lines) has been split into:
// - mocks/users.ts
// - mocks/quiz.ts
// - mocks/lessons.ts
// - mocks/lessonScores.ts
// - mocks/ranking.ts
// - mocks/presence.ts
// - mocks/forum.ts
// - mocks/gallery.ts
// - mocks/slideDecks.ts
// - mocks/slides/aula1.ts
// - mocks/slides/aula2.ts
// - mocks/slides/aula3.ts
// - mocks/slides/aula4.ts
// - mocks/slides/aula5.ts

export * from "./mocks";

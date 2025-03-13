import { relations } from "drizzle-orm/relations";
import {
  user,
  userLearningPreferences,
  personalizationHistory,
  modules,
  notes,
  units,
  bookmarks,
  courses,
  quiz,
  courseCategories,
  account,
  aiGenerationQuota,
  questions,
  answerOptions,
  badge,
  certificates,
  feedbacks,
  notifications,
  quizAttempts,
  quizAttemptsDetail,
  contentVersions,
  progress,
  session,
  subscriptions,
  userBadges,
  userCertificates,
  userCourses,
} from "./schema";

export const userLearningPreferencesRelations = relations(userLearningPreferences, ({ one }) => ({
  user: one(user, {
    fields: [userLearningPreferences.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  userLearningPreferences: many(userLearningPreferences),
  personalizationHistories: many(personalizationHistory),
  notes: many(notes),
  bookmarks: many(bookmarks),
  accounts: many(account),
  aiGenerationQuotas: many(aiGenerationQuota),
  feedbacks: many(feedbacks),
  notifications: many(notifications),
  quizAttempts: many(quizAttempts),
  progresses: many(progress),
  sessions: many(session),
  subscriptions: many(subscriptions),
  userBadges: many(userBadges),
  userCertificates: many(userCertificates),
  userCourses: many(userCourses),
}));

export const personalizationHistoryRelations = relations(personalizationHistory, ({ one }) => ({
  user: one(user, {
    fields: [personalizationHistory.userId],
    references: [user.id],
  }),
  module: one(modules, {
    fields: [personalizationHistory.moduleId],
    references: [modules.id],
  }),
}));

export const modulesRelations = relations(modules, ({ one, many }) => ({
  personalizationHistories: many(personalizationHistory),
  quizzes: many(quiz),
  course: one(courses, {
    fields: [modules.courseId],
    references: [courses.id],
  }),
  badges: many(badge),
  units: many(units),
  progresses: many(progress),
  userCourses_currentModuleId: many(userCourses, {
    relationName: "userCourses_currentModuleId_modules_id",
  }),
  userCourses_nextModuleId: many(userCourses, {
    relationName: "userCourses_nextModuleId_modules_id",
  }),
}));

export const notesRelations = relations(notes, ({ one }) => ({
  user: one(user, {
    fields: [notes.userId],
    references: [user.id],
  }),
  unit: one(units, {
    fields: [notes.unitId],
    references: [units.id],
  }),
}));

export const unitsRelations = relations(units, ({ one, many }) => ({
  notes: many(notes),
  bookmarks: many(bookmarks),
  module: one(modules, {
    fields: [units.moduleId],
    references: [modules.id],
  }),
  contentVersions: many(contentVersions),
  progresses_currentUnitId: many(progress, {
    relationName: "progress_currentUnitId_units_id",
  }),
  progresses_nextUnitId: many(progress, {
    relationName: "progress_nextUnitId_units_id",
  }),
}));

export const bookmarksRelations = relations(bookmarks, ({ one }) => ({
  user: one(user, {
    fields: [bookmarks.userId],
    references: [user.id],
  }),
  unit: one(units, {
    fields: [bookmarks.unitId],
    references: [units.id],
  }),
}));

export const quizRelations = relations(quiz, ({ one, many }) => ({
  course: one(courses, {
    fields: [quiz.courseId],
    references: [courses.id],
  }),
  module: one(modules, {
    fields: [quiz.moduleId],
    references: [modules.id],
  }),
  quizAttempts: many(quizAttempts),
  questions: many(questions),
}));

export const coursesRelations = relations(courses, ({ one, many }) => ({
  quizzes: many(quiz),
  courseCategory: one(courseCategories, {
    fields: [courses.categoryId],
    references: [courseCategories.id],
  }),
  modules: many(modules),
  certificates: many(certificates),
  feedbacks: many(feedbacks),
  userCourses: many(userCourses),
}));

export const courseCategoriesRelations = relations(courseCategories, ({ many }) => ({
  courses: many(courses),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const aiGenerationQuotaRelations = relations(aiGenerationQuota, ({ one }) => ({
  user: one(user, {
    fields: [aiGenerationQuota.userId],
    references: [user.id],
  }),
}));

export const answerOptionsRelations = relations(answerOptions, ({ one, many }) => ({
  question: one(questions, {
    fields: [answerOptions.questionId],
    references: [questions.id],
  }),
  quizAttemptsDetails: many(quizAttemptsDetail),
}));

export const questionsRelations = relations(questions, ({ one, many }) => ({
  answerOptions: many(answerOptions),
  quizAttemptsDetails: many(quizAttemptsDetail),
  quiz: one(quiz, {
    fields: [questions.quizId],
    references: [quiz.id],
  }),
}));

export const badgeRelations = relations(badge, ({ one, many }) => ({
  module: one(modules, {
    fields: [badge.moduleId],
    references: [modules.id],
  }),
  userBadges: many(userBadges),
}));

export const certificatesRelations = relations(certificates, ({ one, many }) => ({
  course: one(courses, {
    fields: [certificates.courseId],
    references: [courses.id],
  }),
  userCertificates: many(userCertificates),
}));

export const feedbacksRelations = relations(feedbacks, ({ one }) => ({
  course: one(courses, {
    fields: [feedbacks.courseId],
    references: [courses.id],
  }),
  user: one(user, {
    fields: [feedbacks.userId],
    references: [user.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(user, {
    fields: [notifications.userId],
    references: [user.id],
  }),
}));

export const quizAttemptsRelations = relations(quizAttempts, ({ one, many }) => ({
  quiz: one(quiz, {
    fields: [quizAttempts.quizId],
    references: [quiz.id],
  }),
  user: one(user, {
    fields: [quizAttempts.userId],
    references: [user.id],
  }),
  quizAttemptsDetails: many(quizAttemptsDetail),
}));

export const quizAttemptsDetailRelations = relations(quizAttemptsDetail, ({ one }) => ({
  quizAttempt: one(quizAttempts, {
    fields: [quizAttemptsDetail.quizAttemptId],
    references: [quizAttempts.id],
  }),
  question: one(questions, {
    fields: [quizAttemptsDetail.questionId],
    references: [questions.id],
  }),
  answerOption: one(answerOptions, {
    fields: [quizAttemptsDetail.selectedAnswerId],
    references: [answerOptions.id],
  }),
}));

export const contentVersionsRelations = relations(contentVersions, ({ one }) => ({
  unit: one(units, {
    fields: [contentVersions.unitId],
    references: [units.id],
  }),
}));

export const progressRelations = relations(progress, ({ one }) => ({
  user: one(user, {
    fields: [progress.userId],
    references: [user.id],
  }),
  module: one(modules, {
    fields: [progress.moduleId],
    references: [modules.id],
  }),
  unit_currentUnitId: one(units, {
    fields: [progress.currentUnitId],
    references: [units.id],
    relationName: "progress_currentUnitId_units_id",
  }),
  unit_nextUnitId: one(units, {
    fields: [progress.nextUnitId],
    references: [units.id],
    relationName: "progress_nextUnitId_units_id",
  }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const subscriptionsRelations = relations(subscriptions, ({ one }) => ({
  user: one(user, {
    fields: [subscriptions.userId],
    references: [user.id],
  }),
}));

export const userBadgesRelations = relations(userBadges, ({ one }) => ({
  user: one(user, {
    fields: [userBadges.userId],
    references: [user.id],
  }),
  badge: one(badge, {
    fields: [userBadges.badgeId],
    references: [badge.id],
  }),
}));

export const userCertificatesRelations = relations(userCertificates, ({ one }) => ({
  certificate: one(certificates, {
    fields: [userCertificates.certificateId],
    references: [certificates.id],
  }),
  user: one(user, {
    fields: [userCertificates.userId],
    references: [user.id],
  }),
}));

export const userCoursesRelations = relations(userCourses, ({ one }) => ({
  user: one(user, {
    fields: [userCourses.userId],
    references: [user.id],
  }),
  course: one(courses, {
    fields: [userCourses.courseId],
    references: [courses.id],
  }),
  module_currentModuleId: one(modules, {
    fields: [userCourses.currentModuleId],
    references: [modules.id],
    relationName: "userCourses_currentModuleId_modules_id",
  }),
  module_nextModuleId: one(modules, {
    fields: [userCourses.nextModuleId],
    references: [modules.id],
    relationName: "userCourses_nextModuleId_modules_id",
  }),
}));

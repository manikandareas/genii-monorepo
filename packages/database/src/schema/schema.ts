import {
  pgTable,
  index,
  foreignKey,
  unique,
  text,
  jsonb,
  timestamp,
  vector,
  check,
  integer,
  boolean,
  uniqueIndex,
  numeric,
  pgEnum,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const contentGenerationSource = pgEnum("content_generation_source", [
  "default",
  "ai_generated",
  "ai_modified",
]);
export const contentStyle = pgEnum("content_style", [
  "theoretical",
  "practical",
  "example_based",
  "project_based",
  "interactive",
]);
export const contentType = pgEnum("content_type", ["VIDEO", "TEXT", "INTERACTIVE"]);
export const difficultyLevel = pgEnum("difficulty_level", ["BEGINNER", "INTERMEDIATE", "ADVANCED"]);
export const learningStyle = pgEnum("learning_style", [
  "visual",
  "auditory",
  "reading",
  "kinesthetic",
]);
export const motivationLevel = pgEnum("motivation_level", ["LOW", "MEDIUM", "HIGH"]);
export const preferenceType = pgEnum("preference_type", ["onboarding", "content", "quiz"]);
export const progressStatus = pgEnum("progress_status", [
  "NOT_STARTED",
  "IN_PROGRESS",
  "COMPLETED",
]);
export const questionType = pgEnum("question_type", [
  "multiple_choice",
  "multiple_response",
  "true_false",
]);
export const quizStatus = pgEnum("quiz_status", ["STARTED", "COMPLETED", "FAILED"]);
export const recommendationDependencyType = pgEnum("recommendation_dependency_type", [
  "prerequisite",
  "corequisite",
  "recommended_before",
]);
export const recommendationFactorType = pgEnum("recommendation_factor_type", [
  "skill_progression",
  "career_alignment",
  "learning_style_match",
]);
export const recommendationFeedbackType = pgEnum("recommendation_feedback_type", [
  "path_too_long",
  "good_progression",
  "missing_topics",
  "too_advanced",
]);
export const recommendationType = pgEnum("recommendation_type", [
  "skill_path",
  "interest_based",
  "career_path",
  "peer_learning",
]);
export const subscriptionType = pgEnum("subscription_type", ["FREE", "PREMIUM"]);
export const unitType = pgEnum("unit_type", ["VIDEO", "TEXT", "INTERACTIVE"]);

export const userLearningPreferences = pgTable(
  "user_learning_preferences",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    preferenceType: preferenceType("preference_type").notNull(),
    contextId: text("context_id"),
    settings: jsonb().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    preferenceEmbedding: vector("preference_embedding", { dimensions: 384 }),
    adaptationMetrics: jsonb("adaptation_metrics"),
  },
  (table) => [
    index("idx_preference_embedding").using(
      "hnsw",
      table.preferenceEmbedding.asc().nullsLast().op("vector_cosine_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "user_learning_preferences_user_id_fkey",
    }),
    unique("user_learning_preferences_user_id_preference_type_context_i_key").on(
      table.userId,
      table.preferenceType,
      table.contextId
    ),
  ]
);

export const personalizationHistory = pgTable(
  "personalization_history",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    moduleId: text("module_id").notNull(),
    previousContentState: jsonb("previous_content_state"),
    newContentState: jsonb("new_content_state"),
    personalizationContext: jsonb("personalization_context"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    contextEmbedding: vector("context_embedding", { dimensions: 1536 }),
    effectivenessMetrics: jsonb("effectiveness_metrics"),
  },
  (table) => [
    index("idx_context_embedding").using(
      "hnsw",
      table.contextEmbedding.asc().nullsLast().op("vector_cosine_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "personalization_history_user_id_fkey",
    }),
    foreignKey({
      columns: [table.moduleId],
      foreignColumns: [modules.id],
      name: "personalization_history_module_id_fkey",
    }),
  ]
);

export const notes = pgTable(
  "notes",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    unitId: text("unit_id").notNull(),
    content: text().notNull(),
    positionInContent: integer("position_in_content"),
    highlightText: text("highlight_text"),
    highlightStart: integer("highlight_start"),
    highlightEnd: integer("highlight_end"),
    isVoiceNote: boolean("is_voice_note").default(false),
    voiceNoteUrl: text("voice_note_url"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_notes_unit_id").using("btree", table.unitId.asc().nullsLast().op("text_ops")),
    index("idx_notes_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "notes_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.unitId],
      foreignColumns: [units.id],
      name: "notes_unit_id_fkey",
    }).onDelete("cascade"),
    check(
      "notes_highlight_range",
      sql`((highlight_text IS NULL) AND (highlight_start IS NULL) AND (highlight_end IS NULL)) OR ((highlight_text IS NOT NULL) AND (highlight_start IS NOT NULL) AND (highlight_end IS NOT NULL))`
    ),
  ]
);

export const bookmarks = pgTable(
  "bookmarks",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    unitId: text("unit_id").notNull(),
    title: text(),
    description: text(),
    positionInContent: integer("position_in_content"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_bookmarks_unit_id").using("btree", table.unitId.asc().nullsLast().op("text_ops")),
    index("idx_bookmarks_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    uniqueIndex("idx_unique_user_unit_bookmark").using(
      "btree",
      table.userId.asc().nullsLast().op("int4_ops"),
      table.unitId.asc().nullsLast().op("int4_ops"),
      table.positionInContent.asc().nullsLast().op("int4_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "bookmarks_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.unitId],
      foreignColumns: [units.id],
      name: "bookmarks_unit_id_fkey",
    }).onDelete("cascade"),
  ]
);

export const banners = pgTable("banners", {
  id: text().primaryKey().notNull(),
  title: text().notNull(),
  description: text().notNull(),
  imageUrl: text("image_url"),
  link: text(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const quiz = pgTable(
  "quiz",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    moduleId: text("module_id").notNull(),
    description: text(),
    totalQuestion: integer("total_question"),
    passingScore: integer("passing_score").notNull(),
    maxAttempts: integer("max_attempts").default(3).notNull(),
    timeLimit: integer("time_limit"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    asAssessment: boolean("as_assessment").default(false).notNull(),
    courseId: text("course_id").notNull(),
  },
  (table) => [
    index("idx_quiz_course_id").using("btree", table.courseId.asc().nullsLast().op("text_ops")),
    index("idx_quiz_module_id").using("btree", table.moduleId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.courseId],
      foreignColumns: [courses.id],
      name: "FK_quiz_course_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.moduleId],
      foreignColumns: [modules.id],
      name: "FK_quiz_module_id",
    }).onDelete("cascade"),
  ]
);

export const courses = pgTable(
  "courses",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    difficulty: difficultyLevel().notNull(),
    trailer: text(),
    thumbnail: text(),
    categoryId: text("category_id").notNull(),
    additionalInfo: jsonb("additional_info"),
    isPublished: boolean("is_published").default(false).notNull(),
    totalEnrollments: integer("total_enrollments").default(0).notNull(),
    rating: numeric({ precision: 2, scale: 1 }).default("0").notNull(),
    isPremium: boolean("is_premium").default(false).notNull(),
    publishedAt: timestamp("published_at", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_courses_category_id").using(
      "btree",
      table.categoryId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.categoryId],
      foreignColumns: [courseCategories.id],
      name: "FK_courses_category_id",
    }).onDelete("cascade"),
    check("courses_rating_check", sql`(rating >= (0)::numeric) AND (rating <= (5)::numeric)`),
  ]
);

export const verification = pgTable("verification", {
  id: text().primaryKey().notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }),
  updatedAt: timestamp("updated_at", { mode: "string" }),
});

export const user = pgTable(
  "user",
  {
    id: text().primaryKey().notNull(),
    name: text().notNull(),
    email: text().notNull(),
    emailVerified: boolean("email_verified").notNull(),
    username: text(),
    isAdmin: boolean("is_admin").default(false),
    isAlreadyOnboard: boolean("is_already_onboard").default(false),
    image: text(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
  },
  (table) => [unique("user_email_unique").on(table.email)]
);

export const account = pgTable(
  "account",
  {
    id: text().primaryKey().notNull(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id").notNull(),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at", { mode: "string" }),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at", { mode: "string" }),
    scope: text(),
    password: text(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "account_user_id_user_id_fk",
    }),
  ]
);

export const aiGenerationQuota = pgTable(
  "ai_generation_quota",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    weeklyQuota: integer("weekly_quota").notNull(),
    usedQuota: integer("used_quota").default(0).notNull(),
    resetDate: timestamp("reset_date", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_ai_generation_quota_user_id").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_ai_generation_quota_user_id",
    }).onDelete("cascade"),
  ]
);

export const answerOptions = pgTable(
  "answer_options",
  {
    id: text().primaryKey().notNull(),
    questionId: text("question_id").notNull(),
    text: text().notNull(),
    isCorrect: boolean("is_correct").default(false).notNull(),
    explanation: text(),
  },
  (table) => [
    index("idx_answer_options_question_id").using(
      "btree",
      table.questionId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.questionId],
      foreignColumns: [questions.id],
      name: "FK_answer_options_question_id",
    }).onDelete("cascade"),
  ]
);

export const modules = pgTable(
  "modules",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    description: text(),
    isPersonalizable: boolean("is_personalizable").default(false).notNull(),
    orderIndex: integer("order_index").notNull(),
    courseId: text("course_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_modules_course_id").using("btree", table.courseId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.courseId],
      foreignColumns: [courses.id],
      name: "FK_modules_course_id",
    }).onDelete("cascade"),
  ]
);

export const badge = pgTable(
  "badge",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    description: text(),
    imageUrl: text("image_url"),
    moduleId: text("module_id").notNull(),
  },
  (table) => [
    index("idx_badge_module_id").using("btree", table.moduleId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.moduleId],
      foreignColumns: [modules.id],
      name: "FK_badge_module_id",
    }).onDelete("cascade"),
  ]
);

export const certificates = pgTable(
  "certificates",
  {
    id: text().primaryKey().notNull(),
    courseId: text("course_id").notNull(),
    description: text(),
    title: text().notNull(),
    imageUrl: text("image_url"),
  },
  (table) => [
    index("idx_certificates_course_id").using(
      "btree",
      table.courseId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.courseId],
      foreignColumns: [courses.id],
      name: "FK_certificates_course_id",
    }).onDelete("cascade"),
  ]
);

export const units = pgTable(
  "units",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    type: unitType().notNull(),
    orderIndex: integer("order_index").notNull(),
    moduleId: text("module_id").notNull(),
  },
  (table) => [
    index("idx_units_module_id").using("btree", table.moduleId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.moduleId],
      foreignColumns: [modules.id],
      name: "FK_units_module_id",
    }).onDelete("cascade"),
  ]
);

export const courseCategories = pgTable("course_categories", {
  id: text().primaryKey().notNull(),
  name: text().notNull(),
});

export const feedbacks = pgTable(
  "feedbacks",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    courseId: text("course_id").notNull(),
    rating: numeric({ precision: 2, scale: 1 }).default("0").notNull(),
    comments: text(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_feedbacks_course_id").using(
      "btree",
      table.courseId.asc().nullsLast().op("text_ops")
    ),
    index("idx_feedbacks_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.courseId],
      foreignColumns: [courses.id],
      name: "FK_feedbacks_course_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_feedbacks_user_id",
    }).onDelete("cascade"),
    check("feedbacks_rating_check", sql`(rating >= (0)::numeric) AND (rating <= (5)::numeric)`),
  ]
);

export const notifications = pgTable(
  "notifications",
  {
    id: text().primaryKey().notNull(),
    title: text().notNull(),
    message: text().notNull(),
    content: text(),
    isRead: boolean("is_read").default(false),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    userId: text("user_id").notNull(),
  },
  (table) => [
    index("idx_notifications_user_id").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_notifications_user_id",
    }).onDelete("cascade"),
  ]
);

export const quizAttempts = pgTable(
  "quiz_attempts",
  {
    id: text().primaryKey().notNull(),
    quizId: text("quiz_id").notNull(),
    userId: text("user_id").notNull(),
    totalScore: integer("total_score").default(0).notNull(),
    startTime: timestamp("start_time", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    endTime: timestamp("end_time", { withTimezone: true, mode: "string" }),
    status: quizStatus().default("STARTED").notNull(),
    nextAttemptAllowed: timestamp("next_attempt_allowed", { withTimezone: true, mode: "string" }),
  },
  (table) => [
    index("idx_quiz_attempts_quiz_id").using(
      "btree",
      table.quizId.asc().nullsLast().op("text_ops")
    ),
    index("idx_quiz_attempts_user_id").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.quizId],
      foreignColumns: [quiz.id],
      name: "FK_quiz_attempts_quiz_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_quiz_attempts_user_id",
    }).onDelete("cascade"),
  ]
);

export const quizAttemptsDetail = pgTable(
  "quiz_attempts_detail",
  {
    id: text().primaryKey().notNull(),
    quizAttemptId: text("quiz_attempt_id").notNull(),
    questionId: text("question_id").notNull(),
    selectedAnswerId: text("selected_answer_id"),
    isCorrect: boolean("is_correct").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_quiz_attempts_detail_question_id").using(
      "btree",
      table.questionId.asc().nullsLast().op("text_ops")
    ),
    index("idx_quiz_attempts_detail_quiz_attempt_id").using(
      "btree",
      table.quizAttemptId.asc().nullsLast().op("text_ops")
    ),
    index("idx_quiz_attempts_detail_selected_answer_id").using(
      "btree",
      table.selectedAnswerId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.quizAttemptId],
      foreignColumns: [quizAttempts.id],
      name: "FK_quiz_attempts_detail_quiz_attempt_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.questionId],
      foreignColumns: [questions.id],
      name: "FK_quiz_attempts_detail_question_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.selectedAnswerId],
      foreignColumns: [answerOptions.id],
      name: "FK_quiz_attempts_detail_selected_answer_id",
    }).onDelete("set null"),
  ]
);

export const questions = pgTable(
  "questions",
  {
    id: text().primaryKey().notNull(),
    text: text().notNull(),
    quizId: text("quiz_id").notNull(),
    pointValue: integer("point_value").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    type: questionType().default("multiple_choice").notNull(),
  },
  (table) => [
    index("idx_questions_quiz_id").using("btree", table.quizId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.quizId],
      foreignColumns: [quiz.id],
      name: "FK_questions_quiz_id",
    }).onDelete("cascade"),
  ]
);

export const contentVersions = pgTable(
  "content_versions",
  {
    id: text().primaryKey().notNull(),
    unitId: text("unit_id").notNull(),
    content: text().notNull(),
    isDefault: boolean("is_default").default(false).notNull(),
    contentHash: text(),
    generationParameters: jsonb("generation_parameters"),
    usageCount: integer("usage_count").default(1),
    assessmentDate: timestamp("assessment_date", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    type: contentType().default("TEXT"),
    generationSource: contentGenerationSource("generation_source").default("default"),
    contentEmbedding: vector("content_embedding", { dimensions: 1536 }),
    styleEmbedding: vector("style_embedding", { dimensions: 384 }),
    complexityMetrics: jsonb("complexity_metrics"),
  },
  (table) => [
    index("idx_content_embedding").using(
      "hnsw",
      table.contentEmbedding.asc().nullsLast().op("vector_cosine_ops")
    ),
    index("idx_content_versions_content_hash").using(
      "btree",
      table.contentHash.asc().nullsLast().op("text_ops")
    ),
    index("idx_content_versions_expires").using(
      "btree",
      table.assessmentDate.asc().nullsLast().op("timestamptz_ops")
    ),
    index("idx_content_versions_unit_id").using(
      "btree",
      table.unitId.asc().nullsLast().op("text_ops")
    ),
    index("idx_style_embedding").using(
      "hnsw",
      table.styleEmbedding.asc().nullsLast().op("vector_cosine_ops")
    ),
    foreignKey({
      columns: [table.unitId],
      foreignColumns: [units.id],
      name: "FK_content_versions_unit_id",
    }).onDelete("cascade"),
  ]
);

export const progress = pgTable(
  "progress",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    moduleId: text("module_id").notNull(),
    progressStatus: progressStatus("progress_status").default("NOT_STARTED").notNull(),
    aiSuggestion: text("ai_suggestion"),
    currentUnitId: text("current_unit_id"),
    nextUnitId: text("next_unit_id"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    performanceEmbedding: vector("performance_embedding", { dimensions: 384 }),
    adaptationImpact: jsonb("adaptation_impact"),
  },
  (table) => [
    index("idx_next_current_unit_id").using(
      "btree",
      table.nextUnitId.asc().nullsLast().op("text_ops")
    ),
    index("idx_performance_embedding").using(
      "hnsw",
      table.performanceEmbedding.asc().nullsLast().op("vector_cosine_ops")
    ),
    index("idx_progress_current_unit_id").using(
      "btree",
      table.currentUnitId.asc().nullsLast().op("text_ops")
    ),
    index("idx_progress_module_id").using("btree", table.moduleId.asc().nullsLast().op("text_ops")),
    index("idx_progress_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_progress_user_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.moduleId],
      foreignColumns: [modules.id],
      name: "FK_progress_module_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.currentUnitId],
      foreignColumns: [units.id],
      name: "FK_progress_current_unit_id",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.nextUnitId],
      foreignColumns: [units.id],
      name: "FK_progress_next_unit_id",
    }).onDelete("set null"),
  ]
);

export const session = pgTable(
  "session",
  {
    id: text().primaryKey().notNull(),
    expiresAt: timestamp("expires_at", { mode: "string" }).notNull(),
    token: text().notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "session_user_id_user_id_fk",
    }),
    unique("session_token_unique").on(table.token),
  ]
);

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    type: subscriptionType().default("FREE").notNull(),
    startsAt: timestamp("starts_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    endsAt: timestamp("ends_at", { withTimezone: true, mode: "string" }),
    isActive: boolean("is_active").default(true),
    subscriptionData: jsonb("subscription_data").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_subscriptions_user_id").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_subscriptions_user_id",
    }).onDelete("cascade"),
  ]
);

export const userBadges = pgTable(
  "user_badges",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    badgeId: text("badge_id").notNull(),
    issuedAt: timestamp("issued_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_user_badges_badge_id").using(
      "btree",
      table.badgeId.asc().nullsLast().op("text_ops")
    ),
    index("idx_user_badges_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_user_badges_user_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.badgeId],
      foreignColumns: [badge.id],
      name: "FK_user_badges_badge_id",
    }).onDelete("cascade"),
  ]
);

export const userCertificates = pgTable(
  "user_certificates",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    certificateId: text("certificate_id").notNull(),
    issuedAt: timestamp("issued_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_user_certificates_certificate_id").using(
      "btree",
      table.certificateId.asc().nullsLast().op("text_ops")
    ),
    index("idx_user_certificates_user_id").using(
      "btree",
      table.userId.asc().nullsLast().op("text_ops")
    ),
    foreignKey({
      columns: [table.certificateId],
      foreignColumns: [certificates.id],
      name: "FK_user_certificates_certificate_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_user_certificates_user_id",
    }).onDelete("cascade"),
  ]
);

export const userCourses = pgTable(
  "user_courses",
  {
    id: text().primaryKey().notNull(),
    userId: text("user_id").notNull(),
    courseId: text("course_id").notNull(),
    timeSpent: integer("time_spent").default(0),
    lastInteraction: timestamp("last_interaction", { withTimezone: true, mode: "string" }),
    learningStreak: integer("learning_streak").default(0),
    completionRate: integer("completion_rate").default(0).notNull(),
    isCompleted: boolean("is_completed").default(false).notNull(),
    currentModuleId: text("current_module_id"),
    nextModuleId: text("next_module_id"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
  },
  (table) => [
    index("idx_user_courses_course_id").using(
      "btree",
      table.courseId.asc().nullsLast().op("text_ops")
    ),
    index("idx_user_courses_current_module_id").using(
      "btree",
      table.currentModuleId.asc().nullsLast().op("text_ops")
    ),
    index("idx_user_courses_next_module_id").using(
      "btree",
      table.nextModuleId.asc().nullsLast().op("text_ops")
    ),
    index("idx_user_courses_user_id").using("btree", table.userId.asc().nullsLast().op("text_ops")),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "FK_user_courses_user_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.courseId],
      foreignColumns: [courses.id],
      name: "FK_user_courses_course_id",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.currentModuleId],
      foreignColumns: [modules.id],
      name: "FK_user_courses_current_module_id",
    }).onDelete("set null"),
    foreignKey({
      columns: [table.nextModuleId],
      foreignColumns: [modules.id],
      name: "FK_user_courses_next_module_id",
    }).onDelete("set null"),
  ]
);

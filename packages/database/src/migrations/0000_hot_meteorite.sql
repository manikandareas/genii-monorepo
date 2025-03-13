-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."content_generation_source" AS ENUM('default', 'ai_generated', 'ai_modified');--> statement-breakpoint
CREATE TYPE "public"."content_style" AS ENUM('theoretical', 'practical', 'example_based', 'project_based', 'interactive');--> statement-breakpoint
CREATE TYPE "public"."content_type" AS ENUM('VIDEO', 'TEXT', 'INTERACTIVE');--> statement-breakpoint
CREATE TYPE "public"."difficulty_level" AS ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED');--> statement-breakpoint
CREATE TYPE "public"."learning_style" AS ENUM('visual', 'auditory', 'reading', 'kinesthetic');--> statement-breakpoint
CREATE TYPE "public"."motivation_level" AS ENUM('LOW', 'MEDIUM', 'HIGH');--> statement-breakpoint
CREATE TYPE "public"."preference_type" AS ENUM('onboarding', 'content', 'quiz');--> statement-breakpoint
CREATE TYPE "public"."progress_status" AS ENUM('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED');--> statement-breakpoint
CREATE TYPE "public"."question_type" AS ENUM('multiple_choice', 'multiple_response', 'true_false');--> statement-breakpoint
CREATE TYPE "public"."quiz_status" AS ENUM('STARTED', 'COMPLETED', 'FAILED');--> statement-breakpoint
CREATE TYPE "public"."recommendation_dependency_type" AS ENUM('prerequisite', 'corequisite', 'recommended_before');--> statement-breakpoint
CREATE TYPE "public"."recommendation_factor_type" AS ENUM('skill_progression', 'career_alignment', 'learning_style_match');--> statement-breakpoint
CREATE TYPE "public"."recommendation_feedback_type" AS ENUM('path_too_long', 'good_progression', 'missing_topics', 'too_advanced');--> statement-breakpoint
CREATE TYPE "public"."recommendation_type" AS ENUM('skill_path', 'interest_based', 'career_path', 'peer_learning');--> statement-breakpoint
CREATE TYPE "public"."subscription_type" AS ENUM('FREE', 'PREMIUM');--> statement-breakpoint
CREATE TYPE "public"."unit_type" AS ENUM('VIDEO', 'TEXT', 'INTERACTIVE');--> statement-breakpoint
CREATE TABLE "user_learning_preferences" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"preference_type" "preference_type" NOT NULL,
	"context_id" text,
	"settings" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"preference_embedding" vector(384),
	"adaptation_metrics" jsonb,
	CONSTRAINT "user_learning_preferences_user_id_preference_type_context_i_key" UNIQUE("user_id","preference_type","context_id")
);
--> statement-breakpoint
CREATE TABLE "personalization_history" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"module_id" text NOT NULL,
	"previous_content_state" jsonb,
	"new_content_state" jsonb,
	"personalization_context" jsonb,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"context_embedding" vector(1536),
	"effectiveness_metrics" jsonb
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"unit_id" text NOT NULL,
	"content" text NOT NULL,
	"position_in_content" integer,
	"highlight_text" text,
	"highlight_start" integer,
	"highlight_end" integer,
	"is_voice_note" boolean DEFAULT false,
	"voice_note_url" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "notes_highlight_range" CHECK (((highlight_text IS NULL) AND (highlight_start IS NULL) AND (highlight_end IS NULL)) OR ((highlight_text IS NOT NULL) AND (highlight_start IS NOT NULL) AND (highlight_end IS NOT NULL)))
);
--> statement-breakpoint
CREATE TABLE "bookmarks" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"unit_id" text NOT NULL,
	"title" text,
	"description" text,
	"position_in_content" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "banners" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text,
	"link" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "quiz" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"module_id" text NOT NULL,
	"description" text,
	"total_question" integer,
	"passing_score" integer NOT NULL,
	"max_attempts" integer DEFAULT 3 NOT NULL,
	"time_limit" integer,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"as_assessment" boolean DEFAULT false NOT NULL,
	"course_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"difficulty" "difficulty_level" NOT NULL,
	"trailer" text,
	"thumbnail" text,
	"category_id" text NOT NULL,
	"additional_info" jsonb,
	"is_published" boolean DEFAULT false NOT NULL,
	"total_enrollments" integer DEFAULT 0 NOT NULL,
	"rating" numeric(2, 1) DEFAULT '0' NOT NULL,
	"is_premium" boolean DEFAULT false NOT NULL,
	"published_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "courses_rating_check" CHECK ((rating >= (0)::numeric) AND (rating <= (5)::numeric))
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"username" text,
	"is_admin" boolean DEFAULT false,
	"is_already_onboard" boolean DEFAULT false,
	"image" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ai_generation_quota" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"weekly_quota" integer NOT NULL,
	"used_quota" integer DEFAULT 0 NOT NULL,
	"reset_date" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "answer_options" (
	"id" text PRIMARY KEY NOT NULL,
	"question_id" text NOT NULL,
	"text" text NOT NULL,
	"is_correct" boolean DEFAULT false NOT NULL,
	"explanation" text
);
--> statement-breakpoint
CREATE TABLE "modules" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"is_personalizable" boolean DEFAULT false NOT NULL,
	"order_index" integer NOT NULL,
	"course_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "badge" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"image_url" text,
	"module_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "certificates" (
	"id" text PRIMARY KEY NOT NULL,
	"course_id" text NOT NULL,
	"description" text,
	"title" text NOT NULL,
	"image_url" text
);
--> statement-breakpoint
CREATE TABLE "units" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"type" "unit_type" NOT NULL,
	"order_index" integer NOT NULL,
	"module_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "course_categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedbacks" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"course_id" text NOT NULL,
	"rating" numeric(2, 1) DEFAULT '0' NOT NULL,
	"comments" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "feedbacks_rating_check" CHECK ((rating >= (0)::numeric) AND (rating <= (5)::numeric))
);
--> statement-breakpoint
CREATE TABLE "notifications" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"message" text NOT NULL,
	"content" text,
	"is_read" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quiz_attempts" (
	"id" text PRIMARY KEY NOT NULL,
	"quiz_id" text NOT NULL,
	"user_id" text NOT NULL,
	"total_score" integer DEFAULT 0 NOT NULL,
	"start_time" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"end_time" timestamp with time zone,
	"status" "quiz_status" DEFAULT 'STARTED' NOT NULL,
	"next_attempt_allowed" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "quiz_attempts_detail" (
	"id" text PRIMARY KEY NOT NULL,
	"quiz_attempt_id" text NOT NULL,
	"question_id" text NOT NULL,
	"selected_answer_id" text,
	"is_correct" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" text PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"quiz_id" text NOT NULL,
	"point_value" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"type" "question_type" DEFAULT 'multiple_choice' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_versions" (
	"id" text PRIMARY KEY NOT NULL,
	"unit_id" text NOT NULL,
	"content" text NOT NULL,
	"is_default" boolean DEFAULT false NOT NULL,
	"contentHash" text,
	"generation_parameters" jsonb,
	"usage_count" integer DEFAULT 1,
	"assessment_date" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"type" "content_type" DEFAULT 'TEXT',
	"generation_source" "content_generation_source" DEFAULT 'default',
	"content_embedding" vector(1536),
	"style_embedding" vector(384),
	"complexity_metrics" jsonb
);
--> statement-breakpoint
CREATE TABLE "progress" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"module_id" text NOT NULL,
	"progress_status" "progress_status" DEFAULT 'NOT_STARTED' NOT NULL,
	"ai_suggestion" text,
	"current_unit_id" text,
	"next_unit_id" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"performance_embedding" vector(384),
	"adaptation_impact" jsonb
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"type" "subscription_type" DEFAULT 'FREE' NOT NULL,
	"starts_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"ends_at" timestamp with time zone,
	"is_active" boolean DEFAULT true,
	"subscription_data" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "user_badges" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"badge_id" text NOT NULL,
	"issued_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "user_certificates" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"certificate_id" text NOT NULL,
	"issued_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE "user_courses" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"course_id" text NOT NULL,
	"time_spent" integer DEFAULT 0,
	"last_interaction" timestamp with time zone,
	"learning_streak" integer DEFAULT 0,
	"completion_rate" integer DEFAULT 0 NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL,
	"current_module_id" text,
	"next_module_id" text,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE "user_learning_preferences" ADD CONSTRAINT "user_learning_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personalization_history" ADD CONSTRAINT "personalization_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "personalization_history" ADD CONSTRAINT "personalization_history_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_unit_id_fkey" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz" ADD CONSTRAINT "FK_quiz_course_id" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz" ADD CONSTRAINT "FK_quiz_module_id" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "courses" ADD CONSTRAINT "FK_courses_category_id" FOREIGN KEY ("category_id") REFERENCES "public"."course_categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_generation_quota" ADD CONSTRAINT "FK_ai_generation_quota_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "answer_options" ADD CONSTRAINT "FK_answer_options_question_id" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "modules" ADD CONSTRAINT "FK_modules_course_id" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "badge" ADD CONSTRAINT "FK_badge_module_id" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certificates" ADD CONSTRAINT "FK_certificates_course_id" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "units" ADD CONSTRAINT "FK_units_module_id" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_feedbacks_course_id" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_feedbacks_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "FK_notifications_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "FK_quiz_attempts_quiz_id" FOREIGN KEY ("quiz_id") REFERENCES "public"."quiz"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "FK_quiz_attempts_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts_detail" ADD CONSTRAINT "FK_quiz_attempts_detail_quiz_attempt_id" FOREIGN KEY ("quiz_attempt_id") REFERENCES "public"."quiz_attempts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts_detail" ADD CONSTRAINT "FK_quiz_attempts_detail_question_id" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "quiz_attempts_detail" ADD CONSTRAINT "FK_quiz_attempts_detail_selected_answer_id" FOREIGN KEY ("selected_answer_id") REFERENCES "public"."answer_options"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "FK_questions_quiz_id" FOREIGN KEY ("quiz_id") REFERENCES "public"."quiz"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content_versions" ADD CONSTRAINT "FK_content_versions_unit_id" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "FK_progress_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "FK_progress_module_id" FOREIGN KEY ("module_id") REFERENCES "public"."modules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "FK_progress_current_unit_id" FOREIGN KEY ("current_unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "progress" ADD CONSTRAINT "FK_progress_next_unit_id" FOREIGN KEY ("next_unit_id") REFERENCES "public"."units"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions" ADD CONSTRAINT "FK_subscriptions_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_badges" ADD CONSTRAINT "FK_user_badges_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_badges" ADD CONSTRAINT "FK_user_badges_badge_id" FOREIGN KEY ("badge_id") REFERENCES "public"."badge"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_certificates" ADD CONSTRAINT "FK_user_certificates_certificate_id" FOREIGN KEY ("certificate_id") REFERENCES "public"."certificates"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_certificates" ADD CONSTRAINT "FK_user_certificates_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_courses" ADD CONSTRAINT "FK_user_courses_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_courses" ADD CONSTRAINT "FK_user_courses_course_id" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_courses" ADD CONSTRAINT "FK_user_courses_current_module_id" FOREIGN KEY ("current_module_id") REFERENCES "public"."modules"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_courses" ADD CONSTRAINT "FK_user_courses_next_module_id" FOREIGN KEY ("next_module_id") REFERENCES "public"."modules"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_preference_embedding" ON "user_learning_preferences" USING hnsw ("preference_embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "idx_context_embedding" ON "personalization_history" USING hnsw ("context_embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "idx_notes_unit_id" ON "notes" USING btree ("unit_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_notes_user_id" ON "notes" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_bookmarks_unit_id" ON "bookmarks" USING btree ("unit_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_bookmarks_user_id" ON "bookmarks" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "idx_unique_user_unit_bookmark" ON "bookmarks" USING btree ("user_id" int4_ops,"unit_id" int4_ops,"position_in_content" int4_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_course_id" ON "quiz" USING btree ("course_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_module_id" ON "quiz" USING btree ("module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_courses_category_id" ON "courses" USING btree ("category_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_ai_generation_quota_user_id" ON "ai_generation_quota" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_answer_options_question_id" ON "answer_options" USING btree ("question_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_modules_course_id" ON "modules" USING btree ("course_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_badge_module_id" ON "badge" USING btree ("module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_certificates_course_id" ON "certificates" USING btree ("course_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_units_module_id" ON "units" USING btree ("module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_feedbacks_course_id" ON "feedbacks" USING btree ("course_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_feedbacks_user_id" ON "feedbacks" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_notifications_user_id" ON "notifications" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_attempts_quiz_id" ON "quiz_attempts" USING btree ("quiz_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_attempts_user_id" ON "quiz_attempts" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_attempts_detail_question_id" ON "quiz_attempts_detail" USING btree ("question_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_attempts_detail_quiz_attempt_id" ON "quiz_attempts_detail" USING btree ("quiz_attempt_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_quiz_attempts_detail_selected_answer_id" ON "quiz_attempts_detail" USING btree ("selected_answer_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_questions_quiz_id" ON "questions" USING btree ("quiz_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_content_embedding" ON "content_versions" USING hnsw ("content_embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "idx_content_versions_content_hash" ON "content_versions" USING btree ("contentHash" text_ops);--> statement-breakpoint
CREATE INDEX "idx_content_versions_expires" ON "content_versions" USING btree ("assessment_date" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "idx_content_versions_unit_id" ON "content_versions" USING btree ("unit_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_style_embedding" ON "content_versions" USING hnsw ("style_embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "idx_next_current_unit_id" ON "progress" USING btree ("next_unit_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_performance_embedding" ON "progress" USING hnsw ("performance_embedding" vector_cosine_ops);--> statement-breakpoint
CREATE INDEX "idx_progress_current_unit_id" ON "progress" USING btree ("current_unit_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_progress_module_id" ON "progress" USING btree ("module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_progress_user_id" ON "progress" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_subscriptions_user_id" ON "subscriptions" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_badges_badge_id" ON "user_badges" USING btree ("badge_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_badges_user_id" ON "user_badges" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_certificates_certificate_id" ON "user_certificates" USING btree ("certificate_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_certificates_user_id" ON "user_certificates" USING btree ("user_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_courses_course_id" ON "user_courses" USING btree ("course_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_courses_current_module_id" ON "user_courses" USING btree ("current_module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_courses_next_module_id" ON "user_courses" USING btree ("next_module_id" text_ops);--> statement-breakpoint
CREATE INDEX "idx_user_courses_user_id" ON "user_courses" USING btree ("user_id" text_ops);
*/
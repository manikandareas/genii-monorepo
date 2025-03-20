import { Prisma } from "@prisma/client";

/**
 * Utility types for Prisma models
 */

// Content enums
export enum ContentGenerationSource {
  DEFAULT = "default",
  AI_GENERATED = "ai_generated",
  AI_MODIFIED = "ai_modified",
}

export enum ContentStyle {
  THEORETICAL = "theoretical",
  PRACTICAL = "practical",
  EXAMPLE_BASED = "example_based",
  PROJECT_BASED = "project_based",
  INTERACTIVE = "interactive",
}

export enum ContentType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
  INTERACTIVE = "INTERACTIVE",
}

export enum DifficultyLevel {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export enum LearningStyle {
  VISUAL = "visual",
  AUDITORY = "auditory",
  READING = "reading",
  KINESTHETIC = "kinesthetic",
}

export enum MotivationLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum PreferenceType {
  ONBOARDING = "onboarding",
  CONTENT = "content",
  QUIZ = "quiz",
}

export enum ProgressStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export enum QuestionType {
  MULTIPLE_CHOICE = "multiple_choice",
  MULTIPLE_RESPONSE = "multiple_response",
  TRUE_FALSE = "true_false",
}

export enum QuizStatus {
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum RecommendationDependencyType {
  PREREQUISITE = "prerequisite",
  COREQUISITE = "corequisite",
  RECOMMENDED_BEFORE = "recommended_before",
}

export enum RecommendationFactorType {
  SKILL_PROGRESSION = "skill_progression",
  CAREER_ALIGNMENT = "career_alignment",
  LEARNING_STYLE_MATCH = "learning_style_match",
}

export enum RecommendationFeedbackType {
  PATH_TOO_LONG = "path_too_long",
  GOOD_PROGRESSION = "good_progression",
  MISSING_TOPICS = "missing_topics",
  TOO_ADVANCED = "too_advanced",
}

export enum RecommendationType {
  SKILL_PATH = "skill_path",
  INTEREST_BASED = "interest_based",
  CAREER_PATH = "career_path",
  PEER_LEARNING = "peer_learning",
}

export enum SubscriptionType {
  FREE = "FREE",
  PREMIUM = "PREMIUM",
}

export enum UnitType {
  VIDEO = "VIDEO",
  TEXT = "TEXT",
  INTERACTIVE = "INTERACTIVE",
}

// Model types
export type User = Prisma.userGetPayload<{}>;
export type UserSelect = Prisma.userSelect;
export type UserWhereInput = Prisma.userWhereInput;
export type UserWhereUniqueInput = Prisma.userWhereUniqueInput;
export type UserCreateInput = Prisma.userCreateInput;
export type UserUpdateInput = Prisma.userUpdateInput;

export type AiGenerationQuota = Prisma.ai_generation_quotaGetPayload<{}>;
export type AiGenerationQuotaSelect = Prisma.ai_generation_quotaSelect;
export type AiGenerationQuotaWhereInput = Prisma.ai_generation_quotaWhereInput;
export type AiGenerationQuotaWhereUniqueInput = Prisma.ai_generation_quotaWhereUniqueInput;
export type AiGenerationQuotaCreateInput = Prisma.ai_generation_quotaCreateInput;
export type AiGenerationQuotaUpdateInput = Prisma.ai_generation_quotaUpdateInput;

export type AnswerOption = Prisma.answer_optionsGetPayload<{}>;
export type AnswerOptionSelect = Prisma.answer_optionsSelect;
export type AnswerOptionWhereInput = Prisma.answer_optionsWhereInput;
export type AnswerOptionWhereUniqueInput = Prisma.answer_optionsWhereUniqueInput;
export type AnswerOptionCreateInput = Prisma.answer_optionsCreateInput;
export type AnswerOptionUpdateInput = Prisma.answer_optionsUpdateInput;

export type Badge = Prisma.badgeGetPayload<{}>;
export type BadgeSelect = Prisma.badgeSelect;
export type BadgeWhereInput = Prisma.badgeWhereInput;
export type BadgeWhereUniqueInput = Prisma.badgeWhereUniqueInput;
export type BadgeCreateInput = Prisma.badgeCreateInput;
export type BadgeUpdateInput = Prisma.badgeUpdateInput;

export type Banner = Prisma.bannersGetPayload<{}>;
export type BannerSelect = Prisma.bannersSelect;
export type BannerWhereInput = Prisma.bannersWhereInput;
export type BannerWhereUniqueInput = Prisma.bannersWhereUniqueInput;
export type BannerCreateInput = Prisma.bannersCreateInput;
export type BannerUpdateInput = Prisma.bannersUpdateInput;

export type Bookmark = Prisma.bookmarksGetPayload<{}>;
export type BookmarkSelect = Prisma.bookmarksSelect;
export type BookmarkWhereInput = Prisma.bookmarksWhereInput;
export type BookmarkWhereUniqueInput = Prisma.bookmarksWhereUniqueInput;
export type BookmarkCreateInput = Prisma.bookmarksCreateInput;
export type BookmarkUpdateInput = Prisma.bookmarksUpdateInput;

export type Certificate = Prisma.certificatesGetPayload<{}>;
export type CertificateSelect = Prisma.certificatesSelect;
export type CertificateWhereInput = Prisma.certificatesWhereInput;
export type CertificateWhereUniqueInput = Prisma.certificatesWhereUniqueInput;
export type CertificateCreateInput = Prisma.certificatesCreateInput;
export type CertificateUpdateInput = Prisma.certificatesUpdateInput;

export type ContentVersion = Prisma.content_versionsGetPayload<{}>;
export type ContentVersionSelect = Prisma.content_versionsSelect;
export type ContentVersionWhereInput = Prisma.content_versionsWhereInput;
export type ContentVersionWhereUniqueInput = Prisma.content_versionsWhereUniqueInput;
export type ContentVersionCreateInput = Prisma.content_versionsCreateInput;
export type ContentVersionUpdateInput = Prisma.content_versionsUpdateInput;

export type CourseCategory = Prisma.course_categoriesGetPayload<{}>;
export type CourseCategorySelect = Prisma.course_categoriesSelect;
export type CourseCategoryWhereInput = Prisma.course_categoriesWhereInput;
export type CourseCategoryWhereUniqueInput = Prisma.course_categoriesWhereUniqueInput;
export type CourseCategoryCreateInput = Prisma.course_categoriesCreateInput;
export type CourseCategoryUpdateInput = Prisma.course_categoriesUpdateInput;

export type Course = Prisma.coursesGetPayload<{}>;
export type CourseSelect = Prisma.coursesSelect;
export type CourseWhereInput = Prisma.coursesWhereInput;
export type CourseWhereUniqueInput = Prisma.coursesWhereUniqueInput;
export type CourseCreateInput = Prisma.coursesCreateInput;
export type CourseUpdateInput = Prisma.coursesUpdateInput;

export type Feedback = Prisma.feedbacksGetPayload<{}>;
export type FeedbackSelect = Prisma.feedbacksSelect;
export type FeedbackWhereInput = Prisma.feedbacksWhereInput;
export type FeedbackWhereUniqueInput = Prisma.feedbacksWhereUniqueInput;
export type FeedbackCreateInput = Prisma.feedbacksCreateInput;
export type FeedbackUpdateInput = Prisma.feedbacksUpdateInput;

export type Module = Prisma.modulesGetPayload<{}>;
export type ModuleSelect = Prisma.modulesSelect;
export type ModuleWhereInput = Prisma.modulesWhereInput;
export type ModuleWhereUniqueInput = Prisma.modulesWhereUniqueInput;
export type ModuleCreateInput = Prisma.modulesCreateInput;
export type ModuleUpdateInput = Prisma.modulesUpdateInput;

export type Note = Prisma.notesGetPayload<{}>;
export type NoteSelect = Prisma.notesSelect;
export type NoteWhereInput = Prisma.notesWhereInput;
export type NoteWhereUniqueInput = Prisma.notesWhereUniqueInput;
export type NoteCreateInput = Prisma.notesCreateInput;
export type NoteUpdateInput = Prisma.notesUpdateInput;

export type Notification = Prisma.notificationsGetPayload<{}>;
export type NotificationSelect = Prisma.notificationsSelect;
export type NotificationWhereInput = Prisma.notificationsWhereInput;
export type NotificationWhereUniqueInput = Prisma.notificationsWhereUniqueInput;
export type NotificationCreateInput = Prisma.notificationsCreateInput;
export type NotificationUpdateInput = Prisma.notificationsUpdateInput;

export type PersonalizationHistory = Prisma.personalization_historyGetPayload<{}>;
export type PersonalizationHistorySelect = Prisma.personalization_historySelect;
export type PersonalizationHistoryWhereInput = Prisma.personalization_historyWhereInput;
export type PersonalizationHistoryWhereUniqueInput = Prisma.personalization_historyWhereUniqueInput;
export type PersonalizationHistoryCreateInput = Prisma.personalization_historyCreateInput;
export type PersonalizationHistoryUpdateInput = Prisma.personalization_historyUpdateInput;

export type Progress = Prisma.progressGetPayload<{}>;
export type ProgressSelect = Prisma.progressSelect;
export type ProgressWhereInput = Prisma.progressWhereInput;
export type ProgressWhereUniqueInput = Prisma.progressWhereUniqueInput;
export type ProgressCreateInput = Prisma.progressCreateInput;
export type ProgressUpdateInput = Prisma.progressUpdateInput;

export type Question = Prisma.questionsGetPayload<{}>;
export type QuestionSelect = Prisma.questionsSelect;
export type QuestionWhereInput = Prisma.questionsWhereInput;
export type QuestionWhereUniqueInput = Prisma.questionsWhereUniqueInput;
export type QuestionCreateInput = Prisma.questionsCreateInput;
export type QuestionUpdateInput = Prisma.questionsUpdateInput;

export type Quiz = Prisma.quizGetPayload<{}>;
export type QuizSelect = Prisma.quizSelect;
export type QuizWhereInput = Prisma.quizWhereInput;
export type QuizWhereUniqueInput = Prisma.quizWhereUniqueInput;
export type QuizCreateInput = Prisma.quizCreateInput;
export type QuizUpdateInput = Prisma.quizUpdateInput;

export type QuizAttempt = Prisma.quiz_attemptsGetPayload<{}>;
export type QuizAttemptSelect = Prisma.quiz_attemptsSelect;
export type QuizAttemptWhereInput = Prisma.quiz_attemptsWhereInput;
export type QuizAttemptWhereUniqueInput = Prisma.quiz_attemptsWhereUniqueInput;
export type QuizAttemptCreateInput = Prisma.quiz_attemptsCreateInput;
export type QuizAttemptUpdateInput = Prisma.quiz_attemptsUpdateInput;

export type QuizAttemptDetail = Prisma.quiz_attempts_detailGetPayload<{}>;
export type QuizAttemptDetailSelect = Prisma.quiz_attempts_detailSelect;
export type QuizAttemptDetailWhereInput = Prisma.quiz_attempts_detailWhereInput;
export type QuizAttemptDetailWhereUniqueInput = Prisma.quiz_attempts_detailWhereUniqueInput;
export type QuizAttemptDetailCreateInput = Prisma.quiz_attempts_detailCreateInput;
export type QuizAttemptDetailUpdateInput = Prisma.quiz_attempts_detailUpdateInput;

export type Subscription = Prisma.subscriptionsGetPayload<{}>;
export type SubscriptionSelect = Prisma.subscriptionsSelect;
export type SubscriptionWhereInput = Prisma.subscriptionsWhereInput;
export type SubscriptionWhereUniqueInput = Prisma.subscriptionsWhereUniqueInput;
export type SubscriptionCreateInput = Prisma.subscriptionsCreateInput;
export type SubscriptionUpdateInput = Prisma.subscriptionsUpdateInput;

export type Unit = Prisma.unitsGetPayload<{}>;
export type UnitSelect = Prisma.unitsSelect;
export type UnitWhereInput = Prisma.unitsWhereInput;
export type UnitWhereUniqueInput = Prisma.unitsWhereUniqueInput;
export type UnitCreateInput = Prisma.unitsCreateInput;
export type UnitUpdateInput = Prisma.unitsUpdateInput;

export type UserBadge = Prisma.user_badgesGetPayload<{}>;
export type UserBadgeSelect = Prisma.user_badgesSelect;
export type UserBadgeWhereInput = Prisma.user_badgesWhereInput;
export type UserBadgeWhereUniqueInput = Prisma.user_badgesWhereUniqueInput;
export type UserBadgeCreateInput = Prisma.user_badgesCreateInput;
export type UserBadgeUpdateInput = Prisma.user_badgesUpdateInput;

export type UserCertificate = Prisma.user_certificatesGetPayload<{}>;
export type UserCertificateSelect = Prisma.user_certificatesSelect;
export type UserCertificateWhereInput = Prisma.user_certificatesWhereInput;
export type UserCertificateWhereUniqueInput = Prisma.user_certificatesWhereUniqueInput;
export type UserCertificateCreateInput = Prisma.user_certificatesCreateInput;
export type UserCertificateUpdateInput = Prisma.user_certificatesUpdateInput;

export type UserCourse = Prisma.user_coursesGetPayload<{}>;
export type UserCourseSelect = Prisma.user_coursesSelect;
export type UserCourseWhereInput = Prisma.user_coursesWhereInput;
export type UserCourseWhereUniqueInput = Prisma.user_coursesWhereUniqueInput;
export type UserCourseCreateInput = Prisma.user_coursesCreateInput;
export type UserCourseUpdateInput = Prisma.user_coursesUpdateInput;

export type UserLearningPreference = Prisma.user_learning_preferencesGetPayload<{}>;
export type UserLearningPreferenceSelect = Prisma.user_learning_preferencesSelect;
export type UserLearningPreferenceWhereInput = Prisma.user_learning_preferencesWhereInput;
export type UserLearningPreferenceWhereUniqueInput =
  Prisma.user_learning_preferencesWhereUniqueInput;
export type UserLearningPreferenceCreateInput = Prisma.user_learning_preferencesCreateInput;
export type UserLearningPreferenceUpdateInput = Prisma.user_learning_preferencesUpdateInput;

// Example usage:
// export const userWithCoursesSelect: UserSelect = {
//   id: true,
//   name: true,
//   email: true,
//   user_courses: {
//     select: {
//       id: true,
//       course_id: true,
//     }
//   }
// };

// ==================== Include Types ====================
// Use these types when you want to include related entities in your queries

// User with all of its relations
export type UserWithRelations = Prisma.userGetPayload<{
  include: {
    ai_generation_quota: true;
    bookmarks: true;
    feedbacks: true;
    notes: true;
    notifications: true;
    personalization_history: true;
    progress: true;
    quiz_attempts: true;
    subscriptions: true;
    user_badges: true;
    user_certificates: true;
    user_courses: true;
    user_learning_preferences: true;
  };
}>;

// Course with all of its relations
export type CourseWithRelations = Prisma.coursesGetPayload<{
  include: {
    certificates: true;
    course_categories: true;
    feedbacks: true;
    modules: true;
    quiz: true;
    user_courses: true;
  };
}>;

// Module with all of its relations
export type ModuleWithRelations = Prisma.modulesGetPayload<{
  include: {
    badge: true;
    courses: true;
    personalization_history: true;
    progress: true;
    quiz: true;
    units: true;
    user_courses_user_courses_current_module_idTomodules: true;
    user_courses_user_courses_next_module_idTomodules: true;
  };
}>;

// Unit with all of its relations
export type UnitWithRelations = Prisma.unitsGetPayload<{
  include: {
    bookmarks: true;
    content_versions: true;
    notes: true;
    progress_progress_current_unit_idTounits: true;
    progress_progress_next_unit_idTounits: true;
    modules: true;
  };
}>;

// Quiz with all of its relations
export type QuizWithRelations = Prisma.quizGetPayload<{
  include: {
    questions: {
      include: {
        answer_options: true;
        quiz_attempts_detail: true;
      };
    };
    courses: true;
    modules: true;
    quiz_attempts: {
      include: {
        quiz_attempts_detail: true;
      };
    };
  };
}>;

// Advanced example - User with nested relations
export type UserWithCourseDetails = Prisma.userGetPayload<{
  include: {
    user_courses: {
      include: {
        courses: {
          include: {
            modules: {
              include: {
                units: true;
                quiz: true;
              };
            };
          };
        };
      };
    };
  };
}>;

/**
 * Custom utility helper types for common operations
 */

// Custom helpers for working with complex operations
export interface UserProfileData {
  user: User;
  courses: UserCourse[];
  badges: UserBadge[];
  certificates: UserCertificate[];
  learningPreferences: UserLearningPreference[];
}

export interface CourseContentData {
  course: Course;
  modules: Module[];
  units: Record<string, Unit[]>; // moduleId -> units
  quizzes: Record<string, Quiz[]>; // moduleId -> quizzes
}

export interface UserProgressData {
  progress: Progress[];
  quizAttempts: QuizAttempt[];
  completedModules: string[];
  completionRate: number;
}

export interface PersonalizationData {
  history: PersonalizationHistory[];
  contentVersions: ContentVersion[];
  preferences: UserLearningPreference[];
}

# Database Types Documentation

## Table of Contents
- [Enums](#enums)
- [JSON Structures](#json-structures)
- [Sample SQL Queries](#sample-sql-queries)

## Enums

### Existing System Enums
```typescript
// Content Types
enum ContentType {
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
  INTERACTIVE = 'INTERACTIVE'
}

// Difficulty Levels
enum DifficultyLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED'
}

// Progress Status
enum ProgressStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

// Question Types
enum QuestionType {
  multiple_choice = 'multiple_choice',
  multiple_response = 'multiple_response',
  true_false = 'true_false'
}

// Quiz Status
enum QuizStatus {
  STARTED = 'STARTED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED'
}

// Activity Types
enum ActivityType {
  course_enrollment = 'course_enrollment',
  content_viewed = 'content_viewed',
  quiz_completed = 'quiz_completed',
  note_created = 'note_created',
  bookmark_created = 'bookmark_created',
  personalization_applied = 'personalization_applied',
  certificate_earned = 'certificate_earned'
}

// Banner Types
enum BannerType {
  info = 'info',
  warning = 'warning',
  success = 'success',
  error = 'error',
  promo = 'promo'
}

// Notification Action Types
enum NotificationActionType {
  navigate = 'navigate',
  open_modal = 'open_modal',
  dismiss = 'dismiss',
  external_link = 'external_link'
}
```

### New Personalization Enums
```typescript
// Preference Types
enum PreferenceType {
  onboarding = 'onboarding',
  content = 'content',
  quiz = 'quiz'
}

// Content Generation Source
enum ContentGenerationSource {
  default = 'default',
  ai_generated = 'ai_generated',
  ai_modified = 'ai_modified'
}

// Learning Styles
enum LearningStyle {
  visual = 'visual',
  auditory = 'auditory',
  reading = 'reading',
  kinesthetic = 'kinesthetic'
}

// Content Presentation Styles
enum ContentStyle {
  theoretical = 'theoretical',
  practical = 'practical',
  example_based = 'example_based',
  project_based = 'project_based',
  interactive = 'interactive'
}

// Subscription Plans
enum SubscriptionPlan {
  free = 'free',
  basic = 'basic',
  premium = 'premium',
  enterprise = 'enterprise'
}

// Personalization Trigger Types
enum PersonalizationTrigger {
  user_request = 'user_request',
  performance_based = 'performance_based',
  scheduled = 'scheduled',
  system_recommendation = 'system_recommendation'
}
```

## JSON Structures

### User Learning Preferences

#### Onboarding Preferences
```typescript
type OnboardingPreferenceSettings = {
  learning_style: LearningStyle[];
  preferred_difficulty: DifficultyLevel;
  preferred_content_styles: ContentStyle[];
  daily_study_time: number; // minutes
  preferred_learning_days: string[]; // e.g., ['monday', 'wednesday']
  learning_goals: string[];
  technical_background: string[];
}
```

#### Content Preferences
```typescript
type ContentPreferenceSettings = {
  content_version_id: string;
  personalization_settings: {
    preferred_style: ContentStyle;
    difficulty_level: DifficultyLevel;
    learning_style: LearningStyle;
    additional_context?: string;
  }
}
```

#### Quiz Preferences
```typescript
type QuizPreferenceSettings = {
  quiz_id: string;
  personalization_settings: {
    difficulty_level: DifficultyLevel;
    question_types: string[];
    time_limit?: number;
    additional_instructions?: string;
  }
}
```

### Personalization History

#### Previous Content State
```typescript
type PreviousContentState = {
  content_versions: {
    unit_id: string;
    version_id: string;
    difficulty_level: DifficultyLevel;
    style: ContentStyle;
  }[];
  quiz: {
    quiz_id: string;
    difficulty_level: DifficultyLevel;
    question_types: string[];
  };
}
```

#### New Content State
```typescript
type NewContentState = {
  content_versions: {
    unit_id: string;
    version_id: string;
    difficulty_level: DifficultyLevel;
    style: ContentStyle;
    generation_source: ContentGenerationSource;
  }[];
  quiz: {
    quiz_id: string;
    difficulty_level: DifficultyLevel;
    question_types: string[];
    generation_source: ContentGenerationSource;
  };
}
```

#### Personalization Context
```typescript
type PersonalizationContext = {
  trigger: PersonalizationTrigger;
  user_performance: {
    previous_quiz_scores: number[];
    average_completion_time: number;
    engagement_metrics: {
      completion_rate: number;
      revisit_rate: number;
    };
  };
  learning_preferences: {
    style: LearningStyle;
    difficulty: DifficultyLevel;
    content_style: ContentStyle;
  };
  module_context: {
    module_id: string;
    total_units: number;
    current_progress: number;
  };
}
```

### Content Versions

#### Generation Parameters
```typescript
type GenerationParameters = {
  target_audience: {
    learning_style: LearningStyle;
    technical_level: DifficultyLevel;
    prior_knowledge: string[];
  };
  content_requirements: {
    style: ContentStyle;
    format: 'markdown' | 'html' | 'plain';
    word_count?: number;
    include_examples: boolean;
    include_exercises: boolean;
  };
  personalization_context: {
    user_performance_level: DifficultyLevel;
    learning_goals: string[];
    preferred_approach: ContentStyle;
    specific_focus_areas?: string[];
  };
  ai_parameters?: {
    model_version: string;
    temperature: number;
    max_tokens: number;
    special_instructions?: string[];
  };
}
```

### New JSON Structures

#### Learning Path Structure
```typescript
type PathSequence = {
  courses: {
    id: string;
    order: number;
    required: boolean;
    estimated_duration: string;
    prerequisites?: string[];
  }[];
  completion_requirements: {
    min_courses_completed: number;
    required_course_ids: string[];
    final_assessment?: string;
  };
}
```

#### Notification Preferences
```typescript
type NotificationPreferences = {
  email: boolean;
  push: boolean;
  types: {
    quiz_reminders: boolean;
    course_updates: boolean;
    learning_reminders: boolean;
    system_announcements?: boolean;
    certificate_notifications?: boolean;
  };
  quiet_hours?: {
    enabled: boolean;
    start: string; // "22:00"
    end: string; // "08:00"
  };
}
```

#### Banner Configuration
```typescript
type BannerConfiguration = {
  id: string;
  title: string;
  content: string;
  type: BannerType;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  targetUsers: string[]; // ["all"] or specific user groups/ids
  dismissible: boolean;
  action?: {
    label: string;
    url: string;
  };
}
```

#### User Learning Insights
```typescript
type LearningInsights = {
  learningPatterns: string[];
  suggestedLearningPath?: string;
  personalizedTips: string[];
  strengths: string[];
  areasForImprovement: string[];
  recommendedTopics: string[];
}
```

#### Subscription Features
```typescript
type SubscriptionFeatures = {
  plan: SubscriptionPlan;
  features: string[];
  limits: {
    courses_access: number | 'unlimited';
    ai_personalization_quota: number;
    download_access: boolean;
    certificate_verification: boolean;
  };
  payment_method?: {
    type: 'credit_card' | 'paypal' | 'bank_transfer';
    lastFour?: string;
    expiryDate?: string;
  };
}
```

#### User Activity Metadata
```typescript
type ActivityMetadata = {
  // Common fields
  duration?: number;
  result?: string;

  // For quiz_completed
  score?: number;
  timeSpent?: number;

  // For content_viewed
  progress?: number;
  completionStatus?: string;

  // For personalization_applied
  previous_version_id?: string;
  new_version_id?: string;

  // For notes and bookmarks
  position_in_content?: number;
}
```

#### AI Generation Quota
```typescript
type AIGenerationQuota = {
  userId: string;
  monthlyLimit: number;
  used: number;
  remaining: number;
  resetDate: string; // ISO date string
  tierName: string;
}
```

## Sample SQL Queries

### User Learning Preferences

#### Create Onboarding Preferences
```sql
INSERT INTO user_learning_preferences (
    id,
    user_id,
    preference_type,
    settings
) VALUES (
    'pref_123',
    'user_456',
    'onboarding',
    '{
        "learning_style": ["visual", "kinesthetic"],
        "preferred_difficulty": "INTERMEDIATE",
        "preferred_content_styles": ["practical", "example_based"],
        "daily_study_time": 120,
        "preferred_learning_days": ["monday", "wednesday", "friday"],
        "learning_goals": ["master_frontend", "learn_react"],
        "technical_background": ["basic_javascript", "html_css"]
    }'::jsonb
);
```

#### Create Content Preferences
```sql
INSERT INTO user_learning_preferences (
    id,
    user_id,
    preference_type,
    context_id,
    settings
) VALUES (
    'pref_124',
    'user_456',
    'content',
    'unit_789',
    '{
        "content_version_id": "cv_123",
        "personalization_settings": {
            "preferred_style": "practical",
            "difficulty_level": "INTERMEDIATE",
            "learning_style": "visual",
            "additional_context": "Focus on React hooks examples"
        }
    }'::jsonb
);
```

#### Query User Preferences
```sql
-- Get all preferences for a user
SELECT * FROM user_learning_preferences
WHERE user_id = 'user_456';

-- Get specific preference type
SELECT settings FROM user_learning_preferences
WHERE user_id = 'user_456'
AND preference_type = 'onboarding';

-- Get content preferences for a specific unit
SELECT settings->>'content_version_id' as version_id,
       settings->'personalization_settings' as settings
FROM user_learning_preferences
WHERE user_id = 'user_456'
AND preference_type = 'content'
AND context_id = 'unit_789';
```

### Personalization History

#### Record Personalization Event
```sql
INSERT INTO personalization_history (
    id,
    user_id,
    module_id,
    previous_content_state,
    new_content_state,
    personalization_context,
    trigger_reason
) VALUES (
    'ph_123',
    'user_456',
    'module_789',
    '{
        "content_versions": [
            {
                "unit_id": "unit_1",
                "version_id": "cv_1",
                "difficulty_level": "BEGINNER",
                "style": "theoretical"
            }
        ],
        "quiz": {
            "quiz_id": "quiz_1",
            "difficulty_level": "BEGINNER",
            "question_types": ["multiple_choice"]
        }
    }'::jsonb,
    '{
        "content_versions": [
            {
                "unit_id": "unit_1",
                "version_id": "cv_2",
                "difficulty_level": "INTERMEDIATE",
                "style": "practical",
                "generation_source": "ai_generated"
            }
        ],
        "quiz": {
            "quiz_id": "quiz_2",
            "difficulty_level": "INTERMEDIATE",
            "question_types": ["multiple_choice", "true_false"],
            "generation_source": "ai_generated"
        }
    }'::jsonb,
    '{
        "trigger": "user_request",
        "user_performance": {
            "previous_quiz_scores": [85, 90],
            "average_completion_time": 45,
            "engagement_metrics": {
                "completion_rate": 0.95,
                "revisit_rate": 0.2
            }
        },
        "learning_preferences": {
            "style": "practical",
            "difficulty": "INTERMEDIATE",
            "content_style": "example_based"
        },
        "module_context": {
            "module_id": "module_789",
            "total_units": 5,
            "current_progress": 0.4
        }
    }'::jsonb,
    'performance_threshold'
);
```

#### Query Personalization History
```sql
-- Get all personalization history for a user
SELECT
    module_id,
    previous_content_state,
    new_content_state,
    created_at,
    trigger_reason
FROM personalization_history
WHERE user_id = 'user_456'
ORDER BY created_at DESC;

-- Get latest personalization for a module
SELECT
    previous_content_state,
    new_content_state,
    personalization_context,
    trigger_reason,
    created_at
FROM personalization_history
WHERE user_id = 'user_456'
AND module_id = 'module_789'
ORDER BY created_at DESC
LIMIT 1;
```

### Content Versions

#### Create New Content Version
```sql
INSERT INTO content_versions (
    id,
    unit_id,
    content,
    is_default,
    generation_source,
    generation_parameters,
    personalization_context
) VALUES (
    'cv_123',
    'unit_456',
    'Content goes here...',
    false,
    'ai_generated',
    '{
        "target_audience": {
            "learning_style": "visual",
            "technical_level": "INTERMEDIATE",
            "prior_knowledge": ["javascript_basics", "html"]
        },
        "content_requirements": {
            "style": "practical",
            "format": "markdown",
            "word_count": 1000,
            "include_examples": true,
            "include_exercises": true
        },
        "personalization_context": {
            "user_performance_level": "INTERMEDIATE",
            "learning_goals": ["master_react"],
            "preferred_approach": "example_based"
        },
        "ai_parameters": {
            "model_version": "gemini-1.0-pro",
            "temperature": 0.7,
            "max_tokens": 2000
        }
    }'::jsonb,
    '{
        "learningStyle": "visual",
        "difficulty": "INTERMEDIATE",
        "contentStyle": "practical"
    }'::jsonb
);
```

### New Sample SQL Queries

#### Working with Learning Paths
```sql
-- Mark a category as a learning path
UPDATE course_categories
SET
    is_learning_path = true,
    path_sequence = '{
        "courses": [
            {
                "id": "course_123",
                "order": 1,
                "required": true,
                "estimated_duration": "4 weeks"
            },
            {
                "id": "course_124",
                "order": 2,
                "required": true,
                "estimated_duration": "3 weeks",
                "prerequisites": ["course_123"]
            }
        ],
        "completion_requirements": {
            "min_courses_completed": 2,
            "required_course_ids": ["course_123", "course_124"]
        }
    }'::jsonb,
    estimated_completion = '8 weeks'
WHERE id = 'cat_frontend';

-- Query learning paths
SELECT id, name, path_sequence, estimated_completion
FROM course_categories
WHERE is_learning_path = true;

-- Get courses in a learning path
SELECT
    cc.name as path_name,
    c.id as course_id,
    c.title as course_title,
    p.order as course_order,
    p.required as is_required
FROM course_categories cc
CROSS JOIN LATERAL jsonb_to_recordset(cc.path_sequence->'courses') as
    p(id text, order int, required boolean, estimated_duration text)
JOIN courses c ON c.id = p.id
WHERE cc.id = 'cat_frontend' AND cc.is_learning_path = true
ORDER BY p.order;
```

#### Creating and Querying Recommendations
```sql
-- Insert a recommendation
INSERT INTO recommendations (
    id,
    user_id,
    course_id,
    reason,
    match_score
) VALUES (
    'rec_123',
    'user_456',
    'course_789',
    'Based on your React learning progress',
    0.89
);

-- Get recommendations for a user
SELECT
    r.id,
    r.reason,
    r.match_score,
    c.title as course_title,
    c.description as course_description,
    c.difficulty as difficulty_level
FROM recommendations r
JOIN courses c ON r.course_id = c.id
WHERE r.user_id = 'user_456'
ORDER BY r.match_score DESC;

-- Store AI-generated learning insights
UPDATE "user"
SET learning_insights = '{
    "learningPatterns": ["Strong in frontend concepts", "Interested in TypeScript"],
    "suggestedLearningPath": "Advanced Frontend Development",
    "personalizedTips": [
        "Consider exploring TypeScript for type-safe React development",
        "Focus on state management patterns next"
    ],
    "strengths": ["hooks", "components"],
    "areasForImprovement": ["performance"]
}'::jsonb
WHERE id = 'user_456';
```

#### Managing Notifications with Actions
```sql
-- Create a notification with action
INSERT INTO notifications (
    id,
    user_id,
    title,
    message,
    action_type,
    action_url,
    expires_at
) VALUES (
    'notif_123',
    'user_456',
    'Upcoming Quiz: React Hooks',
    'You have a quiz due in 24 hours',
    'navigate',
    '/courses/course_123/quizzes/quiz_456',
    NOW() + INTERVAL '24 hours'
);

-- Get active notifications with actions
SELECT
    id,
    title,
    message,
    action_type,
    action_url,
    created_at
FROM notifications
WHERE user_id = 'user_456'
AND (expires_at IS NULL OR expires_at > NOW())
ORDER BY created_at DESC;

-- Update user notification preferences
UPDATE "user"
SET notification_preferences = '{
    "email": true,
    "push": true,
    "types": {
        "quiz_reminders": true,
        "course_updates": true,
        "learning_reminders": true,
        "system_announcements": false
    },
    "quiet_hours": {
        "enabled": true,
        "start": "22:00",
        "end": "08:00"
    }
}'::jsonb
WHERE id = 'user_456';
```

#### Working with Banners
```sql
-- Create a system banner
INSERT INTO banners (
    id,
    title,
    content,
    banner_type,
    start_date,
    end_date,
    target_users,
    dismissible
) VALUES (
    'banner_123',
    'New Course Available',
    'Check out our new TypeScript course',
    'info',
    NOW(),
    NOW() + INTERVAL '15 days',
    '["all"]'::jsonb,
    true
);

-- Get active banners for all users
SELECT id, title, content, banner_type
FROM banners
WHERE start_date <= NOW()
AND (end_date IS NULL OR end_date >= NOW())
AND target_users ? 'all';
```

#### Subscription Management
```sql
-- Update subscription with features
UPDATE subscriptions
SET features = '{
    "plan": "premium",
    "features": [
        "unlimited_courses",
        "ai_personalization",
        "certificate_verification"
    ],
    "limits": {
        "courses_access": "unlimited",
        "ai_personalization_quota": 50,
        "download_access": true,
        "certificate_verification": true
    }
}'::jsonb,
payment_method = '{
    "type": "credit_card",
    "lastFour": "1234",
    "expiryDate": "2025-12-31"
}'::jsonb
WHERE id = 'sub_123';

-- Query premium features
SELECT
    user_id,
    features->'plan' as plan,
    features->'limits'->'ai_personalization_quota' as ai_quota
FROM subscriptions
WHERE features->'plan' = '"premium"'::jsonb;
```

#### User Activity Tracking
```sql
-- Record user activity
INSERT INTO user_activity_log (
    id,
    user_id,
    activity_type,
    context_id,
    metadata
) VALUES (
    'activity_123',
    'user_456',
    'quiz_completed',
    'quiz_789',
    '{
        "score": 85,
        "timeSpent": 1200,
        "result": "passed"
    }'::jsonb
);

-- Get user activity timeline
SELECT
    activity_type,
    context_id,
    metadata,
    created_at
FROM user_activity_log
WHERE user_id = 'user_456'
ORDER BY created_at DESC
LIMIT 10;

-- Get activity statistics
SELECT
    activity_type,
    COUNT(*) as activity_count,
    MAX(created_at) as latest_activity
FROM user_activity_log
WHERE user_id = 'user_456'
GROUP BY activity_type
ORDER BY latest_activity DESC;
```

#### AI Generation Quota Management
```sql
-- Update AI generation quota for a user
INSERT INTO ai_generation_quota (
    id,
    user_id,
    monthly_limit,
    used_count,
    reset_date
) VALUES (
    'quota_123',
    'user_456',
    50,
    12,
    (DATE_TRUNC('month', NOW()) + INTERVAL '1 month')::date
)
ON CONFLICT (user_id) DO UPDATE
SET
    monthly_limit = 50,
    used_count = ai_generation_quota.used_count + 1;

-- Check remaining quota
SELECT
    user_id,
    monthly_limit,
    used_count,
    (monthly_limit - used_count) as remaining,
    reset_date
FROM ai_generation_quota
WHERE user_id = 'user_456';
```

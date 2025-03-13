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
  trigger: 'user_request' | 'performance_based';
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
    personalization_context
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
    }'::jsonb
);
```

#### Query Personalization History
```sql
-- Get all personalization history for a user
SELECT
    module_id,
    previous_content_state,
    new_content_state,
    created_at
FROM personalization_history
WHERE user_id = 'user_456'
ORDER BY created_at DESC;

-- Get latest personalization for a module
SELECT
    previous_content_state,
    new_content_state,
    personalization_context,
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
    generation_parameters
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
    }'::jsonb
);
```

#### Query Content Versions
```sql
-- Get all versions for a unit
SELECT
    id,
    content,
    is_default,
    generation_source,
    generation_parameters
FROM content_versions
WHERE unit_id = 'unit_456'
ORDER BY created_at DESC;

-- Get default content
SELECT id, content
FROM content_versions
WHERE unit_id = 'unit_456'
AND is_default = true;

-- Find similar content versions
SELECT id, content, generation_parameters
FROM content_versions
WHERE unit_id = 'unit_456'
AND generation_parameters->'target_audience'->>'technical_level' = 'INTERMEDIATE'
AND generation_parameters->'content_requirements'->>'style' = 'practical';

-- Update usage count
UPDATE content_versions
SET usage_count = usage_count + 1
WHERE id = 'cv_123';
```

# Digital Course Platform Feature JSON Examples

## 1. Dashboard

### Course Catalog
```json
{
  "courses": [
    {
      "id": "course_123",
      "title": "Advanced React Development",
      "shortDescription": "Master modern React patterns and practices",
      "thumbnail": "https://example.com/course-thumb.jpg",
      "instructor": {
        "id": "inst_456",
        "name": "John Doe",
        "avatar": "https://example.com/avatar.jpg"
      },
      "stats": {
        "rating": 4.8,
        "studentsEnrolled": 1250,
        "totalReviews": 384
      },
      "category": "Web Development",
      "difficultyLevel": "INTERMEDIATE",
      "duration": "12 hours",
      "price": 49.99
    }
  ],
  "filters": {
    "categories": ["Web Development", "Data Science", "Mobile Development"],
    "difficultyLevels": ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
    "priceRanges": ["free", "paid"],
    "sortOptions": ["rating", "popularity", "newest"]
  }
}
```

### Enrolled Courses
```json
{
  "enrolledCourses": [
    {
      "id": "enrollment_789",
      "courseId": "course_123",
      "userId": "user_456",
      "progress": {
        "overallProgress": 45,
        "lastAccessedUnit": {
          "id": "unit_789",
          "title": "React Hooks Deep Dive",
          "moduleId": "module_456"
        },
        "nextQuiz": {
          "id": "quiz_123",
          "title": "Module 3 Assessment",
          "dueDate": "2024-03-25T14:00:00Z"
        }
      },
      "streak": {
        "current": 5,
        "longest": 12,
        "lastStudyDate": "2024-03-19T10:30:00Z"
      }
    }
  ]
}
```

### Personalized Recommendations
```json
{
  "recommendations": [
    {
      "courseId": "course_789",
      "title": "TypeScript Fundamentals",
      "reason": "Based on your React learning progress",
      "matchScore": 0.89,
      "prerequisites": {
        "met": true,
        "courses": ["JavaScript Basics"]
      },
      "learningPathContext": {
        "pathId": "frontend_dev",
        "position": "recommended_next"
      }
    }
  ],
  "aiGeneratedInsights": {
    "learningPatterns": ["Strong in frontend concepts", "Interested in TypeScript"],
    "suggestedLearningPath": "Advanced Frontend Development",
    "personalizedTips": [
      "Consider exploring TypeScript for type-safe React development",
      "Focus on state management patterns next"
    ]
  }
}
```

### Continue Learning
```json
{
  "currentSession": {
    "courseId": "course_123",
    "lastPosition": {
      "moduleId": "module_456",
      "unitId": "unit_789",
      "timestamp": "2024-03-19T10:30:00Z",
      "progress": 75
    },
    "nextSteps": [
      {
        "type": "complete_unit",
        "unitId": "unit_789",
        "remainingTime": 15
      },
      {
        "type": "take_quiz",
        "quizId": "quiz_123",
        "deadline": "2024-03-20T23:59:59Z"
      }
    ]
  },
  "learningStreak": {
    "current": 5,
    "target": 7,
    "weeklyGoal": {
      "hours": 10,
      "completed": 6.5
    }
  }
}
```

### Notifications
```json
{
  "notifications": [
    {
      "id": "notif_123",
      "type": "quiz_reminder",
      "title": "Upcoming Quiz: React Hooks",
      "message": "You have a quiz due in 24 hours",
      "courseId": "course_123",
      "quizId": "quiz_456",
      "timestamp": "2024-03-19T08:00:00Z",
      "read": false,
      "action": {
        "type": "navigate",
        "url": "/courses/course_123/quizzes/quiz_456"
      }
    }
  ],
  "preferences": {
    "email": true,
    "push": true,
    "types": {
      "quiz_reminders": true,
      "course_updates": true,
      "learning_reminders": true
    }
  }
}
```

## 2. Onboarding

### Learning Style Assessment
```json
{
  "assessmentId": "assess_123",
  "userId": "user_456",
  "learningStyles": {
    "visual": 0.8,
    "auditory": 0.4,
    "reading": 0.6,
    "kinesthetic": 0.3
  },
  "contentPreferences": {
    "preferredFormats": ["video", "interactive", "text"],
    "optimalContentLength": 20,
    "preferredPace": "moderate"
  },
  "assessmentResponses": [
    {
      "questionId": "q1",
      "scenario": "When learning a new concept...",
      "selectedOption": "prefer_diagrams",
      "weight": {
        "visual": 1.0,
        "reading": 0.2
      }
    }
  ]
}
```

### Goal Setting
```json
{
  "learningGoals": {
    "shortTerm": [
      {
        "id": "goal_123",
        "title": "Master React Hooks",
        "deadline": "2024-04-19",
        "status": "in_progress",
        "milestones": [
          {
            "id": "milestone_1",
            "title": "Complete useState tutorial",
            "completed": true
          }
        ]
      }
    ],
    "longTerm": [
      {
        "id": "goal_456",
        "title": "Become Full Stack Developer",
        "targetDate": "2024-12-31",
        "requiredSkills": [
          "React",
          "Node.js",
          "PostgreSQL"
        ],
        "careerPath": "frontend_specialist"
      }
    ]
  }
}
```

### Technical Background
```json
{
  "technicalProfile": {
    "programmingExperience": {
      "years": 2,
      "languages": [
        {
          "name": "JavaScript",
          "proficiency": "intermediate",
          "yearsOfExperience": 1.5
        }
      ]
    },
    "frameworks": [
      {
        "name": "React",
        "proficiency": "beginner",
        "projects": 2
      }
    ],
    "education": {
      "level": "bachelors",
      "field": "computer_science",
      "completionYear": 2023
    }
  }
}
```

### Preference Selection
```json
{
  "learningPreferences": {
    "contentStyle": {
      "theoretical": 0.3,
      "practical": 0.8,
      "example_based": 0.9,
      "project_based": 0.7
    },
    "difficultyPreference": "INTERMEDIATE",
    "pacePreference": "self_paced",
    "interactionMode": {
      "preferGroup": false,
      "preferDiscussions": true,
      "preferHandsOn": true
    }
  }
}
```

### Schedule Setting
```json
{
  "learningSchedule": {
    "weeklyCommitment": {
      "hoursPerWeek": 10,
      "preferredDays": ["monday", "wednesday", "saturday"],
      "preferredTimeSlots": [
        {
          "day": "monday",
          "startTime": "18:00",
          "endTime": "20:00"
        }
      ]
    },
    "reminders": {
      "enabled": true,
      "frequency": "daily",
      "channels": ["email", "push"],
      "quietHours": {
        "start": "22:00",
        "end": "08:00"
      }
    }
  }
}
```

### Initial Recommendations
```json
{
  "recommendedPath": {
    "pathId": "frontend_dev_2024",
    "title": "Frontend Development Career Path",
    "courses": [
      {
        "courseId": "course_123",
        "title": "JavaScript Fundamentals",
        "priority": 1,
        "reason": "Required foundation",
        "duration": "4 weeks"
      }
    ],
    "estimatedCompletion": "2024-06-30"
  }
}
```

## 3. Course Details

### Course Overview
```json
{
  "courseId": "course_123",
  "title": "Advanced React Development",
  "description": "Master modern React patterns and practices",
  "metadata": {
    "level": "INTERMEDIATE",
    "duration": "12 weeks",
    "effort": "10 hours/week",
    "language": "English",
    "updatedAt": "2024-03-01"
  },
  "instructor": {
    "id": "inst_456",
    "name": "John Doe",
    "title": "Senior Frontend Engineer",
    "bio": "10+ years of React experience",
    "avatar": "https://example.com/avatar.jpg"
  },
  "stats": {
    "enrolled": 1500,
    "completed": 750,
    "averageRating": 4.8,
    "reviewCount": 384
  }
}
```

### Module Listing
```json
{
  "modules": [
    {
      "id": "module_123",
      "title": "React Hooks in Depth",
      "description": "Master the use of React Hooks",
      "duration": "2 weeks",
      "units": [
        {
          "id": "unit_456",
          "title": "useState and useEffect",
          "type": "video",
          "duration": 45,
          "status": "completed"
        }
      ],
      "progress": {
        "completed": 4,
        "total": 6,
        "percentage": 67
      }
    }
  ]
}
```

### Progress Tracking
```json
{
  "courseProgress": {
    "overall": {
      "completed": 45,
      "total": 100,
      "percentage": 45
    },
    "byModule": [
      {
        "moduleId": "module_123",
        "completed": 4,
        "total": 6,
        "percentage": 67
      }
    ],
    "assessments": {
      "completed": 3,
      "total": 5,
      "averageScore": 85
    }
  }
}
```

### Enrollment Options
```json
{
  "enrollmentOptions": {
    "pricing": {
      "original": 99.99,
      "discounted": 49.99,
      "currency": "USD",
      "validUntil": "2024-04-01"
    },
    "access": {
      "duration": "lifetime",
      "features": [
        "Course content",
        "Assignments",
        "Certificate"
      ]
    },
    "trial": {
      "available": true,
      "duration": 7,
      "restrictions": [
        "Limited module access"
      ]
    }
  }
}
```

### Reviews
```json
{
  "courseReviews": {
    "summary": {
      "averageRating": 4.8,
      "totalReviews": 384,
      "distribution": {
        "5": 280,
        "4": 80,
        "3": 15,
        "2": 5,
        "1": 4
      }
    },
    "reviews": [
      {
        "id": "review_123",
        "userId": "user_456",
        "rating": 5,
        "title": "Excellent course",
        "content": "Very comprehensive coverage of React",
        "date": "2024-03-15",
        "helpful": 25,
        "verified": true
      }
    ]
  }
}
```

### Prerequisites & Related Courses
```json
{
  "prerequisites": {
    "required": [
      {
        "courseId": "course_789",
        "title": "JavaScript Fundamentals",
        "reason": "Basic JS knowledge required",
        "alternatives": [
          {
            "type": "experience",
            "description": "1 year JavaScript development"
          }
        ]
      }
    ],
    "recommended": [
      {
        "courseId": "course_101",
        "title": "HTML & CSS Basics",
        "reason": "Helpful for understanding examples"
      }
    ]
  },
  "relatedCourses": [
    {
      "courseId": "course_102",
      "title": "Redux Fundamentals",
      "relationship": "next_step",
      "matchScore": 0.89
    }
  ]
}
```

### Course Preview
```json
{
  "preview": {
    "trailer": {
      "url": "https://example.com/course-trailer.mp4",
      "duration": 180,
      "thumbnail": "https://example.com/trailer-thumb.jpg"
    },
    "sampleContent": [
      {
        "unitId": "unit_123",
        "title": "Introduction to Hooks",
        "type": "video",
        "duration": 5,
        "url": "https://example.com/sample-video.mp4"
      }
    ],
    "syllabus": {
      "url": "https://example.com/syllabus.pdf",
      "highlights": [
        "React Fundamentals",
        "Advanced Hooks",
        "Performance Optimization"
      ]
    }
  }
}
```

## 4. Learning Module

### Module Overview
```json
{
  "moduleId": "module_123",
  "title": "React Hooks in Depth",
  "overview": {
    "description": "Comprehensive coverage of React Hooks",
    "learningObjectives": [
      "Understand Hook principles",
      "Master common Hooks",
      "Create custom Hooks"
    ],
    "duration": {
      "estimated": "2 weeks",
      "videoContent": 180,
      "readings": 120,
      "exercises": 90
    }
  }
}
```

### Unit Listing
```json
{
  "units": [
    {
      "id": "unit_123",
      "title": "useState Hook",
      "type": "video",
      "status": "completed",
      "duration": 45,
      "preview": {
        "thumbnail": "https://example.com/thumb.jpg",
        "summary": "Learn about state management"
      }
    }
  ],
  "progress": {
    "completed": 3,
    "total": 5,
    "nextUnit": "unit_124"
  }
}
```

### Personalization Trigger
```json
{
  "personalization": {
    "available": true,
    "triggers": [
      {
        "type": "performance_based",
        "condition": "quiz_score_below_threshold",
        "threshold": 70,
        "currentScore": 65
      }
    ],
    "recommendations": {
      "contentStyle": "practical",
      "difficulty": "intermediate",
      "focus": "examples"
    }
  }
}
```

### Unit Navigation
```json
{
  "navigation": {
    "current": {
      "unitId": "unit_123",
      "position": 3,
      "totalUnits": 5
    },
    "previous": {
      "unitId": "unit_122",
      "title": "Introduction"
    },
    "next": {
      "unitId": "unit_124",
      "title": "useEffect Hook"
    }
  }
}
```

### Quiz Access
```json
{
  "quizzes": [
    {
      "id": "quiz_123",
      "title": "React Hooks Fundamentals",
      "type": "module_assessment",
      "status": "available",
      "requirements": {
        "unitsToComplete": ["unit_121", "unit_122"],
        "minimumProgress": 80,
        "timeLimit": 45
      }
    }
  ]
}
```

## 5. Unit Content

### Content Display
```json
{
  "content": {
    "version": {
      "id": "cv_123",
      "type": "video",
      "url": "https://example.com/video.mp4",
      "transcript": "https://example.com/transcript.txt",
      "downloadable": true
    },
    "metadata": {
      "duration": 45,
      "difficulty": "INTERMEDIATE",
      "lastUpdated": "2024-03-01"
    },
    "accessibility": {
      "captions": true,
      "audioDescription": true,
      "textAlternatives": true
    }
  }
}
```

### Content Version Indicator
```json
{
  "versionInfo": {
    "current": {
      "id": "cv_123",
      "createdAt": "2024-03-01",
      "personalizationContext": {
        "learningStyle": "visual",
        "difficulty": "INTERMEDIATE",
        "contentStyle": "practical"
      }
    },
    "available": [
      {
        "id": "cv_124",
        "style": "theoretical",
        "difficulty": "ADVANCED"
      }
    ]
  }
}
```

### Unit Navigation
```json
{
  "unitNavigation": {
    "current": {
      "position": 3,
      "totalUnits": 5,
      "progress": 75
    },
    "controls": {
      "previous": {
        "enabled": true,
        "unitId": "unit_122"
      },
      "next": {
        "enabled": true,
        "unitId": "unit_124",
        "requiresCompletion": true
      }
    }
  }
}
```

### Feedback Mechanism
```json
{
  "feedback": {
    "rating": {
      "score": 4,
      "timestamp": "2024-03-19T10:30:00Z",
      "aspects": {
        "clarity": 5,
        "relevance": 4,
        "pace": 3
      }
    },
    "comments": {
      "id": "comment_123",
      "text": "Great explanation of hooks",
      "timestamp": "2024-03-19T10:30:00Z",
      "helpful": 5
    }
  }
}
```

### Related Resources
```json
{
  "relatedResources": {
    "documentation": [
      {
        "title": "React Hooks API Reference",
        "url": "https://reactjs.org/docs/hooks-reference.html",
        "type": "external_doc"
      }
    ],
    "exercises": [
      {
        "id": "ex_123",
        "title": "Custom Hook Practice",
        "difficulty": "INTERMEDIATE",
        "estimatedTime": 30
      }
    ],
    "supplementary": [
      {
        "id": "sup_123",
        "title": "Hook Design Patterns",
        "type": "article",
        "readingTime": 15
      }
    ]
  }
}
```

### Content Embedding Examples
```json
{
  "contentEmbedding": {
    "unitId": "unit_123",
    "versionId": "cv_456",
    "embedding": [0.12, 0.34, 0.56, 0.78],
    "similarContent": [
      {
        "unitId": "unit_124",
        "similarity": 0.89,
        "context": "Related React concept"
      }
    ]
  }
}
```

## 6. Quiz

### Question Display
```json
{
  "question": {
    "id": "q_123",
    "type": "multiple_choice",
    "content": {
      "text": "Which Hook is used for side effects?",
      "code": "// Optional code snippet",
      "media": {
        "type": "image",
        "url": "https://example.com/diagram.png"
      }
    },
    "options": [
      {
        "id": "opt_1",
        "text": "useEffect",
        "isCorrect": true
      }
    ]
  }
}
```

### Timer
```json
{
  "timer": {
    "duration": 1800,
    "remaining": 1200,
    "warnings": [
      {
        "threshold": 300,
        "message": "5 minutes remaining"
      }
    ],
    "autoSubmit": true
  }
}
```

### Progress Indicator
```json
{
  "quizProgress": {
    "current": {
      "question": 5,
      "total": 10,
      "percentage": 50
    },
    "answered": [
      {
        "questionId": "q_123",
        "status": "answered",
        "timeSpent": 45
      }
    ]
  }
}
```

### Immediate Feedback
```json
{
  "feedback": {
    "correct": true,
    "explanation": "useEffect is the correct Hook for side effects",
    "hints": [
      "Think about component lifecycle",
      "Consider when effects run"
    ],
    "relatedConcepts": [
      {
        "topic": "Component Lifecycle",
        "unitId": "unit_789"
      }
    ]
  }
}
```

### Results Summary
```json
{
  "quizResults": {
    "score": {
      "raw": 8,
      "total": 10,
      "percentage": 80
    },
    "timeSpent": 1200,
    "breakdown": {
      "correct": 8,
      "incorrect": 1,
      "skipped": 1
    },
    "mastery": {
      "level": "proficient",
      "nextMilestone": 85
    }
  }
}
```

### Performance Analysis
```json
{
  "performance": {
    "byTopic": [
      {
        "topic": "useState",
        "score": 90,
        "strength": "strong"
      }
    ],
    "trends": {
      "improvement": 15,
      "averageScore": 85,
      "completionTime": {
        "average": 25,
        "trend": "decreasing"
      }
    }
  }
}
```

### Personalization Trigger
```json
{
  "personalizationTrigger": {
    "activated": true,
    "reason": "performance_threshold",
    "recommendations": {
      "contentAdjustments": [
        {
          "topic": "useEffect",
          "action": "provide_more_examples",
          "difficulty": "intermediate"
        }
      ],
      "practiceAreas": [
        {
          "concept": "side_effects",
          "type": "interactive_exercise"
        }
      ]
    }
  }
}
```

## 7. Learning Profile

### Profile Overview
```json
{
  "profile": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "joinDate": "2024-01-01",
      "username": "johndoe",
      "image": "https://example.com/avatars/johndoe.jpg",
      "is_already_onboard": true
    },
    "preferences": {
      "learningStyle": "visual",
      "contentStyle": "practical",
      "difficulty": "INTERMEDIATE"
    },
    "progress": {
      "coursesEnrolled": 5,
      "coursesCompleted": 2,
      "totalLearningTime": 4800
    }
  }
}
```

### Performance Analytics
```json
{
  "analytics": {
    "overall": {
      "averageScore": 85,
      "completionRate": 0.8,
      "learningPace": "consistent"
    },
    "bySubject": [
      {
        "subject": "React",
        "proficiency": "intermediate",
        "strengths": ["hooks", "components"],
        "areasForImprovement": ["performance"]
      }
    ],
    "trends": {
      "weekly": {
        "studyTime": [
          {
            "week": "2024-W11",
            "hours": 10
          }
        ],
        "progress": [
          {
            "week": "2024-W11",
            "completedUnits": 5
          }
        ]
      }
    }
  }
}
```

### Achievements & Certificates
```json
{
  "achievements": {
    "badges": [
      {
        "id": "badge_123",
        "title": "React Master",
        "description": "Completed Advanced React",
        "earnedDate": "2024-03-15",
        "image": "https://example.com/badge.png"
      }
    ],
    "certificates": [
      {
        "id": "cert_123",
        "courseId": "course_456",
        "title": "Advanced React Development",
        "issueDate": "2024-03-15",
        "verificationUrl": "https://example.com/verify/cert_123"
      }
    ]
  }
}
```

### Learning Schedule
```json
{
  "schedule": {
    "weekly": {
      "target": 10,
      "actual": 8,
      "preferredDays": ["monday", "wednesday"]
    },
    "upcoming": [
      {
        "type": "quiz",
        "courseId": "course_123",
        "title": "React Hooks Assessment",
        "datetime": "2024-03-20T14:00:00Z"
      }
    ],
    "reminders": {
      "enabled": true,
      "preferences": {
        "before": 30,
        "channels": ["email", "push"]
      }
    }
  }
}
```

### Subscription Information
```json
{
  "subscriptionInfo": {
    "id": "sub_123",
    "userId": "user_123",
    "type": "PREMIUM",
    "starts_at": "2024-01-01T00:00:00Z",
    "ends_at": "2024-04-01T00:00:00Z",
    "is_active": true,
    "features": {
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
    },
    "payment_method": {
      "type": "credit_card",
      "lastFour": "1234",
      "expiryDate": "2025-12-31"
    },
    "subscription_data": {
      "stripe_id": "sub_1234567890",
      "customer_id": "cus_1234567890"
    }
  }
}
```

### Enhanced Personalization Metrics
```json
{
  "personalizationMetrics": {
    "userId": "user_123",
    "adaptationEffectiveness": {
      "scoreImprovement": 15,
      "engagementIncrease": 0.25,
      "completionRateChange": 0.18,
      "userSatisfaction": 4.5
    },
    "contentAdaptations": {
      "total": 28,
      "byDifficulty": {
        "increased": 12,
        "decreased": 6,
        "unchanged": 10
      },
      "byStyle": {
        "practical": 15,
        "theoretical": 5,
        "example_based": 8
      }
    }
  }
}
```

### User Activity Timeline
```json
{
  "userActivityTimeline": {
    "userId": "user_123",
    "activities": [
      {
        "id": "activity_123",
        "user_id": "user_123",
        "activity_type": "course_enrollment",
        "context_id": "course_123",
        "created_at": "2024-03-01T10:15:00Z",
        "metadata": {}
      },
      {
        "id": "activity_124",
        "user_id": "user_123",
        "activity_type": "content_viewed",
        "context_id": "unit_456",
        "created_at": "2024-03-02T14:30:00Z",
        "metadata": {
          "duration": 1250,
          "progress": 75
        }
      },
      {
        "id": "activity_125",
        "user_id": "user_123",
        "activity_type": "quiz_completed",
        "context_id": "quiz_789",
        "created_at": "2024-03-03T16:45:00Z",
        "metadata": {
          "score": 85,
          "timeSpent": 1200,
          "result": "passed"
        }
      },
      {
        "id": "activity_126",
        "user_id": "user_123",
        "activity_type": "note_created",
        "context_id": "unit_456",
        "created_at": "2024-03-02T14:40:00Z",
        "metadata": {
          "noteId": "note_101"
        }
      },
      {
        "id": "activity_127",
        "user_id": "user_123",
        "activity_type": "personalization_applied",
        "context_id": "module_123",
        "created_at": "2024-03-05T09:20:00Z",
        "metadata": {
          "previous_version_id": "cv_111",
          "new_version_id": "cv_222"
        }
      }
    ]
  }
}
```

## 8. Certificate Gallery

### Earned Certificates
```json
{
  "certificates": [
    {
      "id": "cert_123",
      "title": "Advanced React Development",
      "issuer": "Your Platform",
      "recipient": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "course": {
        "id": "course_456",
        "title": "Advanced React Development",
        "completedDate": "2024-03-15"
      },
      "metadata": {
        "issueDate": "2024-03-15",
        "expiryDate": null,
        "status": "active"
      }
    }
  ]
}
```

### Sharing Options
```json
{
  "sharing": {
    "certificate": {
      "id": "cert_123",
      "publicUrl": "https://example.com/certificates/cert_123",
      "platforms": {
        "linkedin": {
          "enabled": true,
          "shareUrl": "https://linkedin.com/share..."
        },
        "twitter": {
          "enabled": true,
          "shareUrl": "https://twitter.com/share..."
        }
      },
      "embed": {
        "code": "<iframe src='https://example.com/embed/cert_123'></iframe>",
        "dimensions": {
          "width": 800,
          "height": 600
        }
      }
    }
  }
}
```

### Verification Information
```json
{
  "verification": {
    "certificateId": "cert_123",
    "status": "valid",
    "blockchain": {
      "network": "ethereum",
      "contractAddress": "0x...",
      "tokenId": "123"
    },
    "verification": {
      "url": "https://example.com/verify/cert_123",
      "qrCode": "https://example.com/qr/cert_123",
      "metadata": {
        "issuer": "Your Platform",
        "issuedTo": "John Doe",
        "courseTitle": "Advanced React Development",
        "issueDate": "2024-03-15",
        "validUntil": null
      }
    }
  }
}
```

## 9. Platform Features

### AI Generation Quota
```json
{
  "aiGenerationQuota": {
    "id": "quota_123",
    "user_id": "user_123",
    "weekly_quota": 50,
    "used_quota": 12,
    "remaining": 38,
    "reset_date": "2024-04-01T00:00:00Z",
    "created_at": "2024-03-01T00:00:00Z",
    "updated_at": "2024-03-19T10:30:00Z"
  }
}
```

### System Banners
```json
{
  "systemBanners": [
    {
      "id": "banner_123",
      "title": "New Course Available",
      "description": "Check out our new TypeScript course",
      "banner_type": "info",
      "start_date": "2024-03-15T00:00:00Z",
      "end_date": "2024-03-30T23:59:59Z",
      "target_users": ["all"],
      "dismissible": true,
      "image_url": "https://example.com/banners/new-course.jpg",
      "link": "/courses/typescript-101",
      "created_at": "2024-03-14T00:00:00Z"
    }
  ]
}
```

### Notifications
```json
{
  "notifications": [
    {
      "id": "notif_123",
      "user_id": "user_456",
      "title": "Upcoming Quiz: React Hooks",
      "message": "You have a quiz due in 24 hours",
      "content": "You have a quiz on React Hooks due tomorrow. Make sure to complete it on time!",
      "action_type": "navigate",
      "action_url": "/courses/course_123/quizzes/quiz_456",
      "created_at": "2024-03-19T08:00:00Z",
      "is_read": false,
      "expires_at": "2024-03-20T23:59:59Z"
    }
  ],
  "notificationPreferences": {
    "email": true,
    "push": true,
    "types": {
      "quiz_reminders": true,
      "course_updates": true,
      "learning_reminders": true
    },
    "quietHours": {
      "enabled": true,
      "start": "22:00",
      "end": "08:00"
    }
  }
}
```

### Learning Paths
```json
{
  "learningPaths": [
    {
      "id": "cat_frontend",
      "name": "Frontend Development Path",
      "is_learning_path": true,
      "estimated_completion": "12 weeks",
      "path_sequence": {
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
          },
          {
            "id": "course_125",
            "order": 3,
            "required": false,
            "estimated_duration": "5 weeks",
            "prerequisites": ["course_124"]
          }
        ],
        "completion_requirements": {
          "min_courses_completed": 2,
          "required_course_ids": ["course_123", "course_124"]
        }
      }
    }
  ]
}
```

### Content Personalization Context
```json
{
  "contentVersionContext": {
    "id": "cv_123",
    "unit_id": "unit_456",
    "content": "# React Hooks Introduction\n\nHooks are a powerful feature in React...",
    "type": "TEXT",
    "is_default": false,
    "generation_source": "ai_generated",
    "personalization_context": {
      "learningStyle": "visual",
      "difficulty": "INTERMEDIATE",
      "contentStyle": "practical"
    },
    "generation_parameters": {
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
      }
    },
    "content_embedding": [0.12, 0.34, 0.56, 0.78],
    "style_embedding": [0.11, 0.22, 0.33, 0.44],
    "complexity_metrics": {
      "readability_score": 75,
      "technical_density": 0.45,
      "example_ratio": 0.3
    },
    "created_at": "2024-03-01T00:00:00Z",
    "updated_at": "2024-03-01T00:00:00Z"
  }
}
```

### Personalization History Record
```json
{
  "personalizationHistoryRecord": {
    "id": "ph_123",
    "user_id": "user_456",
    "module_id": "module_789",
    "previous_content_state": {
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
    },
    "new_content_state": {
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
    },
    "personalization_context": {
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
    },
    "trigger_reason": "performance_threshold",
    "effectiveness_metrics": {
      "before_average_score": 75,
      "after_average_score": 90,
      "engagement_improvement": 0.25,
      "completion_time_change": -0.15
    },
    "created_at": "2024-03-10T14:30:00Z"
  }
}
```

### Recommendations
```json
{
  "userRecommendations": [
    {
      "id": "rec_123",
      "user_id": "user_456",
      "course_id": "course_789",
      "reason": "Based on your React learning progress",
      "match_score": 0.89,
      "created_at": "2024-03-15T00:00:00Z"
    }
  ],
  "aiGeneratedInsights": {
    "learningPatterns": ["Strong in frontend concepts", "Interested in TypeScript"],
    "suggestedLearningPath": "Advanced Frontend Development",
    "personalizedTips": [
      "Consider exploring TypeScript for type-safe React development",
      "Focus on state management patterns next"
    ],
    "strengths": ["hooks", "components"],
    "areasForImprovement": ["performance"],
    "recommendedTopics": ["TypeScript", "Redux", "React Performance"]
  }
}
```

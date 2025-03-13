# Content Adaptation Flow

## 1. Trigger Points
```mermaid
flowchart TD
    A[User Triggers] --> A1[Click Personalize Button]
    A[User Triggers] --> A2[Complete Quiz]

    B[System Triggers] --> B1[Performance Threshold]
    B[System Triggers] --> B2[Time-based Review]

    A1 --> C[Adaptation Process]
    A2 --> C
    B1 --> C
    B2 --> C
```

## 2. Adaptation Process Flow
```mermaid
flowchart TD
    A[Start Adaptation] --> B[Gather Context]

    B --> B1[User Context]
    B --> B2[Module Context]
    B --> B3[Performance Context]

    B1 --> C[Analysis Phase]
    B2 --> C
    B3 --> C

    C --> D{Content Decision}
    D -->|Existing Content| E1[Select Content Version]
    D -->|New Content| E2[Generate Content]

    E1 --> F[Apply Changes]
    E2 --> F
```

## 3. Data Flow & Entity Interactions
```mermaid
flowchart TD
    A[Adaptation Request] --> B[User Learning Preferences]
    A --> C[Content Versions]
    A --> D[Personalization History]

    B -->|Read| B1[Get Learning Style]
    B -->|Read| B2[Get Difficulty Preference]
    B -->|Create| B3[Store New Preferences]

    C -->|Read| C1[Check Existing Versions]
    C -->|Create| C2[Store New Version]
    C -->|Update| C3[Update Usage Count]

    D -->|Create| D1[Record Changes]
    D -->|Read| D2[Check History]
```

## 4. Database Operations Flow

### 4.1 Read Operations
```mermaid
flowchart LR
    A[Get Context] --> A1[User Preferences]
    A --> A2[Module State]
    A --> A3[Content History]

    A1 -->|Query| B1[user_learning_preferences]
    A2 -->|Query| B2[content_versions]
    A3 -->|Query| B3[personalization_history]
```

### 4.2 Write Operations
```mermaid
flowchart LR
    A[Store Changes] --> A1[Update Preferences]
    A --> A2[Create Content]
    A --> A3[Record History]

    A1 -->|Insert/Update| B1[user_learning_preferences]
    A2 -->|Insert| B2[content_versions]
    A3 -->|Insert| B3[personalization_history]
```

## 5. Detailed Process Steps

1. **Trigger Detection**
   - User clicks personalize button
   - Quiz completion triggers adaptation
   - System detects performance threshold
   - Scheduled review time reached

2. **Context Gathering**
   ```
   User Context
   ├── Learning preferences
   ├── Performance history
   ├── Engagement metrics
   └── Technical background

   Module Context
   ├── Current progress
   ├── Unit relationships
   ├── Learning objectives
   └── Content dependencies

   Performance Context
   ├── Quiz scores
   ├── Completion times
   ├── Engagement rates
   └── Difficulty levels
   ```

3. **Analysis & Decision**
   ```
   Content Decision Tree
   ├── Check existing versions
   │   ├── Match found → Select version
   │   └── No match → Generate new
   │
   ├── Generate new content
   │   ├── Define parameters
   │   ├── Call AI service
   │   └── Validate output
   │
   └── Update relationships
       ├── Link to unit
       ├── Update preferences
       └── Record history
   ```

4. **Database Operations**
   ```
   Sequential Operations
   ├── Read current state
   │   ├── Get user preferences
   │   ├── Get content versions
   │   └── Get personalization history
   │
   ├── Process adaptation
   │   ├── Select/Generate content
   │   ├── Update preferences
   │   └── Create history record
   │
   └── Verify changes
       ├── Check content validity
       ├── Verify relationships
       └── Update usage metrics
   ```

## 6. Error Handling & Recovery
```mermaid
flowchart TD
    A[Error Detection] --> B{Error Type}

    B -->|Content Generation| C1[Fallback to Default]
    B -->|Database| C2[Transaction Rollback]
    B -->|Validation| C3[Retry Process]

    C1 --> D[Log & Notify]
    C2 --> D
    C3 --> D
```

## 7. Success Metrics
```mermaid
flowchart LR
    A[Adaptation Success] --> B1[User Engagement]
    A --> B2[Performance Impact]
    A --> B3[Content Usage]

    B1 -->|Track| C1[Completion Rates]
    B2 -->|Track| C2[Quiz Scores]
    B3 -->|Track| C3[Version Stats]
```

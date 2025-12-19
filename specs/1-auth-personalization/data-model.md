# Data Model: User

**Feature**: User Authentication and Personalization
**Date**: 2025-12-15

This document defines the data model for the `User` entity.

## Entity: User

Represents a registered user of the AI Textbook platform.

### Fields

| Field Name          | Data Type       | Description                                                                 | Constraints                  |
| ------------------- | --------------- | --------------------------------------------------------------------------- | ---------------------------- |
| `id`                | `UUID`          | The unique identifier for the user.                                         | Primary Key, Not Null, Unique |
| `email`             | `String(255)`   | The user's email address, used for login.                                   | Not Null, Unique             |
| `password_hash`     | `String(255)`   | The salted and hashed password for the user.                                | Not Null                     |
| `software_background`| `String(50)`   | The user's self-reported background in software. (e.g., "Beginner")          | Not Null                     |
| `hardware_background`| `String(50)`   | The user's self-reported background in hardware. (e.g., "Intermediate")    | Not Null                     |
- `experience_level`| `String(50)`   | The user's self-reported background in hardware. (e.g., "Student")    | Not Null                     |
| `created_at`        | `Timestamp`     | The timestamp when the user account was created.                            | Not Null, Default `NOW()`    |
| `updated_at`        | `Timestamp`     | The timestamp when the user account was last updated.                       | Not Null, Default `NOW()`    |

### Relationships

- A **User** has one **Profile** (Implicitly, the `software_background` and `hardware_background` fields constitute the user's profile for personalization).

### State Transitions

- A user's state is primarily `active`. There are no complex state transitions (like `suspended` or `inactive`) defined for the initial implementation.

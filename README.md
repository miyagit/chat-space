# README

# DB設計
## 『User』

| column   | type        | option         |
|:---------|:------------|:---------------|
| name     | string      | Not null       |

1. has_many :messages
2. has_many :groupsusers
3. has_many :groups, through: :groupsusers



## 『Group』

| column   | type        | option         |
|:---------|:------------|:---------------|
| name     | string      | Not null       |

1. has_many :messages
2. has_many :groupsusers
3. has_many :users, through: :groupsusers


##『message』

| column   | type        | option         |
|:---------|:------------|:---------------|
| body     | text        | Not null       |
| image    | string      |                |
| user_id  | int         | foreign key    |
| group_id | int         | foreign key    |

1. belongs_to :user
2. belongs_to :group


##『groupsusers』

| column   | type        | option         |
|:---------|:------------|:---------------|
| user_id  | int         | foreign key    |
| group_id | int         | foreign key    |

1. belongs_to :user
2. belongs_to :group


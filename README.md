# README



# DB設計
## 『User』

|カラム名|データの型|オプション|
|:---:||:---:||:---:|
|id|int|主キー|
|name|string||
|mail|string||
|created_at|datetime||
|updated_at|datetime||

## 『Group』

|カラム名|データの型|オプション|
|:---:||:---:||:---:|
|id|int|主キー|
|name|string||
|user_id|int|外部キー|
|created_at|datetime||
|updated_at|datetime||

##『message』

|カラム名|データの型|オプション|
|:---:||:---:||:---:|
|id|int|主キー|
|text|text||
|image|string||
|user_id|int|外部キー|
|gropu_id|int|外部キー|
|created_at|datetime||
|updated_at|datetime||

##『user_to_group』

|カラム名|データの型|オプション|
|:---:||:---:||:---:|
|id|int|主キー|
|user_id|int|外部キー|
|gropu_id|int|外部キー|

# アソシエーション

## 『User』
1. has_many :messages
2. has_many :user_to_groups
3. has_many :groups, through: :user_to_group

## 『Group』
1. has_many :messages
2. has_many :user_to_groups
3. has_many :users, through: :user_to_group


## 『message』
1. belongs_to :user
2. belongs_to :group

## 『user_to_group』
1. belongs_to :user
2. belongs_to :group
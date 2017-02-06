# README


# DB設計
## 『User』
|カラム名|データの型|オプション|
|:-|-:|:-:|
|id|int|主キー|
|name|string||
|mail|string||
|created_at|datetime||
|updated_at|datetime||

## 『Group』
|カラム名|データの型|オプション|
|:-|-:|:-:|
|id|int|主キー|
|name|string||
|user_id|int|外部キー|
|created_at|datetime||
|updated_at|datetime||

##『chat』
|カラム名|データの型|オプション|
|:-|-:|:-:|
|id|int|主キー|
|text|text||
|image|string||
|user_id|int|外部キー|
|gropu_id|int|外部キー|
|created_at|datetime||
|updated_at|datetime||

# アソシエーション

## 『User』
1. belongs_to :group
2. has_many :chats

## 『Group』
1. has_many :users
2. has_many :chats

## 『chat』
1. belongs_to :user
2. belongs_to :group
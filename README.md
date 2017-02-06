# README

<table>
  <caption>userテーブル</caption>
  <tr>
    <th>カラム名</th>
    <th>データの型</th>
    <th>オプション</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int</td>
    <td>主キー</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>mail</td>
    <td>string</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
</table>

<table>
  <caption>groupテーブル</caption>
  <tr>
    <th>カラム名</th>
    <th>データの型</th>
    <th>オプション</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int</td>
    <td>主キー</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>user_id</td>
    <td>int</td>
    <td>外部キー</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
</table>

<table>
  <caption>messageテーブル</caption>
  <tr>
    <th>カラム名</th>
    <th>データの型</th>
    <th>オプション</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int</td>
    <td>主キー</td>
  </tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>text</td>
    <td>text</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>user_id</td>
    <td>int</td>
    <td>外部キー</td>
  </tr>
  <tr>
    <td>group_id</td>
    <td>int</td>
    <td>外部キー</td>
  </tr>
  <tr>
    <td>created_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
  <tr>
    <td>updated_at</td>
    <td>datetime</td>
    <td>なし</td>
  </tr>
</table>

<table>
  <caption>user_to_groupテーブル</caption>
  <tr>
    <th>カラム名</th>
    <th>データの型</th>
    <th>オプション</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int</td>
    <td>主キー</td>
  </tr>
  <tr>
    <td>user_id</td>
    <td>int</td>
    <td>外部キー</td>
  </tr>
  <tr>
    <td>group_id</td>
    <td>int</td>
    <td>外部キー</td>
  </tr>
</table>


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
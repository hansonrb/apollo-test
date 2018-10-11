class Comment < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :post, required: true, counter_cache: true

  belongs_to :parent, class_name: 'Comment', foreign_key: 'parent_comment_id', required: false
  has_many :replies, class_name: 'Comment', foreign_key: 'parent_comment_id', dependent: :destroy

  validates :text, presence: true
end

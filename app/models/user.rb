class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable

  has_many :user_associations, class_name: 'UserAssociation', foreign_key: :followed_by_user_id, dependent: :destroy
  has_many :followees, through: :user_associations, source: :following_user

  has_many :posts, dependent: :destroy

  validates :name, presence: true
end

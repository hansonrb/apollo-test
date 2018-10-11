class UserAssociation < ApplicationRecord
  belongs_to :followed_by_user, class_name: 'User', required: true
  belongs_to :following_user, class_name: 'User', required: true
end

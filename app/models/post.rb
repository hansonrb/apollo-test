class Post < ApplicationRecord
  belongs_to :user, required: true
  has_many :comments, dependent: :destroy
  has_many :votes, dependent: :destroy

  validates :title, :tagline, presence: true
  validates :url, url: true, presence: true

  scope :reverse_chronological, -> { order(arel_table[:created_at].desc) }

  def votes_count
    votes.count
  end

  def upvote
  end
end

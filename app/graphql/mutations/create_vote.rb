class Mutations::CreateVote < Mutations::BaseMutation

  argument :post_id, ID, required: true, loads: Types::Post, as: :post
  # argument :user_id, ID, required: true, loads: Types::User, as: :curent_user

  def resolve(post:)
    post.upvote

    {
      post: post
    }
  end
end

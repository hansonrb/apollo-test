class CommentsController < ApplicationController
  def index
    # NOTE(vesln): the current user can be found in `current_user`
    @post = Post.find(params[:post_id])

    render json: @post.comments
  end
end

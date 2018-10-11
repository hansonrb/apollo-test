module Types
  class MutationType < Types::BaseObject
    # NOTE(rstankov): More about mutations - http://graphql-ruby.org/mutations/mutation_classes.html#example-mutation-class

    field :create_vote, mutation: Mutations::CreateVote
  end
end

# Task

* Add votes to posts
* Show votes counts to posts
* Add vote button to post list (/posts)
* Add unvote button to post list (/posts)
* Handle not logged in users

#### Criteria:

**Getting to a working solution is most important**.

After that we look for:

- Database design
- Performance
- Tests
- Best practices
- *(optional task): list comments in post page

---

## Requirements

- PostgreSQL 9.6
- Ruby 2.5
- bundler 1.16 (or higher if available)
- yarn 1.9 (or higher if available)

## Setup

Start PostgreSQL and update the database uri:

```
$ $EDITOR .env
```

Install the app dependencies:

```
$ gem install bundler
$ brew install yarn

$ bundle install
$ yarn install
```

Setup the database:

```
bundle exec rake db:create db:migrate db:seed
```

Start the server:

```
bundle exec rails server
```

## Tests

To run all tests:

```
bundle exec rspec
```

## Background

Open the webapp:

```
$ open http://localhost:3000
```

Sign in as:

email: `bob@example.com`
password: `password`

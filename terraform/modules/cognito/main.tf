resource "aws_cognito_user_pool" "user_pool" {
  name = "user_pool"

  username_attributes = ["email"]
  auto_verified_attributes = ["email"]

  schema {
    attribute_data_type = "String"
    name                = "email"
    required            = true
    mutable             = false
  }

  schema {
    attribute_data_type = "String"
    name                = "given_name"
    required            = true
    mutable             = true
  }

  schema {
    attribute_data_type = "String"
    name                = "family_name"
    required            = true
    mutable             = true
  }

  schema {
    attribute_data_type = "Number"
    name                = "account_balance"
    required            = false
    mutable             = true
    number_attribute_constraints {
      min_value = "0"
    }
  }
}

resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = "user_pool_client"
  user_pool_id = aws_cognito_user_pool.user_pool.id
  generate_secret = false

  allowed_oauth_flows = ["code"]
  allowed_oauth_scopes = ["email", "openid", "profile"]
  callback_urls = ["http://localhost:3000/callback"]
  logout_urls = ["http://localhost:3000/logout"]
  supported_identity_providers = ["COGNITO"]
}

resource "aws_cognito_user_pool_domain" "user_pool_domain" {
  domain       = "lmzn-domain"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

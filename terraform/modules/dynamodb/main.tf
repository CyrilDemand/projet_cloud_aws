resource "aws_dynamodb_table" "product_table" {
  name         = "Product"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  attribute {
    name = "name"
    type = "S"
  }

  attribute {
    name = "description"
    type = "S"
  }

  attribute {
    name = "price"
    type = "N"
  }

  attribute {
    name = "UrlImage"
    type = "S"
  }

  global_secondary_index {
    name            = "NameIndex"
    hash_key        = "name"
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "DescriptionIndex"
    hash_key        = "description"
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "PriceIndex"
    hash_key        = "price"
    projection_type = "ALL"
  }

  global_secondary_index {
    name            = "UrlImageIndex"
    hash_key        = "UrlImage"
    projection_type = "ALL"
  }

  tags = {
    Name        = "ProductTable"
    Environment = var.environment
  }
}
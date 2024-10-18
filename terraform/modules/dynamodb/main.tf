resource "aws_dynamodb_table" "product_table" {
  name         = "Product"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    Name        = "ProductTable"
    Environment = var.environment
  }
}
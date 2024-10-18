output "table_name" {
  value = aws_dynamodb_table.product_table.name
}

output "product_table_arn" {
  value = aws_dynamodb_table.product_table.arn
}
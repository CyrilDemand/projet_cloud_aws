variable "list_products_lambda_arn" {
  description = "The ARN of the Lambda function to list all products"
  type        = string
}

variable "get_product_lambda_arn" {
  description = "The ARN of the Lambda function to get a product by ID"
  type        = string
}

variable "post_product_lambda_arn" {
  description = "The ARN of the Lambda function to post a product image"
  type        = string
}

variable "delete_product_lambda_arn" {
  description = "The ARN of the Lambda function to delete a product image"
  type        = string
}

variable "stage_name" {
  description = "The stage name for the API deployment"
  type        = string
}

variable "region" {
  description = "The AWS region"
  type        = string
}

variable "api_id" {
  description = "id of the API"
  type = string
}
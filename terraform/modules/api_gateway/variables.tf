variable "api_name" {
  description = "The name of the API Gateway"
  type        = string
}

variable "list_products_lambda_arn" {
  description = "The ARN of the Lambda function to list all products"
  type        = string
}

variable "get_product_lambda_arn" {
  description = "The ARN of the Lambda function to get a product by ID"
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
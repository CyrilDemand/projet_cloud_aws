variable "function_name" {
  description = "The name of the Lambda function."
  type        = string
}

variable "handler" {
  description = "The Lambda function handler."
  type        = string
}

variable "runtime" {
  description = "The runtime for the Lambda function (e.g., nodejs14.x)."
  type        = string
}

variable "lambda_role_arn" {
  description = "The IAM role for the Lambda function."
  type        = string
}

variable "lambda_zip" {
  description = "The path to the Lambda function .zip file."
  type        = string
}

variable "environment_variables" {
  description = "The environment variables for the Lambda function."
  type        = map(string)
}

variable "environment" {
  description = "The environment (dev, prod, etc.)."
  type        = string
}

variable "api_gateway_arn" {
  description = "The ARN of the API Gateway to trigger the Lambda."
  type        = string
  default     = null
}

variable "api_gateway_execution_arn" {
  description = "The execution ARN of the API Gateway"
  type        = string
}
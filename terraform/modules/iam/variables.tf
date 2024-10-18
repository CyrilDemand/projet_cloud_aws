variable "role_name" {
  description = "The name of the IAM role for Lambda"
  type        = string
}

variable "s3_bucket_arn" {
  description = "The ARN of the S3 bucket the Lambda will access"
  type        = string
}
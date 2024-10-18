resource "aws_lambda_function" "lambda_function" {
  function_name = var.function_name
  handler       = var.handler
  runtime       = var.runtime
  filename      = var.lambda_zip
  source_code_hash = filebase64sha256(var.lambda_zip)

  environment {
    variables = var.environment_variables
  }

  role = var.role

  tags = {
    Name        = var.function_name
    Environment = var.environment
  }
}
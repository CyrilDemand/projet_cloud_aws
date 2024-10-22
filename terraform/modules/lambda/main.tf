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

resource "aws_lambda_permission" "sample" {
  statement_id  = "AllowAPIGatewaySample"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_function.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_arn}/*/*"
}
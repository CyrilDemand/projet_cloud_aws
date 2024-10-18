resource "aws_lambda_function" "lambda_function" {
  function_name = var.function_name
  handler       = var.handler
  runtime       = var.runtime
  role          = var.lambda_role_arn
  filename      = var.lambda_zip
  source_code_hash = filebase64sha256(var.lambda_zip)

  environment {
    variables = var.environment_variables
  }

  tags = {
    Name        = var.function_name
    Environment = var.environment
  }
}

resource "aws_lambda_permission" "lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${var.api_gateway_execution_arn}/*/*"  # Utilise la variable passée depuis le module parent
}
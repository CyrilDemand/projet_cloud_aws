resource "aws_apigatewayv2_api" "api" {
  name        = var.api_name
  description = "API Gateway v2 for Lambda functions"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "POST", "DELETE"]
  }
}

resource "aws_apigatewayv2_integration" "get_all_products_integration" {
  api_id = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri = var.list_products_lambda_arn
  integration_method = "POST"
  payload_format_version  = "2.0"
}

resource "aws_apigatewayv2_route" "get_all_products_route" {
  api_id = aws_apigatewayv2_api.api.id
  route_key = "GET /products"
  target = "integrations/${aws_apigatewayv2_integration.get_all_products_integration.id}"
}

resource "aws_apigatewayv2_integration" "get_product_by_id_integration" {
  api_id = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri = var.get_product_lambda_arn
  integration_method = "POST"
  payload_format_version  = "2.0"
}

resource "aws_apigatewayv2_route" "get_product_by_id_route" {
  api_id = aws_apigatewayv2_api.api.id
  route_key = "GET /products/{id}"
  target = "integrations/${aws_apigatewayv2_integration.get_product_by_id_integration.id}"
}

resource "aws_apigatewayv2_integration" "post_product_integration" {
  api_id = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri = var.post_product_lambda_arn
  integration_method = "POST"
  payload_format_version  = "2.0"
}

resource "aws_apigatewayv2_route" "post_product_route" {
  api_id = aws_apigatewayv2_api.api.id
  route_key = "POST /products"
  target = "integrations/${aws_apigatewayv2_integration.post_product_integration.id}"
}

resource "aws_apigatewayv2_integration" "delete_product_integration" {
  api_id = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri = var.delete_product_lambda_arn
  integration_method = "POST"
  payload_format_version  = "2.0"
}

resource "aws_apigatewayv2_route" "delete_product_route" {
  api_id = aws_apigatewayv2_api.api.id
  route_key = "DELETE /products/{id}"
  target = "integrations/${aws_apigatewayv2_integration.delete_product_integration.id}"
}

resource "aws_apigatewayv2_stage" "api_stage" {
  api_id = aws_apigatewayv2_api.api.id
  name = "dev"
  auto_deploy = true
}

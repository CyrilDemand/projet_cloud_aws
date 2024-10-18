resource "aws_api_gateway_rest_api" "product_api" {
  name        = "ProductAPI"
  description = "API Gateway for Product Lambda"
}

resource "aws_api_gateway_method" "get_product_method" {
  rest_api_id   = aws_api_gateway_rest_api.product_api.id
  resource_id   = aws_api_gateway_rest_api.product_api.root_resource_id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id             = aws_api_gateway_rest_api.product_api.id
  resource_id             = aws_api_gateway_rest_api.product_api.root_resource_id
  http_method             = aws_api_gateway_method.get_product_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${var.lambda_arn}/invocations"  # Ajouter '/invocations' à la fin de l'ARN de la Lambda
}

resource "aws_lambda_permission" "api_gateway_invoke" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = var.lambda_arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.product_api.execution_arn}/*/*"
}
resource "aws_api_gateway_rest_api" "api" {
  name        = var.api_name
  description = "API Gateway for Lambda functions"
}

resource "aws_api_gateway_resource" "products_resource" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "products"
}

resource "aws_api_gateway_method" "get_all_products_method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.products_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_all_products_integration" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.products_resource.id
  http_method = aws_api_gateway_method.get_all_products_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = "arn:aws:apigateway:${var.region}:lambda:path/2015-03-31/functions/${var.list_products_lambda_arn}/invocations"
}

resource "aws_api_gateway_resource" "product_by_id_resource" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_resource.products_resource.id
  path_part   = "{id}"
}

resource "aws_api_gateway_method" "get_product_by_id_method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.product_by_id_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_product_by_id_integration" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.product_by_id_resource.id
  http_method = aws_api_gateway_method.get_product_by_id_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = "arn:aws:apigateway:${var.region}:lambda:path/2015-03-31/functions/${var.get_product_lambda_arn}/invocations"
}

resource "aws_api_gateway_method" "delete_product_method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.product_by_id_resource.id
  http_method   = "DELETE"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "delete_product_integration" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.product_by_id_resource.id
  http_method = aws_api_gateway_method.delete_product_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = "arn:aws:apigateway:${var.region}:lambda:path/2015-03-31/functions/${var.delete_product_lambda_arn}/invocations"
}

resource "aws_api_gateway_method" "post_product_method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.products_resource.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "post_product_integration" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.products_resource.id
  http_method = aws_api_gateway_method.post_product_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = "arn:aws:apigateway:${var.region}:lambda:path/2015-03-31/functions/${var.post_product_lambda_arn}/invocations"
}



resource "aws_lambda_permission" "api_gateway_permission" {
  for_each = {
    "get_all_products" = var.list_products_lambda_arn
    "get_product_by_id" = var.get_product_lambda_arn
    "post_product" = var.post_product_lambda_arn
    "delete_product" = var.delete_product_lambda_arn
  }
  statement_id  = "AllowAPIGatewayInvoke-${each.key}"
  action        = "lambda:InvokeFunction"
  function_name = each.value
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.api.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on = [
    aws_api_gateway_integration.get_all_products_integration,
    aws_api_gateway_integration.get_product_by_id_integration,
    aws_api_gateway_integration.post_product_integration,
    aws_api_gateway_integration.delete_product_integration
  ]
  rest_api_id = aws_api_gateway_rest_api.api.id
  stage_name  = var.stage_name
}

provider "aws" {
  region = "eu-west-3"
}

module "s3" {
  source = "./modules/s3"
  bucket_name = "product-images"
  environment = "dev"
}

module "dynamodb" {
  source = "./modules/dynamodb"
  environment = "dev"
}

module "iam" {
  source = "./modules/iam"
  role_name = "lambda_role"
}

resource "aws_apigatewayv2_api" "api" {
  name        = "ProductsAPI"
  description = "API Gateway v2 for Lambda functions"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "POST", "DELETE"]
  }
}

module "get_product_lambda" {
  source               = "./modules/lambda"
  function_name        = "get_product_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/get_product/lambda_function.zip"
  environment          = "dev"
  api_gateway_arn = aws_apigatewayv2_api.api.execution_arn
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
  }
  role                 = module.iam.lambda_role_arn 
}

module "list_products_lambda" {
  source               = "./modules/lambda"
  function_name        = "list_products_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/list_products/lambda_function.zip"
  environment          = "dev"
  api_gateway_arn = aws_apigatewayv2_api.api.execution_arn
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
  }
  role                 = module.iam.lambda_role_arn
}

module "post_product_lambda" {
  source               = "./modules/lambda"
  function_name        = "post_product_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/post_product/lambda_function.zip"
  environment          = "dev"
  api_gateway_arn = aws_apigatewayv2_api.api.execution_arn
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
    BUCKET_NAME = module.s3.bucket_name
  }
  role                 = module.iam.lambda_role_arn
}

module "delete_product_lambda" {
  source               = "./modules/lambda"
  function_name        = "delete_product_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/delete_product/lambda_function.zip"
  environment          = "dev"
  api_gateway_arn = aws_apigatewayv2_api.api.execution_arn
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
    BUCKET_NAME = module.s3.bucket_name
  }
  role                 = module.iam.lambda_role_arn
}

module "products_api" {
  source                   = "./modules/api_gateway"
  list_products_lambda_arn = module.list_products_lambda.lambda_arn
  get_product_lambda_arn   = module.get_product_lambda.lambda_arn
  post_product_lambda_arn  = module.post_product_lambda.lambda_arn
  delete_product_lambda_arn = module.delete_product_lambda.lambda_arn
  api_id = aws_apigatewayv2_api.api.id
  stage_name               = "dev"
  region                   = "eu-west-3"
}

module "cognito" {
  source = "./modules/cognito"
}

//module "vpc" {
//  source = "./modules/vpc"
//}

//module "ec2" {
//  source = "./modules/ec2"
//  vpc_id = module.vpc.vpc_id
//  subnet_id = module.vpc.public_subnet_a_id
//}

//module "elb" {
//  source = "./modules/elb"
//  vpc_id = module.vpc.vpc_id
//  security_group_id = module.ec2.security_group_id
// ec2_instances = module.ec2.ec2_instances
//  public_subnet_a_id = module.vpc.public_subnet_a_id
//  public_subnet_b_id = module.vpc.public_subnet_b_id
//}

//module "cloudfront" {
//  source = "./modules/cloudfront"
//  elb_dns_name = module.elb.elb_dns_name
//}
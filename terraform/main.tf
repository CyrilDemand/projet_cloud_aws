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

module "get_product_lambda" {
  source               = "./modules/lambda"
  function_name        = "get_product_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/get_product/lambda_function.zip"
  environment          = "dev"
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
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
  }
  role                 = module.iam.lambda_role_arn
}

module "products_api" {
  source                   = "./modules/api_gateway"
  api_name                 = "ProductsAPI"
  list_products_lambda_arn = module.list_products_lambda.lambda_arn
  get_product_lambda_arn   = module.get_product_lambda.lambda_arn
  stage_name               = "dev"
  region                   = "eu-west-3"
}
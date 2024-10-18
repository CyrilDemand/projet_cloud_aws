module "s3" {
  source = "./modules/s3"
  bucket_name = "product-images"
  environment = "dev"
}

module "dynamodb" {
  source = "./modules/dynamodb"
  environment = "dev"
}

# Utiliser le module IAM pour créer le rôle Lambda
module "lambda_iam" {
  source        = "./modules/iam"
  role_name     = "lambda_exec_role"
  s3_bucket_arn = module.s3.bucket_arn
}

# Utiliser le rôle IAM pour Lambda
# Utiliser le rôle IAM pour Lambda et passer l'ARN de l'API Gateway
module "get_product_lambda" {
  source               = "./modules/lambda"
  function_name        = "get_product_lambda"
  handler              = "index.handler"
  runtime              = "nodejs18.x"
  lambda_zip           = "../lambda/get_product/lambda_function.zip"
  lambda_role_arn      = module.lambda_iam.lambda_exec_role_arn
  environment          = "dev"
  environment_variables = {
    TABLE_NAME = module.dynamodb.table_name
  }

  api_gateway_execution_arn = module.api_gateway.api_gateway_execution_arn  # Passer l'ARN d'exécution de l'API Gateway au module Lambda
}

module "api_gateway" {
  source     = "./modules/api_gateway"
  lambda_arn = module.get_product_lambda.lambda_arn  # Utilisation de l'ARN exposé par le module Lambda
}

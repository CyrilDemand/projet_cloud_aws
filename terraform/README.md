# Terraform

terraform init
terraform plan
terraform apply
terraform destroy

un module terraform par service aws (api gateway, ec2, lambda, iam, s3 et cloudfront qui ne marche pas pour l'instant)

TODO : faire fonctionner cloudfront, vpc, elb et les deux ec2 (commentés pour l'instant)


url cognito : 
https://lmzn-domain.auth.eu-west-3.amazoncognito.com/login?response_type=code&client_id=<CLIENT_ID>&redirect_uri=http://localhost:3000/callback
client id trouvable dans Cognito > user pool > app integration
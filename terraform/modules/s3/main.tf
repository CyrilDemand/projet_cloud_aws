resource "aws_s3_bucket" "images_bucket" {
  bucket = "lamazon-${var.bucket_name}"  # Utiliser un suffixe unique
  tags = {
    Name        = var.bucket_name
    Environment = var.environment
  }
}

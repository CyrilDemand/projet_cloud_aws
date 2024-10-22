resource "aws_s3_bucket" "images_bucket" {
  bucket = "lamazon-${var.bucket_name}"  # Utiliser un suffixe unique
  tags = {
    Name        = var.bucket_name
    Environment = var.environment
  }
}

resource "aws_s3_bucket_public_access_block" "images_bucket_public_access" {
  bucket = aws_s3_bucket.images_bucket.id

  block_public_acls       = true  # Bloque la mise en place de nouvelles ACL publiques
  ignore_public_acls      = true  # Ignore les ACL publiques existantes
  block_public_policy     = false # Permet les politiques publiques
  restrict_public_buckets = false  # Restreint l'accès aux buckets à usage public via des points d'accès
}

resource "aws_s3_bucket_policy" "images_bucket_policy" {
  bucket = aws_s3_bucket.images_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = "*"
        Action = "s3:GetObject"
        Resource = "${aws_s3_bucket.images_bucket.arn}/*"
      }
    ]
  })
}

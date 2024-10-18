output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.nextjs_distribution.domain_name
}
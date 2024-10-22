output "instance_ids" {
  value = aws_instance.nextjs_instance[*].id
}

output "instance_public_ips" {
  value = aws_instance.nextjs_instance[*].public_ip
}
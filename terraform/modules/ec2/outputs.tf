output "security_group_id" {
  value = aws_security_group.allow_http.id
}

output "ec2_instances" {
  value = aws_instance.nextjs_instance[*]
}

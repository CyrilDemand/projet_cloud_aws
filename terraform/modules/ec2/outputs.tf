output "instance_id" {
  value = aws_instance.nextjs_instance.id
}

output "instance_public_ip" {
  value = aws_instance.nextjs_instance.public_ip
}
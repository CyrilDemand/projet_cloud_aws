variable "vpc_id" {
  description = "The ID of the VPC to attach the ELB to"
  type        = string
}

variable "security_group_id" {
  description = "The ID of the security group to attach the ELB to"
  type        = string
}

variable "public_subnet_a_id" {
  description = "The ID of the public subnet A to attach the ELB to"
  type        = string
}

variable "public_subnet_b_id" {
  description = "The ID of the public subnet B to attach the ELB to"
  type        = string
}

variable "ec2_instances" {
  description = "The instances to attach to the ELB"
  type        = list(object({
    id = string
  }))
}

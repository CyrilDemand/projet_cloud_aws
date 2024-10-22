variable "instance_type" {
  description = "The type of instance to use"
  type        = string
  default     = "t2.micro"
}

variable "subnet_id" {
  description = "The subnet ID where the instance will be deployed"
  type        = string
}
resource "aws_elb" "main" {
  name               = "main-elb"
  availability_zones = ["eu-west-3a"]

  listener {
    instance_port     = 80
    instance_protocol = "HTTP"
    lb_port           = 80
    lb_protocol       = "HTTP"
  }

  instances = aws_instance.nextjs_instance[*].id

  health_check {
    target              = "HTTP:80/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  tags = {
    Name = "main-elb"
  }
}
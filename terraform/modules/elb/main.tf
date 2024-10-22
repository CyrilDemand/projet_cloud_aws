resource "aws_lb_target_group" "ecommerce_tg" {
  name     = "ecommerce-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = var.vpc_id

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 5
    interval            = 30
    path                = "/"
    matcher             = "200"
  }

  tags = {
    Name = "Ecommerce-TG"
  }
}

resource "aws_lb" "ecommerce_lb" {
  name               = "ecommerce-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [var.security_group_id]
  subnets            = [
    var.public_subnet_a_id,
    var.public_subnet_b_id
  ]
  tags = {
    Name = "Ecommerce-ALB"
  }
}

resource "aws_lb_listener" "http_listener" {
  load_balancer_arn = aws_lb.ecommerce_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ecommerce_tg.arn
  }
}

resource "aws_lb_target_group_attachment" "ecommerce_ec2_attachment" {
  target_group_arn = aws_lb_target_group.ecommerce_tg.arn
  target_id        = var.ec2_instances[0].id
  port             = 80
}

resource "aws_lb_target_group_attachment" "replicate_ec2_attachment" {
  target_group_arn = aws_lb_target_group.ecommerce_tg.arn
  target_id        = var.ec2_instances[1].id
  port             = 80
}
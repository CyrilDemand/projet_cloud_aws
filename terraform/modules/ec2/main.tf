resource "aws_security_group" "allow_http" {
  name        = "allow_http"
  description = "Allow HTTP inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_http"
  }
  vpc_id = var.vpc_id
}

resource "aws_security_group" "allow_ssh" {
  name        = "allow_ssh"
  description = "Allow SSH inbound traffic"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Replace with your public IP
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_ssh"
  }
}


resource "aws_instance" "nextjs_instance" {
  count = 2
  ami           = "ami-00d81861317c2cc1f"
  instance_type = "t2.micro"
  subnet_id     = var.subnet_id
  security_groups = [aws_security_group.allow_http.id]

  tags = {
    Name = "NextJS-EC2"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install -y nodejs npm git
              
              # Install Deno
              curl -fsSL https://deno.land/x/install/install.sh | sh
              
              # Add Deno to the PATH
              export DENO_INSTALL="/home/ubuntu/.deno"
              export PATH="$DENO_INSTALL/bin:$PATH"
              
              # Clone the Git repository
              git clone https://github.com/CyrilDemand/projet_cloud_aws
              
              # Navigate into the directory
              cd projet_cloud_aws
              cd frontend
              
              # Install npm dependencies
              npm install
              
              # Run the application with Deno
              deno run dev
              EOF
}
